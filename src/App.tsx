/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import {
  TabType,
  ClinicalGoal,
  EquipmentItem,
  WearableDevice,
  ForumPost,
  UserSubscription,
  BillingInterval,
  BudgetTier,
} from './types';
import {
  INITIAL_CLINICAL_GOALS,
  INITIAL_EQUIPMENT,
  INITIAL_WEARABLES,
  WORKOUT_ROUTINES,
  NUTRITION_PLANS,
  FORUM_POSTS,
} from './data/initialData';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { OnboardingAssessment } from './components/OnboardingAssessment';
import { DashboardView } from './components/DashboardView';
import { CycleCalendarView } from './components/CycleCalendarView';
import { NutritionWorkoutView } from './components/NutritionWorkoutView';
import { WearablesSyncView } from './components/WearablesSyncView';
import { CommunityForumView } from './components/CommunityForumView';
import { ClinicalReportModal } from './components/ClinicalReportModal';
import { SelfCareModal } from './components/SelfCareModal';
import { SubscriptionModal } from './components/SubscriptionModal';
import { HormonalCarnetModal } from './components/HormonalCarnetModal';
import { VagalHormonalQuizModal } from './components/VagalHormonalQuizModal';
import { ProtocolsModal } from './components/ProtocolsModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('today');
  const [goals, setGoals] = useState<ClinicalGoal[]>(INITIAL_CLINICAL_GOALS);
  const [equipment, setEquipment] = useState<EquipmentItem[]>(INITIAL_EQUIPMENT);
  const [wearables, setWearables] = useState<WearableDevice[]>(INITIAL_WEARABLES);
  const [posts, setPosts] = useState<ForumPost[]>(FORUM_POSTS);
  const [selectedDuration, setSelectedDuration] = useState<15 | 30 | 45>(30);

  // User food budget tier preference: economico is 100% Free; equilibrado and flexible are Pro
  const [budgetTier, setBudgetTier] = useState<BudgetTier>(() => {
    try {
      const saved = localStorage.getItem('auravital_budget_tier');
      if (saved && (saved === 'economico' || saved === 'equilibrado' || saved === 'flexible')) {
        return saved as BudgetTier;
      }
    } catch {
      // ignore
    }
    return 'economico';
  });

  const handleUpdateBudgetTier = (tier: BudgetTier) => {
    setBudgetTier(tier);
    try {
      localStorage.setItem('auravital_budget_tier', tier);
    } catch {
      // ignore
    }
  };

  // Freemium subscription state: defaults to Free, max $10/mo constraint respected ($7.99/mo or $69.99/yr)
  const [subscription, setSubscription] = useState<UserSubscription>(() => {
    try {
      const saved = localStorage.getItem('auravital_membership');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return {
      tier: 'free',
      billing: 'annual',
      isActive: true,
      trialDaysLeft: 7,
      monthlyPrice: 7.99,
      annualPrice: 69.99,
    };
  });

  // Modals
  const [isSelfCareOpen, setIsSelfCareOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [isCarnetOpen, setIsCarnetOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isProtocolsOpen, setIsProtocolsOpen] = useState(false);

  // Upgrade handler
  const handleUpgrade = (billing: BillingInterval) => {
    const updated: UserSubscription = {
      ...subscription,
      tier: 'premium',
      billing,
      isActive: true,
    };
    setSubscription(updated);
    try {
      localStorage.setItem('auravital_membership', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // Downgrade / Cancel handler
  const handleCancelSubscription = () => {
    const updated: UserSubscription = {
      ...subscription,
      tier: 'free',
    };
    setSubscription(updated);
    try {
      localStorage.setItem('auravital_membership', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // Toggle handlers for clinical goals
  const handleToggleGoal = (id: string) => {
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, selected: !g.selected } : g))
    );
  };

  // Toggle handlers for equipment
  const handleToggleEquipment = (id: string) => {
    setEquipment((prev) =>
      prev.map((e) => (e.id === id ? { ...e, selected: !e.selected } : e))
    );
  };

  // Toggle wearable connection
  const handleToggleConnect = (id: string) => {
    setWearables((prev) =>
      prev.map((w) =>
        w.id === id
          ? {
              ...w,
              connected: !w.connected,
              lastSync: !w.connected ? 'Justo ahora' : w.lastSync,
            }
          : w
      )
    );
  };

  // Forum actions
  const handleLikePost = (postId: string) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          const liked = !post.userLiked;
          return {
            ...post,
            userLiked: liked,
            likesCount: liked ? post.likesCount + 1 : post.likesCount - 1,
          };
        }
        return post;
      })
    );
  };

  const handleAddPost = (newPostData: Partial<ForumPost>) => {
    const newPost: ForumPost = {
      id: `post_${Date.now()}`,
      author: newPostData.author || 'Valeria M.',
      authorAge: newPostData.authorAge || 35,
      authorTag: newPostData.authorTag || 'Comunidad 30+',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCqTbziQd1kDzMVEg6eSN-tzw-lte10FXsYz4xs_EaKu-NCAWKZj9HnIoK55200uzij_RMlFCt9y89f33cLtU3ZjsNw1GdkRQPOU-rXqkB8JGA0V01ePxfO8iWMll9c2MakACojgC0lzpBcwt4y5E2fyb5b6BbP-3MsOyUAgRzCzTjU6BzDGzBfvNXz0sl62vY2Slnr85F6SK7EbjYG1NQW4GWVqOyPsQiTN2W2wQ7Nm81N-S9cTFBo1g',
      isAnonymous: Boolean(newPostData.isAnonymous),
      timeAgo: 'Justo ahora',
      title: newPostData.title || '',
      content: newPostData.content || '',
      category: newPostData.category || 'hormonal_balance',
      likesCount: 1,
      userLiked: true,
      commentsCount: 0,
    };
    setPosts([newPost, ...posts]);
  };

  const connectedWearable = wearables.find((w) => w.connected) || wearables[0];

  return (
    <div className="min-h-screen bg-[#fcf9f4] text-[#1c1c19] flex flex-col font-body antialiased">
      {/* Top Application Header (Cleaned up, calm & uncluttered) */}
      <Header
        currentTab={currentTab}
        onNavigate={setCurrentTab}
        onOpenSelfCare={() => setIsSelfCareOpen(true)}
        onOpenReportModal={() => setIsReportModalOpen(true)}
        subscription={subscription}
        onOpenSubscription={() => setIsSubscriptionModalOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenProtocols={() => setIsProtocolsOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full max-w-4xl mx-auto pt-3">
        {currentTab === 'onboarding' && (
          <OnboardingAssessment
            goals={goals}
            equipment={equipment}
            onToggleGoal={handleToggleGoal}
            onToggleEquipment={handleToggleEquipment}
            onNavigate={setCurrentTab}
            budgetTier={budgetTier}
            onSelectBudgetTier={handleUpdateBudgetTier}
          />
        )}

        {currentTab === 'today' && (
          <DashboardView
            onNavigate={setCurrentTab}
            onOpenSelfCare={() => setIsSelfCareOpen(true)}
            onOpenReportModal={() => setIsReportModalOpen(true)}
            selectedDuration={selectedDuration}
            onChangeDuration={setSelectedDuration}
            routines={WORKOUT_ROUTINES}
            nutritionPlans={NUTRITION_PLANS}
            wearable={connectedWearable}
            subscription={subscription}
            onOpenSubscription={() => setIsSubscriptionModalOpen(true)}
          />
        )}

        {currentTab === 'calendar' && <CycleCalendarView />}

        {currentTab === 'nutrition_fitness' && (
          <NutritionWorkoutView
            routines={WORKOUT_ROUTINES}
            nutritionPlans={NUTRITION_PLANS}
            subscription={subscription}
            onOpenSubscription={() => setIsSubscriptionModalOpen(true)}
            initialBudgetTier={budgetTier}
            onUpdateBudgetTier={handleUpdateBudgetTier}
          />
        )}

        {currentTab === 'wearables' && (
          <WearablesSyncView
            wearables={wearables}
            onToggleConnect={handleToggleConnect}
            onOpenCarnet={() => setIsCarnetOpen(true)}
            onOpenSubscription={() => setIsSubscriptionModalOpen(true)}
            subscription={subscription}
          />
        )}

        {currentTab === 'community' && (
          <CommunityForumView
            posts={posts}
            onAddPost={handleAddPost}
            onLikePost={handleLikePost}
          />
        )}
      </main>

      {/* Persistent Bottom Dock Navigation */}
      <BottomNav currentTab={currentTab} onSelectTab={setCurrentTab} />

      {/* Clinical PDF Report Modal ("Dossier Hormonal Clínico") */}
      <ClinicalReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        subscription={subscription}
        onOpenSubscription={() => {
          setIsReportModalOpen(false);
          setIsSubscriptionModalOpen(true);
        }}
      />

      {/* Subtle Emotional Wellness / 4-7-8 Breathing Modal */}
      <SelfCareModal
        isOpen={isSelfCareOpen}
        onClose={() => setIsSelfCareOpen(false)}
      />

      {/* Freemium & Pro Membership Modal (3 Tiers + 14-day micro protocols) */}
      <SubscriptionModal
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
        subscription={subscription}
        onUpgrade={handleUpgrade}
        onCancelSubscription={handleCancelSubscription}
        onOpenProtocols={() => {
          setIsSubscriptionModalOpen(false);
          setIsProtocolsOpen(true);
        }}
      />

      {/* Hormonal Carnet 9:16 Viral Story Modal */}
      <HormonalCarnetModal
        isOpen={isCarnetOpen}
        onClose={() => setIsCarnetOpen(false)}
        hrvChangePercent={12}
        phaseName="Fase Folicular"
        sleepScore={88}
      />

      {/* Open Clinical Calculator: Test de Dominancia & Fatiga Vagal */}
      <VagalHormonalQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onGoToNutrition={() => {
          setIsQuizOpen(false);
          setCurrentTab('nutrition_fitness');
        }}
      />

      {/* 14-Day Specialized Protocols Modal ($12 - $17) */}
      <ProtocolsModal
        isOpen={isProtocolsOpen}
        onClose={() => setIsProtocolsOpen(false)}
        onOpenSubscription={() => {
          setIsProtocolsOpen(false);
          setIsSubscriptionModalOpen(true);
        }}
      />
    </div>
  );
}
