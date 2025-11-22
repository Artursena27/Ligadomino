import React from 'react';
import { RULES } from '../constants';
import { ScrollText, Trophy, AlertTriangle, Scale } from 'lucide-react';

const RulesSection: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes("Pontuação")) return <Trophy className="text-emerald-400" />;
    if (title.includes("Classificação")) return <Scale className="text-emerald-400" />;
    if (title.includes("Gerais")) return <ScrollText className="text-emerald-400" />;
    return <div className="w-2 h-2 bg-emerald-500 rounded-full" />;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
       <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Regulamento Oficial</h2>
          <p className="text-zinc-400">Normas para a realização da 1ª Liga do Dominó</p>
        </div>

      <div className="space-y-6">
        {RULES.map((section) => (
          <div key={section.id} className="bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-800 p-6 hover:border-emerald-700/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-black rounded-lg border border-zinc-800">
                {getIcon(section.title)}
              </div>
              <h3 className="text-xl font-bold text-zinc-100">{section.title}</h3>
            </div>
            <ul className="space-y-3 pl-4 border-l border-zinc-800">
              {section.content.map((rule, idx) => (
                <li key={idx} className="text-zinc-400 text-sm leading-relaxed">
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-4 p-4 bg-yellow-900/10 border border-yellow-700/30 rounded-lg">
        <AlertTriangle className="text-yellow-600 shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-yellow-600 mb-1">Fair Play</h4>
          <p className="text-sm text-yellow-600/70">Preza-se pelo respeito. Condutas antidesportivas poderão levar à perda de pontos.</p>
        </div>
      </div>
    </div>
  );
};

export default RulesSection;