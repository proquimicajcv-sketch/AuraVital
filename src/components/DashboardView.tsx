import React, { useState } from 'react';
import { TabType, WorkoutRoutine, NutritionAdvice, WearableDevice, UserSubscription } from '../types';
import { OfficialLogoBadge } from './Logo';

interface DashboardViewProps {
  onNavigate: (tab: TabType) => void;
  onOpenSelfCare: () => void;
  onOpenReportModal: () => void;
  selectedDuration: 15 | 30 | 45;
  onChangeDuration: (dur: 15 | 30 | 45) => void;
  routines: WorkoutRoutine[];
  nutritionPlans: NutritionAdvice[];
  wearable: WearableDevice;
  subscription: UserSubscription;
  onOpenSubscription: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onNavigate,
  onOpenSelfCare,
  onOpenReportModal,
  selectedDuration,
  onChangeDuration,
  routines,
  nutritionPlans,
  wearable,
  subscription,
  onOpenSubscription,
}) => {
  const [completedWorkout, setCompletedWorkout] = useState(false);
  const [completedSelfCare, setCompletedSelfCare] = useState(false);
  const [activeTabDetail, setActiveTabDetail] = useState<'workout' | 'nutrition'>('workout');

  // Filter current tailored workout based on duration
  const currentWorkout =
    routines.find((r) => r.targetDuration === selectedDuration) || routines[0];
  const currentNutrition = nutritionPlans[0];

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto px-4 pb-28 pt-2 space-y-5">
      {/* 30+ Biological Status Card */}
      <div className="bg-gradient-to-br from-[#ffffff] via-[#fcf9f4] to-[#f6f3ee] rounded-2xl p-4 sm:p-5 shadow-sm border border-[#dac1bd]/30 relative overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <OfficialLogoBadge size="sm" />
            <div className="inline-flex items-center gap-1.5 bg-[#ffdad4]/50 text-[#3c0702] px-2.5 py-1 rounded-full text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#904639] animate-pulse"></span>
              <span>Día 21 del Ciclo • Fase Lútea Tardía</span>
            </div>
          </div>

          <button
            onClick={() => onNavigate('calendar')}
            className="text-xs font-semibold text-[#904639] hover:underline flex items-center gap-0.5"
          >
            <span>Ver calendario</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </button>
        </div>

        {/* Freemium Upgrade Hook Banner if Free Tier */}
        {subscription.tier === 'free' && (
          <div className="mb-3 p-3 rounded-xl bg-white/90 border border-[#904639]/30 flex items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="material-symbols-outlined text-[#904639] text-[20px] shrink-0">
                stars
              </span>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-[#1c1c19]">Funciones Gratuitas Activas</span>
                  <span className="text-[10px] bg-[#cfe5d1] text-[#384b3d] font-bold px-1.5 py-0.2 rounded">
                    Básico Gratis
                  </span>
                </div>
                <p className="text-[11px] text-[#706663] truncate sm:whitespace-normal">
                  ¿Deseas profundizar en tu biometría? Activa el Plan Hormonal Pro con IA clínica, métricas continuas y sincronización por <strong>$7.99/mes</strong>.
                </p>
              </div>
            </div>
            <button
              onClick={onOpenSubscription}
              className="shrink-0 px-2.5 py-1 bg-[#904639] text-white text-[11px] font-bold rounded-lg hover:bg-[#ae5e4f] transition-all cursor-pointer"
            >
              Ver Plan Pro
            </button>
          </div>
        )}

        <div className="space-y-1">
          <h1 className="font-headline text-xl sm:text-2xl text-[#1c1c19] font-medium leading-snug">
            Equilibrio Metabólico & Ritmo Vagal
          </h1>
          <p className="font-body text-xs sm:text-sm text-[#544340] leading-relaxed">
            Tu progesterona está modulando el gasto calórico basal (+150 kcal) y la relajación de ligamentos. Priorizamos estímulo muscular seguro sin rebote ni impacto articular.
          </p>
        </div>

        {/* Live Wearable Snapshot strip */}
        <div className="mt-4 pt-3 border-t border-[#dac1bd]/20 grid grid-cols-4 gap-2 text-center">
          <div
            onClick={() => onNavigate('wearables')}
            className="bg-[#f0ede9]/80 p-2 rounded-xl cursor-pointer hover:bg-[#ebe8e3] transition-colors"
          >
            <div className="flex items-center justify-center gap-1 text-[#904639] text-[11px] font-semibold">
              <span className="material-symbols-outlined text-[14px] text-[#904639]">favorite</span>
              <span>FC</span>
            </div>
            <div className="font-headline text-sm font-semibold text-[#1c1c19] mt-0.5">
              {wearable.metrics.restingHeartRate} <span className="text-[10px] font-normal text-[#706663]">lpm</span>
            </div>
          </div>

          <div
            onClick={() => onNavigate('wearables')}
            className="bg-[#f0ede9]/80 p-2 rounded-xl cursor-pointer hover:bg-[#ebe8e3] transition-colors"
          >
            <div className="flex items-center justify-center gap-1 text-[#4f6353] text-[11px] font-semibold">
              <span className="material-symbols-outlined text-[14px] text-[#4f6353]">vital_signs</span>
              <span>HRV</span>
            </div>
            <div className="font-headline text-sm font-semibold text-[#1c1c19] mt-0.5">
              {wearable.metrics.hrv} <span className="text-[10px] font-normal text-[#706663]">ms</span>
            </div>
          </div>

          <div
            onClick={() => onNavigate('wearables')}
            className="bg-[#f0ede9]/80 p-2 rounded-xl cursor-pointer hover:bg-[#ebe8e3] transition-colors"
          >
            <div className="flex items-center justify-center gap-1 text-[#834e43] text-[11px] font-semibold">
              <span className="material-symbols-outlined text-[14px]">bedtime</span>
              <span>Sueño</span>
            </div>
            <div className="font-headline text-sm font-semibold text-[#1c1c19] mt-0.5">
              7h 40m
            </div>
          </div>

          <div
            onClick={() => onNavigate('wearables')}
            className="bg-[#f0ede9]/80 p-2 rounded-xl cursor-pointer hover:bg-[#ebe8e3] transition-colors"
          >
            <div className="flex items-center justify-center gap-1 text-[#536758] text-[11px] font-semibold">
              <span className="material-symbols-outlined text-[14px]">thermostat</span>
              <span>Temp</span>
            </div>
            <div className="font-headline text-sm font-semibold text-[#1c1c19] mt-0.5">
              +{wearable.metrics.basalTempDelta}°C
            </div>
          </div>
        </div>
      </div>

      {/* Efficient Time Management Selector: 15 (FREE) vs 30 & 45 min (PREMIUM) */}
      <div className="bg-[#ffffff] rounded-2xl p-4 shadow-xs border border-[#dac1bd]/30">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#904639] text-[20px]">schedule</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#1c1c19]">
                  Gestión Eficiente del Tiempo
                </h2>
                <span className="text-[9px] bg-[#cfe5d1] text-[#2d4734] font-bold px-1.5 py-0.2 rounded">
                  1ª Opción FREE • Resto PRO
                </span>
              </div>
              <p className="text-[11px] text-[#706663]">
                15 min siempre gratis. Rutinas de 30 y 45 min disponibles en la versión premium.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-3">
          {([
            { mins: 15 as const, title: 'Express Vagal', tier: 'free' as const, badge: 'FREE' },
            { mins: 30 as const, title: 'Equilibrio 30+', tier: 'premium' as const, badge: 'PREMIUM' },
            { mins: 45 as const, title: 'Fuerza Total', tier: 'premium' as const, badge: 'PREMIUM' },
          ]).map((item) => {
            const isSelected = selectedDuration === item.mins;
            const isLocked = item.tier === 'premium' && subscription.tier === 'free';

            return (
              <button
                key={item.mins}
                type="button"
                onClick={() => {
                  onChangeDuration(item.mins);
                }}
                className={`py-2 px-1.5 rounded-xl text-center transition-all border relative cursor-pointer ${
                  isSelected
                    ? 'bg-[#904639] text-white border-[#904639] shadow-xs'
                    : isLocked
                    ? 'bg-[#fcf9f4] text-[#544340] border-[#dac1bd]/40 hover:bg-[#f6f3ee]'
                    : 'bg-[#f6f3ee] text-[#544340] border-[#dac1bd]/20 hover:bg-[#ebe8e3]'
                }`}
              >
                {/* Free vs Premium Badge */}
                <div className="flex justify-center mb-1">
                  {item.tier === 'free' ? (
                    <span
                      className={`text-[8.5px] font-bold uppercase px-1.5 py-0.2 rounded-full flex items-center gap-0.5 ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-[#cfe5d1] text-[#2d4734]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[10px]">check_circle</span>
                      FREE
                    </span>
                  ) : (
                    <span
                      className={`text-[8.5px] font-bold uppercase px-1.5 py-0.2 rounded-full flex items-center gap-0.5 ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-[#ffdad4] text-[#904639]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[10px]">
                        {isLocked ? 'lock' : 'workspace_premium'}
                      </span>
                      PRO
                    </span>
                  )}
                </div>

                <div className="font-headline text-base font-bold leading-none">
                  {item.mins} min
                </div>
                <div
                  className={`text-[9.5px] mt-0.5 font-medium truncate ${
                    isSelected ? 'text-white/90' : 'text-[#87726f]'
                  }`}
                >
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Subtle Emotional Wellness Reminder (As requested: "recordatorios sutiles sobre bienestar emocional") */}
      <div className="bg-[#f0ede9] rounded-2xl p-4 border border-[#dac1bd]/40 flex items-start justify-between gap-3 shadow-xs">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-[#cfe5d1] text-[#536758] flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              spa
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#1c1c19]">Recordatorio Sutil • Calma Vagal</span>
              <span className="text-[10px] bg-[#cfe5d1] text-[#536758] px-1.5 py-0.2 rounded font-semibold">
                Sin prisa
              </span>
            </div>
            <p className="text-xs text-[#544340] mt-1 leading-relaxed">
              "A tus 30+, la multitarea constante eleva el cortisol silente. Tómate 2 minutos antes de almorzar para exhalar despacio."
            </p>
          </div>
        </div>

        <button
          onClick={onOpenSelfCare}
          className="shrink-0 px-3 py-1.5 bg-white text-[#4f6353] border border-[#cfe5d1] rounded-lg text-xs font-semibold hover:bg-[#cfe5d1]/30 transition-colors"
        >
          Respirar
        </button>
      </div>

      {/* Specialist Recommendations Tabs: Workout vs Nutrition */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-[#dac1bd]/30">
        <div className="flex items-center justify-between border-b border-[#dac1bd]/30 pb-3 mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTabDetail('workout')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTabDetail === 'workout'
                  ? 'bg-[#904639] text-white shadow-xs'
                  : 'text-[#706663] hover:text-[#1c1c19]'
              }`}
            >
              Rutina Adaptada ({selectedDuration}m)
            </button>
            <button
              onClick={() => setActiveTabDetail('nutrition')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTabDetail === 'nutrition'
                  ? 'bg-[#904639] text-white shadow-xs'
                  : 'text-[#706663] hover:text-[#1c1c19]'
              }`}
            >
              Nutrición Hormonal
            </button>
          </div>

          <span className="text-[11px] text-[#4f6353] font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">shield</span>
            Cuidado Articular
          </span>
        </div>

        {activeTabDetail === 'workout' ? (
          <div className="space-y-4">
            {/* Routine Title & Tier indicator */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  {selectedDuration === 15 ? (
                    <span className="text-[9px] bg-[#cfe5d1] text-[#2d4734] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-[11px]">check_circle</span>
                      Rutina Free (Siempre Gratis)
                    </span>
                  ) : (
                    <span className="text-[9px] bg-[#ffdad4] text-[#904639] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-[11px]">workspace_premium</span>
                      Función Especializada • Plan Hormonal Pro
                    </span>
                  )}
                </div>
                <h3 className="font-headline text-base font-semibold text-[#1c1c19]">
                  {currentWorkout.title}
                </h3>
                <p className="text-xs text-[#706663] mt-0.5">
                  Foco: {currentWorkout.focusArea} • Duración: {selectedDuration} minutos
                </p>
              </div>

              <span className="text-xs bg-[#cfe5d1] text-[#536758] px-2 py-0.5 rounded-full font-medium shrink-0">
                {currentWorkout.intensity}
              </span>
            </div>

            <p className="text-xs text-[#544340] leading-relaxed bg-[#f6f3ee] p-3 rounded-xl border border-[#dac1bd]/20">
              {currentWorkout.description}
            </p>

            {/* Exercise list with Free vs Premium distinction */}
            {selectedDuration !== 15 && subscription.tier === 'free' ? (
              <div className="space-y-3">
                {/* Free preview of exercise 1 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1c1c19]">
                    <span className="uppercase tracking-wider">
                      Vista Previa Gratuita (Ejercicio 1 de {currentWorkout.exercises.length}):
                    </span>
                    <span className="text-[10px] text-[#4f6353] bg-[#cfe5d1] px-2 py-0.5 rounded">
                      Muestra Libre
                    </span>
                  </div>

                  {currentWorkout.exercises.slice(0, 1).map((ex, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#fcf9f4] border border-[#dac1bd]/30 flex flex-col gap-1 shadow-2xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#1c1c19]">
                          1. {ex.name}
                        </span>
                        <span className="text-[11px] font-semibold text-[#904639]">
                          {ex.setsReps}
                        </span>
                      </div>
                      <div className="flex items-start gap-1 text-[11px] text-[#4f6353]">
                        <span className="material-symbols-outlined text-[13px] shrink-0 mt-0.5">
                          health_and_safety
                        </span>
                        <span>{ex.jointTip}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Locked exercises blurred preview */}
                <div className="relative rounded-2xl overflow-hidden border border-[#904639]/30 bg-gradient-to-b from-[#fffaf8] to-[#fbf4f2] p-4 text-center space-y-3 shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-[#ffdad4] text-[#904639] flex items-center justify-center mx-auto shadow-2xs">
                    <span className="material-symbols-outlined text-[22px]">lock</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#904639] bg-[#ffdad4]/60 px-2.5 py-0.5 rounded-full inline-block mb-1">
                      Exclusivo Versión Premium
                    </span>
                    <h4 className="font-headline text-sm font-bold text-[#1c1c19]">
                      Desbloquea la Rutina Completa de {selectedDuration} min
                    </h4>
                    <p className="text-xs text-[#544340] max-w-sm mx-auto mt-1 leading-relaxed">
                      La rutina de <strong>15 min es 100% FREE</strong>. Los formatos de <strong>30 y 45 minutos</strong> incluyen todas las series guiadas por Elena, progresiones anti-sarcopenia y adaptaciones articulares dentro del <strong>Plan Hormonal Pro (máx. $7.99/mes)</strong>.
                    </p>
                  </div>

                  {/* Teaser of remaining locked exercises */}
                  <div className="opacity-40 blur-[1px] select-none space-y-1.5 py-1 text-left text-xs pointer-events-none">
                    {currentWorkout.exercises.slice(1, 3).map((ex, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-white border border-[#dac1bd]/40 flex justify-between">
                        <span>🔒 {ex.name}</span>
                        <span>{ex.setsReps}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={onOpenSubscription}
                      className="w-full sm:w-auto px-4 py-2.5 bg-[#904639] text-white rounded-xl text-xs font-bold hover:bg-[#ae5e4f] shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">stars</span>
                      <span>Desbloquear Rutina de {selectedDuration}m con Pro</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onChangeDuration(15)}
                      className="w-full sm:w-auto px-3 py-2 bg-white text-[#544340] border border-[#dac1bd]/40 rounded-xl text-xs font-semibold hover:bg-[#f6f3ee] transition-all cursor-pointer"
                    >
                      Volver a Rutina 15m (FREE)
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* All exercises unlocked for 15min or Premium members */
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1c1c19] uppercase tracking-wider block">
                    Movimientos Guiados por Elena ({currentWorkout.exercises.length} ejercicios):
                  </span>
                  {selectedDuration !== 15 && subscription.tier === 'premium' && (
                    <span className="text-[10px] bg-[#cfe5d1] text-[#2d4734] font-bold px-2 py-0.5 rounded">
                      Acceso PRO Activo
                    </span>
                  )}
                </div>

                {currentWorkout.exercises.map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-[#fcf9f4] border border-[#dac1bd]/30 flex flex-col gap-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1c1c19]">
                        {idx + 1}. {ex.name}
                      </span>
                      <span className="text-[11px] font-semibold text-[#904639]">
                        {ex.setsReps}
                      </span>
                    </div>
                    <div className="flex items-start gap-1 text-[11px] text-[#4f6353]">
                      <span className="material-symbols-outlined text-[13px] shrink-0 mt-0.5">
                        health_and_safety
                      </span>
                      <span>{ex.jointTip}</span>
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => setCompletedWorkout(!completedWorkout)}
                  className={`w-full py-3 rounded-xl font-body text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    completedWorkout
                      ? 'bg-[#cfe5d1] text-[#536758]'
                      : 'bg-[#904639] text-white hover:bg-[#ae5e4f]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {completedWorkout ? 'check_circle' : 'play_circle'}
                  </span>
                  <span>
                    {completedWorkout ? '¡Rutina de hoy completada!' : 'Marcar rutina como realizada'}
                  </span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-headline text-base font-semibold text-[#1c1c19]">
                  {currentNutrition.title}
                </h3>
                <p className="text-xs text-[#706663] mt-0.5">
                  Objetivo: {currentNutrition.targetProteinGrams}g de proteína / día
                </p>
              </div>

              <span className="text-xs bg-[#ffdad4] text-[#3c0702] px-2 py-0.5 rounded-full font-semibold">
                Fase Lútea
              </span>
            </div>

            <p className="text-xs text-[#544340] leading-relaxed bg-[#f6f3ee] p-3 rounded-xl border border-[#dac1bd]/20">
              {currentNutrition.hormoneSupportSummary}
            </p>

              {/* Suggested meals with 4K thumbnails & Elena Cooking status */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1c1c19] uppercase tracking-wider block">
                    Menú Hormonal Sugerido:
                  </span>
                  <span className="text-[10px] text-[#4f6353] font-semibold">
                    2 Básicas Gratis • Resto Plan Hormonal Pro
                  </span>
                </div>

                {currentNutrition.suggestedMeals.map((meal) => (
                  <div
                    key={meal.id}
                    className="p-2.5 rounded-xl bg-[#fcf9f4] border border-[#dac1bd]/30 flex items-center gap-3 transition-all hover:bg-white"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#ebe8e3] shadow-2xs">
                      <img
                        src={meal.imageUrl}
                        alt={meal.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[8px] font-bold text-center py-0.5">
                        +{meal.proteinGrams}g
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-bold text-[#904639] uppercase tracking-wider block">
                          {meal.mealTime}
                        </span>
                        {meal.isPremium ? (
                          <span className="text-[9px] font-bold bg-[#ffdad4] text-[#3c0702] px-1.5 py-0.5 rounded flex items-center gap-0.5">
                            <span className="material-symbols-outlined text-[10px]">workspace_premium</span>
                            Plan Pro
                          </span>
                        ) : (
                          <span className="text-[9px] font-bold bg-[#cfe5d1] text-[#384b3d] px-1.5 py-0.5 rounded">
                            Básica Gratis
                          </span>
                        )}
                      </div>

                      <h4 className="text-xs font-semibold text-[#1c1c19] mt-0.5 truncate">
                        {meal.name}
                      </h4>
                      <p className="text-[10.5px] text-[#544340] italic mt-0.5 line-clamp-1">
                        <strong className="text-[#904639] not-italic font-bold">Recomendación de Elena: </strong>
                        {meal.elenaQuote}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            <button
              onClick={() => onNavigate('nutrition_fitness')}
              className="w-full py-2.5 rounded-xl bg-[#f0ede9] text-[#1c1c19] text-xs font-semibold hover:bg-[#ebe8e3] transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Ver guía de micronutrientes y listas de compra</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        )}
      </div>

      {/* Clinical PDF Report Quick Export Promo (Specialized Feature) */}
      <div className="bg-gradient-to-r from-[#f6f3ee] to-[#ebe8e3] rounded-2xl p-4 border border-[#dac1bd]/30 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#ffdad4] text-[#904639] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[9px] uppercase tracking-wider font-bold bg-[#ffdad4] text-[#904639] px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[10px]">workspace_premium</span>
                Función Especializada • PRO
              </span>
            </div>
            <h4 className="text-xs font-bold text-[#1c1c19]">
              Reporte Clínico Mensual en PDF
            </h4>
            <p className="text-[11px] text-[#706663]">
              Exporta tu historial biométrico para ginecología, médico de cabecera o nutricionista.
            </p>
          </div>
        </div>

        <button
          onClick={onOpenReportModal}
          className="shrink-0 px-3.5 py-2 bg-[#904639] text-white rounded-lg text-xs font-semibold hover:bg-[#ae5e4f] transition-all shadow-xs flex items-center gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[15px]">download</span>
          <span>Exportar</span>
        </button>
      </div>

      {/* Brand authenticity hallmark */}
      <div className="pt-2 pb-1 flex items-center justify-center gap-2 text-[#87726f] text-xs">
        <OfficialLogoBadge size="xs" />
        <span className="font-headline font-semibold text-[#1c1c19]">AuraVital</span>
        <span>• Inteligencia Hormonal & Vitalidad 30+</span>
      </div>
    </div>
  );
};
