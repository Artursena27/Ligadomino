import React, { useState } from 'react';
import { Tab } from './types';
import RulesSection from './components/RulesSection';
import Schedule from './components/Schedule';
import Teams from './components/Teams';
import AiReferee from './components/AiReferee';
import { Dices, Gavel, CalendarDays, Users, Info, ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.RULES:
        return <RulesSection />;
      case Tab.SCHEDULE:
        return <Schedule />;
      case Tab.TEAMS:
        return <Teams />;
      case Tab.REFEREE:
        return <AiReferee />;
      case Tab.HOME:
      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 animate-fade-in px-4">
            <div className="w-24 h-24 bg-emerald-900/30 rounded-full flex items-center justify-center border border-emerald-500/20 mb-4 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <Dices className="w-12 h-12 text-emerald-400" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
              1ª Liga do Dominó
            </h1>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-zinc-400 text-lg">
              <span className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-emerald-600" />
                22 de Novembro
              </span>
              <span className="hidden md:inline w-1 h-1 bg-zinc-700 rounded-full"></span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Associação Josa Club
              </span>
            </div>

            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl max-w-2xl backdrop-blur-sm">
              <p className="text-zinc-300 leading-relaxed">
                Bem-vindo ao site oficial. Aqui você encontra o regulamento completo, a tabela de jogos e as duplas que disputarão o título. 
                Use o menu para navegar ou consulte nosso <strong className="text-emerald-400">Árbitro Virtual</strong> para dúvidas sobre as regras.
              </p>
            </div>

            <button 
                onClick={() => setActiveTab(Tab.SCHEDULE)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-emerald-900/50"
            >
                Ver Jogos
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-emerald-500/30 relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 domino-pattern pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-emerald-950/30 to-transparent z-0 pointer-events-none"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Area */}
            <div 
                className="flex items-center gap-2 cursor-pointer group" 
                onClick={() => setActiveTab(Tab.HOME)}
            >
              <div className="bg-emerald-600 w-8 h-5 rounded-sm relative shadow-sm group-hover:bg-emerald-500 transition-colors">
                 <div className="absolute left-1 top-1 w-1.5 h-1.5 bg-white rounded-full"></div>
                 <div className="absolute right-1 bottom-1 w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              <span className="font-serif font-bold text-lg tracking-tight hidden sm:block">Liga do Dominó</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              <NavButton active={activeTab === Tab.RULES} onClick={() => setActiveTab(Tab.RULES)} icon={<Info className="w-4 h-4"/>}>Regras</NavButton>
              <NavButton active={activeTab === Tab.TEAMS} onClick={() => setActiveTab(Tab.TEAMS)} icon={<Users className="w-4 h-4"/>}>Duplas</NavButton>
              <NavButton active={activeTab === Tab.SCHEDULE} onClick={() => setActiveTab(Tab.SCHEDULE)} icon={<CalendarDays className="w-4 h-4"/>}>Tabela</NavButton>
              <div className="w-px h-6 bg-zinc-800 mx-2"></div>
              <NavButton active={activeTab === Tab.REFEREE} onClick={() => setActiveTab(Tab.REFEREE)} icon={<Gavel className="w-4 h-4"/>} variant="special">Árbitro AI</NavButton>
            </div>

            {/* Mobile Menu Button (Simplified for this scope, normally a hamburger) */}
            <div className="md:hidden flex gap-4">
                <button onClick={() => setActiveTab(Tab.SCHEDULE)} className="text-sm font-bold text-emerald-500">Jogos</button>
                <button onClick={() => setActiveTab(Tab.REFEREE)} className="text-sm font-bold text-zinc-300">Ajuda</button>
            </div>
          </div>
        </div>
        
        {/* Mobile Tab Bar (Bottom fixed for mobile app feel) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800 z-50 flex justify-around p-2 pb-safe">
             <MobileNavButton active={activeTab === Tab.HOME} onClick={() => setActiveTab(Tab.HOME)} icon={<Dices size={20}/>} label="Início" />
             <MobileNavButton active={activeTab === Tab.RULES} onClick={() => setActiveTab(Tab.RULES)} icon={<Info size={20}/>} label="Regras" />
             <MobileNavButton active={activeTab === Tab.SCHEDULE} onClick={() => setActiveTab(Tab.SCHEDULE)} icon={<CalendarDays size={20}/>} label="Jogos" />
             <MobileNavButton active={activeTab === Tab.TEAMS} onClick={() => setActiveTab(Tab.TEAMS)} icon={<Users size={20}/>} label="Duplas" />
             <MobileNavButton active={activeTab === Tab.REFEREE} onClick={() => setActiveTab(Tab.REFEREE)} icon={<Gavel size={20}/>} label="Árbitro" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-8 md:py-12 mb-20 md:mb-0">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="hidden md:block border-t border-zinc-900 py-8 mt-auto bg-black/50 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} Associação Josa Club - Evento Oficial</p>
          <p className="mt-1">Desenvolvido para a 1ª Liga</p>
        </div>
      </footer>
    </div>
  );
};

// Helper Components for Navigation

const NavButton: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon: React.ReactNode;
  variant?: 'default' | 'special';
}> = ({ active, onClick, children, icon, variant = 'default' }) => {
  if (variant === 'special') {
    return (
        <button
        onClick={onClick}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
          ${active 
            ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(5,150,105,0.4)]' 
            : 'bg-zinc-900 text-emerald-500 hover:bg-zinc-800 border border-emerald-900/30'}
        `}
      >
        {icon}
        {children}
      </button>
    )
  }
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
        ${active 
          ? 'bg-zinc-800 text-white' 
          : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}
      `}
    >
      {icon}
      {children}
    </button>
  );
};

const MobileNavButton: React.FC<{
    active: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    label: string;
}> = ({ active, onClick, icon, label }) => (
    <button 
        onClick={onClick}
        className={`flex flex-col items-center justify-center w-full py-1 ${active ? 'text-emerald-500' : 'text-zinc-500'}`}
    >
        {icon}
        <span className="text-[10px] mt-1">{label}</span>
    </button>
);

export default App;