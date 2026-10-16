import React, { useState, useEffect } from 'react';
import { HormonalPhase, DailySymptomLog, UserCycleConfig } from '../types';
import { OfficialLogoBadge } from './Logo';
import { CycleTutorialModal } from './CycleTutorialModal';
import confetti from 'canvas-confetti';

const DEFAULT_CYCLE_CONFIG: UserCycleConfig = {
  periodStartDay: 1, // Oct 1st
  cycleLength: 28,
  periodDuration: 5,
  lutealLength: 14,
};

const INITIAL_SYMPTOMS: Record<number, DailySymptomLog> = {
  1: {
    date: '2026-10-01',
    energy: 2,
    mood: 'reflexiva',
    cramps: 2,
    jointPain: true,
    flow: 'heavy',
    digestion: 'hinchazon',
    stress: 'moderado',
    sleepHours: 7,
    notes: 'Primer día de sangrado; descanso activo y calor seco en sacro.',
    isPeriodStart: true,
  },
  5: {
    date: '2026-10-05',
    energy: 3,
    mood: 'serena',
    cramps: 0,
    jointPain: false,
    flow: 'spotting',
    digestion: 'ligera',
    stress: 'bajo',
    sleepHours: 7.5,
    notes: 'Fin del sangrado, ligera sensación de mayor vitalidad matutina.',
  },
  14: {
    date: '2026-10-14',
    energy: 5,
    mood: 'radiante',
    cramps: 0,
    jointPain: false,
    flow: 'none',
    digestion: 'ligera',
    stress: 'bajo',
    sleepHours: 8.2,
    notes: 'Pico de ovulación; energía alta para entrenamiento de fuerza.',
  },
  20: {
    date: '2026-10-20',
    energy: 4,
    mood: 'radiante',
    cramps: 0,
    jointPain: false,
    flow: 'none',
    digestion: 'ligera',
    stress: 'moderado',
    sleepHours: 8,
  },
  21: {
    date: '2026-10-21',
    energy: 3,
    mood: 'serena',
    cramps: 1,
    jointPain: false,
    flow: 'none',
    digestion: 'gases',
    stress: 'elevado',
    sleepHours: 7.5,
    notes: 'Ligera pesadez lumbar al final de la jornada; respondí bien al estiramiento.',
  },
};

