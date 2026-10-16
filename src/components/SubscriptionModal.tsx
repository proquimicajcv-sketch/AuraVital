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
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly'>('annual');
  const [isProcessing, setIsProcessing] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  if (!isOpen) return null;

  const handleActivate = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onUpgrade(selectedPlan);
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#904639', '#4f6353', '#ffdad4', '#ffd700'],
      });
      setToastMessage('¡Prueba gratuita de 3 días activada con éxito! Bienvenido a AuraVital Pro.');
      setTimeout(() => {
        setToastMessage('');
        onClose();
      }, 1600);
    }, 900);
  };

  const isAlreadyPro = subscription.tier === 'premium';

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1c19]/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-[#dac1bd]/40 space-y-5 my-6 max-h-[94vh] overflow-y-auto relative">
        {/* Equis "X" arriba para cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar ventana emergente"
          className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-[#706663] hover:text-[#1c1c19] hover:bg-[#f6f3ee] transition-all cursor-pointer z-10"
        >
          <span className="material-symbols-outlined text-[22px]">close</span>
        </button>

        {/* Toast confirmation */}
        {toastMessage && (
          <div className="p-3 bg-[#cfe5d1] text-[#384b3d] rounded-2xl text-xs font-semibold flex items-center gap-2 border border-[#4f6353]/30 animate-pulse">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Encabezado */}
        <div className="text-center space-y-2 pr-6 sm:pr-0">
          <div className="flex justify-center mb-1">
            <OfficialLogoBadge size="md" />
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#1c1c19] tracking-tight">
            AuraVital Pro
          </h2>
          <p className="font-body text-sm sm:text-base text-[#544340] max-w-md mx-auto leading-snug">
            Tu fisiología en sincronía. Domina tu energía, metabolismo y ciclo después de los 30.
          </p>
        </div>

        {/* Beneficios Clave */}
        <div className="space-y-3 bg-[#fcf9f4] p-4 sm:p-4.5 rounded-2xl border border-[#dac1bd]/40">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#904639] block mb-1">
            Beneficios Clave:
          </span>

          <div className="space-y-2.5 text-xs">
            {/* Beneficio 1 */}
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#4f6353] text-[18px] shrink-0 mt-0.5">
                vital_signs
              </span>
              <p className="text-[#1c1c19] leading-relaxed">
                <strong className="text-[#1c1c19]">Correlación Biomédica Continua:</strong> Interpretación en tiempo real de tu VFC, temperatura basal y sueño cruzados con tus fases hormonales.
              </p>
            </div>

            {/* Beneficio 2 */}
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#904639] text-[18px] shrink-0 mt-0.5">
                psychology
              </span>
              <p className="text-[#1c1c19] leading-relaxed">
                <strong className="text-[#1c1c19]">Elena Coach 24/7:</strong> Ajustes diarios de ejercicio funcional y nutrición antiinflamatoria según tu gasto metabólico real.
              </p>
            </div>

            {/* Beneficio 3 */}
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#834e43] text-[18px] shrink-0 mt-0.5">
                description
              </span>
              <p className="text-[#1c1c19] leading-relaxed">
                <strong className="text-[#1c1c19]">Exportación de Informes Clínicos:</strong> Reportes descargables en PDF listos para tu ginecólogo o médico funcional.
              </p>
            </div>

            {/* Beneficio 4 */}
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#4f6353] text-[18px] shrink-0 mt-0.5">
                spa
              </span>
              <p className="text-[#1c1c19] leading-relaxed">
                <strong className="text-[#1c1c19]">Protocolos de Regulación Vagal:</strong> Micro-rutinas guiadas para mitigar el cortisol elevado y la niebla mental en fase lútea.
              </p>
            </div>
          </div>
        </div>

        {/* Selector de Planes (Cards de Precio) */}
        <div className="space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#706663] block">
            Selecciona tu Plan:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Plan Anual (Card) */}
            <div
              onClick={() => setSelectedPlan('annual')}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                selectedPlan === 'annual'
                  ? 'border-[#904639] bg-[#fffaf8] shadow-md ring-2 ring-[#904639]/20'
                  : 'border-[#dac1bd]/40 bg-white hover:border-[#904639]/50'
              }`}
            >
              {/* Badge: Opción Más Elegida • Ahorra 40% */}
              <span className="absolute -top-2.5 right-3 bg-[#4f6353] text-white text-[9.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-2xs">
                Opción Más Elegida • Ahorra 40%
              </span>

              <div className="space-y-1 mt-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-headline font-bold text-sm text-[#1c1c19]">
                    Plan Anual
                  </h4>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selectedPlan === 'annual' ? 'border-[#904639] bg-[#904639]' : 'border-[#dac1bd]'
                  }`}>
                    {selectedPlan === 'annual' && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
                  </div>
                </div>

                <div className="pt-1">
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline text-2xl font-black text-[#904639]">
                      $5.75
                    </span>
                    <span className="text-xs text-[#706663] font-medium">/ mes</span>
                  </div>
                  <p className="text-[11px] text-[#544340] font-semibold">
                    (Facturado en un solo pago anual de $69.00 USD)
                  </p>
                </div>
              </div>

              <div className="pt-2 mt-2 border-t border-[#dac1bd]/30">
                <p className="text-[10.5px] text-[#4f6353] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">verified</span>
                  3 días de prueba gratuita completa. Cancela cuando quieras desde tu perfil.
                </p>
              </div>
            </div>

            {/* Plan Mensual (Card) */}
            <div
              onClick={() => setSelectedPlan('monthly')}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                selectedPlan === 'monthly'
                  ? 'border-[#904639] bg-[#fffaf8] shadow-md ring-2 ring-[#904639]/20'
                  : 'border-[#dac1bd]/40 bg-white hover:border-[#904639]/50'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-headline font-bold text-sm text-[#1c1c19]">
                    Plan Mensual
                  </h4>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selectedPlan === 'monthly' ? 'border-[#904639] bg-[#904639]' : 'border-[#dac1bd]'
                  }`}>
                    {selectedPlan === 'monthly' && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
                  </div>
                </div>

                <div className="pt-1">
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline text-2xl font-black text-[#1c1c19]">
                      $8.99
                    </span>
                    <span className="text-xs text-[#706663] font-medium">/ mes</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 mt-2 border-t border-[#dac1bd]/30">
                <p className="text-[10.5px] text-[#706663] font-medium leading-tight">
                  Flexibilidad total con cobro mensual recurrente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Llamado a la Acción Principal (CTA) */}
        <div className="space-y-2 pt-1">
          <button
            type="button"
            onClick={handleActivate}
            disabled={isProcessing}
            className="w-full h-13 rounded-2xl bg-[#904639] text-white font-bold text-sm sm:text-base hover:bg-[#ae5e4f] active:scale-[0.99] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-[20px]">
              {selectedPlan === 'annual' ? 'star' : 'lock_open'}
            </span>
            <span>
              {isProcessing
                ? 'Activando periodo de prueba...'
                : 'Activar mis 3 días de prueba gratuita'}
            </span>
          </button>

          {/* Micro-texto de Confianza y Urgencia (Footer del Paywall) */}
          <p className="text-center text-[10.5px] sm:text-[11px] text-[#706663] leading-relaxed px-2">
            Hoy pagas $0.00. Tu periodo de prueba vence en 72 horas; te enviaremos un recordatorio 24 horas antes del primer cobro. Cifrado seguro de datos de salud.
          </p>

          {isAlreadyPro && (
            <div className="text-center pt-1">
              <button
                type="button"
                onClick={onCancelSubscription}
                className="text-[11px] text-[#87726f] hover:text-[#ba1a1a] underline cursor-pointer"
              >
                Volver a versión gratuita
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
