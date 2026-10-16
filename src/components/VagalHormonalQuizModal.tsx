import React, { useState } from 'react';
import { OfficialLogoBadge } from './Logo';
import confetti from 'canvas-confetti';

interface VagalHormonalQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToNutrition: () => void;
}

interface Question {
  id: number;
  text: string;
  subtext: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: '¿Sientes hinchazón, retención de líquidos o tensión mamaria 7-10 días antes de tu periodo?',
    subtext: 'Marcador clásico de desbalance estrógeno/progesterona en fase lútea.',
  },
  {
    id: 2,
    text: '¿Te despiertas sobresaltada o en estado de alerta entre las 3:00 y las 4:00 AM?',
    subtext: 'Indica pico nocturno anómalo de cortisol y desregulación neuro-vagal.',
  },
  {
    id: 3,
    text: '¿Experimentas niebla mental, irritabilidad súbita o fatiga vespertina en la segunda mitad del ciclo?',
    subtext: 'Relacionado con la caída prematura de neurotransmisores GABA y progesterona.',
  },
  {
    id: 4,
    text: '¿Te cuesta recuperar el sosiego físico y mental tras un momento de estrés cotidiano?',
    subtext: 'Bajo tono vagal (menor resiliencia de la variabilidad de frecuencia cardíaca - VFC).',
  },
  {
    id: 5,
    text: '¿Notas digestiones más pesadas, gases o rigidez articular en rodillas o lumbar antes del sangrado?',
    subtext: 'Respuesta inflamatoria sistémica y modulación del receptor de estrógenos en articulaciones.',
  },
];

