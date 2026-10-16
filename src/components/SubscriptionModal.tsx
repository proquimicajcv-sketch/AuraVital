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
  onOpenProtocols?: () => void;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  isOpen,
  onClose,
  subscription,
  onUpgrade,
  onCancelSubscription,
  onOpenProtocols,
}) => {
  const [selectedBilling, setSelectedBilling] = useState<BillingInterval>(
    subscription.billing || 'annual'
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [activeTab, setActiveTab] = useState<'tiers' | 'protocols'>('tiers');

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
      setToastMessage('¡Bienvenida al Plan Hormonal Pro! Todas las funciones avanzadas han sido activadas.');
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
      <div className="bg-white rounded-3xl max-w-xl w-full p-5 sm:p-6 shadow-2xl border border-[#dac1bd]/40 space-y-4 my-8 animate-fadeIn max-h-[92vh] overflow-y-auto">
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
                  AuraVital • Membresías & Planes
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#ffdad4] text-[#3c0702] px-2 py-0.5 rounded-full">
                  30+ Salud Femenina
                </span>
              </div>
              <p className="text-xs text-[#706663] mt-0.5">
                Modelos flexibles adaptados a tu ritmo biológico y estilo de vida
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

        {/* Navigation Tabs: Suscripción Pro vs Micro-pagos Protocolos */}
        <div className="flex rounded-xl bg-[#f0ede9] p-1 gap-1 text-xs font-bold">
          <button
            onClick={() => setActiveTab('tiers')}
            className={`flex-1 py-1.5 rounded-lg text-center transition-all cursor-pointer ${
              activeTab === 'tiers'
                ? 'bg-white text-[#1c1c19] shadow-xs'
                : 'text-[#706663] hover:text-[#1c1c19]'
            }`}
          >
            Suscripción AuraVital Pro
          </button>
          <button
            onClick={() => setActiveTab('protocols')}
            className={`flex-1 py-1.5 rounded-lg text-center transition-all cursor-pointer ${
              activeTab === 'protocols'
                ? 'bg-white text-[#1c1c19] shadow-xs'
                : 'text-[#706663] hover:text-[#1c1c19]'
            }`}
          >
            Protocolos 14 Días (Pago Único)
          </button>
        </div>

        {activeTab === 'tiers' ? (
          <>
            {/* Status Badge */}
            <div className="p-3 rounded-xl bg-[#f6f3ee] border border-[#dac1bd]/30 flex items-center justify-between text-xs">
              <span className="text-[#544340]">
                Tu estado actual:{' '}
                <strong className={isAlreadyPro ? 'text-[#4f6353]' : 'text-[#904639]'}>
                  {isAlreadyPro ? 'Plan Hormonal Pro Activo' : 'Plan Esencial (Gratis)'}
                </strong>
              </span>
              {isAlreadyPro && (
                <button
                  onClick={handleDowngrade}
                  className="text-[11px] text-[#87726f] hover:text-[#ba1a1a] underline cursor-pointer"
                >
                  Cambiar a Gratuito
                </button>
              )}
            </div>

            {/* Billing Switcher (Under $10/mo constraint: $7.99/mo or $5.83/mo billed annually $69.99) */}
            <div className="bg-[#f0ede9] p-1.5 rounded-2xl flex items-center justify-between gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedBilling('monthly')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-center transition-all cursor-pointer ${
                  selectedBilling === 'monthly'
                    ? 'bg-white text-[#1c1c19] shadow-xs font-bold'
                    : 'text-[#706663] hover:text-[#1c1c19] font-medium'
                }`}
              >
                <div className="text-xs">Mensual Flexible</div>
                <div className="font-headline text-base text-[#904639]">
                  $7.99 <span className="text-[10px] text-[#706663] font-normal">/ mes</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedBilling('annual')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-center relative transition-all cursor-pointer ${
                  selectedBilling === 'annual'
                    ? 'bg-white text-[#1c1c19] shadow-xs font-bold'
                    : 'text-[#706663] hover:text-[#1c1c19] font-medium'
                }`}
              >
                <span className="absolute -top-2 right-2 bg-[#4f6353] text-white text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full shadow-2xs">
                  Ahorra 27% • 7 días prueba
                </span>
                <div className="text-xs">Anual Recomendado</div>
                <div className="font-headline text-base text-[#4f6353]">
                  $5.83 <span className="text-[10px] text-[#706663] font-normal">/ mes ($69/año)</span>
                </div>
              </button>
            </div>

            {/* Estructura de 3 Niveles (Tiering Comparison) */}
            <div className="space-y-2 pt-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1c1c19]">
                Estructura de Niveles AuraVital:
              </h3>

              <div className="rounded-2xl border border-[#dac1bd]/30 overflow-hidden divide-y divide-[#dac1bd]/20 text-xs">
                {/* Tier 1: Free */}
                <div className="p-3 bg-[#fcf9f4] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#1c1c19] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#4f6353]">check_circle</span>
                      Nivel 1: Free (Esencial)
                    </span>
                    <span className="text-[10px] bg-[#cfe5d1] text-[#384b3d] font-bold px-2 py-0.5 rounded">
                      $0 Siempre
                    </span>
                  </div>
                  <p className="text-[11px] text-[#544340] pl-6">
                    Mapeo de ciclo biológico, registro diario de síntomas en &lt; 10s, 1 recomendación nutricional al día y Menú Económico base (~€32/sem).
                  </p>
                </div>

                {/* Tier 2: Pro */}
                <div className="p-3 bg-white space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#904639] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#904639]">workspace_premium</span>
                      Nivel 2: AuraVital Pro
                    </span>
                    <span className="text-[10px] bg-[#ffdad4] text-[#3c0702] font-bold px-2 py-0.5 rounded">
                      $7.99/mes ó $69/año
                    </span>
                  </div>
                  <p className="text-[11px] text-[#1c1c19] pl-6 leading-relaxed">
                    Sincronización continua de wearables (VFC en tiempo real, Oura, Apple Watch), correlación clínica con IA (Elena Coach), recetas antiinflamatorias completas (Equilibrado y Flexible) y rutinas guiadas de 30 y 45m.
                  </p>
                </div>

                {/* Tier 3: One-Time Dossier Add-on */}
                <div className="p-3 bg-[#fcf9f4] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#834e43] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#834e43]">description</span>
                      Nivel 3 / Add-on: Dossier para tu Médico
                    </span>
                    <span className="text-[10px] bg-[#f0ede9] text-[#544340] font-bold px-2 py-0.5 rounded">
                      $14.99 Pago Único (o incluido en Pro)
                    </span>
                  </div>
                  <p className="text-[11px] text-[#544340] pl-6">
                    Exportable PDF clínico de alta resolución con gráficas de 3 ciclos, correlación VFC-temperatura basal y marcadores de fase lútea para tu ginecóloga.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial snippet */}
            <div className="p-3 bg-[#f6f3ee] rounded-xl border border-[#dac1bd]/20 flex items-start gap-2.5 text-xs text-[#544340]">
              <span className="material-symbols-outlined text-[#904639] text-[18px] shrink-0">format_quote</span>
              <p className="italic leading-snug">
                "Por menos de lo que cuesta un café a la semana tengo mis rutinas adaptadas y el dossier mensual que mi ginecóloga valoró muchísimo." — <strong>Andrea V., 37 años</strong>
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
                    ? 'Activando tu Plan Pro...'
                    : isAlreadyPro
                    ? `Actualizar suscripción (${selectedBilling === 'annual' ? '$69.99/año' : '$7.99/mes'})`
                    : selectedBilling === 'annual'
                    ? 'Comenzar 7 Días de Prueba Gratis • luego $69/año'
                    : 'Activar Plan Pro por solo $7.99 / mes'}
                </span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#87726f]">
                <span className="material-symbols-outlined text-[12px] text-[#4f6353]">verified_user</span>
                <span>Cobro seguro. Máximo $7.99/mes. Cancela en 1 clic cuando quieras.</span>
              </div>
            </div>
          </>
        ) : (
          /* Protocols One-Time Tab ($12 - $17) */
          <div className="space-y-3.5">
            <div className="p-3 bg-[#f6f3ee] rounded-xl border border-[#dac1bd]/30 text-xs text-[#544340]">
              <span className="font-bold text-[#1c1c19] block mb-0.5">
                ¿Prefieres evitar suscripciones recurrentes?
              </span>
              Nuestros mini-cursos y protocolos clínicos de 14 días son de <strong>pago único accesible ($12 - $17)</strong> y acceso para siempre.
            </div>

            <div className="space-y-2.5">
              {[
                {
                  id: 'cortisol',
                  title: 'Protocolo Reset de Cortisol & Nervio Vago',
                  price: '$14.99',
                  badge: 'Neuro-Vagal',
                  desc: '14 días de estimulación diafragmática y nutrición nocturna para frenar el despertar con alerta a las 3 AM.',
                },
                {
                  id: 'luteal',
                  title: 'Desinflamación Lútea 30+ & Insulina',
                  price: '$16.99',
                  badge: 'Metabolismo',
                  desc: 'Elimina retención de líquidos, migrañas y antojos premenstruales modulando la progesterona.',
                },
                {
                  id: 'sarcopenia',
                  title: 'Metabolismo & Masa Muscular Perimenopausia',
                  price: '$14.99',
                  badge: 'Longevidad 35+',
                  desc: 'Entrenamiento neuromuscular articular sin impacto y distribución proteica óptima.',
                },
              ].map((proto) => (
                <div
                  key={proto.id}
                  className="p-3.5 bg-white rounded-xl border border-[#dac1bd]/40 flex items-start justify-between gap-3 shadow-2xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#904639] bg-[#ffdad4]/50 px-2 py-0.2 rounded">
                        {proto.badge}
                      </span>
                      <h4 className="font-bold text-xs text-[#1c1c19]">
                        {proto.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-[#544340]">
                      {proto.desc}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-headline font-bold text-sm text-[#904639] block">
                      {proto.price}
                    </span>
                    <button
                      onClick={() => {
                        setToastMessage(`¡Protocolo "${proto.title}" adquirido con éxito!`);
                        confetti({ particleCount: 30 });
                        setTimeout(() => setToastMessage(''), 2500);
                      }}
                      className="mt-1 px-3 py-1 bg-[#4f6353] text-white text-[10px] font-bold rounded-lg hover:bg-[#384b3d] shadow-2xs cursor-pointer"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {onOpenProtocols && (
              <button
                onClick={() => {
                  onClose();
                  onOpenProtocols();
                }}
                className="w-full py-2 text-center text-xs text-[#904639] font-bold underline cursor-pointer"
              >
                Ver detalles completos y temario de los Protocolos →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
