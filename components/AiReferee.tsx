import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { FULL_REGULATION_TEXT } from '../constants';
import { MessageSquare, Send, Bot, AlertCircle } from 'lucide-react';

const AiReferee: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAskReferee = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
        // Using process.env.API_KEY as required
        const apiKey = process.env.API_KEY;
        
        if (!apiKey) {
            throw new Error("Chave de API não configurada. Por favor, configure a variável de ambiente API_KEY.");
        }

        const ai = new GoogleGenAI({ apiKey: apiKey });
        
        const systemInstruction = `Você é o Árbitro Oficial da 1ª Liga do Dominó da Associação Josa Club. 
        Sua função é esclarecer dúvidas baseando-se ESTRITAMENTE no seguinte regulamento: 
        
        ${FULL_REGULATION_TEXT}
        
        Se a resposta não estiver no regulamento, diga que é um "caso omisso" e deve ser resolvido pela comissão organizadora (Regra 7.1). 
        Seja cortês, direto e use emojis relacionados a dominó ou troféus.`;

        const modelResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: query,
            config: {
                systemInstruction: systemInstruction,
            }
        });

        setResponse(modelResponse.text || "Não foi possível gerar uma resposta.");

    } catch (err: any) {
        console.error(err);
        setError("O árbitro está consultando o VAR... (Erro de conexão ou API Key ausente).");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-zinc-900 border border-emerald-800 rounded-2xl shadow-2xl mt-8">
      <div className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-4">
        <div className="bg-emerald-600 p-2 rounded-lg">
          <Bot className="text-white w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-emerald-400">Árbitro Virtual</h2>
          <p className="text-xs text-zinc-400">Tire suas dúvidas sobre o regulamento com IA</p>
        </div>
      </div>

      <div className="space-y-4">
        {response && (
          <div className="bg-zinc-800/50 p-4 rounded-xl border border-emerald-500/30 animate-fade-in">
            <div className="flex gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">Decisão do Árbitro</span>
            </div>
            <p className="text-zinc-200 leading-relaxed whitespace-pre-wrap">{response}</p>
          </div>
        )}

        {error && (
           <div className="bg-red-900/20 p-4 rounded-xl border border-red-500/30 flex items-center gap-3">
             <AlertCircle className="text-red-400 w-5 h-5" />
             <p className="text-red-200 text-sm">{error}</p>
           </div>
        )}

        <form onSubmit={handleAskReferee} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ex: O que acontece se empatar em primeiro lugar?"
            className="w-full bg-black/40 border border-zinc-700 text-zinc-200 rounded-xl pl-4 pr-12 py-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-zinc-600"
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="absolute right-2 top-2 bottom-2 bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </form>
        
        <div className="flex gap-2 justify-center mt-4">
             <button 
                type="button"
                onClick={() => setQuery("Quanto vale uma vitória de buchuda?")}
                className="text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-400 py-1 px-3 rounded-full transition-colors"
             >
                "Quanto vale a buchuda?"
             </button>
             <button 
                type="button"
                onClick={() => setQuery("Quantas rodadas são?")}
                className="text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-400 py-1 px-3 rounded-full transition-colors"
             >
                "Quantas rodadas?"
             </button>
        </div>
      </div>
    </div>
  );
};

export default AiReferee;