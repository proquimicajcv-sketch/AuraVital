import React from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  const navItems: { id: TabType; label: string; icon: string }[] = [
    { id: 'today', label: 'Hoy', icon: 'vital_signs' },
    { id: 'calendar', label: 'Ciclo 30+', icon: 'calendar_month' },
    { id: 'nutrition_fitness', label: 'Metabolismo', icon: 'restaurant' },
    { id: 'wearables', label: 'Wearables', icon: 'watch' },
    { id: 'community', label: 'Comunidad', icon: 'forum' },
    { id: 'onboarding', label: 'Elena Coach', icon: 'assignment_ind' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#dac1bd]/40 shadow-[0_-4px_24px_rgba(44,37,35,0.06)] rounded-t-2xl">
      <div className="max-w-4xl mx-auto px-2 flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`flex flex-col items-center justify-center flex-1 py-1 transition-all duration-200 relative group ${
                isActive ? 'text-[#904639]' : 'text-[#706663] hover:text-[#2C2523]'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className={`material-symbols-outlined text-[22px] transition-transform duration-200 ${
                    isActive ? 'scale-110 font-medium' : 'group-hover:scale-105'
                  }`}
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon}
                </span>
              </div>

              <span
                className={`text-[10px] tracking-tight font-medium mt-0.5 transition-colors ${
                  isActive ? 'text-[#904639] font-bold' : 'text-[#706663]'
                }`}
              >
                {item.label}
              </span>

              {/* Serene Vitality Micro-dot indicator */}
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#904639] mt-0.5 animate-pulse"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
