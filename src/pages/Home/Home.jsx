import { ArrowUp } from "lucide-react";
import { useState, useRef } from "react";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_APP_GROQ_KEY,
  dangerouslyAllowBrowser: true,
});

export function Home() {
  const [generatedCode, setGeneratedCode] = useState();
  const inputRef = useRef();

  async function startQuery(event) {
    event.preventDefault();
    const chatCompletion = await getGroqChatCompletion();
    setGeneratedCode(chatCompletion.choices[0]?.message?.content || "");
  }

  async function getGroqChatCompletion() {
    const userInput = inputRef.current.value;
    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `${userInput}`,
        },
      ],
      model: "llama3-8b-8192",
    });
  }

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-2xl p-4 overflow-y-auto h-4/5 bg-transparent rounded-lg ">
        <article>{generatedCode}</article>
      </div>
      <div className="mx-auto w-full flex gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]">
        <form className="w-full" onSubmit={startQuery}>
          <div className="flex flex-1 flex-col h-full max-w-full relative">
            <div className="group relative flex w-full items-center">
              <div className="backdrop-blur-2xl bg-token-composer-surface flex flex-col gap-1.5 no-transparency:backdrop-blur-none p-1.5 rounded-[26px] transition-colors w-full">
                <textarea
                  name="messageInput"
                  className="w-full p-4 h-14 pl-10 pr-12 outline-none text-white bg-gray-600 resize-none rounded-full mb-2 overflow-y-hidden"
                  placeholder="Digite sua mensagem..."
                  ref={inputRef}
                />
                <button
                  className="absolute bg-gray-400 rounded-full right-7  top-1/3 transform -translate-y-[14%] text-gray-900"
                >
                  <ArrowUp size={30} strokeWidth={1.4} />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
