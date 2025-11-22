import React from 'react';
import { TEAMS } from '../constants';
import { Users } from 'lucide-react';

const Teams: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Duplas Confirmadas</h2>
          <p className="text-zinc-400">Os competidores que disputarão o título</p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAMS.map((team) => (
          <div key={team.id} className="relative group">
            {/* Card Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-zinc-900 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            
            <div className="relative bg-zinc-950 border border-zinc-800 p-6 rounded-2xl h-full flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              
              {/* Domino Graphic */}
              <div className="flex gap-1 mb-6">
                <div className="w-8 h-14 bg-zinc-200 rounded flex flex-col items-center justify-center gap-2 shadow-lg">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                 <div className="w-8 h-14 bg-zinc-200 rounded flex flex-col items-center justify-center gap-2 shadow-lg">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 opacity-0 rounded-full"></div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-500 mb-4">
                <Users className="w-3 h-3" />
                DUPLA {team.id}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{team.members[0]}</h3>
              <span className="text-emerald-600 font-serif italic mb-2 text-sm">&</span>
              <h3 className="text-2xl font-bold text-white">{team.members[1]}</h3>
              
              <div className="mt-6 pt-6 border-t border-zinc-900 w-full">
                <p className="text-zinc-600 text-xs uppercase tracking-widest font-semibold">Associação Josa Club</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;