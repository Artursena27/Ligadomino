import React from 'react';
import { SCHEDULE, TEAMS } from '../constants';
import { Calendar, Clock } from 'lucide-react';

const Schedule: React.FC = () => {
  const getTeamName = (id: number) => {
    const team = TEAMS.find(t => t.id === id);
    return team ? team.name : `Time ${id}`;
  };

  const getTeamMembers = (id: number) => {
    const team = TEAMS.find(t => t.id === id);
    return team ? team.members.join(" & ") : "";
  }

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
       <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-400 mb-4">Tabela de Jogos</h2>
          <div className="flex items-center justify-center gap-2 text-zinc-400">
            <Calendar className="w-4 h-4" />
            <span>22 de Novembro</span>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4" />
            <span>Turno Único</span>
          </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SCHEDULE.map((round) => (
          <div key={round.id} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-emerald-600/50 transition-colors group">
            <div className="bg-black/40 p-3 border-b border-zinc-800 flex justify-between items-center">
              <h3 className="font-bold text-emerald-500">{round.name}</h3>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                3 Partidas
              </span>
            </div>
            <div className="p-4 space-y-4">
              {round.matches.map((match, idx) => (
                <div key={idx} className="flex flex-col gap-2 text-sm relative">
                    {/* Connector Line for visual flair */}
                    {idx !== round.matches.length - 1 && (
                        <div className="absolute left-1/2 bottom-[-10px] w-px h-2 bg-zinc-800 -translate-x-1/2"></div>
                    )}
                    
                  <div className="flex justify-between items-center bg-zinc-800/30 p-2 rounded-lg">
                    <div className="text-left flex-1">
                        <div className="font-bold text-zinc-200">{getTeamName(match.teamA)}</div>
                        <div className="text-[10px] text-zinc-500">{getTeamMembers(match.teamA)}</div>
                    </div>
                    
                    <div className="px-3 text-zinc-600 font-serif italic font-bold text-lg">X</div>
                    
                    <div className="text-right flex-1">
                        <div className="font-bold text-zinc-200">{getTeamName(match.teamB)}</div>
                        <div className="text-[10px] text-zinc-500">{getTeamMembers(match.teamB)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-emerald-900/20 border border-emerald-900 rounded-lg text-center text-sm text-emerald-300/70">
        * A ordem dos jogos dentro da rodada seguirá a disponibilidade das 2 mesas.
      </div>
    </div>
  );
};

export default Schedule;