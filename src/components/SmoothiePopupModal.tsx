import React, { useState } from 'react';
import { HormonalSmoothie } from '../types';
import { HORMONAL_SMOOTHIES } from '../data/initialData';
import { OfficialLogoBadge } from './Logo';

interface SmoothiePopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SmoothiePopupModal: React.FC<SmoothiePopupModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedSmoothieId, setSelectedSmoothieId] = useState<string>(
    HORMONAL_SMOOTHIES[0].id
  );
  const [savedFavorite, setSavedFavorite] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentSmoothie =
    HORMONAL_SMOOTHIES.find((s) => s.id === selectedSmoothieId) ||
    HORMONAL_SMOOTHIES[0];

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1c19]/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-4 sm:p-6 shadow-2xl border border-[#dac1bd]/40 space-y-4 my-6 animate-fadeIn">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#dac1bd]/30 pb-3">
          <div className="flex items-center gap-3">
            <OfficialLogoBadge size="sm" />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-headline text-lg sm:text-xl font-bold text-[#1c1c19]">
                  Batidos Hormonales de Elena
                </h2>
                <span className="text-[10px] bg-[#cfe5d1] text-[#384b3d] font-bold px-2 py-0.5 rounded-full">
                  Sugerencia del Día
                </span>
              </div>
              <p className="text-xs text-[#706663]">
                Micro-dosis líquidas de proteína, adaptógenos y micronutrientes 30+
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#706663] hover:bg-[#f6f3ee] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Smoothie Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {HORMONAL_SMOOTHIES.map((s) => {
            const isSelected = s.id === currentSmoothie.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setSelectedSmoothieId(s.id);
                  setSavedFavorite(false);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-[#904639] text-white border-[#904639] shadow-xs'
                    : 'bg-[#f6f3ee] text-[#544340] border-[#dac1bd]/30 hover:bg-[#ebe8e3]'
                }`}
              >
                {s.name.split(' ')[0]} {s.name.split(' ')[1]}
              </button>
            );
          })}
        </div>

        {/* 4K Hero Photography Card with Elena Badge */}
        <div className="relative rounded-2xl overflow-hidden shadow-md aspect-video bg-[#ebe8e3] group">
          <img
            src={currentSmoothie.imageUrl}
            alt={currentSmoothie.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c19]/80 via-transparent to-black/20"></div>

          {/* Top badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="text-[11px] font-bold bg-[#1c1c19]/75 text-white backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
              {currentSmoothie.phaseLabel}
            </span>
            <span className="text-[11px] font-bold bg-[#cfe5d1] text-[#384b3d] px-2.5 py-1 rounded-full shadow-xs">
              +{currentSmoothie.targetProtein}g Proteína • {currentSmoothie.prepTime}
            </span>
          </div>

          {/* Elena Live Cooking Overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end gap-2.5">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVLhO4NHhOkmyaAVrqvx-STu8fO_IdCpzaogagRoe0wqJlE--blT1-_qLUjP4XsILxB50tt3LZNhqPoQfLZ0xI_9b8vot0Hy1XJ2HwKZZ1OqllGH6DT1O7OXQHgtFM-Za3UtWADrLUCDtIN4BTUC1hE5BL624CJbCC-7YLUDaCtBBily_28X3TfVhegFmbev-O-CR97mNllsMWGvUL7r3_xFa9ppmtnyjVC97OfoJvJlRikinHpjPyHw"
              alt="Elena coach"
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md shrink-0"
            />
            <div className="bg-white/90 backdrop-blur-md p-2 rounded-xl text-left border border-white/40 shadow-xs">
              <span className="text-[10px] uppercase font-bold text-[#904639] block">
                Elena • Tu Especialista
              </span>
              <p className="text-[11px] text-[#1c1c19] italic leading-tight">
                {currentSmoothie.elenaTip}
              </p>
            </div>
          </div>
        </div>

        {/* Smoothie Title and Benefits */}
        <div className="space-y-1">
          <h3 className="font-headline text-lg font-bold text-[#1c1c19]">
            {currentSmoothie.name}
          </h3>
          <p className="text-xs text-[#544340] leading-relaxed">
            {currentSmoothie.hormoneBenefit}
          </p>
        </div>

        {/* Ingredients & Prep */}
        <div className="p-3 bg-[#fcf9f4] rounded-2xl border border-[#dac1bd]/30 space-y-2 text-xs">
          <div>
            <span className="font-bold text-[#1c1c19] uppercase tracking-wider text-[10px] block mb-1">
              Ingredientes en la Batidora:
            </span>
            <ul className="space-y-0.5 text-[#544340]">
              {currentSmoothie.ingredients.map((ing: string, idx: number) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#904639]"></span>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-1 border-t border-[#dac1bd]/20">
            <span className="font-bold text-[#1c1c19] uppercase tracking-wider text-[10px] block mb-0.5">
              Preparación Exprés:
            </span>
            <p className="text-[11px] text-[#706663] leading-snug">
              {currentSmoothie.instructions}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-1">
          <button
            onClick={() => setSavedFavorite(!savedFavorite)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              savedFavorite
                ? 'bg-[#cfe5d1] text-[#384b3d]'
                : 'bg-[#f6f3ee] text-[#544340] hover:bg-[#ebe8e3]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[16px]"
              style={savedFavorite ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              favorite
            </span>
            <span>{savedFavorite ? 'Guardado en Favoritos' : 'Guardar Receta'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#904639] text-white rounded-xl text-xs font-semibold hover:bg-[#ae5e4f] shadow-xs cursor-pointer transition-all"
          >
            Entendido, volver al Menú
          </button>
        </div>
      </div>
    </div>
  );
};
