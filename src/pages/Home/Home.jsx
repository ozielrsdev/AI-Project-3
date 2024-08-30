import { ArrowUp } from "lucide-react";
// import {DiffEditor, Editor} from "@monaco-editor/react"
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_APP_GROQ_KEY,
  dangerouslyAllowBrowser: true,
});

export function Home() {
  async function startQuery() {
    const chatCompletion = await getGroqChatCompletion();
    // Print the completion returned by the LLM.
    console.log(chatCompletion.choices[0]?.message?.content || "");
  }

  async function getGroqChatCompletion() {
    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: "Descreva sobre Goiânia -Go",
        },
      ],
      model: "llama3-8b-8192",
    });
  }

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-2xl p-4 overflow-y-auto h-4/5 bg-transparent rounded-lg ">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla neque
          et ipsa iusto maxime quod ratione quas saepe minima fugit. Vitae
          aliquid voluptates ducimus possimus a veniam quisquam cupiditate quia?
        </p>
      </div>
      <div className="w-full max-w-2xl p-4 relative">
        <input
          className="w-full p-4 pl-10 pr-12 outline-none text-white bg-gray-600  rounded-full mb-2"
          placeholder="Digite sua mensagem..."
        />
        <button onClick={()=> startQuery()} className="absolute bg-gray-400 rounded-full right-7  top-1/3 transform -translate-y-[14%] text-gray-900">
          <ArrowUp size={30} strokeWidth={1.4} />
        </button>
      </div>
    </div>
  );
}
