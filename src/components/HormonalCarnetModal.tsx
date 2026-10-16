import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { OfficialLogoBadge } from './Logo';

interface HormonalCarnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  hrvChangePercent?: number;
  phaseName?: string;
  sleepScore?: number;
}

export const HormonalCarnetModal: React.FC<HormonalCarnetModalProps> = ({
  isOpen,
  onClose,
  hrvChangePercent = 12,
  phaseName = 'Fase Folicular',
  sleepScore = 88,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleShareStory = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1c19]/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-sm w-full p-5 shadow-2xl border border-[#dac1bd]/40 space-y-4 my-6 animate-fadeIn">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-[#dac1bd]/30 pb-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#904639] text-[20px]">
              share
            </span>
            <span className="font-headline text-sm font-bold text-[#1c1c19]">
              Carnet Hormonal Compartible (9:16)
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center text-[#706663] hover:bg-[#f6f3ee] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* 9:16 Vertical Story Preview Card */}
        <div
          id="carnet-hormonal-card"
          className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden shadow-lg border border-[#dac1bd]/40 bg-gradient-to-b from-[#fcf9f4] via-[#f7efe9] to-[#eedcd7] p-5 flex flex-col justify-between text-[#1c1c19] select-none"
        >
          {/* Top Brand & Phase */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <OfficialLogoBadge size="sm" />
                <span className="font-headline font-bold text-xs tracking-wider text-[#904639]">
                  AURAVITAL
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#1c1c19] text-white px-2 py-0.5 rounded-full shadow-2xs">
                30+ Bio-Rhythm
              </span>
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-bold text-[#4f6353] uppercase tracking-wider block">
                Resumen de Ciclo & VFC
              </span>
              <h3 className="font-headline text-lg font-bold text-[#1c1c19] leading-tight">
                {phaseName}
              </h3>
            </div>
          </div>

          {/* Central Highlight Badge (Spotify Wrapped Style) */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-md border border-white/60 space-y-3 text-center my-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#cfe5d1] text-[#384b3d] mx-auto shadow-2xs">
              <span className="material-symbols-outlined text-[26px]">vital_signs</span>
            </div>

            <div>
              <div className="font-headline text-3xl font-extrabold text-[#4f6353]">
                +{hrvChangePercent}%
              </div>
              <span className="text-xs font-bold text-[#1c1c19] block">
                Elevación de Variabilidad Cardíaca (VFC)
              </span>
              <p className="text-[11px] text-[#544340] mt-1 leading-snug">
                "Mi VFC subió {hrvChangePercent}% en {phaseName} gracias al descanso reparador y nutrición adaptada."
              </p>
            </div>

            {/* Micro stats strip */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#dac1bd]/30 text-left">
              <div className="bg-[#fcf9f4] p-2 rounded-xl border border-[#dac1bd]/20">
                <span className="text-[9px] text-[#706663] block">Recuperación Vagal:</span>
                <span className="font-bold text-xs text-[#4f6353]">{sleepScore}% Óptima</span>
              </div>
              <div className="bg-[#fcf9f4] p-2 rounded-xl border border-[#dac1bd]/20">
                <span className="text-[9px] text-[#706663] block">Tono Muscular 30+:</span>
                <span className="font-bold text-xs text-[#904639]">Sin sobrecarga</span>
              </div>
            </div>
          </div>

          {/* Bottom Callout & Watermark */}
          <div className="space-y-2 text-center pt-2">
            <p className="text-[11px] font-semibold text-[#544340] italic leading-tight">
              Entendiendo mi cuerpo a los 35+ con <strong className="text-[#904639] not-italic">@AuraVital</strong>
            </p>
            <div className="text-[9px] text-[#706663] flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f6353]"></span>
              <span>Inteligencia Biológica Femenina • Sin datos íntimos expuestos</span>
            </div>
          </div>
        </div>

        {/* Share actions */}
        <div className="space-y-2 pt-1">
          <button
            onClick={handleShareStory}
            className="w-full h-11 rounded-xl bg-gradient-to-r from-[#d62976] via-[#fa7e1e] to-[#962fbf] text-white font-bold text-xs hover:opacity-95 shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            <span>
              {copied ? '¡Listo para publicar en Instagram Story!' : 'Compartir en Instagram Stories & TikTok'}
            </span>
          </button>

          <button
            onClick={handleShareStory}
            className="w-full h-9 rounded-xl bg-[#f6f3ee] text-[#1c1c19] font-semibold text-xs hover:bg-[#ebe8e3] border border-[#dac1bd]/40 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px] text-[#4f6353]">content_copy</span>
            <span>{copied ? 'Copiado al portapapeles' : 'Copiar Ficha Gráfica para WhatsApp'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
