import React, { useState } from 'react';
import { ClinicalGoal, EquipmentItem, TabType, BudgetTier } from '../types';
import confetti from 'canvas-confetti';
import { OfficialLogoBadge } from './Logo';

interface OnboardingAssessmentProps {
  goals: ClinicalGoal[];
  equipment: EquipmentItem[];
  onToggleGoal: (id: string) => void;
  onToggleEquipment: (id: string) => void;
  onNavigate: (tab: TabType) => void;
  budgetTier?: BudgetTier;
  onSelectBudgetTier?: (tier: BudgetTier) => void;
}

export const OnboardingAssessment: React.FC<OnboardingAssessmentProps> = ({
  goals,
  equipment,
  onToggleGoal,
  onToggleEquipment,
  onNavigate,
  budgetTier = 'economico',
  onSelectBudgetTier,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(2);
  const [selectedBudget, setSelectedBudget] = useState<BudgetTier>(budgetTier);
  const [showSavedToast, setShowSavedToast] = useState(false);

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    } else {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#904639', '#4f6353', '#ffdad4'],
      });
      setShowSavedToast(true);
      setTimeout(() => {
        setShowSavedToast(false);
        onNavigate('today');
      }, 1200);
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return 'Perfil Hormonal & Ciclo 30+';
      case 2:
        return 'Metabolismo & Articulaciones';
      case 3:
        return 'Nutrición & Sensibilidad Glucémica';
      case 4:
        return 'Sincronización Biomédica';
      default:
        return 'Metabolismo & Articulaciones';
    }
  };

  const getStepQuote = () => {
    switch (currentStep) {
      case 1:
        return '"A los 30+, tu ritmo hormonal define tu energía. Cuéntame sobre la regularidad de tu ciclo."';
      case 2:
        return '"¿Cuál es tu prioridad física y qué equipo tienes en casa?"';
      case 3:
        return '"La proteína y el magnesio son tus aliados para evitar picos de insulina y fatiga en fase lútea."';
      case 4:
        return '"Sincronizamos tus biomarcadores (VFC, sueño profundo, temperatura) para prevenir el agotamiento."';
      default:
        return '"¿Cuál es tu prioridad física y qué equipo tienes en casa?"';
    }
  };

  return (
    <div className="flex flex-col w-full max-w-lg mx-auto px-4 pb-24 pt-2">
      {/* Toast Notification */}
      {showSavedToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#1c1c19] text-[#fcf9f4] px-4 py-2.5 rounded-full shadow-lg text-sm flex items-center gap-2 animate-bounce">
          <span className="material-symbols-outlined text-[#cfe5d1] text-[18px]">check_circle</span>
          <span>¡Plan hormonal y físico actualizado con éxito!</span>
        </div>
      )}

      {/* Brand Header with Official Medallion Logo */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#dac1bd]/30">
        <div className="flex items-center gap-2.5">
          <OfficialLogoBadge size="sm" />
          <div className="flex flex-col">
            <span className="font-headline text-base font-bold text-[#1c1c19] leading-tight">AuraVital</span>
            <span className="font-body text-[10px] text-[#4f6353] font-semibold tracking-widest uppercase">Hormonal Landscape</span>
          </div>
        </div>
        <span className="text-[10px] bg-[#cfe5d1] text-[#384b3d] font-bold px-2.5 py-0.5 rounded-full">
          Evaluación Clínica
        </span>
      </div>

      {/* Progress Header */}
      <div className="flex flex-col gap-1.5 mb-5">
        <div className="flex items-center justify-between">
          <span className="font-body text-[11px] uppercase tracking-widest text-[#4f6353] font-semibold">
            Paso {currentStep} de 4
          </span>
          <span className="font-body text-xs text-[#904639] font-medium">
            {getStepTitle()}
          </span>
        </div>

        {/* Interactive Step Bar */}
        <div className="w-full h-1.5 bg-[#f0ede9] rounded-full overflow-hidden flex cursor-pointer">
          <div
            className="h-full bg-[#904639] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          ></div>
        </div>

        {/* Step dots for fast switching */}
        <div className="flex justify-between items-center px-1 pt-1">
          {[1, 2, 3, 4].map((step) => (
            <button
              key={step}
              onClick={() => setCurrentStep(step)}
              className={`text-[11px] px-2 py-0.5 rounded transition-all ${
                currentStep === step
                  ? 'bg-[#ffdad4] text-[#3c0702] font-bold'
                  : 'text-[#87726f] hover:text-[#1c1c19]'
              }`}
            >
              Etapa {step}
            </button>
          ))}
        </div>
      </div>

      {/* Elena Coaching Hero Card */}
      <div className="bg-[#f6f3ee] rounded-xl p-4 shadow-sm mb-5 relative overflow-hidden border border-[#dac1bd]/30">
        <div className="flex items-center gap-3.5">
          <div className="relative shrink-0">
            <div className="w-20 h-24 rounded-lg overflow-hidden shadow-inner bg-[#ebe8e3]">
              <img
                alt="Elena coach con mancuernas"
                className="w-full h-full object-cover object-top"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVLhO4NHhOkmyaAVrqvx-STu8fO_IdCpzaogagRoe0wqJlE--blT1-_qLUjP4XsILxB50tt3LZNhqPoQfLZ0xI_9b8vot0Hy1XJ2HwKZZ1OqllGH6DT1O7OXQHgtFM-Za3UtWADrLUCDtIN4BTUC1hE5BL624CJbCC-7YLUDaCtBBily_28X3TfVhegFmbev-O-CR97mNllsMWGvUL7r3_xFa9ppmtnyjVC97OfoJvJlRikinHpjPyHw"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#4f6353] text-white rounded-full p-1 shadow flex items-center justify-center">
              <span
                className="material-symbols-outlined text-[14px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                fitness_center
              </span>
            </div>
          </div>

          <div className="flex flex-col min-w-0">
            <div className="inline-flex items-center gap-1.5 mb-1">
              <span className="font-body text-[11px] uppercase tracking-wider text-[#87726f] font-semibold">
                Elena • Tu Especialista
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f6353] animate-pulse"></span>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-xs border border-[#dac1bd]/20">
              <p className="font-headline text-base text-[#1c1c19] italic leading-snug">
                {getStepQuote()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2 Content: Objetivos Clínicos y Equipamiento */}
      {currentStep === 2 && (
        <>
          {/* Section 1: Physical Priorities */}
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-center justify-between px-1 mb-1">
              <h2 className="font-body text-sm font-semibold text-[#1c1c19]">
                Objetivo Clínico Principal
              </h2>
              <span className="font-body text-xs text-[#87726f]">
                Selección personalizada
              </span>
            </div>

            {goals.map((goal) => (
              <div
                key={goal.id}
                onClick={() => onToggleGoal(goal.id)}
                role="button"
                tabIndex={0}
                className={`rounded-xl p-3.5 shadow-xs flex items-start gap-3 cursor-pointer transition-all duration-200 border ${
                  goal.selected
                    ? 'bg-white border-[#904639]/40 ring-1 ring-[#904639]/20'
                    : 'bg-[#f6f3ee] border-transparent hover:bg-[#ebe8e3]'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-xs transition-colors ${
                    goal.selected
                      ? 'bg-[#904639] text-white'
                      : 'bg-[#ebe8e3] text-transparent'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>

                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-body text-sm font-semibold text-[#1c1c19]">
                      {goal.title}
                    </span>
                    {goal.badge && (
                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                          goal.badgeType === 'clinical'
                            ? 'bg-[#cfe5d1] text-[#536758]'
                            : 'bg-[#ffdad4] text-[#3c0702]'
                        }`}
                      >
                        {goal.badgeType === 'clinical' && (
                          <span
                            className="material-symbols-outlined text-[12px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            health_and_safety
                          </span>
                        )}
                        {goal.badge}
                      </span>
                    )}
                  </div>
                  <p className="font-body text-xs text-[#544340] leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 2: Material en Casa */}
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-center justify-between px-1 mb-1">
              <h2 className="font-body text-sm font-semibold text-[#1c1c19]">
                Material en Casa
              </h2>
              <span className="font-body text-xs text-[#4f6353]">
                Ajusta según tu espacio
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {equipment.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onToggleEquipment(item.id)}
                  className={`w-full rounded-lg p-2.5 flex items-center justify-between shadow-xs transition-all duration-150 text-left border ${
                    item.selected
                      ? 'bg-[#4f6353] text-white border-[#4f6353]'
                      : 'bg-[#f6f3ee] text-[#1c1c19] border-[#dac1bd]/20 hover:bg-[#ebe8e3]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        item.selected
                          ? 'bg-white/15 text-white'
                          : 'bg-[#ebe8e3] text-[#544340]'
                      }`}
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold leading-tight">
                        {item.name}
                      </span>
                      <span
                        className={`text-[11px] mt-0.5 ${
                          item.selected ? 'text-white/85' : 'text-[#544340]'
                        }`}
                      >
                        {item.description}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`material-symbols-outlined text-[20px] ${
                      item.selected ? 'text-white' : 'text-[#87726f]'
                    }`}
                  >
                    {item.selected ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Step 1 Content: Perfil Hormonal 30+ */}
      {currentStep === 1 && (
        <div className="bg-white rounded-xl p-4 border border-[#dac1bd]/30 shadow-xs mb-6 space-y-4">
          <h3 className="font-headline text-lg text-[#1c1c19] font-medium">
            Dinámica del Ciclo en la Década 30-45
          </h3>
          <p className="text-xs text-[#544340] leading-relaxed">
            Pasados los 30 años, el equilibrio entre estrógeno y progesterona varía suavemente mes a mes. Esta evaluación adapta las cargas de trabajo y los alimentos recomendados para sincronizarse con tu curva endócrina natural.
          </p>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="p-3 bg-[#f6f3ee] rounded-lg border border-[#dac1bd]/20 text-center">
              <span className="text-xs text-[#87726f] block">Duración típica</span>
              <span className="font-headline text-lg text-[#904639] font-bold">28 días</span>
            </div>
            <div className="p-3 bg-[#f6f3ee] rounded-lg border border-[#dac1bd]/20 text-center">
              <span className="text-xs text-[#87726f] block">Fase Actual</span>
              <span className="font-headline text-lg text-[#4f6353] font-bold">Fase Lútea</span>
            </div>
          </div>
        </div>
      )}

      {/* Step 3 Content: Nutrición & Presupuesto Semanal */}
      {currentStep === 3 && (
        <div className="bg-white rounded-xl p-4 border border-[#dac1bd]/30 shadow-xs mb-6 space-y-4">
          <div>
            <h3 className="font-headline text-lg text-[#1c1c19] font-medium">
              Nutrición 30+ & Presupuesto Real para Comidas
            </h3>
            <p className="text-xs text-[#544340] mt-1 leading-relaxed">
              Elena: <em>"No necesitas gastar una fortuna para nutrir tus hormonas. Priorizamos proteínas limpias y accesibles (huevos, sardinas, pollo y legumbres) para adaptar los 7 días a tu economía."</em>
            </p>
          </div>

          {/* Budget Question */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#1c1c19] uppercase tracking-wider block">
              ¿Cuál es tu presupuesto semanal aproximado en $?
            </span>
            <div className="grid grid-cols-1 gap-2">
              {[
                {
                  id: 'economico' as const,
                  label: 'Económico & Inteligente (~$32/semana | ~$4.50/día)',
                  sub: 'Huevos camperos, sardinas en AOVE, legumbres en batch cooking y pollo local.',
                  icon: 'savings',
                },
                {
                  id: 'equilibrado' as const,
                  label: 'Equilibrado & Versátil (~$58/semana | ~$8.20/día)',
                  sub: 'Pescados ultracongelados, pechuga de pavo, quinoa, aguacates y verduras frescas.',
                  icon: 'balance',
                },
                {
                  id: 'flexible' as const,
                  label: 'Flexible & Gourmet (~$90/semana | ~$12.80/día)',
                  sub: 'Salmón salvaje, bacalao fresco, solomillo de pasto y frutos del bosque.',
                  icon: 'restaurant_menu',
                },
              ].map((opt) => {
                const isSelected = selectedBudget === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setSelectedBudget(opt.id);
                      if (onSelectBudgetTier) onSelectBudgetTier(opt.id);
                    }}
                    className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#ffffff] border-[#904639] ring-2 ring-[#904639]/20 shadow-xs'
                        : 'bg-[#f6f3ee] border-[#dac1bd]/30 hover:bg-[#ebe8e3]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#904639] mt-0.5">
                      {opt.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold text-[#1c1c19] block leading-snug">
                        {opt.label}
                      </span>
                      <span className="text-[11px] text-[#544340] mt-0.5 block leading-tight">
                        {opt.sub}
                      </span>
                    </div>
                    <span
                      className={`material-symbols-outlined text-[18px] shrink-0 ${
                        isSelected ? 'text-[#904639]' : 'text-[#87726f]'
                      }`}
                    >
                      {isSelected ? 'radio_button_checked' : 'radio_button_unchecked'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-3 bg-[#ffdad4]/30 rounded-lg border border-[#ffdad4] text-xs text-[#3c0702] space-y-1">
            <span className="font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">egg_alt</span>
              Objetivo diario garantizado:
            </span>
            <p>90g - 100g de proteína distribuida en 3 tomas principales + 1 snack hormonal según tu presupuesto.</p>
          </div>
        </div>
      )}

      {/* Step 4 Content: Sincronización Biomédica */}
      {currentStep === 4 && (
        <div className="bg-white rounded-xl p-4 border border-[#dac1bd]/30 shadow-xs mb-6 space-y-3">
          <h3 className="font-headline text-lg text-[#1c1c19] font-medium">
            Conexión con Dispositivos de Salud
          </h3>
          <p className="text-xs text-[#544340] leading-relaxed">
            AuraVital lee en tiempo real tu Variabilidad de la Frecuencia Cardíaca (VFC/HRV), minutos de sueño profundo y temperatura basal para reprogramar automáticamente tu sesión si tu sistema nervioso necesita reposo.
          </p>
          <div className="p-3 bg-[#cfe5d1]/40 rounded-lg border border-[#cfe5d1] text-xs text-[#536758] flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#4f6353]">check_circle</span>
            <span>Sensores Apple Watch & Oura Ring listos para enlace en tiempo real.</span>
          </div>
        </div>
      )}

      {/* Coach Note Box */}
      <div className="bg-[#ebe8e3] rounded-xl p-3.5 mb-6 shadow-xs flex items-start gap-3 border border-[#dac1bd]/30">
        <div className="w-8 h-8 rounded-full bg-[#ffdad4] text-[#3c0702] flex items-center justify-center shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-[18px]">neurology</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-body text-[11px] uppercase tracking-wider text-[#904639] font-semibold">
            Adaptabilidad Vital
          </span>
          <p className="font-body text-xs text-[#544340] leading-relaxed">
            Elena adaptará cada rutina diaria en tiempo real basándose en si hoy tienes 20 o 45 minutos y si sientes alguna molestia articular.
          </p>
        </div>
      </div>

      {/* Primary CTA Action */}
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={handleNextStep}
          className="w-full bg-[#904639] text-white rounded font-body text-sm font-semibold h-[52px] px-4 flex items-center justify-center gap-2 shadow-md hover:bg-[#ae5e4f] active:scale-[0.99] transition-all cursor-pointer"
        >
          <span>
            {currentStep === 2
              ? 'Siguiente: Nutrición y Hormonas'
              : currentStep === 4
              ? 'Finalizar y Abrir Mi Panel Vital'
              : 'Continuar a la siguiente etapa'}
          </span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>

        <div className="flex items-center justify-center gap-2 pt-2">
          <OfficialLogoBadge size="xs" />
          <span className="font-body text-[11px] text-[#87726f]">
            AuraVital • Datos cifrados bajo estándares de salud clínica
          </span>
        </div>
      </div>
    </div>
  );
};
