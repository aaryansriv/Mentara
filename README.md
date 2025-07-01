# Perplexity Clone

A powerful AI-powered search and Q&A application inspired by [Perplexity.ai](https://www.perplexity.ai), built using **Next.js** on the frontend and integrated with an **Ingest pipeline** for intelligent data processing and retrieval.

---

## 🚀 Features

- 🧠 Ask natural language questions and get intelligent answers
- 📄 Ingest documents for personalized knowledge retrieval (PDF, CSV, etc.)
- 🔎 Context-aware search powered by embeddings
- ⚡ Fast, modern UI built with **Next.js**
- 🗂️ Multi-document support and scalable architecture

---

## 🛠️ Tech Stack

| Layer        | Technology        |
|--------------|-------------------|
| Frontend     | Next.js, Tailwind CSS |
| Backend      | FastAPI / Node.js (optional) |
| Vector DB    | FAISS / ChromaDB |
| Embeddings   | OpenAI / Gemini / HuggingFace |
| Ingestion    | Custom pipeline using `Ingest` scripts |
| Hosting      | Vercel / Render / Railway (planned) |

---

## 📂 Folder Structure

perp-clone/
├── pages/ # Next.js pages
├── components/ # Reusable UI components
├── public/ # Static assets
├── utils/ # Ingest, embeddings, and helper functions
├── styles/ # Tailwind/global CSS
├── ingest/ # Document upload & processing scripts
└── README.md

yaml
Copy
Edit

---

## 🧪 Local Development

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/perp-clone.git
cd perp-clone
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the development server
bash
Copy
Edit
npm run dev
App will be available at http://localhost:3000

📥 Document Ingestion (Manual / API)
Add your documents to /ingest or use an upload UI (if implemented). Each document is embedded and stored in a vector DB for contextual Q&A.

🧠 How It Works (Architecture Overview)
User asks a question

Question is embedded using an LLM (e.g. OpenAI/Gemini)

Similar documents are retrieved via vector search (FAISS/ChromaDB)

A response is generated using context-aware generation

Response is shown in the UI

✅ TODOs
 Add user login and history

 Document upload interface

 LangGraph or LangChain agent support

 Email conversation feature

 Deploy to production

📄 License
MIT License. Feel free to fork, contribute, or use as a base for your own RAG apps.

🙌 Acknowledgements
Perplexity.ai for inspiration

LangChain for tooling

OpenAI / Google Gemini for LLM APIs

yaml
Copy
Edit

---

Let me know if your **backend is FastAPI**, or you want a **badge style README with images**, or deployment info (e.g., Vercel or Railway). I’ll adapt it accordingly.
