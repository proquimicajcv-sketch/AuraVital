export type TabType = 'onboarding' | 'today' | 'calendar' | 'nutrition_fitness' | 'wearables' | 'community' | 'reports';

export type SubscriptionTier = 'free' | 'premium';
export type BillingInterval = 'monthly' | 'annual';

export interface UserSubscription {
  tier: SubscriptionTier;
  billing: BillingInterval;
  isActive: boolean;
  trialDaysLeft?: number;
  monthlyPrice: number; // e.g. 7.99
  annualPrice: number; // e.g. 69.99
}

export type HormonalPhase = 'menstrual' | 'follicular' | 'ovulatory' | 'luteal';

export interface ClinicalGoal {
  id: string;
  title: string;
  badge?: string;
  badgeType?: 'primary' | 'clinical' | 'neutral';
  description: string;
  selected: boolean;
}

export interface EquipmentItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  selected: boolean;
}

export interface UserCycleConfig {
  periodStartDay: number; // e.g. 1
  cycleLength: number; // e.g. 28 days
  periodDuration: number; // e.g. 5 days
  lutealLength: number; // e.g. 14 days
}

export interface DailySymptomLog {
  date: string; // YYYY-MM-DD
  energy: number; // 1-5
  mood: 'radiante' | 'serena' | 'sensible' | 'agotada' | 'reflexiva';
  cramps: number; // 0-3
  jointPain: boolean;
  sleepHours: number;
  flow?: 'none' | 'spotting' | 'light' | 'medium' | 'heavy';
  digestion?: 'ligera' | 'hinchazon' | 'gases' | 'estrenimiento';
  stress?: 'bajo' | 'moderado' | 'elevado' | 'sobrecarga';
  basalTemp?: number; // e.g. 36.6 °C
  breastTenderness?: boolean;
  waterRetention?: boolean;
  notes?: string;
  isPeriodStart?: boolean;
}

export interface HormonalProtocol {
  id: string;
  title: string;
  subtitle: string;
  durationDays: number;
  oneTimePrice: number; // e.g. 14.99
  category: 'cortisol' | 'progesterone' | 'metabolism';
  badge: string;
  description: string;
  highlights: string[];
  purchased?: boolean;
}

export interface WearableDevice {
  id: 'apple_watch' | 'oura_ring' | 'whoop' | 'garmin';
  name: string;
  model: string;
  icon: string;
  connected: boolean;
  lastSync: string;
  battery: number;
  metrics: {
    restingHeartRate: number; // bpm
    hrv: number; // ms
    deepSleepMinutes: number;
    remSleepMinutes: number;
    basalTempDelta: number; // e.g. +0.25 °C
    dailySteps: number;
    stressScore: number; // 1-100 (lower is calmer)
    recoveryScore: number; // 1-100
  };
}

export interface ForumPost {
  id: string;
  author: string;
  authorAge: number;
  authorTag: string;
  avatarUrl?: string;
  isAnonymous: boolean;
  timeAgo: string;
  title: string;
  content: string;
  category: 'hormonal_balance' | 'joint_health' | 'work_life' | 'nutrition' | 'perimenopause';
  likesCount: number;
  userLiked?: boolean;
  commentsCount: number;
  verifiedSpecialistReply?: {
    specialistName: string;
    specialistTitle: string;
    reply: string;
  };
}

export interface WorkoutRoutine {
  id: string;
  title: string;
  phase: HormonalPhase;
  targetDuration: 15 | 30 | 45;
  intensity: 'Baja - Restaurativa' | 'Moderada - Tono Articular' | 'Media/Alta - Fuerza Metabólica';
  equipmentRequired: string[];
  jointSafe: boolean;
  focusArea: string;
  description: string;
  exercises: {
    name: string;
    setsReps: string;
    jointTip: string;
  }[];
}

export interface SuggestedMeal {
  id: string;
  mealTime: 'Desayuno' | 'Almuerzo' | 'Cena' | 'Snack Hormonal';
  name: string;
  description: string;
  proteinGrams: number;
  imageUrl: string;
  isPremium: boolean; // Exactly 2 basic (free), rest are Plan Hormonal Pro
  elenaAction?: string;
  elenaQuote: string;
  prepTime: string;
  ingredients: string[];
  instructions: string[];
  estimatedCost?: number; // e.g. $1.80
}

export interface WeeklyDietDay {
  dayId: string;
  dayName: 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado' | 'Domingo';
  dayTheme: string;
  dailyEstimatedCost: number; // e.g. $4.50
  totalProtein: number; // e.g. 92
  isPremium: boolean; // Lunes & Martes are basic free; Miércoles-Domingo are Plan Hormonal Pro
  elenaDailyTip: string;
  meals: SuggestedMeal[];
}

export interface ShoppingListItem {
  category: 'Proteínas Asequibles' | 'Verduras & Frutas de Temporada' | 'Legumbres & Granos Inteligentes' | 'Grasas Esenciales';
  name: string;
  quantity: string;
  estimatedPrice: number;
  savingTip: string;
}

export type BudgetTier = 'economico' | 'equilibrado' | 'flexible';

export interface HormonalSmoothie {
  id: string;
  name: string;
  phase: HormonalPhase;
  phaseLabel: string;
  targetProtein: number;
  imageUrl: string;
  prepTime: string;
  hormoneBenefit: string;
  ingredients: string[];
  instructions: string;
  elenaTip: string;
}

export interface NutritionAdvice {
  id: string;
  phase: HormonalPhase;
  title: string;
  subtitle: string;
  targetProteinGrams: number;
  keyNutrients: string[];
  hormoneSupportSummary: string;
  suggestedMeals: SuggestedMeal[];
}
