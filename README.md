# Projeto 3 - Automação 💬🤖

Este é um projeto de interface de chat que utiliza o **Groq AI** para gerar respostas baseadas em prompts de usuário. O objetivo principal é criar um ambiente onde os usuários possam interagir com o modelo de linguagem de maneira simples e intuitiva, recebendo respostas geradas automaticamente.

## O que é o Groq AI? 🌐

**Groq AI** é uma ferramenta que permite a criação de aplicações de Inteligência Artificial de alta performance. Ela oferece uma API fácil de usar para a construção de chatbots, assistentes virtuais e outras aplicações de processamento de linguagem natural. Neste projeto, utilizamos o Groq AI para receber mensagens de texto dos usuários e gerar respostas automáticas, imitando uma conversa natural.

## Processo de Elaboração do Projeto 🛠️

O desenvolvimento deste projeto seguiu as seguintes etapas:

1. **Configuração do Ambiente**: Iniciamos criando um ambiente de desenvolvimento em React, utilizando ferramentas modernas para o gerenciamento de estados e efeitos.

2. **Integração com Groq AI**: Configuramos a SDK do Groq, utilizando a chave de API fornecida. A configuração permitiu que o projeto se conectasse à API do Groq para enviar mensagens e receber respostas.

3. **Criação da Interface**: Desenvolvemos uma interface de usuário minimalista usando Tailwind CSS. A interface inclui um campo de texto para que o usuário possa digitar mensagens e um botão para enviar essas mensagens.

## Tecnologias Utilizadas 💻

O projeto foi desenvolvido usando as seguintes tecnologias:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário. Utilizada para criar componentes reutilizáveis e gerenciar o estado da aplicação.
  
- **Tailwind CSS**: Framework de CSS utilitário para estilização rápida e eficiente da interface. Utilizado para construir um layout responsivo e estilizar componentes de forma consistente.
  
- **Groq SDK**: Kit de desenvolvimento de software para integração com a API do Groq. Utilizado para enviar mensagens de texto e receber respostas geradas pelo modelo de linguagem Groq AI.
  
- **Lucide-react**: Biblioteca de ícones React usada para melhorar a interface visual. No projeto, utilizamos o ícone de seta para cima (ArrowUp) para o botão de envio.

## Como Executar o Projeto Localmente 🚀

1. **Criação de uma API Key no Groq**:
   - Acesse o site do [Groq AI](https://www.groq.com/).
   - Faça login ou crie uma nova conta, caso ainda não tenha uma.
   - Navegue até a seção de **API Keys** no painel de controle do Groq.
   - Clique em **Criar nova chave** ou um botão similar.
   - Copie a API Key gerada e guarde-a em um local seguro. Você precisará dela para configurar o projeto.

2. **Clone este repositório para sua máquina local**:
    ```bash
    git clone https://github.com/ozielrsdev/AI-Project-3.git
    ```
3. **Navegue até o diretório do projeto**:
    ```bash
    cd AI-Project-3
    ```
4. **Instale as dependências do projeto**:
    ```bash
    npm install
    ```
5. **Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API do Groq**:
    ```bash
    VITE_APP_GROQ_KEY=sua_chave_api_aqui
    ```
6. **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```
7. **Abra seu navegador e acesse `http://localhost:5173/` para visualizar o projeto**.

## Contribuições 🤝

Contribuições são bem-vindas! Se você deseja melhorar este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença 📜

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.
