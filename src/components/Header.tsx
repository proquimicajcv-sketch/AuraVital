import React from 'react';
import { Logo } from './Logo';
import { TabType, UserSubscription } from '../types';

interface HeaderProps {
  currentTab: TabType;
  onNavigate: (tab: TabType) => void;
  onOpenSelfCare: () => void;
  onOpenReportModal: () => void;
  subscription: UserSubscription;
  onOpenSubscription: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenSelfCare,
  onOpenReportModal,
  subscription,
  onOpenSubscription,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#fcf9f4]/90 backdrop-blur-md border-b border-[#dac1bd]/30 transition-all">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Brand or Back */}
        <div className="flex items-center gap-2">
          {currentTab !== 'today' && currentTab !== 'onboarding' ? (
            <button
              onClick={() => onNavigate('today')}
              aria-label="Volver a Inicio"
              className="w-9 h-9 -ml-1 rounded-full flex items-center justify-center text-[#544340] hover:text-[#1c1c19] hover:bg-[#f0ede9] transition-colors"
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

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Subtle Emotional Wellness Breathing Button */}
          <button
            onClick={onOpenSelfCare}
            title="Pausa de bienestar emocional"
            className="px-2.5 py-1.5 rounded-full text-xs font-semibold bg-[#cfe5d1]/60 text-[#536758] hover:bg-[#cfe5d1] transition-all flex items-center gap-1.5 shadow-2xs"
          >
            <span className="material-symbols-outlined text-[16px] text-[#4f6353]">spa</span>
            <span className="hidden sm:inline">Pausa Vagal</span>
          </button>

          {/* Quick PDF Report Button */}
          <button
            onClick={onOpenReportModal}
            title="Reporte Clínico Mensual en PDF"
            className="px-2.5 py-1.5 rounded-full text-xs font-semibold bg-[#ffdad4]/60 text-[#904639] hover:bg-[#ffdad4] transition-all flex items-center gap-1.5 shadow-2xs"
          >
            <span className="material-symbols-outlined text-[16px]">description</span>
            <span className="hidden sm:inline">PDF Médico</span>
          </button>

          {/* Pro Membership Badge / Trigger */}
          <button
            onClick={onOpenSubscription}
            title="Gestión de Membresía"
            className={`px-2.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 shadow-2xs cursor-pointer ${
              subscription.tier === 'premium'
                ? 'bg-gradient-to-r from-[#904639] to-[#ae5e4f] text-white'
                : 'bg-[#ffdad4] text-[#3c0702] hover:bg-[#ffc5bc]'
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">
              {subscription.tier === 'premium' ? 'workspace_premium' : 'lock_open'}
            </span>
            <span>
              {subscription.tier === 'premium' ? 'Vital Pro' : 'Plato Fuerte ($7.99)'}
            </span>
          </button>

          {/* User Profile Avatar (matching the image) */}
          <button
            onClick={() => onNavigate('onboarding')}
            title="Ajustar Evaluación Clínica"
            className="relative ml-1 rounded-full p-0.5 ring-2 ring-[#dac1bd]/40 hover:ring-[#904639] transition-all"
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
