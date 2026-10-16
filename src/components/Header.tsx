import React, { useState, useRef, useEffect } from 'react';
import { Logo } from './Logo';
import { TabType, UserSubscription } from '../types';

interface HeaderProps {
  currentTab: TabType;
  onNavigate: (tab: TabType) => void;
  onOpenSelfCare: () => void;
  onOpenReportModal: () => void;
  subscription: UserSubscription;
  onOpenSubscription: () => void;
  onOpenQuiz?: () => void;
  onOpenProtocols?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenSelfCare,
  onOpenReportModal,
  subscription,
  onOpenSubscription,
  onOpenQuiz,
  onOpenProtocols,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isPro = subscription.tier === 'premium';

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fcf9f4]/95 backdrop-blur-md border-b border-[#dac1bd]/30 transition-all">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Brand or Back */}
        <div className="flex items-center gap-2">
          {currentTab !== 'today' && currentTab !== 'onboarding' ? (
            <button
              onClick={() => onNavigate('today')}
              aria-label="Volver a Inicio"
              className="w-9 h-9 -ml-1 rounded-full flex items-center justify-center text-[#544340] hover:text-[#1c1c19] hover:bg-[#f0ede9] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
          ) : null}

          <div
            onClick={() => onNavigate('today')}
            className="cursor-pointer"
          >
            <Logo size="sm" showSubtitle={true} />
          </div>
        </div>

        {/* Right actions: Clean, calm & serene */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Subtle Biological Status Badge */}
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f6f3ee] border border-[#dac1bd]/30 text-[11px] font-semibold text-[#544340]">
            <span className="w-2 h-2 rounded-full bg-[#834e43] animate-pulse"></span>
            <span>Fase Lútea • Día 21</span>
          </div>

          {/* Emotional Wellness: Pausa Vagal */}
          <button
            onClick={onOpenSelfCare}
            title="Pausa de bienestar neuro-vagal"
            className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#cfe5d1]/70 text-[#384b3d] hover:bg-[#cfe5d1] transition-all flex items-center gap-1.5 shadow-2xs border border-[#4f6353]/20 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px] text-[#4f6353]">spa</span>
            <span className="text-[11px] font-bold">Pausa Vagal</span>
          </button>

          {/* Contextual Menu for Medical PDF, Protocols, Quiz & Pro Membership */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              title="Menú de recursos clínicos y servicios"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#544340] hover:text-[#1c1c19] hover:bg-[#f0ede9] border border-[#dac1bd]/30 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">more_vert</span>
            </button>

            {/* Contextual Dropdown */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#dac1bd]/40 p-2 z-50 animate-fadeIn space-y-1">
                {/* Pro Status / Upgrade row */}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenSubscription();
                  }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-[#f6f3ee] flex items-center gap-2.5 transition-colors cursor-pointer"
                >
                  <span className={`material-symbols-outlined text-[18px] ${isPro ? 'text-[#4f6353]' : 'text-[#904639]'}`}>
                    {isPro ? 'verified' : 'workspace_premium'}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-[#1c1c19] flex items-center gap-1.5">
                      <span>{isPro ? 'AuraVital Pro Activo' : 'Plan Hormonal Pro'}</span>
                      <span className="text-[9px] px-1.5 py-0.2 bg-[#ffdad4] text-[#3c0702] rounded font-bold">
                        {isPro ? 'PRO' : '$7.99/mes'}
                      </span>
                    </div>
                    <div className="text-[10px] text-[#706663]">
                      {isPro ? 'Membresía total activa' : 'Sincronización continua e IA'}
                    </div>
                  </div>
                </button>

                <div className="h-px bg-[#dac1bd]/20 my-1" />

                {/* Dossier Hormonal para tu Médico */}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenReportModal();
                  }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-[#f6f3ee] flex items-center gap-2.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#904639]">
                    description
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-[#1c1c19]">
                      Dossier para tu Médico (PDF)
                    </div>
                    <div className="text-[10px] text-[#706663]">
                      3 ciclos, VFC y reporte ginecológico
                    </div>
                  </div>
                </button>

                {/* Test de Dominancia / Fatiga Vagal */}
                {onOpenQuiz && (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOpenQuiz();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#f6f3ee] flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#4f6353]">
                      quiz
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-[#1c1c19]">
                        Test de Fatiga Vagal & Hormonal
                      </div>
                      <div className="text-[10px] text-[#706663]">
                        Evaluación clínica en 5 preguntas
                      </div>
                    </div>
                  </button>
                )}

                {/* Protocolos de 14 Días */}
                {onOpenProtocols && (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOpenProtocols();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#f6f3ee] flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#834e43]">
                      auto_stories
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-[#1c1c19]">
                        Protocolos 14 Días ($12-$17)
                      </div>
                      <div className="text-[10px] text-[#706663]">
                        Reset de Cortisol, Vago & Insulina
                      </div>
                    </div>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* User Profile Avatar */}
          <button
            onClick={() => onNavigate('onboarding')}
            title="Ajustar Evaluación Clínica"
            className="relative ml-0.5 rounded-full p-0.5 ring-2 ring-[#dac1bd]/40 hover:ring-[#904639] transition-all cursor-pointer"
          >
            <img
              alt="Perfil usuaria 30+"
              className="w-8 h-8 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqTbziQd1kDzMVEg6eSN-tzw-lte10FXsYz4xs_EaKu-NCAWKZj9HnIoK55200uzij_RMlFCt9y89f33cLtU3ZjsNw1GdkRQPOU-rXqkB8JGA0V01ePxfO8iWMll9c2MakACojgC0lzpBcwt4y5E2fyb5b6BbP-3MsOyUAgRzCzTjU6BzDGzBfvNXz0sl62vY2Slnr85F6SK7EbjYG1NQW4GWVqOyPsQiTN2W2wQ7Nm81N-S9cTFBo1g"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#4f6353] border-2 border-white rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
