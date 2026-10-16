import React, { useState, useEffect } from 'react';
import { WearableDevice, UserSubscription } from '../types';
import { OfficialLogoBadge } from './Logo';

interface WearablesSyncViewProps {
  wearables: WearableDevice[];
  onToggleConnect: (id: string) => void;
  onOpenCarnet?: () => void;
  onOpenSubscription?: () => void;
  subscription?: UserSubscription;
}

export const WearablesSyncView: React.FC<WearablesSyncViewProps> = ({
  wearables,
  onToggleConnect,
  onOpenCarnet,
  onOpenSubscription,
  subscription,
}) => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncSuccessMsg, setSyncSuccessMsg] = useState('');
  const [livePulse, setLivePulse] = useState(62);
  const [showTrialPrompt, setShowTrialPrompt] = useState(false);

  // Live heart rate pulse simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePulse((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        return Math.max(58, Math.min(68, prev + delta));
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleSyncAll = () => {
    setIsSyncing(true);
    setSyncSuccessMsg('');
    setTimeout(() => {
      setIsSyncing(false);
      setSyncSuccessMsg('¡Sincronización en tiempo real completada con éxito!');
      setTimeout(() => setSyncSuccessMsg(''), 3500);
    }, 1200);
  };

  const handleConnectDevice = (id: string) => {
    const target = wearables.find((w) => w.id === id);
    const willConnect = !target?.connected;
    onToggleConnect(id);

    // If connecting and user is on free tier, prompt 7-day trial Aha Moment
    if (willConnect && subscription?.tier === 'free') {
      setShowTrialPrompt(true);
    }
  };

  const activeDevice = wearables.find((w) => w.connected) || wearables[0];

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto px-4 pb-28 pt-2 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <OfficialLogoBadge size="sm" />
          <div>
            <h1 className="font-headline text-2xl text-[#1c1c19] font-medium leading-tight">
              Sincronización Biomédica
            </h1>
            <p className="text-xs text-[#706663] mt-0.5">
              Apple Watch, Oura Ring, Garmin, Whoop • VFC & Temperatura Basal
            </p>
          </div>
        </div>

        <button
          onClick={handleSyncAll}
          disabled={isSyncing}
          className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#4f6353] text-white hover:bg-[#384b3d] transition-all flex items-center gap-1.5 shadow-2xs disabled:opacity-50 cursor-pointer"
        >
          <span
            className={`material-symbols-outlined text-[16px] ${
              isSyncing ? 'animate-spin' : ''
            }`}
          >
            sync
          </span>
          <span>{isSyncing ? 'Sincronizando...' : 'Sincronizar'}</span>
        </button>
      </div>

      {syncSuccessMsg && (
        <div className="p-3 bg-[#cfe5d1] text-[#536758] rounded-xl text-xs font-semibold flex items-center gap-2 border border-[#4f6353]/30 animate-fadeIn">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>
          <span>{syncSuccessMsg}</span>
        </div>
      )}

      {/* 7-Day Free Trial Aha-Moment Banner (Semana 3) */}
      {showTrialPrompt && subscription?.tier === 'free' && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#cfe5d1]/80 via-[#fcf9f4] to-[#ffdad4]/60 border border-[#4f6353]/30 space-y-2 text-xs animate-fadeIn">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#4f6353] text-[22px] shrink-0 mt-0.5">
                watch_wake
              </span>
              <div>
                <span className="font-bold text-[#1c1c19] block text-sm">
                  ¡Dispositivo Vinculado! Disfruta 7 Días de Prueba Gratuita
                </span>
                <p className="text-[11px] text-[#544340] mt-0.5 leading-snug">
                  Descubre el <strong>Aha Moment</strong> de la correlación clínica continua: cómo tu VFC nocturna y temperatura basal anticipan tu energía y fases hormonales sin esfuerzo manual.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowTrialPrompt(false)}
              className="text-[#706663] hover:text-[#1c1c19] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>

          <div className="flex items-center justify-end gap-2 pt-1">
            <button
              onClick={() => {
                setShowTrialPrompt(false);
                onOpenSubscription?.();
              }}
              className="px-3 py-1.5 bg-[#4f6353] text-white font-bold rounded-xl text-xs hover:bg-[#384b3d] shadow-2xs cursor-pointer"
            >
              Activar 7 Días Gratis
            </button>
          </div>
        </div>
      )}

      {/* Primary Real-Time Dashboard Card */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-[#dac1bd]/30 space-y-4">
        <div className="flex items-center justify-between border-b border-[#dac1bd]/20 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4f6353] animate-ping"></span>
            <span className="text-xs font-bold text-[#1c1c19]">
              Transmisión Biomédica en Vivo
            </span>
          </div>
          <span className="text-[11px] text-[#706663]">
            Dispositivo principal: {activeDevice.name}
          </span>
        </div>

        {/* 4 Core Metrics for 30+ Health */}
        <div className="grid grid-cols-2 gap-3">
          {/* Heart Rate */}
          <div className="bg-[#fcf9f4] p-3.5 rounded-xl border border-[#dac1bd]/30 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-[#904639] font-bold">
              <span>Ritmo Cardíaco Reposo</span>
              <span className="material-symbols-outlined text-[18px] animate-pulse">
                favorite
              </span>
            </div>
            <div className="font-headline text-2xl font-bold text-[#1c1c19] mt-2">
              {livePulse} <span className="text-xs font-normal text-[#706663]">lpm</span>
            </div>
            <div className="text-[10px] text-[#4f6353] mt-1 flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[12px]">arrow_downward</span>
              <span>-3 lpm vs. promedio mensual</span>
            </div>
          </div>

          {/* HRV / VFC (Key indicator for women 30+ nervous system) */}
          <div className="bg-[#fcf9f4] p-3.5 rounded-xl border border-[#dac1bd]/30 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-[#4f6353] font-bold">
              <span>VFC (HRV) Nocturna</span>
              <span className="material-symbols-outlined text-[18px]">vital_signs</span>
            </div>
            <div className="font-headline text-2xl font-bold text-[#1c1c19] mt-2">
              {activeDevice.metrics.hrv}{' '}
              <span className="text-xs font-normal text-[#706663]">ms</span>
            </div>
            <div className="text-[10px] text-[#4f6353] mt-1 flex items-center gap-0.5">
              <span>+12% tono parasimpático restaurado</span>
            </div>
          </div>

          {/* Deep Sleep */}
          <div className="bg-[#fcf9f4] p-3.5 rounded-xl border border-[#dac1bd]/30 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-[#834e43] font-bold">
              <span>Sueño Profundo</span>
              <span className="material-symbols-outlined text-[18px]">bedtime</span>
            </div>
            <div className="font-headline text-2xl font-bold text-[#1c1c19] mt-2">
              1h 44m
            </div>
            <div className="text-[10px] text-[#706663] mt-1">
              {activeDevice.metrics.deepSleepMinutes} min (Óptimo para GH)
            </div>
          </div>

          {/* Basal Body Temperature */}
          <div className="bg-[#fcf9f4] p-3.5 rounded-xl border border-[#dac1bd]/30 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-[#b86657] font-bold">
              <span>Delta Temp Basal</span>
              <span className="material-symbols-outlined text-[18px]">thermostat</span>
            </div>
            <div className="font-headline text-2xl font-bold text-[#1c1c19] mt-2">
              +{activeDevice.metrics.basalTempDelta}°C
            </div>
            <div className="text-[10px] text-[#904639] mt-1">
              Confirma fase lútea progestágena
            </div>
          </div>
        </div>

        {/* Clinical Correlation Box */}
        <div className="p-3 bg-[#f6f3ee] rounded-xl border border-[#dac1bd]/30 text-xs text-[#544340] leading-relaxed space-y-1">
          <span className="font-bold text-[#1c1c19] flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px] text-[#4f6353]">
              health_and_safety
            </span>
            Correlación Clínica AuraVital:
          </span>
          <p>
            Tu elevación sostenida de temperatura (+0.2°C) y el leve ajuste en VFC ({activeDevice.metrics.hrv}ms) confirman una adecuada producción de progesterona tras la ovulación. No hay signos de sobreentrenamiento ni estrés suprarrenal.
          </p>
        </div>

        {/* Viral Share Story Button (Semana 2: Exportación a Story de Instagram) */}
        <button
          onClick={onOpenCarnet}
          className="w-full h-11 rounded-xl bg-gradient-to-r from-[#904639] via-[#b86657] to-[#ae5e4f] text-white font-bold text-xs sm:text-sm hover:opacity-95 shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-all"
        >
          <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
          <span>Exportar Carnet Hormonal a Story de Instagram (9:16)</span>
        </button>
      </div>

      {/* Available Wearable Devices List */}
      <div className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-[#1c1c19]">
          Dispositivos Vinculados & Compatibles
        </h2>

        {wearables.map((device) => (
          <div
            key={device.id}
            className={`p-3.5 rounded-xl bg-white border transition-all flex items-center justify-between ${
              device.connected
                ? 'border-[#4f6353]/40 shadow-xs'
                : 'border-[#dac1bd]/30 opacity-75'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  device.connected
                    ? 'bg-[#cfe5d1] text-[#536758]'
                    : 'bg-[#f0ede9] text-[#87726f]'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {device.icon}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-bold text-[#1c1c19]">
                    {device.name}
                  </h3>
                  {device.connected && (
                    <span className="text-[10px] bg-[#cfe5d1] text-[#536758] px-1.5 py-0.2 rounded font-semibold">
                      En línea
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[#706663]">
                  {device.model} • {device.lastSync}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleConnectDevice(device.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                device.connected
                  ? 'bg-[#f6f3ee] text-[#904639] hover:bg-[#ffdad4]'
                  : 'bg-[#4f6353] text-white hover:bg-[#384b3d]'
              }`}
            >
              {device.connected ? 'Desconectar' : 'Vincular'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