export const VagalHormonalQuizModal: React.FC<VagalHormonalQuizModalProps> = ({
  isOpen,
  onClose,
  onGoToNutrition,
}) => {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const handleToggle = (id: number, val: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: val }));
  };

  const answeredCount = Object.keys(answers).length;
  const affirmativeCount = Object.values(answers).filter(Boolean).length;

  const handleCalculate = () => {
    setIsCompleted(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

  const handleReset = () => {
    setAnswers({});
    setIsCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1c19]/65 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-[#dac1bd]/40 space-y-4 my-6 animate-fadeIn max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#dac1bd]/30 pb-3">
          <div className="flex items-center gap-3">
            <OfficialLogoBadge size="sm" />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-headline text-lg font-bold text-[#1c1c19]">
                  Test de Dominancia & Fatiga Vagal
                </h2>
                <span className="text-[10px] font-bold bg-[#cfe5d1] text-[#384b3d] px-2 py-0.5 rounded-full">
                  Sin Registro • 100% Abierto
                </span>
              </div>
              <p className="text-xs text-[#706663] mt-0.5">
                5 preguntas clínicas para evaluar tu respuesta progestágena y nervio vago
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

        {!isCompleted ? (
          <>
            {/* Progress indicator */}
            <div className="flex items-center justify-between text-xs text-[#706663]">
              <span>Preguntas respondidas: {answeredCount} de 5</span>
              <span className="font-bold text-[#904639]">
                {Math.round((answeredCount / 5) * 100)}%
              </span>
            </div>
            <div className="w-full bg-[#f0ede9] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#904639] h-full transition-all duration-300"
                style={{ width: `${(answeredCount / 5) * 100}%` }}
              />
            </div>

            {/* Questions list */}
            <div className="space-y-3 pt-1">
              {QUESTIONS.map((q) => {
                const isAnswered = answers[q.id] !== undefined;
                const value = answers[q.id];

                return (
                  <div
                    key={q.id}
                    className="p-3.5 rounded-2xl bg-[#fcf9f4] border border-[#dac1bd]/30 space-y-2 text-xs"
                  >
                    <div>
                      <p className="font-bold text-[#1c1c19] text-xs leading-snug">
                        {q.id}. {q.text}
                      </p>
                      <span className="text-[10px] text-[#706663] mt-0.5 block italic">
                        {q.subtext}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => handleToggle(q.id, true)}
                        className={`flex-1 py-1.5 rounded-xl font-bold transition-all border cursor-pointer ${
                          isAnswered && value === true
                            ? 'bg-[#904639] text-white border-[#904639] shadow-2xs'
                            : 'bg-white text-[#544340] border-[#dac1bd]/30 hover:bg-[#f6f3ee]'
                        }`}
                      >
                        Sí, con frecuencia
                      </button>

                      <button
                        type="button"
                        onClick={() => handleToggle(q.id, false)}
                        className={`flex-1 py-1.5 rounded-xl font-semibold transition-all border cursor-pointer ${
                          isAnswered && value === false
                            ? 'bg-[#4f6353] text-white border-[#4f6353] shadow-2xs'
                            : 'bg-white text-[#544340] border-[#dac1bd]/30 hover:bg-[#f6f3ee]'
                        }`}
                      >
                        Rara vez o nunca
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Calculate Button */}
            <button
              onClick={handleCalculate}
              disabled={answeredCount < 5}
              className="w-full h-11 rounded-xl bg-[#904639] text-white font-bold text-xs sm:text-sm hover:bg-[#ae5e4f] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"
            >
              <span className="material-symbols-outlined text-[18px]">biotech</span>
              <span>
                {answeredCount < 5
                  ? `Responde las 5 preguntas (${answeredCount}/5)`
                  : 'Ver Diagnóstico Biológico & Recomendación'}
              </span>
            </button>
          </>
        ) : (
          /* RESULT CARD */
          <div className="space-y-4 animate-fadeIn">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#fffaf8] to-[#fbf4f2] border border-[#904639]/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#ffdad4] text-[#3c0702] px-2.5 py-0.5 rounded-full">
                  Resultado del Perfil
                </span>
                <span className="text-xs font-bold text-[#904639]">
                  {affirmativeCount} de 5 síntomas afirmativos
                </span>
              </div>

              <div>
                <h3 className="font-headline text-base font-bold text-[#1c1c19]">
                  {affirmativeCount >= 3
                    ? 'Patrón de Fatiga en Fase Lútea & Sobrecarga Vagal'
                    : 'Equilibrio Neuro-Hormonal Favorable'}
                </h3>
                <p className="text-xs text-[#544340] mt-1.5 leading-relaxed">
                  {affirmativeCount >= 3 ? (
                    <>
                      Tu perfil indica <strong>fatiga en fase lútea con probable baja progesterona</strong> relativa y sobrecarga del sistema simpático (estrés adrenal). Esto explica la tensión premenstrual, el despertar nocturno y la digestión inflamada.
                    </>
                  ) : (
                    <>
                      Tus respuestas reflejan una <strong>buena respuesta al estrés y soporte progestágeno</strong> adecuado. Continuar con pautas antiinflamatorias mantendrá tu vitalidad en tus 30s y 40s.
                    </>
                  )}
                </p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#dac1bd]/30 space-y-1.5 text-xs">
                <span className="font-bold text-[#1c1c19] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#4f6353]">verified</span>
                  Recomendación Clínica Inmediata:
                </span>
                <ul className="space-y-1 text-[#544340] pl-5 list-disc">
                  <li>Incorpora el Batido Dorado con Cúrcuma & Magnesio Glicinato en las tardes.</li>
                  <li>Realiza la pausa vagal de respiración 4-7-8 al final de la jornada.</li>
                  <li>Prioriza el Menú Antiinflamatorio para Fase Lútea en AuraVital.</li>
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  onClose();
                  onGoToNutrition();
                }}
                className="w-full h-11 rounded-xl bg-[#904639] text-white font-bold text-xs sm:text-sm hover:bg-[#ae5e4f] shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">restaurant_menu</span>
                <span>Ver Mi Plan Antiinflamatorio Personalizado</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full py-2 text-center text-xs text-[#706663] hover:text-[#1c1c19] cursor-pointer"
              >
                Volver a realizar el test
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