export const CycleCalendarView: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(5);
  const [currentMonth] = useState('Octubre 2026');

  // Tutorial modal state
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [saveToast, setSaveToast] = useState<string | null>(null);

  // Cycle Configuration state (customizable by each woman)
  const [cycleConfig, setCycleConfig] = useState<UserCycleConfig>(() => {
    try {
      const saved = localStorage.getItem('auravital_cycle_config');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return DEFAULT_CYCLE_CONFIG;
  });

  // Daily Symptoms Log state
  const [symptoms, setSymptoms] = useState<Record<number, DailySymptomLog>>(() => {
    try {
      const saved = localStorage.getItem('auravital_cycle_symptoms');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_SYMPTOMS;
  });

  // Show tutorial on first visit if not seen
  useEffect(() => {
    const hasSeen = localStorage.getItem('auravital_cycle_tutorial_seen');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsTutorialOpen(true);
        localStorage.setItem('auravital_cycle_tutorial_seen', 'true');
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  // Save changes to localStorage
  const saveSymptomsToStorage = (newSymptoms: Record<number, DailySymptomLog>) => {
    setSymptoms(newSymptoms);
    try {
      localStorage.setItem('auravital_cycle_symptoms', JSON.stringify(newSymptoms));
    } catch {
      // ignore
    }
  };

  const saveCycleConfigToStorage = (newConfig: UserCycleConfig) => {
    setCycleConfig(newConfig);
    try {
      localStorage.setItem('auravital_cycle_config', JSON.stringify(newConfig));
    } catch {
      // ignore
    }
  };

  /**
   * Dynamically calculate the phase for any given day of the month based on user's cycle configuration
   */
  const getDayPhase = (day: number): HormonalPhase => {
    const { periodStartDay, cycleLength, periodDuration, lutealLength } = cycleConfig;

    // Normalizing day relative to cycle start
    let cycleDayOffset = (day - periodStartDay) % cycleLength;
    if (cycleDayOffset < 0) {
      cycleDayOffset += cycleLength;
    }
    const dayOfCycle = cycleDayOffset + 1; // 1-indexed

    // Phase 1: Menstrual (bleeding days)
    if (dayOfCycle <= periodDuration) {
      return 'menstrual';
    }

    // Ovulation estimation
    const ovulationDay = cycleLength - lutealLength; // e.g. 28 - 14 = day 14
    // Phase 2: Follicular
    if (dayOfCycle < ovulationDay - 1) {
      return 'follicular';
    }

    // Phase 3: Ovulatory window (~3 days around ovulation)
    if (dayOfCycle >= ovulationDay - 1 && dayOfCycle <= ovulationDay + 1) {
      return 'ovulatory';
    }

    // Phase 4: Luteal
    return 'luteal';
  };

  const getPhaseColor = (phase: HormonalPhase) => {
    switch (phase) {
      case 'menstrual':
        return {
          bg: 'bg-[#ffdad4]',
          text: 'text-[#904639]',
          border: 'border-[#904639]/30',
          label: 'Menstrual',
          desc: 'Fase de descompresión y renovación celular: prioriza descanso y calor.',
        };
      case 'follicular':
        return {
          bg: 'bg-[#cfe5d1]',
          text: 'text-[#4f6353]',
          border: 'border-[#4f6353]/30',
          label: 'Folicular',
          desc: 'Estrógenos en ascenso: excelente momento para desarrollar fuerza muscular.',
        };
      case 'ovulatory':
        return {
          bg: 'bg-[#ffedd5]',
          text: 'text-[#c2410c]',
          border: 'border-[#c2410c]/30',
          label: 'Ovulatoria',
          desc: 'Pico estrogénico y de testosterona: máxima resistencia y carisma social.',
        };
      case 'luteal':
        return {
          bg: 'bg-[#f0ede9]',
          text: 'text-[#834e43]',
          border: 'border-[#834e43]/30',
          label: 'Lútea',
          desc: 'Progesterona alta: menor tolerancia a la fatiga, mayor síntesis de colágeno.',
        };
    }
  };

  const currentLog: DailySymptomLog = symptoms[selectedDay] || {
    date: `2026-10-${selectedDay < 10 ? '0' + selectedDay : selectedDay}`,
    energy: 3,
    mood: 'serena',
    cramps: 0,
    jointPain: false,
    sleepHours: 7,
    flow: 'none',
    notes: '',
  };

  const updateSelectedLog = (field: keyof DailySymptomLog, value: any) => {
    const updated = {
      ...symptoms,
      [selectedDay]: {
        ...currentLog,
        [field]: value,
      },
    };
    saveSymptomsToStorage(updated);
  };

  const handleMarkAsPeriodStart = () => {
    const willBePeriodStart = !currentLog.isPeriodStart;
    const updatedLog: DailySymptomLog = {
      ...currentLog,
      isPeriodStart: willBePeriodStart,
      flow: willBePeriodStart ? 'medium' : 'none',
    };

    const updatedSymptoms = {
      ...symptoms,
      [selectedDay]: updatedLog,
    };
    saveSymptomsToStorage(updatedSymptoms);

    if (willBePeriodStart) {
      // Also shift cycle configuration so periodStartDay aligns with this day!
      saveCycleConfigToStorage({
        ...cycleConfig,
        periodStartDay: selectedDay,
      });

      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.6 },
        colors: ['#904639', '#ffdad4'],
      });

      setSaveToast(`¡Día ${selectedDay} marcado como inicio de periodo! Calendario sincronizado.`);
      setTimeout(() => setSaveToast(null), 3000);
    } else {
      setSaveToast(`Se desmarcó el inicio de periodo en el día ${selectedDay}.`);
      setTimeout(() => setSaveToast(null), 2500);
    }
  };

  const handleClearDayData = () => {
    const updated = { ...symptoms };
    delete updated[selectedDay];
    saveSymptomsToStorage(updated);
    setSaveToast(`Se restablecieron los datos del día ${selectedDay}.`);
    setTimeout(() => setSaveToast(null), 2500);
  };

  const selectedPhase = getDayPhase(selectedDay);
  const phaseInfo = getPhaseColor(selectedPhase);

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto px-4 pb-28 pt-2 space-y-4">
      {/* Toast Notification */}
      {saveToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#1c1c19] text-[#fcf9f4] px-4 py-2.5 rounded-full shadow-lg text-xs font-semibold flex items-center gap-2 animate-bounce">
          <span className="material-symbols-outlined text-[#cfe5d1] text-[18px]">
            check_circle
          </span>
          <span>{saveToast}</span>
        </div>
      )}

      {/* Title & Action Buttons Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <OfficialLogoBadge size="sm" />
          <div>
            <h1 className="font-headline text-2xl text-[#1c1c19] font-medium leading-tight">
              Calendario Menstrual & Hormonal
            </h1>
            <p className="text-xs text-[#706663] mt-0.5">
              Control editable de ciclo, síntomas y biomarcadores 30+
            </p>
          </div>
        </div>

        {/* Action Header Pills */}
        <div className="flex items-center gap-1.5">
          {/* Tutorial Button */}
          <button
            onClick={() => setIsTutorialOpen(true)}
            className="px-2.5 py-1.5 rounded-full text-xs font-bold bg-[#cfe5d1] text-[#384b3d] hover:bg-[#b8d8bb] transition-all flex items-center gap-1 shadow-2xs cursor-pointer"
            title="Ver breve tutorial de uso"
          >
            <span className="material-symbols-outlined text-[16px]">help_outline</span>
            <span>Tutorial</span>
          </button>

          {/* Config Cycle Button */}
          <button
            onClick={() => setIsConfigModalOpen(true)}
            className="px-2.5 py-1.5 rounded-full text-xs font-bold bg-[#f6f3ee] text-[#1c1c19] border border-[#dac1bd]/40 hover:bg-[#ebe8e3] transition-all flex items-center gap-1 shadow-2xs cursor-pointer"
            title="Configurar duración y días de mi ciclo"
          >
            <span className="material-symbols-outlined text-[16px]">tune</span>
            <span className="hidden sm:inline">Mi Ciclo</span>
          </button>
        </div>
      </div>

      {/* Helpful Quick Tutorial Banner */}
      <div
        onClick={() => setIsTutorialOpen(true)}
        className="cursor-pointer bg-gradient-to-r from-[#cfe5d1]/60 via-[#fcf9f4] to-[#ffdad4]/60 p-2.5 sm:p-3 rounded-2xl border border-[#dac1bd]/40 flex items-center justify-between gap-2 shadow-2xs hover:border-[#904639]/40 transition-all"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#904639] text-white flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[16px]">lightbulb</span>
          </div>
          <div>
            <span className="text-xs font-bold text-[#1c1c19] block leading-tight">
              ¿Cómo editar fácilmente tu calendario?
            </span>
            <p className="text-[11px] text-[#544340] leading-tight">
              Toca cualquier día para registrar sangrado, energía o cólicos. Haz clic aquí para ver el tutorial breve.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold text-[#904639] underline shrink-0">Ver Guía</span>
      </div>

      {/* Monthly Interactive Calendar Card */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-[#dac1bd]/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-headline text-lg font-bold text-[#1c1c19]">
              {currentMonth}
            </span>
            <span className="text-[10px] bg-[#f6f3ee] text-[#544340] px-2 py-0.5 rounded-full font-semibold border border-[#dac1bd]/30">
              Ciclo de {cycleConfig.cycleLength} días
            </span>
          </div>

          {/* Phase Legend */}
          <div className="flex items-center gap-1.5 text-xs text-[#706663] flex-wrap">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#904639]"></span>
              <span>Menstrual</span>
            </span>
            <span className="flex items-center gap-1 ml-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4f6353]"></span>
              <span>Folicular</span>
            </span>
            <span className="flex items-center gap-1 ml-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c2410c]"></span>
              <span>Ovulatoria</span>
            </span>
            <span className="flex items-center gap-1 ml-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#834e43]"></span>
              <span>Lútea</span>
            </span>
          </div>
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 text-center text-xs font-semibold text-[#87726f] mb-2">
          <span>L</span>
          <span>M</span>
          <span>X</span>
          <span>J</span>
          <span>V</span>
          <span>S</span>
          <span>D</span>
        </div>

        {/* 31 Calendar Grid */}
        <div className="grid grid-cols-7 gap-1.5 sm:gap-2 text-center">
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
            const phase = getDayPhase(day);
            const isSelected = selectedDay === day;
            const dayLog = symptoms[day];
            const hasLog = Boolean(dayLog);
            const isStart = Boolean(dayLog?.isPeriodStart);

            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                type="button"
                className={`h-11 sm:h-12 rounded-xl flex flex-col items-center justify-center relative transition-all duration-150 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#1c1c19] text-[#fcf9f4] border-[#1c1c19] shadow-sm font-bold scale-105 z-10 ring-2 ring-[#904639]/30'
                    : 'bg-[#fcf9f4] hover:bg-[#f6f3ee] text-[#1c1c19] border-[#dac1bd]/20'
                }`}
              >
                <div className="flex items-center gap-0.5">
                  <span className="text-xs leading-none">{day}</span>
                  {isStart && (
                    <span className="text-[9px] leading-none" title="Inicio de periodo">
                      🩸
                    </span>
                  )}
                </div>

                {/* Phase Indicator Micro-bar */}
                <span
                  className={`w-3.5 h-1 rounded-full mt-1 ${
                    phase === 'menstrual'
                      ? 'bg-[#904639]'
                      : phase === 'follicular'
                      ? 'bg-[#4f6353]'
                      : phase === 'ovulatory'
                      ? 'bg-[#c2410c]'
                      : 'bg-[#834e43]'
                  }`}
                ></span>

                {/* Logged indicator dot */}
                {hasLog && !isSelected && (
                  <span
                    className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#4f6353] rounded-full"
                    title="Día con registro"
                  ></span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* SELECTED DAY EDITING CARD */}
      <div className="bg-[#ffffff] rounded-2xl p-4 sm:p-5 shadow-xs border border-[#dac1bd]/30 space-y-4">
        {/* Day Header with quick actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#dac1bd]/20 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-headline text-lg font-bold text-[#1c1c19]">
                Día {selectedDay} de Octubre
              </h2>
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${phaseInfo.bg} ${phaseInfo.text} ${phaseInfo.border}`}
              >
                Fase {phaseInfo.label}
              </span>
            </div>
            <p className="text-xs text-[#706663] mt-0.5">{phaseInfo.desc}</p>
          </div>

          {/* Quick Period Start Toggle Button */}
          <button
            onClick={handleMarkAsPeriodStart}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs shrink-0 ${
              currentLog.isPeriodStart
                ? 'bg-[#904639] text-white hover:bg-[#7b3a2f]'
                : 'bg-[#ffdad4] text-[#3c0702] hover:bg-[#ffc8bd]'
            }`}
          >
            <span>{currentLog.isPeriodStart ? '🩸 Es Inicio de Periodo' : '🩸 Marcar como Inicio'}</span>
          </button>
        </div>

        {/* Section: Interactive Symptom Editor */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1c1c19] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#904639]">edit_note</span>
                <span>Registro Clínico Diario</span>
              </h3>
              <span className="text-[10px] bg-[#cfe5d1] text-[#384b3d] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">timer</span>
                Check-in &lt; 10 seg
              </span>
            </div>
            <span className="text-[11px] text-[#4f6353] flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">cloud_done</span>
              Guardado automático
            </span>
          </div>

          {/* Quick Check-in Highlight Box (4 Essential Metrics: Sangrado, Energía, Digestión, Estrés) */}
          <div className="p-3.5 bg-gradient-to-br from-[#fcf9f4] to-[#f6f3ee] rounded-2xl border border-[#dac1bd]/40 space-y-3.5">
            {/* 1. Sangrado / Flujo */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#1c1c19] flex items-center gap-1">
                  <span>1. Sangrado / Flujo:</span>
                </span>
                <span className="text-[11px] font-semibold text-[#904639]">
                  {currentLog.flow === 'heavy' ? 'Abundante' : currentLog.flow === 'medium' ? 'Moderado' : currentLog.flow === 'light' ? 'Ligero' : currentLog.flow === 'spotting' ? 'Manchado' : 'Sin sangrado'}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-1 text-center">
                {[
                  { id: 'none', label: 'Ninguno' },
                  { id: 'spotting', label: 'Manchado' },
                  { id: 'light', label: 'Ligero' },
                  { id: 'medium', label: 'Moderado' },
                  { id: 'heavy', label: 'Abundante' },
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => updateSelectedLog('flow', f.id)}
                    className={`py-1.5 rounded-lg text-[11px] font-semibold transition-all border cursor-pointer ${
                      (currentLog.flow || 'none') === f.id
                        ? 'bg-[#904639] text-white border-[#904639] shadow-2xs font-bold'
                        : 'bg-white text-[#544340] border-[#dac1bd]/20 hover:bg-[#ebe8e3]'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Nivel de Energía */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#1c1c19]">2. Nivel de Energía:</span>
                <span className="text-[11px] font-bold text-[#4f6353]">
                  {currentLog.energy === 5 ? 'Radiante (5/5)' : currentLog.energy === 4 ? 'Óptima (4/5)' : currentLog.energy === 3 ? 'Estable (3/5)' : currentLog.energy === 2 ? 'Baja (2/5)' : 'Agotada (1/5)'}
                </span>
              </div>
              <div className="flex gap-1.5">
                {[
                  { lvl: 1, label: '1 Baja' },
                  { lvl: 2, label: '2 Mínima' },
                  { lvl: 3, label: '3 Estable' },
                  { lvl: 4, label: '4 Alta' },
                  { lvl: 5, label: '5 Radiante' },
                ].map((item) => (
                  <button
                    key={item.lvl}
                    type="button"
                    onClick={() => updateSelectedLog('energy', item.lvl)}
                    className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold transition-all border cursor-pointer ${
                      currentLog.energy === item.lvl
                        ? 'bg-[#4f6353] text-white border-[#4f6353] shadow-2xs'
                        : 'bg-white text-[#544340] border-[#dac1bd]/20 hover:bg-[#ebe8e3]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Digestión e Inflamación Abdominal */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#1c1c19]">3. Digestión:</span>
                <span className="text-[11px] font-semibold text-[#834e43]">
                  {currentLog.digestion === 'hinchazon' ? 'Hinchazón' : currentLog.digestion === 'gases' ? 'Gases' : currentLog.digestion === 'estrenimiento' ? 'Estreñimiento' : 'Ligera y confortable'}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-center">
                {[
                  { id: 'ligera', label: 'Ligera' },
                  { id: 'hinchazon', label: 'Hinchazón' },
                  { id: 'gases', label: 'Gases' },
                  { id: 'estrenimiento', label: 'Estreñimiento' },
                ].map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => updateSelectedLog('digestion', d.id)}
                    className={`py-1.5 rounded-lg text-[11px] font-semibold transition-all border cursor-pointer ${
                      (currentLog.digestion || 'ligera') === d.id
                        ? 'bg-[#834e43] text-white border-[#834e43] shadow-2xs font-bold'
                        : 'bg-white text-[#544340] border-[#dac1bd]/20 hover:bg-[#ebe8e3]'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Estrés & Carga Nerviosa */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#1c1c19]">4. Nivel de Estrés:</span>
                <span className="text-[11px] font-semibold text-[#904639]">
                  {currentLog.stress === 'sobrecarga' ? 'Sobrecarga adrenal' : currentLog.stress === 'elevado' ? 'Elevado' : currentLog.stress === 'moderado' ? 'Moderado' : 'Bajo y sereno'}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-center">
                {[
                  { id: 'bajo', label: 'Bajo' },
                  { id: 'moderado', label: 'Moderado' },
                  { id: 'elevado', label: 'Elevado' },
                  { id: 'sobrecarga', label: 'Sobrecarga' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => updateSelectedLog('stress', s.id)}
                    className={`py-1.5 rounded-lg text-[11px] font-semibold transition-all border cursor-pointer ${
                      (currentLog.stress || 'bajo') === s.id
                        ? 'bg-[#904639] text-white border-[#904639] shadow-2xs font-bold'
                        : 'bg-white text-[#544340] border-[#dac1bd]/20 hover:bg-[#ebe8e3]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mood / Emotional State */}
          <div className="space-y-1.5">
            <span className="font-semibold text-xs text-[#544340] block">
              Estado Emocional Predominante:
            </span>
            <div className="grid grid-cols-5 gap-1 text-center">
              {[
                { id: 'radiante', label: 'Radiante', icon: 'sunny' },
                { id: 'serena', label: 'Serena', icon: 'spa' },
                { id: 'sensible', label: 'Sensible', icon: 'mood' },
                { id: 'agotada', label: 'Agotada', icon: 'battery_alert' },
                { id: 'reflexiva', label: 'Reflexiva', icon: 'self_improvement' },
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => updateSelectedLog('mood', m.id)}
                  className={`p-1.5 rounded-lg flex flex-col items-center justify-center text-[10px] transition-all border cursor-pointer ${
                    currentLog.mood === m.id
                      ? 'bg-[#4f6353] text-white border-[#4f6353] font-bold shadow-2xs'
                      : 'bg-[#f6f3ee] text-[#544340] border-[#dac1bd]/20 hover:bg-[#ebe8e3]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">{m.icon}</span>
                  <span className="mt-0.5">{m.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Cramps & Joint Health Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Cramps / Pelvic Pain */}
            <div className="p-3 bg-[#fcf9f4] rounded-xl border border-[#dac1bd]/30 space-y-1.5">
              <span className="text-xs font-semibold text-[#1c1c19] block">
                Cólicos / Tensión Pélvica:
              </span>
              <div className="flex gap-1 text-center">
                {[
                  { lvl: 0, label: '0 Ninguno' },
                  { lvl: 1, label: '1 Leve' },
                  { lvl: 2, label: '2 Moderado' },
                  { lvl: 3, label: '3 Intenso' },
                ].map((c) => (
                  <button
                    key={c.lvl}
                    type="button"
                    onClick={() => updateSelectedLog('cramps', c.lvl)}
                    className={`flex-1 py-1 rounded-lg text-[10px] font-semibold border cursor-pointer transition-all ${
                      currentLog.cramps === c.lvl
                        ? 'bg-[#904639] text-white border-[#904639]'
                        : 'bg-white text-[#544340] border-[#dac1bd]/30 hover:bg-[#f6f3ee]'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Joint Pain Toggle */}
            <div className="p-3 bg-[#fcf9f4] rounded-xl border border-[#dac1bd]/30 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-[#1c1c19] block">
                  Rigidez Articular Hoy:
                </span>
                <span className="text-[10px] text-[#706663]">
                  Rodillas, lumbar o muñecas
                </span>
              </div>
              <button
                type="button"
                onClick={() => updateSelectedLog('jointPain', !currentLog.jointPain)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currentLog.jointPain
                    ? 'bg-[#904639] text-white'
                    : 'bg-white text-[#544340] border border-[#dac1bd]/40'
                }`}
              >
                {currentLog.jointPain ? 'Presente' : 'Sin molestia'}
              </button>
            </div>
          </div>

          {/* Sleep Hours & Body Signals */}
          <div className="flex items-center justify-between p-3 bg-[#f6f3ee] rounded-xl border border-[#dac1bd]/20 text-xs">
            <span className="font-semibold text-[#1c1c19]">Horas de Sueño:</span>
            <div className="flex gap-1">
              {[6, 7, 7.5, 8, 9].map((hrs) => (
                <button
                  key={hrs}
                  type="button"
                  onClick={() => updateSelectedLog('sleepHours', hrs)}
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold border cursor-pointer transition-all ${
                    currentLog.sleepHours === hrs
                      ? 'bg-[#4f6353] text-white border-[#4f6353]'
                      : 'bg-white text-[#544340] border-[#dac1bd]/30'
                  }`}
                >
                  {hrs}h
                </button>
              ))}
            </div>
          </div>

          {/* Quick Notes for Specialist */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#544340] block">
              Notas Personales (se incluirán en tu reporte PDF médico):
            </label>
            <input
              type="text"
              value={currentLog.notes || ''}
              onChange={(e) => updateSelectedLog('notes', e.target.value)}
              placeholder="Ej: Calambres leves, antojo de magnesio, buena recuperación neuromuscular..."
              className="w-full px-3 py-2 text-xs rounded-xl bg-[#f6f3ee] border border-[#dac1bd]/40 focus:outline-none focus:ring-1 focus:ring-[#904639] text-[#1c1c19]"
            />
          </div>

          {/* Bottom Actions: Clear or Save Confirm */}
          <div className="flex items-center justify-between pt-2 border-t border-[#dac1bd]/20">
            <button
              type="button"
              onClick={handleClearDayData}
              className="text-xs text-[#87726f] hover:text-[#904639] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">delete_sweep</span>
              <span>Limpiar día</span>
            </button>

            <button
              type="button"
              onClick={() => {
                confetti({
                  particleCount: 20,
                  spread: 40,
                  origin: { y: 0.7 },
                  colors: ['#4f6353', '#904639'],
                });
                setSaveToast(`¡Datos del día ${selectedDay} guardados correctamente!`);
                setTimeout(() => setSaveToast(null), 2500);
              }}
              className="px-4 py-2 bg-[#4f6353] text-white rounded-xl text-xs font-bold hover:bg-[#384b3d] shadow-xs cursor-pointer transition-all flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">check</span>
              <span>Guardar Día</span>
            </button>
          </div>
        </div>
      </div>

      {/* MODAL: CUSTOMIZE CYCLE PARAMETERS */}
      {isConfigModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#1c1c19]/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-2xl border border-[#dac1bd]/40 space-y-4 my-6">
            <div className="flex items-center justify-between border-b border-[#dac1bd]/30 pb-3">
              <div className="flex items-center gap-2.5">
                <OfficialLogoBadge size="sm" />
                <div>
                  <h3 className="font-headline text-lg font-bold text-[#1c1c19]">
                    Personalizar mi Ciclo
                  </h3>
                  <p className="text-xs text-[#706663]">
                    Adapta el calendario a tu ritmo hormonal propio
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsConfigModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#706663] hover:bg-[#f6f3ee] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {/* Period Start Day in Month */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold text-[#1c1c19]">
                  <span>Día de Inicio de Periodo este mes:</span>
                  <span className="text-[#904639] font-bold">Día {cycleConfig.periodStartDay}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="31"
                  value={cycleConfig.periodStartDay}
                  onChange={(e) =>
                    saveCycleConfigToStorage({
                      ...cycleConfig,
                      periodStartDay: Number(e.target.value),
                    })
                  }
                  className="w-full accent-[#904639] cursor-pointer"
                />
                <span className="text-[11px] text-[#706663] block">
                  El calendario reorganizará los colores a partir de este día.
                </span>
              </div>

              {/* Cycle Length */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold text-[#1c1c19]">
                  <span>Duración típica de tu ciclo:</span>
                  <span className="text-[#904639] font-bold">{cycleConfig.cycleLength} días</span>
                </div>
                <div className="flex gap-1.5">
                  {[24, 26, 28, 30, 32, 35].map((len) => (
                    <button
                      key={len}
                      type="button"
                      onClick={() =>
                        saveCycleConfigToStorage({
                          ...cycleConfig,
                          cycleLength: len,
                        })
                      }
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border cursor-pointer transition-all ${
                        cycleConfig.cycleLength === len
                          ? 'bg-[#904639] text-white border-[#904639]'
                          : 'bg-[#f6f3ee] text-[#544340] border-[#dac1bd]/30 hover:bg-[#ebe8e3]'
                      }`}
                    >
                      {len}d
                    </button>
                  ))}
                </div>
              </div>

              {/* Bleeding Duration */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold text-[#1c1c19]">
                  <span>Días típicos de sangrado:</span>
                  <span className="text-[#4f6353] font-bold">{cycleConfig.periodDuration} días</span>
                </div>
                <div className="flex gap-1.5">
                  {[3, 4, 5, 6, 7].map((days) => (
                    <button
                      key={days}
                      type="button"
                      onClick={() =>
                        saveCycleConfigToStorage({
                          ...cycleConfig,
                          periodDuration: days,
                        })
                      }
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border cursor-pointer transition-all ${
                        cycleConfig.periodDuration === days
                          ? 'bg-[#4f6353] text-white border-[#4f6353]'
                          : 'bg-[#f6f3ee] text-[#544340] border-[#dac1bd]/30 hover:bg-[#ebe8e3]'
                      }`}
                    >
                      {days}d
                    </button>
                  ))}
                </div>
              </div>

              {/* Info Note */}
              <div className="p-3 bg-[#fcf9f4] rounded-xl border border-[#dac1bd]/30 text-[#544340]">
                💡 <em>"Tus ajustes recalculan automáticamente la fase ovulatoria y lútea para darte un control exacto y confiable."</em>
              </div>
            </div>

            <div className="pt-2 border-t border-[#dac1bd]/30 flex justify-end">
              <button
                onClick={() => setIsConfigModalOpen(false)}
                className="px-4 py-2 bg-[#904639] text-white rounded-xl text-xs font-bold hover:bg-[#ae5e4f] shadow-xs cursor-pointer"
              >
                Listo, aplicar cambios
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Guided Tutorial Modal */}
      <CycleTutorialModal
        isOpen={isTutorialOpen}
        onClose={() => setIsTutorialOpen(false)}
      />
    </div>
  );
};
