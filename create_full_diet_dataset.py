# -*- coding: utf-8 -*-
import json

# Define the 7 days of the week metadata
DAYS_INFO = [
    ("eco_lun", "Lunes", "Reinicio Hepático y Estabilidad Glucémica", 4.40, 92, False, "Cocino una bandeja grande de verduras los lunes para acompañar todas mis comidas y reducir el tiempo en la cocina."),
    ("eco_mar", "Martes", "Fibra Soluble y Protección del Estroboloma", 4.20, 89, False, "Dejo las legumbres en remojo con un trozo de alga kombu para hacerlas ultra digestivas y potenciar el hierro vegetal."),
    ("eco_mie", "Miércoles", "Regulación de Insulina y Grasas Saludables", 4.60, 94, True, "Añado siempre una cucharada de semillas de sésamo o chía molidas a las ensaladas para apoyar la fase de eliminación hormonal."),
    ("eco_jue", "Jueves", "Densidad Nutricional y Alivio Neuro-Vagal", 4.30, 91, True, "Bato la sopa con un chorrito de aceite de oliva virgen extra en crudo para maximizar la absorción de carotenoides."),
    ("eco_vie", "Viernes", "Antiinflamatorio Articular y Regeneración", 4.80, 96, True, "Doro los filetes de pescado a fuego medio solo unos minutos por lado para preservar sus ácidos grasos intactos."),
    ("eco_sab", "Sábado", "Energía Mitocondrial y Síntesis de Colágeno", 4.50, 93, True, "Preparo tortitas de avena caseras los sábados con huevo y canela; aportan energía sostenida sin elevar la insulina."),
    ("eco_dom", "Domingo", "Batch Cooking y Calma para el Sistema Nervioso", 4.70, 95, True, "Organizo los táperes de proteínas y hojas verdes limpias para tener paz mental y comer limpio toda la semana.")
]

DAYS_INFO_EQ = [
    ("eq_lun", "Lunes", "Sinergia Hormonal & Control Glucémico Continuo", 7.80, 102, True, "Combino siempre proteína magra con grasa cardiosaludable en cada comida para mantener la glucemia en línea plana."),
    ("eq_mar", "Martes", "Depuración de Estrógenos & Salud Celular", 8.20, 105, True, "Salteo el brócoli y las coles solo al dente para mantener activo el sulforafano y proteger el hígado."),
    ("eq_mie", "Miércoles", "Regulación de Cortisol & Apoyo Suprarrenal", 8.00, 104, True, "Añado cúrcuma y pimienta negra a mis revueltos; es mi antiinflamatorio natural favorito para las articulaciones."),
    ("eq_jue", "Jueves", "Tono Muscular 30+ & Balance Neurotransmisores", 8.40, 108, True, "Horneo las batatas con romero y AOVE; son el carbohidrato complejo perfecto para favorecer el triptófano vespertino."),
    ("eq_vie", "Viernes", "Optimización de Fase Lútea & Progesterona", 8.60, 110, True, "Cocino el salmón a la plancha dejando la piel crujiente; el aporte de DHA marino calma la tensión premenstrual."),
    ("eq_sab", "Sábado", "Recarga de Glucógeno Limpio & Fuerza Articular", 8.50, 106, True, "Tuesto las semillas de calabaza antes de añadirlas a las cremas; aportan zinc biodisponible y un toque crujiente único."),
    ("eq_dom", "Domingo", "Restauración Intestinal & Preparación Consciente", 7.90, 103, True, "Preparo kéfir con frutos silvestres; cuidar la microbiota es la clave maestra para un metabolismo ágil después de los 30.")
]

DAYS_INFO_FLEX = [
    ("flex_lun", "Lunes", "Longevidad Activa & Alta Densidad de Micronutrientes", 10.20, 114, True, "Selecciono pescados azules salvajes y carnes de pasto para asegurar un perfil de ácidos grasos equilibrado."),
    ("flex_mar", "Martes", "Flexibilidad Metabólica & Sensibilidad a la Insulina", 10.60, 118, True, "Integro bayas silvestres ricas en polifenoles que combaten el estrés oxidativo articular tras el ejercicio."),
    ("flex_mie", "Miércoles", "Protección de Cartílago & Síntesis de Elastina", 10.40, 115, True, "Añado colágeno hidrolizado soluble a mis batidos matutinos para cuidar la flexibilidad de tendones y fascia."),
    ("flex_jue", "Jueves", "Regulación Hormonal Fina & Recuperación Parasimpática", 10.80, 120, True, "Cocino el lomo de atún sellado a fuego vivo; su contenido en selenio es fundamental para la función tiroidea."),
    ("flex_vie", "Viernes", "Anti-Aging Metabólico & Resiliencia Celular", 10.90, 116, True, "Aromatizo con hierbas provenzales y orégano seco; potencian la digestión de proteínas sin necesidad de salsas pesadas."),
    ("flex_sab", "Sábado", "Equilibrio Neuro-Endocrino & Vitalidad Plena", 10.50, 112, True, "Preparo aguacate relleno de huevo horneado; saciedad inmediata que evita el picoteo dulce de media tarde."),
    ("flex_dom", "Domingo", "Plenitud Nutricional & Sosiego Biológico", 10.70, 117, True, "Elaboro una crema tibia de calabaza asada con semillas de cáñamo; calma el nervio vago y prepara para dormir profundamente.")
]

print("Metadata ready.")
