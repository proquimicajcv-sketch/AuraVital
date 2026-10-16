import React, { useState, useEffect } from 'react';
import {
  HormonalPhase,
  WorkoutRoutine,
  NutritionAdvice,
  UserSubscription,
  BudgetTier,
  WeeklyDietDay,
} from '../types';
import { OfficialLogoBadge } from './Logo';
import { SmoothiePopupModal } from './SmoothiePopupModal';
import {
  BUDGET_TIER_CONFIG,
  WEEKLY_DIETS,
  WEEKLY_SHOPPING_LISTS,
} from '../data/weeklyDietData';

interface NutritionWorkoutViewProps {
  routines: WorkoutRoutine[];
  nutritionPlans: NutritionAdvice[];
  subscription: UserSubscription;
  onOpenSubscription: () => void;
  initialBudgetTier?: BudgetTier;
  onUpdateBudgetTier?: (tier: BudgetTier) => void;
}

export const NutritionWorkoutView: React.FC<NutritionWorkoutViewProps> = ({
  routines,
  nutritionPlans,
  subscription,
  onOpenSubscription,
  initialBudgetTier = 'economico',
  onUpdateBudgetTier,
}) => {
  // Main view switcher: Nutrición vs Entrenamiento
  const [activeTab, setActiveTab] = useState<'nutrition' | 'fitness'>('nutrition');

  // Nutrition sub-mode: Plan 7 Días por Presupuesto vs Estrategia por Fase
  const [nutritionSubMode, setNutritionSubMode] = useState<'weekly_budget' | 'hormonal_phase'>('weekly_budget');

  // Budget Tier state & Custom Budget ($)
  const [budgetTier, setBudgetTier] = useState<BudgetTier>(initialBudgetTier);
  const [currency, setCurrency] = useState<'$' | '€' | 'MX$'>('$');
  const [customAmount, setCustomAmount] = useState<number>(32);
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0); // 0=Lunes, 1=Martes, etc.
  const [expandedMealId, setExpandedMealId] = useState<string | null>(null);
  const [showShoppingList, setShowShoppingList] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copiedListToast, setCopiedListToast] = useState<boolean>(false);

  // Hormonal phase sub-tab
  const [selectedPhase, setSelectedPhase] = useState<HormonalPhase>('luteal');

  // Workout rest timer
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(45);

  // Smoothie popup modal state
  const [isSmoothieModalOpen, setIsSmoothieModalOpen] = useState(false);

  // Trigger smoothie popup when entering metabolism
  useEffect(() => {
    const hasSeen = sessionStorage.getItem('auravital_smoothie_shown');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsSmoothieModalOpen(true);
        sessionStorage.setItem('auravital_smoothie_shown', 'true');
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  // Simple interval for set rest timer
  useEffect(() => {
    let interval: any = null;
    if (timerActive && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setTimerActive(false);
      setTimerSeconds(45);
    }
    return () => clearInterval(interval);
  }, [timerActive, timerSeconds]);

  const handleSelectTier = (tier: BudgetTier) => {
    setBudgetTier(tier);
    setCustomAmount(BUDGET_TIER_CONFIG[tier].weeklyTarget);
    if (onUpdateBudgetTier) {
      onUpdateBudgetTier(tier);
    }
  };

  const handleCustomAmountChange = (val: number) => {
    setCustomAmount(val);
    if (val <= 42) {
      setBudgetTier('economico');
      if (onUpdateBudgetTier) onUpdateBudgetTier('economico');
    } else if (val <= 75) {
      setBudgetTier('equilibrado');
      if (onUpdateBudgetTier) onUpdateBudgetTier('equilibrado');
    } else {
      setBudgetTier('flexible');
      if (onUpdateBudgetTier) onUpdateBudgetTier('flexible');
    }
  };

  const currentWeeklyDays: WeeklyDietDay[] = WEEKLY_DIETS[budgetTier] || WEEKLY_DIETS.economico;
  const currentDay: WeeklyDietDay = currentWeeklyDays[selectedDayIndex] || currentWeeklyDays[0];
  const shoppingList = WEEKLY_SHOPPING_LISTS[budgetTier] || WEEKLY_SHOPPING_LISTS.economico;

  const activeNutrition =
    nutritionPlans.find((n) => n.phase === selectedPhase) || nutritionPlans[0];
  const activeWorkoutList = routines.filter(
    (r) => r.phase === selectedPhase || r.phase === 'luteal'
  );

  const toggleMealExpand = (id: string) => {
    setExpandedMealId((prev) => (prev === id ? null : id));
  };

  const toggleCheckItem = (itemName: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const handleCopyShoppingList = () => {
    const listText = shoppingList
      .map(
        (item) =>
          `• [${item.category}] ${item.name} (${item.quantity}) - ~${currency}${item.estimatedPrice} | Consejo: ${item.savingTip}`
      )
      .join('\n');
    const header = `🛒 AuraVital • Lista de Compra Semanal (${BUDGET_TIER_CONFIG[budgetTier].label})\nPresupuesto estimado: ${currency}${customAmount}/semana (~${currency}${(customAmount / 7).toFixed(1)}/día)\n\n`;

    navigator.clipboard?.writeText(header + listText);
    setCopiedListToast(true);
    setTimeout(() => setCopiedListToast(false), 2500);
  };

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto px-4 pb-28 pt-2 space-y-5">
      {/* Toast Notification */}
      {copiedListToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#1c1c19] text-[#fcf9f4] px-4 py-2.5 rounded-full shadow-lg text-xs font-semibold flex items-center gap-2 animate-bounce">
          <span className="material-symbols-outlined text-[#cfe5d1] text-[18px]">
            check_circle
          </span>
          <span>¡Lista de compra y trucos de ahorro copiados al portapapeles!</span>
        </div>
      )}

      {/* Main Header with Fixed Brand Logo */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <OfficialLogoBadge size="sm" />
          <div>
            <h1 className="font-headline text-2xl text-[#1c1c19] font-medium leading-tight">
              Metabolismo & Nutrición 30+
            </h1>
            <p className="text-xs text-[#706663] mt-0.5">
              Dietas personalizadas según tu presupuesto en {currency} y recetas con Elena
            </p>
          </div>
        </div>

        {/* Smoothie Popup Trigger Button */}
        <button
          onClick={() => setIsSmoothieModalOpen(true)}
          className="px-2.5 py-1.5 rounded-full text-xs font-semibold bg-[#ffdad4] text-[#904639] hover:bg-[#ffc8bd] transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
          title="Ver sugerencias de batidos hormonales"
        >
          <span className="material-symbols-outlined text-[16px]">blender</span>
          <span className="hidden sm:inline">Batidos de Elena</span>
        </button>
      </div>

      {/* Main Switcher: Nutrición vs Entrenamiento */}
      <div className="flex bg-[#ebe8e3] p-1 rounded-xl">
        <button
          onClick={() => setActiveTab('nutrition')}
          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'nutrition'
              ? 'bg-[#ffffff] text-[#904639] shadow-xs'
              : 'text-[#544340] hover:text-[#1c1c19]'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">restaurant</span>
          <span>Nutrición & Presupuesto</span>
        </button>

        <button
          onClick={() => setActiveTab('fitness')}
          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'fitness'
              ? 'bg-[#ffffff] text-[#904639] shadow-xs'
              : 'text-[#544340] hover:text-[#1c1c19]'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">fitness_center</span>
          <span>Fuerza & Articulaciones</span>
        </button>
      </div>

      {/* Content for Nutrition */}
      {activeTab === 'nutrition' && (
        <div className="space-y-5">
          {/* Sub-mode Switcher: 7 Días por Presupuesto vs Estrategia por Fase */}
          <div className="flex items-center justify-between border-b border-[#dac1bd]/30 pb-2">
            <div className="flex gap-2">
              <button
                onClick={() => setNutritionSubMode('weekly_budget')}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                  nutritionSubMode === 'weekly_budget'
                    ? 'bg-[#904639] text-white shadow-xs'
                    : 'bg-[#f6f3ee] text-[#706663] hover:text-[#1c1c19]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">calendar_view_week</span>
                <span>Plan 7 Días por Presupuesto ({currency})</span>
              </button>

              <button
                onClick={() => setNutritionSubMode('hormonal_phase')}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                  nutritionSubMode === 'hormonal_phase'
                    ? 'bg-[#904639] text-white shadow-xs'
                    : 'bg-[#f6f3ee] text-[#706663] hover:text-[#1c1c19]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">donut_large</span>
                <span>Por Fase Hormonal</span>
              </button>
            </div>

            {/* Currency selector */}
            <div className="flex items-center gap-1 bg-[#f0ede9] p-0.5 rounded-lg">
              {(['$', '€', 'MX$'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2 py-0.5 text-[11px] font-bold rounded cursor-pointer transition-all ${
                    currency === curr
                      ? 'bg-white text-[#904639] shadow-2xs'
                      : 'text-[#706663] hover:text-[#1c1c19]'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          {/* VIEW 1: WEEKLY 7-DAY BUDGET-BASED MEAL PLAN */}
          {nutritionSubMode === 'weekly_budget' && (
            <div className="space-y-5">
              {/* Question Banner: Food Budget Selection */}
              <div className="bg-gradient-to-br from-[#ffffff] via-[#fcf9f4] to-[#f6f3ee] rounded-2xl p-4 sm:p-5 shadow-xs border border-[#dac1bd]/40 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ffdad4] text-[#904639] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[22px]">payments</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#904639]">
                      Personalización Económica Real
                    </span>
                    <h2 className="font-headline text-lg font-bold text-[#1c1c19] leading-snug">
                      ¿Cuál es tu presupuesto para comidas en {currency}?
                    </h2>
                    <p className="text-xs text-[#544340] mt-1 leading-relaxed">
                      Elena: <em>"No todas las mujeres tienen presupuesto para salmón fresco o ingredientes exóticos todos los días. En AuraVital priorizamos proteínas de alto valor biológico accesibles (huevos camperos, sardinas en AOVE, legumbres en lote y pollo) para darte 7 días completos de energía sin gastar de más."</em>
                    </p>
                  </div>
                </div>

                {/* 3 Interactive Budget Tier Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  {(['economico', 'equilibrado', 'flexible'] as BudgetTier[]).map((tierKey) => {
                    const cfg = BUDGET_TIER_CONFIG[tierKey];
                    const isSelected = budgetTier === tierKey;

                    return (
                      <div
                        key={tierKey}
                        onClick={() => handleSelectTier(tierKey)}
                        className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-[#ffffff] border-[#904639] ring-2 ring-[#904639]/20 shadow-xs'
                            : 'bg-[#f6f3ee]/80 border-[#dac1bd]/40 hover:bg-[#ebe8e3]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="material-symbols-outlined text-[20px] text-[#904639]">
                            {cfg.icon}
                          </span>
                          <span
                            className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                              isSelected
                                ? 'bg-[#904639] text-white'
                                : 'bg-[#ebe8e3] text-[#544340]'
                            }`}
                          >
                            ~{currency}{cfg.weeklyTarget}/sem
                          </span>
                        </div>

                        <h3 className="font-headline text-xs font-bold text-[#1c1c19] leading-tight">
                          {cfg.label}
                        </h3>

                        <div className="text-[11px] font-semibold text-[#4f6353] mt-1">
                          ~{currency}{cfg.dailyAvg}/día
                        </div>

                        <p className="text-[10px] text-[#706663] mt-1 leading-tight line-clamp-2">
                          {cfg.subtitle}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Custom Budget Slider / Input */}
                <div className="p-3 bg-white rounded-xl border border-[#dac1bd]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4f6353] text-[18px]">
                      tune
                    </span>
                    <span className="font-semibold text-[#1c1c19]">
                      Ajustar presupuesto semanal exacto:
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="25"
                      max="120"
                      step="1"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(Number(e.target.value))}
                      className="w-32 accent-[#904639] cursor-pointer"
                    />
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-sm text-[#904639]">
                        {currency}{customAmount}
                      </span>
                      <span className="text-[11px] text-[#706663]">
                        /sem (~{currency}{(customAmount / 7).toFixed(1)}/día)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Toggle Shopping List Button */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setShowShoppingList(!showShoppingList)}
                    className="text-xs font-bold text-[#4f6353] hover:text-[#2d3a30] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {showShoppingList ? 'visibility_off' : 'shopping_cart'}
                    </span>
                    <span>
                      {showShoppingList
                        ? 'Ocultar lista de compra semanal'
                        : `Ver lista de compra con trucos de ahorro (~${currency}${customAmount})`}
                    </span>
                  </button>

                  <button
                    onClick={() => setIsSmoothieModalOpen(true)}
                    className="text-xs font-semibold text-[#904639] flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">blender</span>
                    <span>Batidos sugeridos</span>
                  </button>
                </div>
              </div>

              {/* Collapsible Shopping List Card */}
              {showShoppingList && (
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#4f6353]/30 shadow-xs space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-[#dac1bd]/30 pb-2.5">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#4f6353]">
                        Cesta Semanal • {BUDGET_TIER_CONFIG[budgetTier].label}
                      </span>
                      <h3 className="font-headline text-base font-bold text-[#1c1c19]">
                        Lista de Compra con Estrategia de Ahorro
                      </h3>
                      <p className="text-xs text-[#706663]">
                        Estimado total: ~{currency}{customAmount} | Marca lo que ya tienes en tu despensa
                      </p>
                    </div>

                    <button
                      onClick={handleCopyShoppingList}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#f6f3ee] text-[#1c1c19] hover:bg-[#ebe8e3] border border-[#dac1bd]/40 flex items-center gap-1 cursor-pointer transition-all"
                    >
                      <span className="material-symbols-outlined text-[16px]">content_copy</span>
                      <span className="hidden sm:inline">Copiar lista</span>
                    </button>
                  </div>

                  {/* Shopping List Items */}
                  <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                    {shoppingList.map((item, idx) => {
                      const isChecked = Boolean(checkedItems[item.name]);
                      return (
                        <div
                          key={idx}
                          onClick={() => toggleCheckItem(item.name)}
                          className={`p-2.5 rounded-xl border flex items-start justify-between gap-3 text-xs cursor-pointer transition-all ${
                            isChecked
                              ? 'bg-[#cfe5d1]/30 border-[#cfe5d1] opacity-70'
                              : 'bg-[#fcf9f4] border-[#dac1bd]/30 hover:bg-[#f6f3ee]'
                          }`}
                        >
                          <div className="flex items-start gap-2.5 min-w-0">
                            <span
                              className={`material-symbols-outlined text-[18px] mt-0.5 ${
                                isChecked ? 'text-[#4f6353]' : 'text-[#87726f]'
                              }`}
                            >
                              {isChecked ? 'check_box' : 'check_box_outline_blank'}
                            </span>
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span
                                  className={`font-semibold text-[#1c1c19] ${
                                    isChecked ? 'line-through text-[#706663]' : ''
                                  }`}
                                >
                                  {item.name}
                                </span>
                                <span className="text-[10px] bg-white text-[#706663] px-1.5 py-0.2 rounded border border-[#dac1bd]/30">
                                  {item.quantity}
                                </span>
                              </div>
                              <p className="text-[11px] text-[#544340] italic mt-0.5">
                                💡 Tip Elena: {item.savingTip}
                              </p>
                            </div>
                          </div>

                          <span className="font-bold text-[#904639] text-xs shrink-0">
                            ~{currency}{item.estimatedPrice}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 7-DAY SELECTOR PILLS */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1c1c19] uppercase tracking-wider">
                    Días de la Semana:
                  </span>
                  <span className="text-[11px] text-[#706663]">
                    2 días básicos gratuitos • 5 días con Plato Fuerte (PRO)
                  </span>
                </div>

                <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-1">
                  {currentWeeklyDays.map((d, index) => {
                    const isSelected = selectedDayIndex === index;
                    return (
                      <button
                        key={d.dayId}
                        onClick={() => {
                          setSelectedDayIndex(index);
                          setExpandedMealId(null);
                        }}
                        className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex flex-col items-center min-w-[72px] cursor-pointer ${
                          isSelected
                            ? 'bg-[#904639] text-white border-[#904639] shadow-xs'
                            : 'bg-white text-[#544340] border-[#dac1bd]/40 hover:bg-[#f6f3ee]'
                        }`}
                      >
                        <span>{d.dayName}</span>
                        <span
                          className={`text-[9px] mt-0.5 uppercase tracking-wider ${
                            isSelected ? 'text-[#ffdad4]' : 'text-[#87726f]'
                          }`}
                        >
                          {d.isPremium ? 'PRO' : 'Gratis'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SELECTED DAY SUMMARY CARD */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#dac1bd]/30 shadow-xs space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#904639] bg-[#ffdad4]/40 px-2 py-0.5 rounded-full">
                        {currentDay.dayName} • {currentDay.dayTheme}
                      </span>
                      {currentDay.isPremium ? (
                        <span className="text-[10px] font-bold bg-[#ffdad4] text-[#3c0702] px-2 py-0.5 rounded-full flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">workspace_premium</span>
                          Plato Fuerte • PRO
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold bg-[#cfe5d1] text-[#384b3d] px-2 py-0.5 rounded-full flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">check_circle</span>
                          Básica Gratuita
                        </span>
                      )}
                    </div>
                    <h3 className="font-headline text-lg font-bold text-[#1c1c19] mt-1">
                      Menú Completo del {currentDay.dayName}
                    </h3>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-sm font-bold text-[#904639] block">
                      ~{currency}{currentDay.dailyEstimatedCost}/día
                    </span>
                    <span className="text-[11px] font-semibold text-[#4f6353]">
                      +{currentDay.totalProtein}g proteína
                    </span>
                  </div>
                </div>

                {/* Elena's Daily Master Tip Card */}
                <div className="p-3 bg-[#fcf9f4] rounded-xl border border-[#dac1bd]/30 flex items-start gap-2.5">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVLhO4NHhOkmyaAVrqvx-STu8fO_IdCpzaogagRoe0wqJlE--blT1-_qLUjP4XsILxB50tt3LZNhqPoQfLZ0xI_9b8vot0Hy1XJ2HwKZZ1OqllGH6DT1O7OXQHgtFM-Za3UtWADrLUCDtIN4BTUC1hE5BL624CJbCC-7YLUDaCtBBily_28X3TfVhegFmbev-O-CR97mNllsMWGvUL7r3_xFa9ppmtnyjVC97OfoJvJlRikinHpjPyHw"
                    alt="Elena Coach"
                    className="w-9 h-9 rounded-full object-cover border border-[#904639]/30 shrink-0 mt-0.5"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-[#904639] uppercase tracking-wider block">
                      Consejo Práctico de Elena:
                    </span>
                    <p className="text-xs text-[#1c1c19] italic leading-snug">
                      {currentDay.elenaDailyTip}
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 MEALS FOR THIS DAY (Desayuno, Almuerzo, Snack Hormonal, Cena) */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-headline text-base font-bold text-[#1c1c19]">
                    Platos 4K del {currentDay.dayName}
                  </h4>
                  <span className="text-[11px] text-[#706663]">
                    Fotografía Full HD con Elena preparando y degustando
                  </span>
                </div>

                {currentDay.meals.map((meal) => {
                  const isProLocked = currentDay.isPremium && subscription.tier === 'free';
                  const isExpanded = expandedMealId === meal.id;

                  return (
                    <div
                      key={meal.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#dac1bd]/30 transition-all group"
                    >
                      {/* Full HD 4K Photography with Elena in Action */}
                      <div className="relative aspect-[16/9] w-full bg-[#ebe8e3] overflow-hidden">
                        <img
                          src={meal.imageUrl}
                          alt={meal.name}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                          loading="lazy"
                        />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="text-[11px] font-bold bg-[#1c1c19]/80 text-white backdrop-blur-md px-2.5 py-1 rounded-full uppercase tracking-wider">
                            {meal.mealTime}
                          </span>

                          <div className="flex items-center gap-1.5">
                            {currentDay.isPremium ? (
                              <span className="text-[11px] font-bold bg-[#ffdad4] text-[#3c0702] px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                                <span className="material-symbols-outlined text-[13px]">
                                  workspace_premium
                                </span>
                                Plato Fuerte • PRO
                              </span>
                            ) : (
                              <span className="text-[11px] font-bold bg-[#cfe5d1] text-[#384b3d] px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                                <span className="material-symbols-outlined text-[13px]">
                                  check_circle
                                </span>
                                Básica Gratuita
                              </span>
                            )}

                            <span className="text-[11px] font-bold bg-white/90 text-[#4f6353] px-2.5 py-1 rounded-full shadow-xs">
                              +{meal.proteinGrams}g prot
                            </span>
                          </div>
                        </div>

                        {/* Elena Cooking / Eating Live Influencer Overlay */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-end gap-2.5">
                          <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVLhO4NHhOkmyaAVrqvx-STu8fO_IdCpzaogagRoe0wqJlE--blT1-_qLUjP4XsILxB50tt3LZNhqPoQfLZ0xI_9b8vot0Hy1XJ2HwKZZ1OqllGH6DT1O7OXQHgtFM-Za3UtWADrLUCDtIN4BTUC1hE5BL624CJbCC-7YLUDaCtBBily_28X3TfVhegFmbev-O-CR97mNllsMWGvUL7r3_xFa9ppmtnyjVC97OfoJvJlRikinHpjPyHw"
                            alt="Elena Especialista"
                            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md shrink-0"
                          />
                          <div className="bg-white/92 backdrop-blur-md p-2 rounded-xl text-left border border-white/40 shadow-xs flex-1">
                            <span className="text-[10px] uppercase font-bold text-[#904639] block">
                              {meal.elenaAction}
                            </span>
                            <p className="text-[11px] text-[#1c1c19] italic leading-tight truncate sm:whitespace-normal">
                              {meal.elenaQuote}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Meal Info Body */}
                      <div className="p-4 space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h5 className="font-headline text-base font-bold text-[#1c1c19] leading-snug">
                              {meal.name}
                            </h5>
                            <p className="text-xs text-[#544340] mt-1 leading-relaxed">
                              {meal.description}
                            </p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="text-xs font-bold text-[#904639] block">
                              ~{currency}{meal.estimatedCost}
                            </span>
                            <span className="text-[11px] text-[#87726f]">
                              {meal.prepTime}
                            </span>
                          </div>
                        </div>

                        {/* Locked State for Plato Fuerte (if Free user) */}
                        {isProLocked ? (
                          <div className="p-3 rounded-xl bg-gradient-to-r from-[#ffdad4]/40 to-[#f6f3ee] border border-[#ffdad4] flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-[#904639] text-[18px]">
                                lock
                              </span>
                              <span className="text-xs text-[#3c0702]">
                                Receta completa con porciones y pasos guiados en la membresía{' '}
                                <strong>Plato Fuerte ($7.99/mes)</strong>.
                              </span>
                            </div>
                            <button
                              onClick={onOpenSubscription}
                              className="px-3 py-1.5 bg-[#904639] text-white rounded-lg text-xs font-bold hover:bg-[#ae5e4f] shrink-0 shadow-xs cursor-pointer"
                            >
                              Desbloquear
                            </button>
                          </div>
                        ) : (
                          /* Unlocked / Free Recipe Details */
                          <div>
                            <button
                              onClick={() => toggleMealExpand(meal.id)}
                              className="text-xs font-bold text-[#904639] hover:text-[#ae5e4f] flex items-center gap-1 transition-colors cursor-pointer"
                            >
                              <span>
                                {isExpanded
                                  ? 'Ocultar ingredientes y preparación'
                                  : 'Ver ingredientes y preparación de Elena'}
                              </span>
                              <span className="material-symbols-outlined text-[16px]">
                                {isExpanded ? 'expand_less' : 'expand_more'}
                              </span>
                            </button>

                            {isExpanded && (
                              <div className="mt-3 pt-3 border-t border-[#dac1bd]/20 space-y-3 text-xs animate-fadeIn">
                                <div>
                                  <span className="font-bold text-[#1c1c19] block mb-1">
                                    Ingredientes Clínicos Asequibles:
                                  </span>
                                  <ul className="space-y-0.5 text-[#544340]">
                                    {meal.ingredients.map((ing, i) => (
                                      <li key={i} className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#4f6353]"></span>
                                        <span>{ing}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <span className="font-bold text-[#1c1c19] block mb-1">
                                    Paso a Paso de Elena:
                                  </span>
                                  <ol className="space-y-1 text-[#544340] list-decimal list-inside leading-relaxed">
                                    {meal.instructions.map((step, idx) => (
                                      <li key={idx}>{step}</li>
                                    ))}
                                  </ol>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* VIEW 2: HORMONAL PHASE STRATEGY */}
          {nutritionSubMode === 'hormonal_phase' && (
            <div className="space-y-5">
              {/* Phase filter pills */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                {[
                  { id: 'menstrual', label: 'Menstrual (Días 1-5)' },
                  { id: 'follicular', label: 'Folicular (Días 6-12)' },
                  { id: 'ovulatory', label: 'Ovulatoria (Días 13-16)' },
                  { id: 'luteal', label: 'Lútea (Días 17-28)' },
                ].map((p) => {
                  const isSelected = selectedPhase === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPhase(p.id as HormonalPhase)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-[#904639] text-white border-[#904639]'
                          : 'bg-white text-[#706663] border-[#dac1bd]/40 hover:bg-[#f6f3ee]'
                      }`}
                    >
                      {p.label}
                    </button>
                  );
                })}
              </div>

              {/* Macro Focus Card for 30+ */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-[#dac1bd]/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#904639]">
                      Estrategia Nutricional • {selectedPhase.toUpperCase()}
                    </span>
                    <h2 className="font-headline text-lg font-semibold text-[#1c1c19] mt-0.5">
                      {activeNutrition.title}
                    </h2>
                  </div>
                  <span className="text-xs bg-[#cfe5d1] text-[#536758] px-2.5 py-1 rounded-full font-bold">
                    Meta: ~{activeNutrition.targetProteinGrams}g proteína
                  </span>
                </div>

                <p className="text-xs text-[#544340] leading-relaxed">
                  {activeNutrition.hormoneSupportSummary}
                </p>

                {/* Micronutrient Badges */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-[#1c1c19] uppercase tracking-wider block mb-1.5">
                    Nutrientes de Apoyo Hormonal Clave:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeNutrition.keyNutrients.map((nut, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#f6f3ee] text-[#4f6353] border border-[#dac1bd]/30 px-2.5 py-1 rounded-lg font-medium flex items-center gap-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4f6353]"></span>
                        {nut}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Content for Fitness */}
      {activeTab === 'fitness' && (
        <div className="space-y-4">
          {/* Quick Rest & Tempo Timer (Free basic function) */}
          <div className="bg-[#f0ede9] rounded-2xl p-3.5 border border-[#dac1bd]/40 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#4f6353] text-[22px]">
                timer
              </span>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-[#1c1c19] block">
                    Temporizador de Descanso Articular
                  </span>
                  <span className="text-[10px] bg-[#cfe5d1] text-[#384b3d] font-bold px-1.5 py-0.2 rounded">
                    Gratuito
                  </span>
                </div>
                <span className="text-[11px] text-[#706663]">
                  Pausa de recuperación neuromuscular entre series
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                if (timerActive) {
                  setTimerActive(false);
                  setTimerSeconds(45);
                } else {
                  setTimerActive(true);
                }
              }}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#4f6353] text-white hover:bg-[#384b3d] transition-all cursor-pointer"
            >
              {timerActive ? `${timerSeconds}s (Parar)` : '45s Descanso'}
            </button>
          </div>

          {/* Freemium banner inside workouts if on free tier */}
          {subscription.tier === 'free' && (
            <div className="p-3 rounded-2xl bg-gradient-to-r from-[#ffdad4]/50 to-[#f6f3ee] border border-[#904639]/30 flex items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-bold text-[#1c1c19] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#904639]">
                    workspace_premium
                  </span>
                  Plato Fuerte: Rutinas Adaptadas 30+
                </span>
                <p className="text-[11px] text-[#544340] mt-0.5">
                  Las rutinas avanzadas de 30m y 45m incluyen progresión de cargas para sarcopenia. Accede por solo $7.99/mes.
                </p>
              </div>
              <button
                onClick={onOpenSubscription}
                className="shrink-0 px-3 py-1.5 bg-[#904639] text-white font-bold rounded-xl text-xs hover:bg-[#ae5e4f] shadow-xs cursor-pointer"
              >
                Desbloquear
              </button>
            </div>
          )}

          {/* Workout routines */}
          {activeWorkoutList.map((routine) => (
            <div
              key={routine.id}
              className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-[#dac1bd]/30 space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold bg-[#ffdad4] text-[#3c0702] px-2 py-0.5 rounded-full">
                      {routine.targetDuration} min
                    </span>
                    <span className="text-xs font-semibold text-[#4f6353] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">check_circle</span>
                      Sin impacto compresivo
                    </span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-[#1c1c19] mt-1">
                    {routine.title}
                  </h3>
                </div>
                <span className="text-xs text-[#87726f] bg-[#f6f3ee] px-2.5 py-1 rounded-lg font-medium">
                  {routine.intensity}
                </span>
              </div>

              <p className="text-xs text-[#544340] leading-relaxed">
                {routine.description}
              </p>

              {/* Equipment list */}
              <div className="flex items-center gap-2 text-xs text-[#706663]">
                <span className="font-semibold text-[#1c1c19]">Material sugerido:</span>
                <span>{routine.equipmentRequired.join(', ')}</span>
              </div>

              {/* Exercise steps */}
              <div className="space-y-2 pt-2 border-t border-[#dac1bd]/20">
                <span className="text-xs font-bold text-[#1c1c19] block">
                  Secuencia Segura para Articulaciones:
                </span>
                {routine.exercises.map((ex, i) => (
                  <div
                    key={i}
                    className="p-2.5 bg-[#fcf9f4] rounded-xl border border-[#dac1bd]/20 flex items-start justify-between gap-2 text-xs"
                  >
                    <div>
                      <span className="font-semibold text-[#1c1c19] block">
                        {i + 1}. {ex.name}
                      </span>
                      <span className="text-[11px] text-[#4f6353] italic">
                        Tip Elena: {ex.jointTip}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#904639] shrink-0">
                      {ex.setsReps}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Smoothie Suggestions Modal (Popup) */}
      <SmoothiePopupModal
        isOpen={isSmoothieModalOpen}
        onClose={() => setIsSmoothieModalOpen(false)}
      />
    </div>
  );
};
