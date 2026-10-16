import React, { useState } from 'react';
import { OfficialLogoBadge } from './Logo';
import confetti from 'canvas-confetti';

interface CycleTutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CycleTutorialModal: React.FC<CycleTutorialModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);

  if (!isOpen) return null;

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep((prev) => prev + 1);
    } else {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#904639', '#4f6353', '#ffdad4'],
      });
      onClose();
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1c19]/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-[#dac1bd]/40 space-y-4 my-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#dac1bd]/30 pb-3">
          <div className="flex items-center gap-2.5">
            <OfficialLogoBadge size="sm" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-headline text-base sm:text-lg font-bold text-[#1c1c19]">
                  Guía Rápida: Control de tu Ciclo 30+
                </h3>
                <span className="text-[10px] bg-[#cfe5d1] text-[#384b3d] font-bold px-2 py-0.5 rounded-full">
                  Paso {step} de {totalSteps}
                </span>
              </div>
              <p className="text-xs text-[#706663]">
                Aprende a registrar y personalizar tus fases en 30 segundos
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#706663] hover:bg-[#f6f3ee] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="w-full bg-[#ebe8e3] h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-[#904639] h-full transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>

        {/* Content by Step */}
        <div className="py-2">
          {step === 1 && (
            <div className="space-y-3.5">
              <div className="p-4 bg-gradient-to-r from-[#ffdad4]/50 via-[#fcf9f4] to-[#cfe5d1]/50 rounded-2xl border border-[#dac1bd]/30 flex items-center justify-center">
                <div className="flex items-center gap-3 text-xs font-bold">
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-[#904639]"></span>
                    <span>Menstrual</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-[#4f6353]"></span>
                    <span>Folicular</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-[#c2410c]"></span>
                    <span>Ovulatoria</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-[#834e43]"></span>
                    <span>Lútea</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-headline text-base font-bold text-[#1c1c19]">
                  1. Mapeo Visual de tus 4 Fases
                </h4>
                <p className="text-xs text-[#544340] mt-1 leading-relaxed">
                  Cada día del calendario tiene una barra inferior de color que representa tu estado hormonal. A partir de los 30 años, entender en qué fase estás te permite planificar tu nivel de esfuerzo físico y tu nutrición antiinflamatoria sin agotarte.
                </p>
              </div>

              <div className="p-3 bg-[#fcf9f4] rounded-xl border border-[#dac1bd]/30 text-xs text-[#544340] space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#1c1c19]">
                  <span className="material-symbols-outlined text-[16px] text-[#4f6353]">verified</span>
                  <span>Punto verde en el día:</span>
                </div>
                <p className="text-[11px] pl-5">
                  Indica que ese día ya tiene datos o notas registrados por ti.
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3.5">
              <div className="p-4 bg-[#f6f3ee] rounded-2xl border border-[#dac1bd]/30 flex items-center justify-around text-center">
                <div className="bg-white p-2.5 rounded-xl border border-[#dac1bd]/30 shadow-2xs">
                  <span className="material-symbols-outlined text-[#904639] text-[24px]">water_drop</span>
                  <span className="text-[10px] font-bold block mt-1">Sangrado & Flujo</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-[#dac1bd]/30 shadow-2xs">
                  <span className="material-symbols-outlined text-[#4f6353] text-[24px]">bolt</span>
                  <span className="text-[10px] font-bold block mt-1">Energía Vital</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-[#dac1bd]/30 shadow-2xs">
                  <span className="material-symbols-outlined text-[#c2410c] text-[24px]">sentiment_satisfied</span>
                  <span className="text-[10px] font-bold block mt-1">Emociones</span>
                </div>
              </div>

              <div>
                <h4 className="font-headline text-base font-bold text-[#1c1c19]">
                  2. Edición Rápida con 1 Toque
                </h4>
                <p className="text-xs text-[#544340] mt-1 leading-relaxed">
                  Solo <strong>toca cualquier número del calendario</strong> (ej. día 5 o 21). Inmediatamente se abrirá el panel inferior donde podrás:
                </p>
              </div>

              <ul className="space-y-1.5 text-xs text-[#544340] pl-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#904639]"></span>
                  <span>Marcar inicio de sangrado o registrar intensidad de flujo.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4f6353]"></span>
                  <span>Registrar nivel de energía (1 a 5) y estado anímico.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c]"></span>
                  <span>Anotar molestias articulares para adaptar tus rutinas sin impacto.</span>
                </li>
              </ul>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3.5">
              <div className="p-3 bg-[#ffdad4]/40 rounded-2xl border border-[#ffdad4] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#904639] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">tune</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#1c1c19] block">
                    Botón "Configurar mi Ciclo"
                  </span>
                  <p className="text-[11px] text-[#544340]">
                    Personaliza la duración de tu ciclo (ej. 26, 28, 30 o 32 días) y tus días de regla.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-headline text-base font-bold text-[#1c1c19]">
                  3. Personaliza tu Ciclo según tu Biología
                </h4>
                <p className="text-xs text-[#544340] mt-1 leading-relaxed">
                  Ninguna mujer es igual a otra. Con el botón <strong>"⚙️ Configurar mi Ciclo"</strong> puedes cambiar la fecha de inicio de tu periodo y los días que dura habitualmente.
                </p>
                <p className="text-xs text-[#544340] mt-1.5 leading-relaxed">
                  El algoritmo de AuraVital recalcula al instante todos los colores y predicciones de ovulación de todo el mes de manera matemática y precisa.
                </p>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-3.5">
              <div className="p-3 bg-[#cfe5d1]/50 rounded-2xl border border-[#cfe5d1] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4f6353] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#1c1c19] block">
                    Reporte Clínico en PDF Automático
                  </span>
                  <p className="text-[11px] text-[#544340]">
                    Tus registros alimentan el informe listo para imprimir o enviar a tu médico.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-headline text-base font-bold text-[#1c1c19]">
                  4. Control Médico & Exportación
                </h4>
                <p className="text-xs text-[#544340] mt-1 leading-relaxed">
                  Todo lo que edites se guarda de forma segura en tu dispositivo. Al final del mes, toca el botón <strong>"PDF Médico"</strong> en la cabecera para generar un documento clínico formal para tu ginecólogo, médico general o nutricionista.
                </p>
              </div>

              <div className="p-3 bg-[#fcf9f4] rounded-xl border border-[#dac1bd]/30 text-xs text-[#544340]">
                💡 <em>"Tus datos son 100% privados y no se comparten con terceros."</em>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Buttons */}
        <div className="flex items-center justify-between pt-2 border-t border-[#dac1bd]/30">
          <button
            onClick={handlePrev}
            disabled={step === 1}
            className="px-3.5 py-2 text-xs font-semibold text-[#706663] hover:text-[#1c1c19] disabled:opacity-30 disabled:hover:text-[#706663] cursor-pointer"
          >
            Anterior
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  step === i + 1 ? 'w-5 bg-[#904639]' : 'bg-[#dac1bd]'
                }`}
              ></span>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="px-4 py-2 bg-[#904639] text-white rounded-xl text-xs font-bold hover:bg-[#ae5e4f] shadow-xs cursor-pointer transition-all flex items-center gap-1"
          >
            <span>{step === totalSteps ? '¡Empezar a editar!' : 'Siguiente'}</span>
            <span className="material-symbols-outlined text-[16px]">
              {step === totalSteps ? 'check' : 'arrow_forward'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
