import React, { useState } from 'react';
import { HORMONAL_PROTOCOLS } from '../data/initialData';
import { OfficialLogoBadge } from './Logo';
import confetti from 'canvas-confetti';

interface ProtocolsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSubscription: () => void;
}

export const ProtocolsModal: React.FC<ProtocolsModalProps> = ({
  isOpen,
  onClose,
  onOpenSubscription,
}) => {
  const [purchasedId, setPurchasedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string>('');

  if (!isOpen) return null;

  const handlePurchase = (protoId: string, title: string) => {
    setPurchasedId(protoId);
    confetti({
      particleCount: 60,
      spread: 75,
      origin: { y: 0.6 },
    });
    setToastMessage(`¡Acceso desbloqueado de por vida a "${title}"!`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1c19]/65 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-5 sm:p-6 shadow-2xl border border-[#dac1bd]/40 space-y-4 my-6 animate-fadeIn max-h-[92vh] overflow-y-auto">
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
            <OfficialLogoBadge size="sm" />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-headline text-lg font-bold text-[#1c1c19]">
                  Protocolos Específicos de 14 Días
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#f0ede9] text-[#544340] px-2 py-0.5 rounded-full">
                  Pago Único • Sin Suscripción
                </span>
              </div>
              <p className="text-xs text-[#706663] mt-0.5">
                Mini-cursos clínicos intensivos para objetivos biológicos concretos
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

        {/* Informative banner */}
        <div className="p-3 bg-[#fcf9f4] rounded-2xl border border-[#dac1bd]/30 flex items-start gap-2.5 text-xs text-[#544340]">
          <span className="material-symbols-outlined text-[#904639] text-[20px] shrink-0 mt-0.5">
            lock_open
          </span>
          <p className="leading-relaxed">
            Diseñados para quienes buscan resolver un síntoma puntual sin atarse a una cuota mensual recurrente. Pago accesible de <strong>$14.99 a $16.99</strong> con acceso de por vida y materiales descargables.
          </p>
        </div>

        {/* Protocols List */}
        <div className="space-y-4">
          {HORMONAL_PROTOCOLS.map((proto) => {
            const isUnlocked = purchasedId === proto.id;

            return (
              <div
                key={proto.id}
                className="bg-[#fcf9f4] rounded-2xl p-4 sm:p-5 border border-[#dac1bd]/40 space-y-3 shadow-2xs hover:border-[#904639]/40 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#ffdad4] text-[#3c0702] px-2.5 py-0.5 rounded-full">
                        {proto.badge}
                      </span>
                      <span className="text-xs font-semibold text-[#706663]">
                        {proto.durationDays} Días Clínicos
                      </span>
                    </div>

                    <h3 className="font-headline text-base font-bold text-[#1c1c19] mt-1">
                      {proto.title}
                    </h3>
                    <p className="text-xs text-[#87726f] mt-0.5">
                      {proto.subtitle}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-headline font-bold text-lg text-[#904639] block">
                      ${proto.oneTimePrice}
                    </span>
                    <span className="text-[10px] text-[#706663]">pago único</span>
                  </div>
                </div>

                <p className="text-xs text-[#544340] leading-relaxed">
                  {proto.description}
                </p>

                {/* Highlights */}
                <div className="bg-white p-3 rounded-xl border border-[#dac1bd]/30 space-y-1.5 text-xs">
                  <span className="font-bold text-[#1c1c19] block">
                    Contenido Incluido:
                  </span>
                  <ul className="space-y-1 text-[#544340]">
                    {proto.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4f6353]"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Purchase Button */}
                <div className="pt-1 flex items-center justify-between">
                  {isUnlocked ? (
                    <span className="text-xs font-bold text-[#4f6353] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">check_circle</span>
                      Protocolo Activo en tu Perfil
                    </span>
                  ) : (
                    <button
                      onClick={() => handlePurchase(proto.id, proto.title)}
                      className="px-4 py-2 bg-[#904639] text-white text-xs font-bold rounded-xl hover:bg-[#ae5e4f] shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
                      <span>Adquirir por ${proto.oneTimePrice}</span>
                    </button>
                  )}

                  <span className="text-[10px] text-[#706663]">
                    Garantía clínica de 14 días
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info: Pro also includes all protocols */}
        <div className="p-3 bg-[#f6f3ee] rounded-xl border border-[#dac1bd]/20 flex items-center justify-between text-xs">
          <span className="text-[#544340]">
            ¿Quieres todos los protocolos + sincronización continua?
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenSubscription();
            }}
            className="text-[#904639] font-bold hover:underline cursor-pointer"
          >
            Ver AuraVital Pro ($7.99/mes)
          </button>
        </div>
      </div>
    </div>
  );
};
