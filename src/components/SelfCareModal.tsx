import React, { useState, useEffect } from 'react';
import { OfficialLogoBadge } from './Logo';

interface SelfCareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SelfCareModal: React.FC<SelfCareModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'breath' | 'gratitude' | 'posture'>('breath');
  const [breathPhase, setBreathPhase] = useState<'Inhala' | 'Retén' | 'Exhala'>('Inhala');
  const [breathSeconds, setBreathSeconds] = useState(4);
  const [isBreathingRunning, setIsBreathingRunning] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);

  const [gratitudeNote, setGratitudeNote] = useState('');
  const [gratitudeSaved, setGratitudeSaved] = useState(false);

  // 4-7-8 Breathing Technique implementation
  useEffect(() => {
    let timer: any = null;
    if (isBreathingRunning) {
      timer = setInterval(() => {
        setBreathSeconds((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            // Transition phase
            if (breathPhase === 'Inhala') {
              setBreathPhase('Retén');
              return 7;
            } else if (breathPhase === 'Retén') {
              setBreathPhase('Exhala');
              return 8;
            } else {
              setBreathPhase('Inhala');
              setCycleCount((c) => c + 1);
              return 4;
            }
          }
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isBreathingRunning, breathPhase]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1c19]/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-[#dac1bd]/40 space-y-4 my-8 animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#dac1bd]/30 pb-3">
          <div className="flex items-center gap-3">
            <OfficialLogoBadge size="md" />
            <div>
              <h2 className="font-headline text-lg font-bold text-[#1c1c19]">
                Autocuidado & Bienestar Emocional
              </h2>
              <p className="text-xs text-[#706663]">
                Pausa sutil para equilibrar el sistema nervioso en tus 30s
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#706663] hover:bg-[#f6f3ee]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-[#f6f3ee] p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('breath')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'breath'
                ? 'bg-white text-[#4f6353] shadow-xs'
                : 'text-[#706663] hover:text-[#1c1c19]'
            }`}
          >
            Respiración 4-7-8
          </button>

          <button
            onClick={() => setActiveTab('posture')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'posture'
                ? 'bg-white text-[#4f6353] shadow-xs'
                : 'text-[#706663] hover:text-[#1c1c19]'
            }`}
          >
            Alivio Lumbar
          </button>

          <button
            onClick={() => setActiveTab('gratitude')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'gratitude'
                ? 'bg-white text-[#4f6353] shadow-xs'
                : 'text-[#706663] hover:text-[#1c1c19]'
            }`}
          >
            Micro-Diario
          </button>
        </div>

        {/* Breath Tab */}
        {activeTab === 'breath' && (
          <div className="flex flex-col items-center justify-center py-4 space-y-4 text-center">
            <p className="text-xs text-[#544340] max-w-sm">
              La técnica 4-7-8 estimula el nervio vago, desacelera los latidos y normaliza el cortisol tras horas de pantalla o estrés laboral.
            </p>

            {/* Pulsing Visual Sphere */}
            <div className="relative w-44 h-44 flex items-center justify-center">
              <div
                className={`absolute inset-0 rounded-full transition-all duration-1000 ${
                  breathPhase === 'Inhala'
                    ? 'scale-100 bg-[#cfe5d1]/60'
                    : breathPhase === 'Retén'
                    ? 'scale-105 bg-[#d2e8d4]'
                    : 'scale-75 bg-[#ffdad4]/60'
                }`}
              ></div>

              <div className="relative z-10 flex flex-col items-center">
                <span className="text-xs uppercase font-bold text-[#4f6353] tracking-widest">
                  {breathPhase}
                </span>
                <span className="font-headline text-4xl font-bold text-[#1c1c19] my-1">
                  {breathSeconds}s
                </span>
                <span className="text-[11px] text-[#706663]">
                  Ciclos: {cycleCount}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setIsBreathingRunning(!isBreathingRunning);
                  if (!isBreathingRunning) {
                    setBreathPhase('Inhala');
                    setBreathSeconds(4);
                  }
                }}
                className={`px-6 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isBreathingRunning
                    ? 'bg-[#904639] text-white hover:bg-[#ae5e4f]'
                    : 'bg-[#4f6353] text-white hover:bg-[#384b3d]'
                }`}
              >
                {isBreathingRunning ? 'Pausar Ejercicio' : 'Comenzar Respiración'}
              </button>
            </div>
          </div>
        )}

        {/* Posture Decompression Tab */}
        {activeTab === 'posture' && (
          <div className="space-y-3 py-2">
            <div className="p-3 bg-[#fcf9f4] rounded-xl border border-[#dac1bd]/30 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#4f6353] text-[22px]">
                self_improvement
              </span>
              <div>
                <h4 className="text-xs font-bold text-[#1c1c19]">
                  Descompresión del Psoas Ilíaco (30s por lado)
                </h4>
                <p className="text-[11px] text-[#544340] mt-0.5 leading-relaxed">
                  Coloca un pie adelante en zancada suave con rodilla posterior en esterilla o cojín. Empuja la cadera hacia adelante con pelvis neutra para liberar la compresión de estar sentada.
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#fcf9f4] rounded-xl border border-[#dac1bd]/30 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#904639] text-[22px]">
                accessibility_new
              </span>
              <div>
                <h4 className="text-xs font-bold text-[#1c1c19]">
                  Apertura Pectoral y Mentón Retraído
                </h4>
                <p className="text-[11px] text-[#544340] mt-0.5 leading-relaxed">
                  Coloca los codos en marco de puerta a 90 grados y da un paso adelante suave. Abre el pecho, inhala llenando las costillas y alivia la contractura cervical.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Gratitude Micro-check Tab */}
        {activeTab === 'gratitude' && (
          <div className="space-y-3 py-2">
            <p className="text-xs text-[#544340] leading-relaxed">
              Registrar una sola cosa por la que sientes gratitud hoy ayuda a desconectar el modo "alerta" simpático.
            </p>

            <textarea
              rows={3}
              value={gratitudeNote}
              onChange={(e) => {
                setGratitudeNote(e.target.value);
                setGratitudeSaved(false);
              }}
              placeholder="Ej: Agradezco el momento de café tranquila esta mañana y cómo respondió mi cuerpo a la caminata..."
              className="w-full px-3 py-2 text-xs rounded-xl bg-[#f6f3ee] border border-[#dac1bd]/40 focus:outline-none focus:ring-1 focus:ring-[#4f6353] text-[#1c1c19]"
            />

            <div className="flex justify-between items-center">
              {gratitudeSaved && (
                <span className="text-xs text-[#4f6353] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                  Guardado en tu historial personal
                </span>
              )}
              <div className="ml-auto">
                <button
                  onClick={() => setGratitudeSaved(true)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#4f6353] text-white hover:bg-[#384b3d]"
                >
                  Guardar Pensamiento
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end pt-2 border-t border-[#dac1bd]/30">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-[#706663] hover:bg-[#f6f3ee]"
          >
            Listo, volver a mi día
          </button>
        </div>
      </div>
    </div>
  );
};
