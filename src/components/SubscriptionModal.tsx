import React, { useState } from 'react';
import { UserSubscription, BillingInterval } from '../types';
import confetti from 'canvas-confetti';
import { OfficialLogoBadge } from './Logo';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  subscription: UserSubscription;
  onUpgrade: (billing: BillingInterval) => void;
  onCancelSubscription: () => void;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  isOpen,
  onClose,
  subscription,
  onUpgrade,
  onCancelSubscription,
}) => {
  const [selectedBilling, setSelectedBilling] = useState<BillingInterval>(
    subscription.billing || 'annual'
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  if (!isOpen) return null;

  const handleSubscribe = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onUpgrade(selectedBilling);
      confetti({
        particleCount: 65,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#904639', '#4f6353', '#ffdad4', '#ffd700'],
      });
      setToastMessage('¡Bienvenida a AuraVital Pro! Todas las funciones premium han sido desbloqueadas.');
      setTimeout(() => {
        setToastMessage('');
        onClose();
      }, 1500);
    }, 900);
  };

  const handleDowngrade = () => {
    onCancelSubscription();
    setToastMessage('Has vuelto al Plan Esencial Gratuito.');
    setTimeout(() => {
      setToastMessage('');
      onClose();
    }, 1200);
  };

  const isAlreadyPro = subscription.tier === 'premium';

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1c19]/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-[#dac1bd]/40 space-y-4 my-8 animate-fadeIn">
        {/* Toast confirmation */}
        {toastMessage && (
          <div className="p-3 bg-[#cfe5d1] text-[#384b3d] rounded-xl text-xs font-semibold flex items-center gap-2 border border-[#4f6353]/30 animate-pulse">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-[#dac1bd]/30 pb-3">
          <div className="flex items-center gap-3">
            <OfficialLogoBadge size="md" />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-headline text-xl font-bold text-[#1c1c19]">
                  AuraVital Pro 30+
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#ffdad4] text-[#3c0702] px-2 py-0.5 rounded-full">
                  Acceso Total
                </span>
              </div>
              <p className="text-xs text-[#706663] mt-0.5">
                Desbloquea el plato fuerte: IA hormonal, rutinas clínicas y reportes
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#706663] hover:bg-[#f6f3ee] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Status Badge */}
        <div className="p-3 rounded-xl bg-[#f6f3ee] border border-[#dac1bd]/30 flex items-center justify-between text-xs">
          <span className="text-[#544340]">
            Tu estado actual:{' '}
            <strong className={isAlreadyPro ? 'text-[#4f6353]' : 'text-[#904639]'}>
              {isAlreadyPro ? 'Vital Pro Activo' : 'Plan Esencial (Gratis)'}
            </strong>
          </span>
          {isAlreadyPro && (
            <button
              onClick={handleDowngrade}
              className="text-[11px] text-[#87726f] hover:text-[#ba1a1a] underline"
            >
              Cambiar a Gratuito
            </button>
          )}
        </div>

        {/* Billing Switcher (Under $10/mo constraint) */}
        <div className="bg-[#f0ede9] p-1.5 rounded-2xl flex items-center justify-between gap-1">
          <button
            type="button"
            onClick={() => setSelectedBilling('monthly')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-center transition-all ${
              selectedBilling === 'monthly'
                ? 'bg-white text-[#1c1c19] shadow-xs font-bold'
                : 'text-[#706663] hover:text-[#1c1c19] font-medium'
            }`}
          >
            <div className="text-xs">Mensual</div>
            <div className="font-headline text-base text-[#904639]">
              $7.99 <span className="text-[10px] text-[#706663] font-normal">/ mes</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setSelectedBilling('annual')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-center relative transition-all ${
              selectedBilling === 'annual'
                ? 'bg-white text-[#1c1c19] shadow-xs font-bold'
                : 'text-[#706663] hover:text-[#1c1c19] font-medium'
            }`}
          >
            <span className="absolute -top-2 right-2 bg-[#4f6353] text-white text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full shadow-2xs">
              Ahorra 27% • 7 días gratis
            </span>
            <div className="text-xs">Anual (Recomendado)</div>
            <div className="font-headline text-base text-[#4f6353]">
              $5.83 <span className="text-[10px] text-[#706663] font-normal">/ mes ($69.99/año)</span>
            </div>
          </button>
        </div>

        {/* Feature Comparison Table */}
        <div className="space-y-2 pt-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#1c1c19]">
            ¿Qué incluye tu plan?
          </h3>

          <div className="rounded-2xl border border-[#dac1bd]/30 overflow-hidden divide-y divide-[#dac1bd]/20 text-xs">
            {/* Free features */}
            <div className="p-2.5 bg-[#fcf9f4] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#4f6353]">check</span>
                <span className="text-[#544340]">Descarga gratis & temporizador articular básico</span>
              </div>
              <span className="text-[10px] bg-[#cfe5d1] text-[#384b3d] font-semibold px-2 py-0.5 rounded">
                Gratis
              </span>
            </div>

            <div className="p-2.5 bg-[#fcf9f4] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#4f6353]">check</span>
                <span className="text-[#544340]">Registro menstrual diario y seguimiento general</span>
              </div>
              <span className="text-[10px] bg-[#cfe5d1] text-[#384b3d] font-semibold px-2 py-0.5 rounded">
                Gratis
              </span>
            </div>

            {/* Premium "Plato Fuerte" */}
            <div className="p-2.5 bg-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#904639]">star</span>
                <span className="font-semibold text-[#1c1c19]">
                  Rutinas guiadas adaptadas por Elena (15, 30 y 45m)
                </span>
              </div>
              <span className="text-[10px] bg-[#ffdad4] text-[#904639] font-bold px-2 py-0.5 rounded">
                PRO
              </span>
            </div>

            <div className="p-2.5 bg-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#904639]">star</span>
                <span className="font-semibold text-[#1c1c19]">
                  Nutrición metabólica hormonal & macros anti-sarcopenia 35+
                </span>
              </div>
              <span className="text-[10px] bg-[#ffdad4] text-[#904639] font-bold px-2 py-0.5 rounded">
                PRO
              </span>
            </div>

            <div className="p-2.5 bg-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#904639]">star</span>
                <span className="font-semibold text-[#1c1c19]">
                  Sincronización ilimitada en tiempo real de Wearables
                </span>
              </div>
              <span className="text-[10px] bg-[#ffdad4] text-[#904639] font-bold px-2 py-0.5 rounded">
                PRO
              </span>
            </div>

            <div className="p-2.5 bg-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#904639]">star</span>
                <span className="font-semibold text-[#1c1c19]">
                  Exportación de Reportes Clínicos en PDF (Médico & Ginecóloga)
                </span>
              </div>
              <span className="text-[10px] bg-[#ffdad4] text-[#904639] font-bold px-2 py-0.5 rounded">
                PRO
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial snippet */}
        <div className="p-3 bg-[#f6f3ee] rounded-xl border border-[#dac1bd]/20 flex items-start gap-2.5 text-xs text-[#544340]">
          <span className="material-symbols-outlined text-[#904639] text-[18px] shrink-0">format_quote</span>
          <p className="italic leading-snug">
            "Por menos de lo que cuesta un café a la semana tengo mis rutinas para articulaciones y el PDF mensual que mi ginecóloga ama." — <strong>Andrea V., 37 años</strong>
          </p>
        </div>

        {/* CTA Button */}
        <div className="space-y-2 pt-1">
          <button
            type="button"
            onClick={handleSubscribe}
            disabled={isProcessing}
            className="w-full h-12 rounded-xl bg-[#904639] text-white font-semibold text-xs sm:text-sm hover:bg-[#ae5e4f] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isAlreadyPro ? 'published_with_changes' : 'lock_open'}
            </span>
            <span>
              {isProcessing
                ? 'Activando tu membresía...'
                : isAlreadyPro
                ? `Actualizar suscripción (${selectedBilling === 'annual' ? '$69.99/año' : '$7.99/mes'})`
                : selectedBilling === 'annual'
                ? 'Comenzar 7 Días Gratis • luego $69.99/año'
                : 'Suscribirme por solo $7.99 / mes'}
            </span>
          </button>

          <div className="flex items-center justify-center gap-2 text-[10px] text-[#87726f]">
            <span className="material-symbols-outlined text-[12px] text-[#4f6353]">verified_user</span>
            <span>Cobro seguro. Máximo $7.99/mes. Cancela en 1 clic cuando quieras.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
