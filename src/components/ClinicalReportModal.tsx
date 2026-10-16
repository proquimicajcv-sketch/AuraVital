import React, { useState } from 'react';
import jsPDF from 'jspdf';
import confetti from 'canvas-confetti';
import { UserSubscription } from '../types';
import { OfficialLogoBadge } from './Logo';

interface ClinicalReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  subscription: UserSubscription;
  onOpenSubscription: () => void;
}

export const ClinicalReportModal: React.FC<ClinicalReportModalProps> = ({
  isOpen,
  onClose,
  subscription,
  onOpenSubscription,
}) => {
  const [recipient, setRecipient] = useState<'gynecologist' | 'general_physician' | 'nutritionist'>(
    'gynecologist'
  );
  const [patientNotes, setPatientNotes] = useState(
    'Consulta programada para revisión de fase lútea, suplementación con magnesio y descartar desbalance de progesterona.'
  );
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    setIsGenerating(true);

    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const recipientTitles = {
        gynecologist: 'Ginecología & Salud Reproductiva 30+',
        general_physician: 'Medicina General & Medicina Preventiva',
        nutritionist: 'Nutrición Clínica & Metabolismo Hormonal',
      };

      // Header Brand
      doc.setFillColor(144, 70, 57); // #904639
      doc.rect(0, 0, 210, 24, 'F');

      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.text('AURAVITAL • REPORTE CLÍNICO MENSUAL', 15, 14);

      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text('Inteligencia Biológica Femenina 30+ | Datos Cifrados', 15, 20);

      // Recipient & Patient Info Box
      doc.setTextColor(28, 28, 25);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text('DATOS DE LA PACIENTE & ESPECIALIDAD', 15, 34);

      doc.setDrawColor(218, 193, 189);
      doc.setLineWidth(0.3);
      doc.rect(15, 37, 180, 26);

      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text('Nombre Paciente: Valeria Morales', 20, 44);
      doc.text('Edad: 36 años', 20, 50);
      doc.text('Periodo Evaluado: 01 Oct 2026 - 31 Oct 2026', 20, 56);

      doc.text(`Destinado a: ${recipientTitles[recipient]}`, 105, 44);
      doc.text('Duración Media del Ciclo: 28 días (Regular)', 105, 50);
      doc.text('Dispositivo Sincronizado: Apple Watch + Oura Ring', 105, 56);

      // Section 1: Biomarker Summary
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('1. MÉTRICAS BIOMÉDICAS Y FISIOLÓGICAS (PROMEDIO MENSUAL)', 15, 73);

      doc.setFillColor(246, 243, 238);
      doc.rect(15, 76, 180, 32, 'F');
      doc.rect(15, 76, 180, 32, 'D');

      doc.setFontSize(8.5);
      doc.setFont('helvetica', 'bold');
      doc.text('Parámetro Fisiológico', 20, 83);
      doc.text('Valor Registrado', 90, 83);
      doc.text('Rango Referencia / Interpretación', 140, 83);

      doc.setFont('helvetica', 'normal');
      doc.text('Frecuencia Cardíaca Reposo (RHR):', 20, 90);
      doc.text('61 lpm', 90, 90);
      doc.text('Tono cardiovascular normal', 140, 90);

      doc.text('Variabilidad Cardíaca (HRV nocturna):', 20, 96);
      doc.text('64 ms', 90, 96);
      doc.text('Adecuada adaptación al estrés', 140, 96);

      doc.text('Delta de Temperatura Basal:', 20, 102);
      doc.text('+0.22 °C (Fase Lútea)', 90, 102);
      doc.text('Ovulación confirmada', 140, 102);

      // Section 2: Clinical Symptoms & Joint Health
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('2. ANÁLISIS DE SÍNTOMAS & INTEGRIDAD ARTICULAR', 15, 118);

      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text('• Dolor o rigidez articular reportada: 2 episodios leves en región lumbar (Días 1 y 21 del ciclo).', 18, 126);
      doc.text('• Tolerancia al ejercicio: 100% de rutinas adaptadas sin compresión articular completadas.', 18, 132);
      doc.text('• Calidad del sueño profundo: Promedio de 1h 44m por noche (óptimo para regeneración tisular).', 18, 138);
      doc.text('• Niveles de energía: Pico en fase folicular (4.5/5), ligero descenso en lútea tardía (3.2/5).', 18, 144);

      // Section 3: Nutrition & Metabolism
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('3. METABOLISMO, GLUCEMIA & PROTEÍNA (30+)', 15, 156);

      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text('• Consumo proteico diario promedio: 94 gramos (1.5g/kg de peso corporal).', 18, 164);
      doc.text('• Estrategia glucémica: Eliminación de picos de azúcar vespertinos mediante fibra y grasas Omega-3.', 18, 170);
      doc.text('• Micronutrientes activos: Magnesio glicinato (300mg/noche), Vitamina B6 y zinc.', 18, 176);

      // Section 4: Patient Notes
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('4. OBSERVACIONES DE LA PACIENTE PARA LA CONSULTA', 15, 188);

      doc.setFontSize(8.5);
      doc.setFont('helvetica', 'italic');
      doc.text(`"${patientNotes}"`, 18, 196, { maxWidth: 175 });

      // Medical Sign Box
      doc.setDrawColor(200, 200, 200);
      doc.line(15, 245, 95, 245);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.text('Firma / Sello del Especialista Tratante', 15, 250);

      doc.line(115, 245, 195, 245);
      doc.text('Firma de la Paciente', 115, 250);

      // Footer
      doc.setFontSize(7.5);
      doc.setTextColor(135, 114, 111);
      doc.text('Generado por AuraVital Health Systems. Cumple con estándares de privacidad y seguridad clínica HIPAA / RGPD.', 15, 280);

      // Save PDF
      doc.save(`AuraVital_Reporte_Clinico_${recipient}_Octubre2026.pdf`);

      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#904639', '#4f6353', '#cfe5d1'],
      });
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1c19]/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-5 sm:p-6 shadow-2xl border border-[#dac1bd]/40 space-y-4 my-8 animate-fadeIn">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#dac1bd]/30 pb-3">
          <div className="flex items-center gap-3">
            <OfficialLogoBadge size="md" />
            <div>
              <h2 className="font-headline text-lg font-bold text-[#1c1c19]">
                Exportar Reporte Mensual en PDF
              </h2>
              <p className="text-xs text-[#706663]">
                Diseñado para revisión con tu equipo médico y de nutrición
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#706663] hover:bg-[#f6f3ee]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Recipient Selector */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#1c1c19] uppercase tracking-wider block">
            Selecciona el Especialista de Destino:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'gynecologist', label: 'Ginecóloga / Ginecólogo', icon: 'female' },
              { id: 'general_physician', label: 'Médico General', icon: 'stethoscope' },
              { id: 'nutritionist', label: 'Nutricionista', icon: 'nutrition' },
            ].map((sp) => {
              const isSelected = recipient === sp.id;
              return (
                <button
                  key={sp.id}
                  onClick={() => setRecipient(sp.id as any)}
                  className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                    isSelected
                      ? 'bg-[#904639] text-white border-[#904639] shadow-xs'
                      : 'bg-[#f6f3ee] text-[#544340] border-[#dac1bd]/30 hover:bg-[#ebe8e3]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">{sp.icon}</span>
                  <span className="text-[11px] font-semibold leading-tight">{sp.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Preview of PDF contents */}
        <div className="p-4 rounded-xl bg-[#fcf9f4] border border-[#dac1bd]/40 space-y-2.5 text-xs text-[#544340]">
          <div className="flex items-center justify-between border-b border-[#dac1bd]/20 pb-2">
            <span className="font-bold text-[#1c1c19]">
              Vista Previa del Documento Oficial:
            </span>
            <span className="text-[11px] bg-[#cfe5d1] text-[#536758] px-2 py-0.5 rounded font-bold">
              Formato A4 Listo para Impresión
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div>• <strong className="text-[#1c1c19]">Ciclo:</strong> 28 días, regular</div>
            <div>• <strong className="text-[#1c1c19]">Temperatura:</strong> +0.22°C (Lútea)</div>
            <div>• <strong className="text-[#1c1c19]">HRV Promedio:</strong> 64 ms</div>
            <div>• <strong className="text-[#1c1c19]">Articulaciones:</strong> 2 eventos leves</div>
            <div>• <strong className="text-[#1c1c19]">Proteína:</strong> 94g/día (Meta cumplida)</div>
            <div>• <strong className="text-[#1c1c19]">Sueño profundo:</strong> 1h 44m</div>
          </div>
        </div>

        {/* Patient Personal Notes */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-[#1c1c19] block">
            Notas u Observaciones previas para la consulta médica:
          </label>
          <textarea
            rows={2}
            value={patientNotes}
            onChange={(e) => setPatientNotes(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-xl bg-[#f6f3ee] border border-[#dac1bd]/40 focus:outline-none focus:ring-1 focus:ring-[#904639] text-[#1c1c19]"
          />
        </div>

        {/* Pro membership banner if free tier */}
        {subscription.tier === 'free' && (
          <div className="p-3 rounded-xl bg-[#ffdad4]/40 border border-[#ffdad4] flex items-center justify-between gap-3 text-xs text-[#3c0702]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-[#904639]">
                workspace_premium
              </span>
              <span>
                Exportación oficial en PDF: incluida de forma ilimitada en el <strong>Plato Fuerte ($7.99/mes)</strong>.
              </span>
            </div>
            <button
              onClick={onOpenSubscription}
              className="shrink-0 px-2.5 py-1 bg-[#904639] text-white font-semibold rounded-lg hover:bg-[#ae5e4f] text-[11px]"
            >
              Ver Planes
            </button>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-[#dac1bd]/30">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-[#706663] hover:bg-[#f6f3ee]"
          >
            Cerrar
          </button>

          <button
            onClick={handleDownloadPDF}
            disabled={isGenerating}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#904639] text-white hover:bg-[#ae5e4f] shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>
              {isGenerating
                ? 'Generando PDF...'
                : subscription.tier === 'premium'
                ? 'Descargar PDF Clínico (PRO)'
                : 'Descargar Muestra de Reporte'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
