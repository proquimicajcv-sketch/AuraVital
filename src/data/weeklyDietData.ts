import { WeeklyDietDay, ShoppingListItem, BudgetTier } from '../types';

export const BUDGET_TIER_CONFIG = {
  economico: {
    label: 'Económico & Inteligente',
    weeklyTarget: 32,
    dailyAvg: 4.5,
    subtitle: 'Proteínas accesibles de alto valor biológico (huevos, pollo, legumbres y pescado)',
    icon: 'savings',
    color: 'emerald',
  },
  equilibrado: {
    label: 'Equilibrado & Versátil',
    weeklyTarget: 58,
    dailyAvg: 8.2,
    subtitle: 'Variedad de salmón, pescados blancos, aguacate y verduras de temporada',
    icon: 'balance',
    color: 'amber',
  },
  flexible: {
    label: 'Flexible & Gourmet',
    weeklyTarget: 90,
    dailyAvg: 12.8,
    subtitle: 'Salmón fresco, frutos del bosque, semillas selectas y productos ecológicos',
    icon: 'restaurant_menu',
    color: 'rose',
  },
};

export const WEEKLY_DIETS: Record<BudgetTier, WeeklyDietDay[]> = {
  economico: [
  {
    "dayId": "eco_lun",
    "dayName": "Lunes",
    "dayTheme": "Arranque Vital & Estabilidad Glucémica",
    "dailyEstimatedCost": 4.2,
    "totalProtein": 94,
    "isPremium": false,
    "elenaDailyTip": "Recomendación de Elena: \"Cocino 3 huevos camperos a fuego muy lento con unas gotas de aceite de oliva virgen extra; los retiro cuando aún están jugosos y los coloco sobre pan tostado crujiente para estabilizar la glucosa desde primera hora.\"",
    "meals": [
      {
        "id": "eco_lun_1",
        "mealTime": "Desayuno",
        "name": "Tostada de pan de masa madre con huevos camperos revueltos y brotes de espinaca",
        "description": "Aporte de 24g de proteína biodisponible y colina para regular el cortisol matutino.",
        "proteinGrams": 24,
        "estimatedCost": 0.92,
        "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=85",
        "isPremium": false,
        "elenaQuote": "\"Cocino 3 huevos camperos a fuego muy lento con unas gotas de aceite de oliva virgen extra; los retiro cuando aún están jugosos y los coloco sobre pan tostado crujiente para estabilizar la glucosa desde primera hora.\"",
        "prepTime": "8 min",
        "ingredients": [
          "3 huevos frescos camperos orgánicos",
          "1 puñado de espinacas baby frescas",
          "1 rebanada de pan de masa madre tostada",
          "Aceite de oliva virgen extra y flor de sal"
        ],
        "instructions": [
          "Saltea las espinacas 1 minuto en la sartén con unas gotas de AOVE.",
          "Bate los huevos con sal marina y cuaja a fuego muy bajo 2 minutos removiendo lento.",
          "Sirve sobre la tostada caliente recién salida del tostador."
        ]
      },
      {
        "id": "eco_lun_2",
        "mealTime": "Almuerzo",
        "name": "Ensalada templada de pechuga de pollo a la plancha con brotes frescos y tomates cherry",
        "description": "32g de proteína magra limpia y antioxidantes vegetales sin provocar somnolencia vespertina.",
        "proteinGrams": 32,
        "estimatedCost": 1.76,
        "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85",
        "isPremium": false,
        "elenaQuote": "\"Cocino medio kilo de pechuga de pollo a la plancha los domingos con orégano y limón; la guardo en tiras en la nevera y así preparo este almuerzo proteico en solo 3 minutos sin encender fuego.\"",
        "prepTime": "12 min",
        "ingredients": [
          "160g de pechuga de pollo dorada a la plancha en tiras",
          "Brotes tiernos frescos y hojas de rúcula",
          "Tomates cherry partidos al medio",
          "Aceite de oliva virgen extra, zumo de limón y sal marina"
        ],
        "instructions": [
          "Dora la pechuga de pollo a la plancha con sal y limón 3 minutos por lado.",
          "Dispón la base de hojas verdes y cherrys en un cuenco hondo.",
          "Añade el pollo templado cortado en tiras y aliña con aceite de oliva virgen extra."
        ]
      },
      {
        "id": "eco_lun_3",
        "mealTime": "Snack Hormonal",
        "name": "Tazón de yogur natural cremoso con arándanos frescos, nueces y semillas de chía",
        "description": "Probióticos activos para el estroboloma y polifenoles que equilibran los estrógenos.",
        "proteinGrams": 14,
        "estimatedCost": 0.65,
        "imageUrl": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Mezclo un yogur natural entero sin azúcar con un puñado de arándanos frescos y 4 nueces; los polifenoles y probióticos calman el intestino en 2 minutos y protegen el estroboloma.\"",
        "prepTime": "3 min",
        "ingredients": [
          "200g de yogur natural cremoso sin azúcar",
          "Puñado generoso de arándanos frescos silvestres",
          "4 nueces de temporada partidas",
          "1 cucharadita de semillas de chía"
        ],
        "instructions": [
          "Vierte el yogur en un cuenco hondo.",
          "Corona con los arándanos frescos, las nueces troceadas y las semillas de chía."
        ]
      },
      {
        "id": "eco_lun_4",
        "mealTime": "Cena",
        "name": "Bowl mediterráneo de quinoa con huevo campero, calabacín salteado y brotes",
        "description": "Carbohidratos complejos de absorción lenta y aminoácidos esenciales para recarga nocturna.",
        "proteinGrams": 24,
        "estimatedCost": 1.05,
        "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Cuezo un vaso de quinoa el fin de semana y lo guardo en la nevera en un táper de cristal; por la noche solo salteo calabacín con un huevo y tengo una cena saciante en 7 minutos.\"",
        "prepTime": "10 min",
        "ingredients": [
          "80g de quinoa cocida templada",
          "1 huevo campero pochado o a la plancha",
          "1 calabacín pequeño en rodajas salteado",
          "Hojas verdes tiernas y aceite de oliva virgen extra"
        ],
        "instructions": [
          "Saltea el calabacín 3 minutos con aceite de oliva.",
          "Dispón la quinoa templada en un cuenco con las hojas verdes.",
          "Corona con el calabacín y el huevo recién hecho."
        ]
      }
    ]
  },
  {
    "dayId": "eco_mar",
    "dayName": "Martes",
    "dayTheme": "Apoyo Digestivo & Fibra Prebiótica",
    "dailyEstimatedCost": 4.1,
    "totalProtein": 92,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"Las lentejas castellanas con laurel y verduras aportan fibra prebiótica soluble que nutre a las bacterias del colon encargadas de eliminar el exceso de estrógenos.\"",
    "meals": [
      {
        "id": "eco_mar_1",
        "mealTime": "Desayuno",
        "name": "Porridge templado de avena integral con frutos del bosque, canela y semillas de lino",
        "description": "Betaglucanos calmantes y lignanos vegetales para regular los estrógenos desde primera hora.",
        "proteinGrams": 15,
        "estimatedCost": 0.58,
        "imageUrl": "https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Cocino la avena en agua con canela de Ceilán hasta que queda cremosa; las semillas de lino aportan lignanos esenciales para la eliminación hepática de estrógenos.\"",
        "prepTime": "6 min",
        "ingredients": [
          "45g de copos de avena integral finos",
          "200ml de agua o bebida vegetal sin azúcar",
          "1 cucharadita de canela de Ceilán pura",
          "Puñado de frutos del bosque frescos",
          "1 cucharada de semillas de lino dorado molidas"
        ],
        "instructions": [
          "Calienta la avena con el líquido en un cazo 4 minutos removiendo.",
          "Sirve en tazón, añade canela y decora con frutos del bosque y lino."
        ]
      },
      {
        "id": "eco_mar_2",
        "mealTime": "Almuerzo",
        "name": "Cazuela reconfortante de lentejas castellanas con verduras de la huerta al laurel",
        "description": "Hierro vegetal no hemo reforzado con vitamina C de pimientos y fibra fermentable.",
        "proteinGrams": 27,
        "estimatedCost": 1.15,
        "imageUrl": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Preparo una olla grande de lentejas con zanahoria, calabacín y puerro; el laurel facilita la digestión y evita cualquier tipo de hinchazón vespertina.\"",
        "prepTime": "20 min",
        "ingredients": [
          "180g de lentejas cocidas",
          "1 zanahoria y 1 puerro en dados",
          "1 hoja de laurel fresco",
          "Pimentón dulce de la Vera y aceite de oliva virgen extra"
        ],
        "instructions": [
          "Sofríe el puerro y la zanahoria con AOVE y una pizca de sal.",
          "Añade las lentejas, la hoja de laurel y cubre con caldo vegetal.",
          "Cocina a fuego lento 10 minutos y espolvorea pimentón."
        ]
      },
      {
        "id": "eco_mar_3",
        "mealTime": "Snack Hormonal",
        "name": "Gajos de manzana crujiente con canela de Ceilán y nueces troceadas",
        "description": "Pectina saciante que estabiliza el índice glucémico y frena el bajón de energía de las 5 PM.",
        "proteinGrams": 7,
        "estimatedCost": 0.45,
        "imageUrl": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Corto la manzana en láminas finas y la espolvoreo generosamente con canela; la pectina y las grasas saludables de las nueces calman el apetito de inmediato.\"",
        "prepTime": "3 min",
        "ingredients": [
          "1 manzana Fuji fresca en gajos",
          "1 cucharadita de canela de Ceilán pura",
          "4 nueces de temporada partidas"
        ],
        "instructions": [
          "Corta la manzana en rodajas parejas.",
          "Espolvorea la canela y acompaña con las nueces recién partidas."
        ]
      },
      {
        "id": "eco_mar_4",
        "mealTime": "Cena",
        "name": "Filete de merluza al vapor sobre lecho de calabacín, zanahoria y limón",
        "description": "Proteína blanca hipoalergénica de digestión ultrarrápida para optimizar la variabilidad cardíaca.",
        "proteinGrams": 28,
        "estimatedCost": 1.92,
        "imageUrl": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Coloco la merluza sobre una cama de calabacín en rodajas y la cocino al vapor 8 minutos con limón; es la cena más ligera para asegurar un sueño profundo y reparador.\"",
        "prepTime": "12 min",
        "ingredients": [
          "180g de lomo de merluza fresca o congelada",
          "1 calabacín en rodajas finas",
          "1 zanahoria rallada",
          "Zumo de limón fresco, sal marina y AOVE"
        ],
        "instructions": [
          "Dispón las verduras en la vaporera o sartén tapada con un chorrito de agua.",
          "Coloca el pescado encima, sazona y cocina tapado 8 minutos.",
          "Aliña con zumo de limón fresco y un hilo de aceite virgen extra."
        ]
      }
    ]
  },
  {
    "dayId": "eco_mie",
    "dayName": "Miércoles",
    "dayTheme": "Depuración Hepática & Vitalidad Vagal",
    "dailyEstimatedCost": 4.35,
    "totalProtein": 95,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"El brócoli contiene sulforafano, un compuesto que activa la vía Nrf2 en el hígado para desactivar metabolitos estrogénicos inflamatorios.\"",
    "meals": [
      {
        "id": "eco_mie_1",
        "mealTime": "Desayuno",
        "name": "Tortilla francesa esponjosa de espinacas tiernas con tomate provenzal y pan de centeno",
        "description": "Colina de yema y magnesio foliar para alimentar neurotransmisores calmantes.",
        "proteinGrams": 23,
        "estimatedCost": 0.88,
        "imageUrl": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Bato 2 huevos camperos con espinacas picadas a fuego suave; doblo la tortilla en medialuna para que quede jugosa por dentro y la acompaño de tomate fresco.\"",
        "prepTime": "7 min",
        "ingredients": [
          "2 huevos camperos frescos",
          "Puñado de espinacas baby picadas",
          "1 tomate maduro en rodajas con orégano",
          "1 rebanada de pan de centeno artesano"
        ],
        "instructions": [
          "Bate los huevos con las espinacas y una pizca de sal.",
          "Cuaja en sartén antiadherente 2 minutos por lado y dobla al medio.",
          "Sirve con las rodajas de tomate aliñadas y el pan de centeno."
        ]
      },
      {
        "id": "eco_mie_2",
        "mealTime": "Almuerzo",
        "name": "Salteado rápido de pechuga de pavo con brócoli, pimientos y sésamo tostado",
        "description": "Triptófano para síntesis de melatonina y sulforafano depurador de estrógenos.",
        "proteinGrams": 34,
        "estimatedCost": 1.85,
        "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Corto la pechuga de pavo en dados y la salteo en wok con flores pequeñas de brócoli y pimiento rojo; queda al dente en 6 minutos manteniendo intactas las vitaminas.\"",
        "prepTime": "12 min",
        "ingredients": [
          "170g de pechuga de pavo en dados",
          "1 taza de ramilletes de brócoli fresco",
          "1/2 pimiento rojo en juliana",
          "1 cucharada de semillas de sésamo tostado",
          "Aceite de oliva virgen extra y tamari bajo en sal"
        ],
        "instructions": [
          "Calienta el wok con un chorrito de aceite virgen extra.",
          "Saltea el pavo 3 minutos hasta dorar.",
          "Añade el brócoli y pimiento, saltea 4 minutos más y termina con sésamo."
        ]
      },
      {
        "id": "eco_mie_3",
        "mealTime": "Snack Hormonal",
        "name": "Batido verde detox con espinacas, pepino hidratante, manzana ácida y lima",
        "description": "Clorofila viva y potasio para drenar líquidos retenidos en la fase lútea.",
        "proteinGrams": 9,
        "estimatedCost": 0.62,
        "imageUrl": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Licúo hojas tiernas de espinaca con pepino con piel y medio vaso de agua fría; la clorofila oxigena las células y alivia la pesadez en piernas.\"",
        "prepTime": "4 min",
        "ingredients": [
          "1 taza de espinacas frescas",
          "1/2 pepino con piel bien lavado",
          "1/2 manzana verde ácida",
          "Zumo de 1/2 lima fresca",
          "200ml de agua filtrada fría"
        ],
        "instructions": [
          "Introduce todos los ingredientes en el vaso de la batidora.",
          "Tritura a máxima potencia 45 segundos hasta obtener textura sedosa."
        ]
      },
      {
        "id": "eco_mie_4",
        "mealTime": "Cena",
        "name": "Crema tibia de calabaza asada y jengibre fresco con semillas crujientes",
        "description": "Carotenos antioxidantes y jengibre antiinflamatorio para calmar el tubo digestivo.",
        "proteinGrams": 20,
        "estimatedCost": 1,
        "imageUrl": "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Asar la calabaza en dados con un trozo de jengibre y triturarla con caldo vegetal crea una crema aterciopelada que descongestiona la inflamación pélvica.\"",
        "prepTime": "15 min",
        "ingredients": [
          "250g de calabaza cocida o asada",
          "1 trocito de 2cm de jengibre fresco pelado",
          "1 huevo duro picado para aportar proteína",
          "1 cucharada de semillas de calabaza tostadas",
          "Caldo de verduras casero"
        ],
        "instructions": [
          "Tritura la calabaza caliente con el jengibre y el caldo hasta lograr textura aterciopelada.",
          "Sirve en cuenco hondo y corona con el huevo picado y las semillas crujientes."
        ]
      }
    ]
  },
  {
    "dayId": "eco_jue",
    "dayName": "Jueves",
    "dayTheme": "Equilibrio de Neurotransmisores & Magnesio",
    "dailyEstimatedCost": 4.4,
    "totalProtein": 93,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"Los garbanzos son una fuente estelar de vitamina B6, cofactor imprescindible para convertir el triptófano en serotonina y GABA.\"",
    "meals": [
      {
        "id": "eco_jue_1",
        "mealTime": "Desayuno",
        "name": "Tostada integral con aguacate triturado, huevo poché y semillas de lino",
        "description": "Ácido oleico y fosfolípidos que modulan la respuesta del cortisol al despertar.",
        "proteinGrams": 22,
        "estimatedCost": 1.08,
        "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Aplasto medio aguacate con unas gotas de limón sobre pan tostado y coloco encima un huevo poché; la yema líquida crea la salsa perfecta sin aditivos.\"",
        "prepTime": "7 min",
        "ingredients": [
          "1 rebanada de pan integral de espelta o centeno",
          "1/2 aguacate maduro",
          "1 huevo campero fresco",
          "Semillas de lino y escamas de sal marina"
        ],
        "instructions": [
          "Tuesta el pan hasta que quede crujiente.",
          "Aplasta el aguacate con sal y limón y unta la tostada.",
          "Poche el huevo 3 minutos en agua hirviendo con vinagre y coloca encima."
        ]
      },
      {
        "id": "eco_jue_2",
        "mealTime": "Almuerzo",
        "name": "Potaje casero de garbanzos con espinacas baby y comino digestivo",
        "description": "Vitamina B6 biodisponible y almidón resistente que nutre la microbiota antiinflamatoria.",
        "proteinGrams": 26,
        "estimatedCost": 1.12,
        "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Añado una pizca de comino molido al sofrito de ajo y cebolla; los garbanzos quedan ultrasuaves para el estómago y llenos de triptófano calmante.\"",
        "prepTime": "15 min",
        "ingredients": [
          "200g de garbanzos cocidos enjuagados",
          "2 puñados de espinacas frescas",
          "1 diente de ajo laminado",
          "1/2 cucharadita de comino molido",
          "Caldo vegetal y aceite de oliva"
        ],
        "instructions": [
          "Dora el ajo con una cucharada de aceite virgen extra.",
          "Agrega el comino, las espinacas y rehoga 1 minuto.",
          "Añade los garbanzos y medio vaso de caldo; hierve a fuego medio 8 minutos."
        ]
      },
      {
        "id": "eco_jue_3",
        "mealTime": "Snack Hormonal",
        "name": "Rodajas de plátano con cacao puro desgrasado y crema de cacahuete natural",
        "description": "Potasio, magnesio y grasas monoinsaturadas para prevenir espasmos musculares y calambres.",
        "proteinGrams": 10,
        "estimatedCost": 0.52,
        "imageUrl": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Corto medio plátano en rodajas con una cucharadita de crema de cacahuete 100% y cacao en polvo; calma la necesidad de dulce en 2 minutos sin elevar la glucosa.\"",
        "prepTime": "2 min",
        "ingredients": [
          "1 plátano pequeño en rodajas",
          "1 cucharada de crema de cacahuete 100% natural",
          "1 cucharadita de cacao puro desgrasado en polvo"
        ],
        "instructions": [
          "Dispón las rodajas de plátano en un platito.",
          "Añade la crema de cacahuete y espolvorea el cacao puro por encima."
        ]
      },
      {
        "id": "eco_jue_4",
        "mealTime": "Cena",
        "name": "Lomo de sardinas o caballa asada con ensalada fresca de tomate y orégano",
        "description": "Omega-3 de pescado azul pequeño, libre de metales pesados, para modular prostaglandinas.",
        "proteinGrams": 31,
        "estimatedCost": 1.68,
        "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Paso los lomitos de caballa por la plancha 2 minutos por lado con sal marina y limón; es la mayor concentración de EPA marino a un precio súper asequible.\"",
        "prepTime": "10 min",
        "ingredients": [
          "160g de filetes de caballa o sardinas frescas limpias",
          "1 tomate de huerta en gajos",
          "Orégano seco y aceite de oliva virgen extra",
          "Zumo de limón"
        ],
        "instructions": [
          "Cocina el pescado en plancha caliente 2 minutos por el lado de la piel y 1 minuto por el otro.",
          "Sirve con el tomate aliñado con orégano y AOVE."
        ]
      }
    ]
  },
  {
    "dayId": "eco_vie",
    "dayName": "Viernes",
    "dayTheme": "Regeneración Muscular & Descanso Celular",
    "dailyEstimatedCost": 4.5,
    "totalProtein": 96,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"Cerrar la semana con proteínas limpias de pollo y batata asada ayuda a reponer el glucógeno muscular gastado sin alterar el sueño profundo.\"",
    "meals": [
      {
        "id": "eco_vie_1",
        "mealTime": "Desayuno",
        "name": "Crepes de avena y clara de huevo rellenas de frutos rojos y canela",
        "description": "Proteína pura de fácil asimilación combinada con carbohidratos complejos.",
        "proteinGrams": 25,
        "estimatedCost": 0.95,
        "imageUrl": "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Trituro 3 claras, 1 huevo entero y 30g de avena con canela; vierto en la sartén bien caliente y tengo crepes saciantes cargadas de aminoácidos en 4 minutos.\"",
        "prepTime": "8 min",
        "ingredients": [
          "1 huevo campero + 3 claras",
          "30g de copos de avena finos",
          "Puñado de frambuesas o arándanos",
          "Canela de Ceilán pura"
        ],
        "instructions": [
          "Tritura el huevo, las claras y la avena hasta obtener masa líquida homogénea.",
          "Cocina en sartén antiadherente 1.5 minutos por lado.",
          "Rellena con los frutos rojos y espolvorea canela."
        ]
      },
      {
        "id": "eco_vie_2",
        "mealTime": "Almuerzo",
        "name": "Pechuga de pollo marinada al limón y romero con batata asada en dados",
        "description": "Vitamina A, potasio y proteína magra para soporte suprarrenal tras el esfuerzo laboral.",
        "proteinGrams": 35,
        "estimatedCost": 1.82,
        "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Manojo de romero fresco y zumo de limón para marinar el pollo; la batata asada aporta carbohidratos que nutren la tiroides sin disparar la insulina.\"",
        "prepTime": "15 min",
        "ingredients": [
          "170g de pechuga de pollo en filetes",
          "1 batata pequeña cortada en dados y cocida/asada",
          "Romero fresco picado y zumo de limón",
          "Aceite de oliva virgen extra y sal marina"
        ],
        "instructions": [
          "Dora la pechuga a la plancha con el romero y limón 3 minutos por lado.",
          "Saltea los dados de batata en la misma sartén para que absorban los jugos.",
          "Sirve caliente con una pizca de flor de sal."
        ]
      },
      {
        "id": "eco_vie_3",
        "mealTime": "Snack Hormonal",
        "name": "Cuenco de kéfir con semillas de calabaza y frambuesas silvestres",
        "description": "Microbiota fermentada activa y zinc para fortalecer la fase folicular y lútea.",
        "proteinGrams": 12,
        "estimatedCost": 0.68,
        "imageUrl": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"El kéfir tiene más de 30 cepas probióticas diferentes; con semillas de calabaza ricas en zinc protege el endometrio y la flora intestinal.\"",
        "prepTime": "2 min",
        "ingredients": [
          "180g de kéfir natural sin azúcar",
          "Puñado de frambuesas frescas",
          "1 cucharada de semillas de calabaza crudas"
        ],
        "instructions": [
          "Sirve el kéfir en cuenco.",
          "Añade las frambuesas y las semillas de calabaza."
        ]
      },
      {
        "id": "eco_vie_4",
        "mealTime": "Cena",
        "name": "Tortilla abierta de champiñones laminados, cebolla pochada y perejil fresco",
        "description": "Ergotioneína antioxidante fúngica y colina en una cena liviana libre de gluten.",
        "proteinGrams": 24,
        "estimatedCost": 1.05,
        "imageUrl": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Salteo los champiñones con ajo y perejil antes de añadir los huevos batidos; la textura queda sedosa y no produce sensación de pesadez nocturna.\"",
        "prepTime": "10 min",
        "ingredients": [
          "3 huevos camperos",
          "150g de champiñones limpios laminados",
          "1/2 cebolla dulce pochada",
          "Perejil fresco picado y aceite de oliva"
        ],
        "instructions": [
          "Saltea los champiñones y la cebolla en sartén con AOVE hasta dorar.",
          "Vierte los huevos batidos y cocina a fuego suave hasta cuajar la base.",
          "Espolvorea perejil fresco y sirve templada."
        ]
      }
    ]
  },
  {
    "dayId": "eco_sab",
    "dayName": "Sábado",
    "dayTheme": "Recarga Celular & Cocina Consciente",
    "dailyEstimatedCost": 4.6,
    "totalProtein": 95,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"El licopeno del tomate cocinado con aceite de oliva es un antioxidante celular potente para la salud vascular ovárica.\"",
    "meals": [
      {
        "id": "eco_sab_1",
        "mealTime": "Desayuno",
        "name": "Shakshuka mediterránea rápida con huevos escalfados en salsa de tomate y pimientos",
        "description": "Licopeno biodisponible con grasas saludables para la salud mitocondrial.",
        "proteinGrams": 22,
        "estimatedCost": 0.98,
        "imageUrl": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Cocino tomate triturado con pimientos y comino en una sartén de hierro; abro 2 huevos en el centro y los tapo 3 minutos hasta que la clara cuaja y la yema queda líquida.\"",
        "prepTime": "12 min",
        "ingredients": [
          "2 huevos camperos frescos",
          "200g de tomate triturado natural",
          "1/2 pimiento verde y 1/2 rojo picados",
          "Pizca de comino, pimentón y AOVE"
        ],
        "instructions": [
          "Sofríe los pimientos en la sartén con AOVE 4 minutos.",
          "Añade el tomate y especias, cocina 4 minutos a fuego medio.",
          "Haz dos huecos, casca los huevos, tapa y cocina 3 minutos."
        ]
      },
      {
        "id": "eco_sab_2",
        "mealTime": "Almuerzo",
        "name": "Arroz integral meloso con calamares y verduras de temporada",
        "description": "Proteína marina baja en grasa y carbohidratos integrales de liberación gradual.",
        "proteinGrams": 30,
        "estimatedCost": 1.95,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"El calamar aporta proteína magra rica en zinc y selenio sin grasa saturada; cocinado con arroz integral y verduras es un plato dominical perfecto.\"",
        "prepTime": "20 min",
        "ingredients": [
          "160g de calamares limpios cortados en anillas",
          "60g de arroz integral de grano redondo",
          "Calabacín, pimiento y tomate para sofrito",
          "Caldo de pescado o fumet casero"
        ],
        "instructions": [
          "Dora los calamares con ajo y reserva.",
          "Prepara el sofrito con las verduras y añade el arroz.",
          "Moja con el caldo caliente y cocina a fuego medio hasta que el grano esté tierno."
        ]
      },
      {
        "id": "eco_sab_3",
        "mealTime": "Snack Hormonal",
        "name": "Infusión digestiva de manzanilla y jengibre con puñadito de almendras crudas",
        "description": "Vitamina E celular y fitonutrientes relajantes para el nervio vago.",
        "proteinGrams": 8,
        "estimatedCost": 0.55,
        "imageUrl": "https://images.unsplash.com/photo-1508736793122-f516e3ba5569?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Una infusión caliente de manzanilla con jengibre calma el sistema entérico; 10 almendras aportan la vitamina E que protege las membranas ováricas.\"",
        "prepTime": "4 min",
        "ingredients": [
          "Infusión de flores de manzanilla con rodaja de jengibre fresco",
          "15 almendras crudas con piel (ricas en vitamina E)"
        ],
        "instructions": [
          "Prepara la infusión con agua hirviendo y deja reposar 5 minutos.",
          "Acompaña con las almendras crudas masticadas lentamente."
        ]
      },
      {
        "id": "eco_sab_4",
        "mealTime": "Cena",
        "name": "Salteado de verduras crucíferas (brócoli, coliflor) con dados de tofu o pollo y salsa tamari",
        "description": "Indol-3-carbinol para detoxificación estrogénica y proteína vegetal/magra.",
        "proteinGrams": 35,
        "estimatedCost": 1.12,
        "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Salteo el brócoli y la coliflor a fuego vivo en wok con dados de tofu marinado en tamari; queda crujiente, sabroso y apoya al hígado.\"",
        "prepTime": "12 min",
        "ingredients": [
          "150g de tofu firme en dados o pechuga de pollo",
          "1 taza de brócoli y coliflor en arbolitos pequeños",
          "Salsa tamari sin gluten",
          "Aceite de sésamo y semillas tostadas"
        ],
        "instructions": [
          "Dora el tofu o pollo en el wok con unas gotas de aceite.",
          "Añade el brócoli y coliflor con 2 cucharadas de agua para generar vapor.",
          "Agrega el tamari, saltea 2 minutos y sirve caliente."
        ]
      }
    ]
  },
  {
    "dayId": "eco_dom",
    "dayName": "Domingo",
    "dayTheme": "Reset Metabólico & Calma Neuroendocrina",
    "dailyEstimatedCost": 4.55,
    "totalProtein": 94,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"El pollo al horno con romero y limón permite preparar porciones extra para la semana mientras descansas el domingo.\"",
    "meals": [
      {
        "id": "eco_dom_1",
        "mealTime": "Desayuno",
        "name": "Pudding de semillas de chía hidratadas en bebida de almendra con mango y coco",
        "description": "Mucílago hidratante para la pared intestinal y ácidos grasos alfa-linolénicos (ALA).",
        "proteinGrams": 16,
        "estimatedCost": 0.82,
        "imageUrl": "https://images.unsplash.com/photo-1510629954389-c1e0da47d414?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Dejo las semillas de chía hidratándose toda la noche en bebida de almendra; por la mañana tienen textura de pudding y aportan fibra soluble que sacia durante horas.\"",
        "prepTime": "3 min (más reposo)",
        "ingredients": [
          "3 cucharadas de semillas de chía",
          "180ml de bebida de almendra sin azúcar",
          "1/2 mango fresco en dados",
          "Coco rallado sin azúcar"
        ],
        "instructions": [
          "Mezcla la chía con la bebida vegetal la noche anterior.",
          "Remueve bien y guarda en la nevera.",
          "Sirve con los dados de mango fresco y coco por encima."
        ]
      },
      {
        "id": "eco_dom_2",
        "mealTime": "Almuerzo",
        "name": "Muslo de pollo asado al horno con hierbas provenzales y ensalada verde crujiente",
        "description": "Colágeno natural de articulaciones aviares y proteína completa.",
        "proteinGrams": 36,
        "estimatedCost": 1.85,
        "imageUrl": "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Horneo los muslos de pollo a 190°C con limón, romero y ajo; la piel queda dorada y la carne tierna y jugosa conservando todo su colágeno natural.\"",
        "prepTime": "25 min",
        "ingredients": [
          "1 muslo entero de pollo con piel",
          "Manojo de hierbas provenzales (romero, tomillo)",
          "1 limón partido al medio",
          "Ensalada de hojas verdes frescas y AOVE"
        ],
        "instructions": [
          "Coloca el pollo en bandeja de horno con las hierbas y el limón.",
          "Hornea 25 minutos a 190°C hasta que la piel esté dorada y crujiente.",
          "Acompaña de la ensalada verde aliñada."
        ]
      },
      {
        "id": "eco_dom_3",
        "mealTime": "Snack Hormonal",
        "name": "Batido dorado anti-cortisol con cúrcuma pura, canela y leche de coco tibia",
        "description": "Curcumina biodisponible para desinflamar tejidos uterinos y serenar el sistema nervioso.",
        "proteinGrams": 14,
        "estimatedCost": 0.78,
        "imageUrl": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Caliento bebida de coco con cúrcuma, pimienta negra y canela; la curcumina relaja la musculatura lisa y prepara el cuerpo para una noche de descanso total.\"",
        "prepTime": "5 min",
        "ingredients": [
          "220ml de bebida de coco tibia",
          "1 cucharadita de cúrcuma pura con pizca de pimienta negra",
          "1 cucharada de colágeno o proteína limpia",
          "1/2 cucharadita de canela de Ceilán"
        ],
        "instructions": [
          "Bate todos los ingredientes templados en la batidora 30 segundos.",
          "Sirve espumoso en taza grande y bebe a sorbos lentos."
        ]
      },
      {
        "id": "eco_dom_4",
        "mealTime": "Cena",
        "name": "Sopa reconfortante de verduras de raíz con huevo cocido picado y hierbabuena",
        "description": "Minerales en caldo alcalinizante y proteína suave para una digestión nocturna sin esfuerzo.",
        "proteinGrams": 28,
        "estimatedCost": 1.1,
        "imageUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Hervir puerro, nabo y zanahoria con un toque de hierbabuena crea un caldo digestivo perfecto para cerrar la semana con el abdomen completamente deshinchado.\"",
        "prepTime": "15 min",
        "ingredients": [
          "Caldo casero de verduras con puerro y zanahoria",
          "2 huevos camperos cocidos en trocitos",
          "Hojas de hierbabuena fresca",
          "Aceite de oliva virgen extra"
        ],
        "instructions": [
          "Calienta el caldo de verduras en cazo con las hojas de hierbabuena.",
          "Sirve en tazón hondo y añade los huevos duros picados.",
          "Termina con unas gotas de aceite virgen extra."
        ]
      }
    ]
  }
],
  equilibrado: [
  {
    "dayId": "equ_lun",
    "dayName": "Lunes",
    "dayTheme": "Estabilidad de Fase & Ácidos Grasos Esenciales",
    "dailyEstimatedCost": 8.2,
    "totalProtein": 98,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"El requesón artesanal con higos frescos aporta calcio iónico y caseína suave que estabiliza el cortisol sin picos de glucosa.\"",
    "meals": [
      {
        "id": "equ_lun_1",
        "mealTime": "Desayuno",
        "name": "Tostada crujiente de masa madre con requesón artesanal, higos frescos y nueces",
        "description": "Calcio altamente biodisponible y azúcares de fruta intactos con fibra prebiótica.",
        "proteinGrams": 22,
        "estimatedCost": 1.45,
        "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Unto requesón artesanal bajo en grasa sobre una rebanada de masa madre caliente y coloco rodajas de higos frescos con nueces; es un desayuno saciante y nutritivo.\"",
        "prepTime": "5 min",
        "ingredients": [
          "1 rebanada gruesa de pan de masa madre",
          "80g de requesón o ricotta artesanal",
          "2 higos frescos o fresas laminadas",
          "4 nueces partidas y toque de canela"
        ],
        "instructions": [
          "Tuesta el pan hasta que quede dorado y crujiente.",
          "Unta generosamente el requesón sobre la superficie.",
          "Corona con los higos laminados, las nueces y una pizca de canela."
        ]
      },
      {
        "id": "equ_lun_2",
        "mealTime": "Almuerzo",
        "name": "Salmón salvaje a la plancha con espárragos trigueros y vinagreta de limón",
        "description": "Potente dosis de DHA y EPA marinos para reducir citocinas inflamatorias.",
        "proteinGrams": 32,
        "estimatedCost": 3.4,
        "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Doro el salmón 4 minutos por la piel sin moverlo; los espárragos trigueros aportan asparagina, un diurético natural que descongestiona piernas cansadas.\"",
        "prepTime": "12 min",
        "ingredients": [
          "170g de lomo de salmón fresco con piel",
          "1 manojo de espárragos trigueros verdes",
          "Zumo de limón fresco",
          "Aceite de oliva virgen extra y flor de sal"
        ],
        "instructions": [
          "Saltea los espárragos 4 minutos a fuego vivo con unas gotas de AOVE.",
          "Cocina el salmón 4 minutos sobre la piel crujiente, voltea 1 minuto más.",
          "Sirve con los espárragos y rocía con zumo de limón recién exprimido."
        ]
      },
      {
        "id": "equ_lun_3",
        "mealTime": "Snack Hormonal",
        "name": "Batido de frutos del bosque silvestres con péptidos de colágeno y bebida de almendra",
        "description": "Antocianinas que blindan la membrana celular ovárica y péptidos regeneradores de colágeno.",
        "proteinGrams": 18,
        "estimatedCost": 1.25,
        "imageUrl": "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Bato arándanos y moras congeladas con colágeno en polvo y leche de almendras; refresca el cuerpo y regenera las articulaciones que a veces duelen antes del periodo.\"",
        "prepTime": "3 min",
        "ingredients": [
          "1 taza de frutos del bosque silvestres",
          "1 cacito de colágeno hidrolizado puro (15g proteína)",
          "200ml de bebida de almendra sin azúcar",
          "Semillas de chía"
        ],
        "instructions": [
          "Coloca todos los ingredientes en el vaso de la batidora.",
          "Bate a máxima potencia 40 segundos y bebe frío."
        ]
      },
      {
        "id": "equ_lun_4",
        "mealTime": "Cena",
        "name": "Salteado de tiras de ternera magra con pimientos tricolor y jengibre fresco",
        "description": "Hierro hemo de máxima absorción para reponer reservas antes o después del sangrado.",
        "proteinGrams": 26,
        "estimatedCost": 2.1,
        "imageUrl": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Salteo la ternera con tiras de pimiento rojo y verde a fuego vivo durante solo 3 minutos; el pimiento aporta vitamina C que triplica la absorción del hierro.\"",
        "prepTime": "12 min",
        "ingredients": [
          "140g de filete de ternera magra en tiras finas",
          "1/2 pimiento rojo y 1/2 verde en juliana",
          "1 diente de ajo y trocito de jengibre rallados",
          "Aceite de oliva virgen extra"
        ],
        "instructions": [
          "Calienta el wok o sartén grande con aceite virgen extra.",
          "Saltea la ternera 2 minutos y retira.",
          "Saltea los pimientos con ajo y jengibre 3 minutos, reintegra la carne y sirve caliente."
        ]
      }
    ]
  },
  {
    "dayId": "equ_mar",
    "dayName": "Martes",
    "dayTheme": "Salud Ovárica & Sensibilidad a la Insulina",
    "dailyEstimatedCost": 8.1,
    "totalProtein": 96,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"Hornear los huevos con espinacas y un toque de queso parmesano cura los antojos vespertinos al ofrecer colina y glutamato natural saciante.\"",
    "meals": [
      {
        "id": "equ_mar_1",
        "mealTime": "Desayuno",
        "name": "Huevos al plato horneados con espinacas a la crema y parmesano curado",
        "description": "Ácidos grasos saturados de cadena corta y colina que calman el apetito durante 5 horas.",
        "proteinGrams": 24,
        "estimatedCost": 1.35,
        "imageUrl": "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Coloco espinacas salteadas en una cazuelita de barro, rompo 2 huevos camperos encima y rallo parmesano; horneo 8 minutos y tengo un desayuno de hotel en casa.\"",
        "prepTime": "10 min",
        "ingredients": [
          "2 huevos camperos grandes",
          "150g de espinacas tiernas rehogadas",
          "20g de queso parmesano curado rallado",
          "Nuez moscada y aceite de oliva"
        ],
        "instructions": [
          "Dispón las espinacas en la base de un recipiente para horno.",
          "Casca los huevos encima, sazona con nuez moscada y parmesano.",
          "Hornea a 190°C durante 7-8 minutos hasta que la clara cuaje."
        ]
      },
      {
        "id": "equ_mar_2",
        "mealTime": "Almuerzo",
        "name": "Bowl de quinoa real con aguacate hass, edamame y salmón ahumado",
        "description": "Proteína vegetal y marina combinadas con ácido fólico y grasas monoinsaturadas.",
        "proteinGrams": 33,
        "estimatedCost": 3.2,
        "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Monto una base de quinoa templada con medio aguacate en láminas, edamame al vapor y salmón ahumado salvaje; es fresco, saciante y cero pesado.\"",
        "prepTime": "10 min",
        "ingredients": [
          "70g de quinoa real cocida",
          "90g de salmón ahumado de calidad",
          "1/2 aguacate hass en láminas",
          "50g de edamame cocido",
          "Semillas de sésamo y lima"
        ],
        "instructions": [
          "Coloca la quinoa en la base del cuenco.",
          "Distribuye el salmón, el aguacate y el edamame en secciones.",
          "Aliña con zumo de lima y sésamo tostado."
        ]
      },
      {
        "id": "equ_mar_3",
        "mealTime": "Snack Hormonal",
        "name": "Manzana asada al horno con canela de Ceilán y nueces pecanas",
        "description": "Pectina horneada ultrasuave para la mucosa intestinal y magnesio de pecanas.",
        "proteinGrams": 7,
        "estimatedCost": 0.85,
        "imageUrl": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Asar la manzana entera en el microondas o horno con canela descompone la fibra haciéndola un bálsamo para estómagos sensibles en fase premenstrual.\"",
        "prepTime": "6 min",
        "ingredients": [
          "1 manzana Reineta o Golden grande descorazonada",
          "1 cucharada de nueces pecanas picadas",
          "Canela de Ceilán en rama o molida"
        ],
        "instructions": [
          "Descorazona la manzana y rellena el hueco con las nueces y canela.",
          "Cocina en microondas 4 minutos o en horno 15 minutos hasta que esté tierna."
        ]
      },
      {
        "id": "equ_mar_4",
        "mealTime": "Cena",
        "name": "Lomo de lubina a la espalda sobre lecho de puerros pochados y patata panadera fina",
        "description": "Pescado blanco semigraso rico en selenio para optimizar la función tiroidea.",
        "proteinGrams": 32,
        "estimatedCost": 2.7,
        "imageUrl": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Poco el puerro a fuego lento en sartén y marco la lubina abierta por la mitad 3 minutos con un toque de ajo; es ligera y exquisita para conciliar el sueño.\"",
        "prepTime": "15 min",
        "ingredients": [
          "180g de filete de lubina limpia abierta a la espalda",
          "1 puerro grande cortado en rodajas finas",
          "1 patata pequeña en láminas finas al vapor",
          "Aceite de oliva virgen extra y ajo"
        ],
        "instructions": [
          "Pocha el puerro y la patata panadera con un chorrito de AOVE a fuego bajo.",
          "Coloca la lubina con la piel hacia abajo en sartén caliente 3 minutos, voltea 1 minuto.",
          "Sirve el pescado sobre la cama de puerro."
        ]
      }
    ]
  },
  {
    "dayId": "equ_mie",
    "dayName": "Miércoles",
    "dayTheme": "Estroboloma & Depuración Celular",
    "dailyEstimatedCost": 8.3,
    "totalProtein": 97,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"El açai puro sin endulzantes comerciales es un concentrado de antocianinas que reducen el estrés oxidativo en folículos ováricos.\"",
    "meals": [
      {
        "id": "equ_mie_1",
        "mealTime": "Desayuno",
        "name": "Tazón de açai o frutos rojos con granola sin azúcar y semillas de cáñamo",
        "description": "Ácidos grasos Omega-3 vegetales y antioxidantes de índice glucémico muy bajo.",
        "proteinGrams": 20,
        "estimatedCost": 1.5,
        "imageUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Bato pulpa de açai congelada con medio plátano y leche vegetal; añado semillas de cáñamo para conseguir 20g de proteína completa sin lácteos.\"",
        "prepTime": "5 min",
        "ingredients": [
          "100g de pulpa de açai puro sin azúcar",
          "1/2 plátano congelado",
          "2 cucharadas de semillas de cáñamo peladas",
          "Granola artesanal sin azúcar"
        ],
        "instructions": [
          "Tritura el açai con el plátano y un chorrito de leche de almendras hasta textura espesa.",
          "Sirve en tazón y decora con cáñamo y granola."
        ]
      },
      {
        "id": "equ_mie_2",
        "mealTime": "Almuerzo",
        "name": "Pechuga de pavo braseada con puré sedoso de coliflor y zanahorias glaseadas",
        "description": "Crucífera depuradora de estrógenos en textura reconfortante con proteína de alta biodisponibilidad.",
        "proteinGrams": 36,
        "estimatedCost": 2.8,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Cuezo la coliflor con un chorrito de aceite de oliva y la trituro caliente; parece puré de patata gourmet pero sin carbohidratos pesados, ideal para la tarde.\"",
        "prepTime": "15 min",
        "ingredients": [
          "170g de filetes de pechuga de pavo braseados",
          "200g de coliflor al vapor triturada con sal y AOVE",
          "1 zanahoria pochada en bastones",
          "Pimienta negra recién molida"
        ],
        "instructions": [
          "Tritura la coliflor al vapor con aceite de oliva hasta que quede cremosa.",
          "Marca el pavo a la plancha a fuego medio 3 minutos por lado.",
          "Sirve el pavo braseado sobre el puré sedoso con las zanahorias."
        ]
      },
      {
        "id": "equ_mie_3",
        "mealTime": "Snack Hormonal",
        "name": "Tiras de zanahoria y pepino con hummus tradicional y pimentón dulce",
        "description": "Fibra soluble, hidratación y sesamol antioxidante del tahini.",
        "proteinGrams": 9,
        "estimatedCost": 0.9,
        "imageUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"El hummus con tahini aporta calcio y fibra que alimenta las bifidobacterias; con bastones crudos de zanahoria calma la masticación ansiosa.\"",
        "prepTime": "3 min",
        "ingredients": [
          "80g de hummus casero o ecológico",
          "1 zanahoria pelada en bastones",
          "1/2 pepino en tiras",
          "Pimentón dulce y chorrito de AOVE"
        ],
        "instructions": [
          "Coloca el hummus en un cuenco pequeño espolvoreado con pimentón.",
          "Acompaña de los bastones de verduras crudos para dipear."
        ]
      },
      {
        "id": "equ_mie_4",
        "mealTime": "Cena",
        "name": "Ensalada templada de gambas al ajillo con canónigos, aguacate y vinagre balsámico",
        "description": "Astaxantina marina antioxidante y yodo para la síntesis de hormona tiroidea T3.",
        "proteinGrams": 32,
        "estimatedCost": 3.1,
        "imageUrl": "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Salteo las gambas 2 minutos con ajo laminado y las vierto calientes sobre canónigos frescos y dados de aguacate; el contraste templado es delicioso.\"",
        "prepTime": "8 min",
        "ingredients": [
          "160g de gambas o langostinos pelados",
          "2 dientes de ajo en láminas",
          "Canónigos frescos tiernos",
          "1/2 aguacate en dados",
          "Aceite de oliva virgen extra y reducción balsámica"
        ],
        "instructions": [
          "Dora el ajo en la sartén con AOVE y añade las gambas 2 minutos.",
          "Dispón los canónigos y aguacate en una fuente.",
          "Vierte las gambas con su jugo caliente por encima."
        ]
      }
    ]
  },
  {
    "dayId": "equ_jue",
    "dayName": "Jueves",
    "dayTheme": "Calma Adrenal & Neuroprotección",
    "dailyEstimatedCost": 8.15,
    "totalProtein": 95,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"Las setas silvestres contienen beta-glucanos que equilibran el sistema inmunitario y aumentan la resiliencia al estrés.\"",
    "meals": [
      {
        "id": "equ_jue_1",
        "mealTime": "Desayuno",
        "name": "Revuelto cremoso de huevos con setas silvestres y espárragos verdes",
        "description": "Vitamina D natural de setas y colina para regeneración hepática matutina.",
        "proteinGrams": 23,
        "estimatedCost": 1.4,
        "imageUrl": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Salteo setas silvestres con espárragos antes de cuajar los huevos a fuego muy bajo; la textura cremosa nutre el sistema nervioso desde primera hora.\"",
        "prepTime": "8 min",
        "ingredients": [
          "2 huevos camperos + 1 clara",
          "100g de setas variadas laminadas",
          "4 puntas de espárragos verdes",
          "1 rebanada de pan artesano tostado"
        ],
        "instructions": [
          "Saltea las setas y espárragos con AOVE 3 minutos.",
          "Vierte los huevos batidos y revuelve suavemente a fuego lento.",
          "Sirve sobre la tostada recién hecha."
        ]
      },
      {
        "id": "equ_jue_2",
        "mealTime": "Almuerzo",
        "name": "Cazuela de bacalao desalado con sofrito de pimientos y garbanzos lechosos",
        "description": "Proteína marina pura baja en grasas y magnesio de legumbres para regular la presión arterial.",
        "proteinGrams": 34,
        "estimatedCost": 3.25,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"El bacalao cocinado en el caldo de pimientos y garbanzos queda jugosísimo en 6 minutos; aporta fósforo y selenio indispensables para la energía celular.\"",
        "prepTime": "15 min",
        "ingredients": [
          "170g de lomo de bacalao desalado limpio",
          "120g de garbanzos cocidos",
          "1 pimiento rojo en tiras",
          "Salsa de tomate casera y fumet ligero"
        ],
        "instructions": [
          "Pocha el pimiento en cazuela con AOVE.",
          "Añade el tomate y los garbanzos, cocina 4 minutos.",
          "Introduce el bacalao, tapa y cocina 6 minutos a fuego suave."
        ]
      },
      {
        "id": "equ_jue_3",
        "mealTime": "Snack Hormonal",
        "name": "Onza de chocolate negro 85% con puñado de avellanas tostadas",
        "description": "Teobromina, magnesio y polifenoles del cacao para activar receptores cerebrales de placer.",
        "proteinGrams": 6,
        "estimatedCost": 0.9,
        "imageUrl": "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Una onza de buen chocolate negro 85% con 10 avellanas aporta el magnesio exacto para relajar el diafragma antes de volver a casa.\"",
        "prepTime": "1 min",
        "ingredients": [
          "20g de chocolate negro 85% cacao orgánico",
          "12 avellanas tostadas sin sal"
        ],
        "instructions": [
          "Disfruta dejando que el chocolate se derrita despacio en la boca junto a las avellanas."
        ]
      },
      {
        "id": "equ_jue_4",
        "mealTime": "Cena",
        "name": "Pechuga de pollo a la parrilla con ensalada de rúcula, queso de cabra y nueces",
        "description": "L-triptófano y ácidos grasos de cadena corta de queso de cabra fermentado.",
        "proteinGrams": 32,
        "estimatedCost": 2.6,
        "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Marco el pollo a la parrilla con hierbas y lo sirvo sobre rúcula con una rodaja fina de rulo de cabra y nueces; es fresca, ligera y muy saciante.\"",
        "prepTime": "10 min",
        "ingredients": [
          "150g de pechuga de pollo a la parrilla en tiras",
          "Hojas frescas de rúcula salvaje",
          "30g de queso de cabra tierno",
          "4 nueces partidas y vinagreta de limón"
        ],
        "instructions": [
          "Dora el pollo en sartén grill 3 minutos por lado.",
          "Monta la base de rúcula con el queso de cabra y las nueces.",
          "Coloca el pollo templado encima y aliña con AOVE."
        ]
      }
    ]
  },
  {
    "dayId": "equ_vie",
    "dayName": "Viernes",
    "dayTheme": "Vitalidad Mitocondrial & Omega-3 Fresco",
    "dailyEstimatedCost": 8.5,
    "totalProtein": 98,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"El tartar de atún o salmón fresco conserva el 100% de los ácidos grasos termo-sensibles que protegen la salud vascular.\"",
    "meals": [
      {
        "id": "equ_vie_1",
        "mealTime": "Desayuno",
        "name": "Tortitas de plátano y avena integral con arándanos frescos y miel cruda",
        "description": "Carbohidratos limpios sin gluten procesado para entrenamientos matutinos.",
        "proteinGrams": 21,
        "estimatedCost": 1.25,
        "imageUrl": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Trituro 1 plátano maduro con 2 huevos y 3 cucharadas de avena; salen 3 tortitas esponjosas en sartén caliente que adoro con arándanos frescos.\"",
        "prepTime": "8 min",
        "ingredients": [
          "1 plátano maduro mediano",
          "2 huevos camperos",
          "35g de copos de avena finos",
          "Arándanos frescos y chorrito de miel cruda"
        ],
        "instructions": [
          "Tritura el plátano, huevos y avena con pizca de canela.",
          "Vierte porciones en sartén caliente engrasada 1.5 minutos por lado.",
          "Sirve con los arándanos frescos."
        ]
      },
      {
        "id": "equ_vie_2",
        "mealTime": "Almuerzo",
        "name": "Tartar de atún rojo o salmón fresco con aguacate, cebollino y sésamo",
        "description": "Pescado crudo ultracongelado de grado sashimi con Omega-3 íntegro y vitamina B12.",
        "proteinGrams": 35,
        "estimatedCost": 3.65,
        "imageUrl": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Pico el atún a cuchillo en dados limpios y lo mezclo con aguacate, cebollino y gotas de tamari; es pura energía limpia para el mediodía sin pesadez.\"",
        "prepTime": "10 min",
        "ingredients": [
          "150g de atún o salmón fresco previamente congelado",
          "1/2 aguacate en dados",
          "Cebollino fresco picado",
          "Salsa de soja baja en sal y aceite de sésamo"
        ],
        "instructions": [
          "Corta el pescado y el aguacate en daditos parejos.",
          "Mezcla en un cuenco con el cebollino, unas gotas de tamari y aceite de sésamo.",
          "Emplata con aro o en cuenco y espolvorea sésamo."
        ]
      },
      {
        "id": "equ_vie_3",
        "mealTime": "Snack Hormonal",
        "name": "Batido cremoso de matcha ceremonial con leche de avena y canela",
        "description": "L-teanina para concentración serena sin los temblores de la cafeína tradicional.",
        "proteinGrams": 8,
        "estimatedCost": 0.95,
        "imageUrl": "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Disuelvo media cucharadita de matcha grado ceremonial en agua caliente y agrego leche de avena espumada; la L-teanina despeja la mente en minutos.\"",
        "prepTime": "3 min",
        "ingredients": [
          "1 cucharadita de té matcha ceremonial en polvo",
          "50ml de agua caliente (no hirviendo)",
          "180ml de bebida de avena o almendra sin azúcar caliente",
          "Pizca de canela"
        ],
        "instructions": [
          "Bate el matcha con el agua usando espumador hasta que haga espuma densa.",
          "Añade la leche caliente espumada y espolvorea canela."
        ]
      },
      {
        "id": "equ_vie_4",
        "mealTime": "Cena",
        "name": "Dorada fresca a la sal acompañada de verduras asadas al romero",
        "description": "Cocción milenaria que mantiene toda la jugosidad y sales minerales del pescado sin grasas añadidas.",
        "proteinGrams": 34,
        "estimatedCost": 2.65,
        "imageUrl": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Cubrir la dorada en sal gruesa y hornearla 20 minutos conserva los jugos intactos; la carne sale blanca, tierna y perfecta para cenar en familia.\"",
        "prepTime": "25 min",
        "ingredients": [
          "1 dorada entera limpia para sal",
          "1kg de sal gruesa marina",
          "Calabacín y pimiento asados en dados",
          "Aceite de oliva virgen extra y limón"
        ],
        "instructions": [
          "Cubre la dorada en bandeja de horno con la sal húmeda.",
          "Hornea a 200°C durante 20 minutos.",
          "Rompe la costra de sal, retira la piel y sirve los lomos limpios con las verduras asadas."
        ]
      }
    ]
  },
  {
    "dayId": "equ_sab",
    "dayName": "Sábado",
    "dayTheme": "Biodisponibilidad Marina & Placer Saludable",
    "dailyEstimatedCost": 8.6,
    "totalProtein": 97,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"El salmón ahumado salvaje con centeno y eneldo es el desayuno nórdico por excelencia para modular la inflamación pélvica.\"",
    "meals": [
      {
        "id": "equ_sab_1",
        "mealTime": "Desayuno",
        "name": "Tostada nórdica de centeno con queso crema ligero, salmón ahumado y eneldo",
        "description": "Eneldo carminativo digestivo y ácidos grasos poliinsaturados de pescado de aguas frías.",
        "proteinGrams": 24,
        "estimatedCost": 1.6,
        "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Unto queso crema ligero sobre pan de centeno tostado, pongo lamas de salmón ahumado y mucho eneldo fresco; es el desayuno más saciante del fin de semana.\"",
        "prepTime": "4 min",
        "ingredients": [
          "1 rebanada de pan de centeno 100% integral",
          "40g de queso crema ligero o requesón",
          "70g de salmón ahumado salvaje",
          "Eneldo fresco picado y alcaparras"
        ],
        "instructions": [
          "Tuesta el pan de centeno.",
          "Unta con el queso y coloca las lonchas de salmón.",
          "Decora con eneldo fresco y unas alcaparras."
        ]
      },
      {
        "id": "equ_sab_2",
        "mealTime": "Almuerzo",
        "name": "Paella o arroz caldoso marinero con mejillones, gambas y azafrán en hebra",
        "description": "Hierro de bivalvos marinos y azafrán, un modulador natural de serotonina en fase lútea.",
        "proteinGrams": 32,
        "estimatedCost": 3.4,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"El azafrán tiene ensayos clínicos que demuestran su efecto calmante sobre el síndrome premenstrual; con mejillones y gambas es un almuerzo de celebración.\"",
        "prepTime": "25 min",
        "ingredients": [
          "60g de arroz bomba",
          "100g de mejillones limpios y gambas",
          "Hebras de azafrán natural",
          "Fumet de pescado casero y pimiento rojo"
        ],
        "instructions": [
          "Sofríe el pimiento y mariscos con AOVE.",
          "Añade el azafrán disuelto en caldo caliente y el arroz.",
          "Cocina a fuego medio 16 minutos y deja reposar 3 minutos tapado."
        ]
      },
      {
        "id": "equ_sab_3",
        "mealTime": "Snack Hormonal",
        "name": "Compota casera de manzana y frutos rojos sin azúcar con semillas de chía",
        "description": "Fructosa amortiguada con fibra mucilaginosa que desinflama las paredes del colon.",
        "proteinGrams": 8,
        "estimatedCost": 0.95,
        "imageUrl": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Cuezo manzana troceada con frambuesas y una rama de canela 8 minutos hasta que se deshace sola; caliente en una taza alivia cualquier tensión intestinal.\"",
        "prepTime": "10 min",
        "ingredients": [
          "1 manzana cortada en dados pequeños",
          "1/2 taza de frambuesas frescas o congeladas",
          "1 rama de canela de Ceilán",
          "1 cucharadita de semillas de chía"
        ],
        "instructions": [
          "Cocina la fruta en cazo con 3 cucharadas de agua y la canela 8 minutos.",
          "Retira la canela, añade la chía para espesar y sirve templada."
        ]
      },
      {
        "id": "equ_sab_4",
        "mealTime": "Cena",
        "name": "Hamburguesa casera de pavo con ensalada coleslaw antiinflamatoria de col morada",
        "description": "Antocianinas de col morada y proteína magra sin harinas refinadas ni ultraprocesados.",
        "proteinGrams": 33,
        "estimatedCost": 2.65,
        "imageUrl": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Pido al carnicero que me pique pechuga de pavo limpia; formo la hamburguesa con ajo y orégano y la acompaño de col morada aliñada con yogur y limón.\"",
        "prepTime": "12 min",
        "ingredients": [
          "160g de carne picada de pavo 100%",
          "Taza de col morada rallada fina",
          "1 cucharada de yogur griego para el aliño de la ensalada",
          "Zumo de limón y mostaza Dijon"
        ],
        "instructions": [
          "Forma la hamburguesa sazonada y dora a la plancha 4 minutos por lado.",
          "Mezcla la col morada con yogur, limón y una pizca de mostaza.",
          "Sirve la hamburguesa jugosa con el coleslaw crujiente."
        ]
      }
    ]
  },
  {
    "dayId": "equ_dom",
    "dayName": "Domingo",
    "dayTheme": "Brunch Saludable & Regeneración Nocturna",
    "dailyEstimatedCost": 8.45,
    "totalProtein": 98,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"Los huevos benedictinos sobre batata horneada son la versión más limpia y nutritiva del brunch dominical.\"",
    "meals": [
      {
        "id": "equ_dom_1",
        "mealTime": "Desayuno",
        "name": "Huevos benedictinos saludables sobre base de batata tostada y espinacas al vapor",
        "description": "Vitamina A precursora de progesterona, luteína y colina sin salsas pesadas.",
        "proteinGrams": 23,
        "estimatedCost": 1.55,
        "imageUrl": "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Corto una batata en rodajas gruesas y la tuesto hasta que queda tierna por dentro y crujiente por fuera; pongo espinacas y 2 huevos poché encima.\"",
        "prepTime": "12 min",
        "ingredients": [
          "2 rodajas gruesas de batata cocida o asada",
          "2 huevos camperos escalfados",
          "Puñado de espinacas salteadas",
          "Salsa ligera de yogur, limón y cúrcuma"
        ],
        "instructions": [
          "Dora las rodajas de batata en sartén o tostadora.",
          "Coloca las espinacas calientes sobre la batata y corona con los huevos poché.",
          "Rocía con la salsa suave de yogur y cúrcuma."
        ]
      },
      {
        "id": "equ_dom_2",
        "mealTime": "Almuerzo",
        "name": "Solomillo de cerdo ibérico a la plancha con manzana caramelizada y espárragos",
        "description": "Vitamina B1 (tiamina) que optimiza la transformación de hidratos en energía neuromuscular.",
        "proteinGrams": 35,
        "estimatedCost": 3.3,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"El cerdo ibérico criado con bellotas tiene un perfil de ácido oleico parecido al aceite de oliva; marcado a fuego fuerte con manzana es una delicia dominical.\"",
        "prepTime": "15 min",
        "ingredients": [
          "160g de medallones de solomillo ibérico",
          "1 manzana ácida cortada en gajos y dorada con canela",
          "Espárragos verdes a la plancha",
          "Flor de sal marina"
        ],
        "instructions": [
          "Marca los medallones en plancha bien caliente 2 minutos por lado.",
          "Dora los gajos de manzana en la misma sartén hasta caramelizar.",
          "Sirve con los espárragos y escamas de sal."
        ]
      },
      {
        "id": "equ_dom_3",
        "mealTime": "Snack Hormonal",
        "name": "Taza de cacao puro caliente con bebida de coco y una pizca de chile suave",
        "description": "Endorfinas y capsaicina que aumentan la microcirculación pelviana.",
        "proteinGrams": 8,
        "estimatedCost": 0.9,
        "imageUrl": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Caliento bebida de coco cremosa con 2 cucharadas de cacao 100% y una micro-pizca de chile; la sensación de calor interno reconforta el útero al instante.\"",
        "prepTime": "4 min",
        "ingredients": [
          "220ml de bebida de coco sin azúcar",
          "2 cucharadas de cacao crudo puro en polvo",
          "Pizca milimétrica de chile o pimienta de cayena",
          "Gotas de extracto de vainilla"
        ],
        "instructions": [
          "Calienta la bebida vegetal en cazo pequeño sin que hierva.",
          "Bate con batidor de varillas junto al cacao y especias hasta que quede espumoso."
        ]
      },
      {
        "id": "equ_dom_4",
        "mealTime": "Cena",
        "name": "Crema de calabacín y menta fresca con crujiente de jamón ibérico",
        "description": "Potasio drenante con el toque salino de jamón rico en ácidos grasos insaturados.",
        "proteinGrams": 32,
        "estimatedCost": 2.7,
        "imageUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Cocino calabacín con cebolla y lo trituro con hojas de menta fresca; el toque fresco deshincha el vientre y el jamón aporta proteína crujiente sin grasa pesada.\"",
        "prepTime": "15 min",
        "ingredients": [
          "2 calabacines medianos troceados con piel",
          "1/2 cebolla dulce",
          "Hojas frescas de menta o hierbabuena",
          "40g de virutas de jamón ibérico pasadas por sartén"
        ],
        "instructions": [
          "Cuece el calabacín y la cebolla en poca agua con sal 10 minutos.",
          "Tritura con la menta fresca y un hilo de AOVE hasta dejar textura fina.",
          "Sirve con las virutas de jamón crujiente por encima."
        ]
      }
    ]
  }
],
  flexible: [
  {
    "dayId": "fle_lun",
    "dayName": "Lunes",
    "dayTheme": "Alta Nutrición & Polifenoles Selectos",
    "dailyEstimatedCost": 12.8,
    "totalProtein": 104,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"La crema de almendras tostadas con nibs de cacao criollo y frambuesas ofrece catequinas y grasas monoinsaturadas de primer nivel gastronómico.\"",
    "meals": [
      {
        "id": "fle_lun_1",
        "mealTime": "Desayuno",
        "name": "Tostada de masa madre con crema de almendras 100%, frambuesas silvestres y cacao nibs",
        "description": "Antioxidantes criollos y magnesio con textura crujiente de masa madre de fermentación lenta.",
        "proteinGrams": 23,
        "estimatedCost": 2.1,
        "imageUrl": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Unto crema pura de almendras sobre pan de masa madre recién horneado y añado frambuesas frescas con nibs crujientes de cacao; es un capricho antiinflamatorio increíble.\"",
        "prepTime": "4 min",
        "ingredients": [
          "1 rebanada grande de masa madre de espelta o kamut",
          "2 cucharadas de mantequilla de almendras 100%",
          "Puñado de frambuesas frescas silvestres",
          "1 cucharada de nibs de cacao puro crudo"
        ],
        "instructions": [
          "Tuesta la rebanada de pan hasta dorar.",
          "Extiende la crema de almendras tibia.",
          "Corona con las frambuesas frescas y los nibs de cacao."
        ]
      },
      {
        "id": "fle_lun_2",
        "mealTime": "Almuerzo",
        "name": "Tataki de atún marinado en soja baja en sal y sésamo con ensalada wakame",
        "description": "Pescado salvaje sellado solo 30 segundos para proteger enzimas vivas y astaxantina.",
        "proteinGrams": 38,
        "estimatedCost": 5.4,
        "imageUrl": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Sello el taco de atún rojo 30 segundos por lado en sartén humeante y lo corto en láminas; el centro queda rojo y mantequilloso, perfecto con alga wakame.\"",
        "prepTime": "8 min",
        "ingredients": [
          "180g de lomo de atún rojo limpio",
          "1 cucharada de aceite de sésamo tostado y tamari",
          "Semillas de sésamo blanco y negro",
          "Ensalada de alga wakame y pepino"
        ],
        "instructions": [
          "Pasa el atún por las semillas de sésamo.",
          "Sella en sartén muy caliente 30 segundos por cara.",
          "Corta en lonchas de 0.5cm y sirve con el wakame y unas gotas de tamari."
        ]
      },
      {
        "id": "fle_lun_3",
        "mealTime": "Snack Hormonal",
        "name": "Cuenco de frambuesas y moras silvestres con yogur de coco probiótico",
        "description": "Polifenoles del bosque y triglicéridos de cadena media (MCT) que dan claridad mental.",
        "proteinGrams": 10,
        "estimatedCost": 2.3,
        "imageUrl": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Uso yogur fermentado de coco sin azúcar con frutos del bosque silvestres; los polifenoles modulan la aromatasa ovárica y nutren la microbiota.\"",
        "prepTime": "2 min",
        "ingredients": [
          "150g de yogur fermentado de coco artesanal",
          "1 taza de moras y frambuesas frescas silvestres",
          "Hojitas de menta fresca"
        ],
        "instructions": [
          "Coloca el yogur en cuenco de cerámica.",
          "Añade los frutos rojos por encima y decora con menta."
        ]
      },
      {
        "id": "fle_lun_4",
        "mealTime": "Cena",
        "name": "Magret de pato o pavo asado con reducción suave de naranja y espárragos verdes",
        "description": "Hierro orgánico de alta densidad y flavonoides cítricos para soporte mitocondrial.",
        "proteinGrams": 33,
        "estimatedCost": 3,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Marco el magret por el lado de la piel hasta que suelta la grasa y queda crujiente; la reducción de naranja natural aporta el balance cítrico exacto.\"",
        "prepTime": "15 min",
        "ingredients": [
          "160g de magret de pato o solomillo de pavo",
          "Zumo y ralladura de 1 naranja sanguina o dulce",
          "Espárragos trigueros a la plancha",
          "Pimienta de Sichuan y sal en escamas"
        ],
        "instructions": [
          "Marca la carne en sartén 5 minutos por el lado de la piel, voltea 3 minutos.",
          "Reduce el zumo de naranja en la misma sartén hasta formar glaseado brillante.",
          "Sirve fileteado con los espárragos y la salsa."
        ]
      }
    ]
  },
  {
    "dayId": "fle_mar",
    "dayName": "Martes",
    "dayTheme": "Micronutrientes Nobles & Tono Parasimpático",
    "dailyEstimatedCost": 12.6,
    "totalProtein": 102,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"La trufa negra contiene anandamida, la molécula de la felicidad y sosiego mental que activa el tono parasimpático nocturno.\"",
    "meals": [
      {
        "id": "fle_mar_1",
        "mealTime": "Desayuno",
        "name": "Omelette esponjosa con trufa negra rallada, rúcula salvaje y queso pecorino",
        "description": "Proteína avícola de pastoreo combinada con los aromas terpénicos de la trufa fresca.",
        "proteinGrams": 25,
        "estimatedCost": 2.2,
        "imageUrl": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Rallo un poco de trufa negra fresca sobre los huevos justo antes de retirarlos del fuego; el aroma transforma un desayuno ordinario en una experiencia de spa.\"",
        "prepTime": "7 min",
        "ingredients": [
          "3 huevos ecológicos de pastoreo",
          "Láminas de trufa negra o aceite de trufa virgen",
          "20g de queso pecorino o manchego curado",
          "Rúcula salvaje fresca"
        ],
        "instructions": [
          "Bate los huevos con suavidad para incorporar aire.",
          "Cuaja en sartén con un hilo de AOVE a fuego muy suave.",
          "Añade el pecorino y trufa, dobla en tres y sirve con rúcula."
        ]
      },
      {
        "id": "fle_mar_2",
        "mealTime": "Almuerzo",
        "name": "Lomo de corvina salvaje con alcachofas confitadas y tomatitos confitados",
        "description": "Cinarina de alcachofas para descongestión biliar hepática y pescado blanco noble.",
        "proteinGrams": 37,
        "estimatedCost": 5.2,
        "imageUrl": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Confito corazones de alcachofa en aceite de oliva virgen a fuego muy bajo y marco la corvina 4 minutos; es el mejor plato del mundo para el hígado.\"",
        "prepTime": "15 min",
        "ingredients": [
          "180g de lomo de corvina salvaje fresca",
          "3 corazones de alcachofa tiernos confitados",
          "Tomates cherry confitados al tomillo",
          "Flor de sal y aceite de oliva virgen extra"
        ],
        "instructions": [
          "Marca la corvina en plancha caliente por la piel 3 minutos, voltea 1 minuto.",
          "Saltea las alcachofas y tomatitos en el mismo aceite aromatizado.",
          "Emplata la corvina sobre las alcachofas con su jugo."
        ]
      },
      {
        "id": "fle_mar_3",
        "mealTime": "Snack Hormonal",
        "name": "Smoothie verde elixir con kale baby, piña natural, agua de coco y chía",
        "description": "Bromelina antiinflamatoria de piña y electrolitos naturales para hidratar la fascia.",
        "proteinGrams": 9,
        "estimatedCost": 1.8,
        "imageUrl": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"La bromelina de la piña fresca reduce edemas tisulares; con kale y agua de coco hidrata la piel desde dentro en los días de calor o tensión.\"",
        "prepTime": "3 min",
        "ingredients": [
          "1 taza de kale baby tierna",
          "1 rodaja gruesa de piña natural madura",
          "200ml de agua de coco pura",
          "1 cucharada de chía"
        ],
        "instructions": [
          "Tritura todo en batidora potente hasta que quede completamente liso y brillante.",
          "Sirve frío con una rodajita de lima."
        ]
      },
      {
        "id": "fle_mar_4",
        "mealTime": "Cena",
        "name": "Lentejas beluga estofadas con boletus edulis y aceite de trufa blanca",
        "description": "Antioxidantes de legumbre negra beluga (antocianinas) y beta-glucanos de hongos silvestres.",
        "proteinGrams": 31,
        "estimatedCost": 3.4,
        "imageUrl": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Las lentejas beluga no se deshacen y tienen un sabor a nuez espectacular; con boletus salteados y unas gotas de trufa blanca es una cena de restaurante con estrella.\"",
        "prepTime": "18 min",
        "ingredients": [
          "150g de lentejas beluga cocidas",
          "100g de boletus edulis frescos o deshidratados rehidratados",
          "Chalota picada y tomillo fresco",
          "Gotas de aceite de trufa blanca y AOVE"
        ],
        "instructions": [
          "Saltea la chalota y los boletus con aceite de oliva 4 minutos.",
          "Añade las lentejas beluga y un chorrito de caldo de setas caliente.",
          "Cocina a fuego lento 6 minutos y termina con gotas de trufa blanca."
        ]
      }
    ]
  },
  {
    "dayId": "fle_mie",
    "dayName": "Miércoles",
    "dayTheme": "Estabilidad Glucémica & Fuerza Funcional",
    "dailyEstimatedCost": 13.1,
    "totalProtein": 106,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"El yogur griego de oveja artesanal tiene el doble de proteína y grasas de cadena corta que favorecen la absorción de vitaminas liposolubles A, D y K2.\"",
    "meals": [
      {
        "id": "fle_mie_1",
        "mealTime": "Desayuno",
        "name": "Parfait de yogur griego de oveja con higos frescos, pistachos tostados y polen",
        "description": "Enzimas vivas de polen de abeja y grasas de alta digestibilidad sin lactosa pesada.",
        "proteinGrams": 26,
        "estimatedCost": 2.2,
        "imageUrl": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Monto capas de yogur griego denso de oveja con higos maduros y pistachos verdes picados; una pizca de polen de abeja aporta vitalidad y vitaminas del grupo B.\"",
        "prepTime": "4 min",
        "ingredients": [
          "200g de yogur griego de oveja artesano",
          "2 higos maduros en cuartos",
          "25g de pistachos verdes tostados sin sal",
          "1/2 cucharadita de polen de flores"
        ],
        "instructions": [
          "Coloca la mitad del yogur en copa ancha o tazón.",
          "Añade los higos laminados y los pistachos troceados.",
          "Cubre con el resto del yogur y espolvorea el polen de flores."
        ]
      },
      {
        "id": "fle_mie_2",
        "mealTime": "Almuerzo",
        "name": "Poké bowl gourmet de vieiras y langostinos con aguacate, mango y edamame",
        "description": "Vitamina B12 y zinc de moluscos marinos para apoyar la síntesis tiroidea.",
        "proteinGrams": 37,
        "estimatedCost": 5.6,
        "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Marco las vieiras 1 minuto por cara en sartén muy caliente y las combino con langostinos, mango fresco y aguacate; los mariscos aportan zinc puro para la ovulación.\"",
        "prepTime": "10 min",
        "ingredients": [
          "100g de vieiras limpias y 80g de langostinos",
          "1/2 aguacate hass en dados",
          "1/2 mango en cubitos",
          "50g de edamame cocido",
          "Arroz negro venere o quinoa"
        ],
        "instructions": [
          "Marca las vieiras y langostinos en sartén con unas gotas de AOVE 2 minutos.",
          "Dispón la base de arroz o quinoa y añade las frutas y edamame.",
          "Aliña con aceite de sésamo, zumo de lima y sésamo tostado."
        ]
      },
      {
        "id": "fle_mie_3",
        "mealTime": "Snack Hormonal",
        "name": "Carpaccio de piña fresca con ralladura de lima y jengibre rallado",
        "description": "Digestión enzimática de máxima velocidad para mantener el vientre plano durante la tarde.",
        "proteinGrams": 7,
        "estimatedCost": 1.5,
        "imageUrl": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Corto la piña en láminas casi transparentes con ralladura fina de lima y jengibre fresco; activa el ácido clorhídrico estomacal y es súper refrescante.\"",
        "prepTime": "3 min",
        "ingredients": [
          "4 rodajas finas de piña fresca madura",
          "Ralladura de 1 lima ecológica",
          "Jengibre fresco rallado fino",
          "Hojitas de menta silvestre"
        ],
        "instructions": [
          "Distribuye las láminas de piña en un plato plano.",
          "Espolvorea la ralladura de lima, el jengibre y decora con menta."
        ]
      },
      {
        "id": "fle_mie_4",
        "mealTime": "Cena",
        "name": "Entrecot de ternera de pasto a la brasa con pimientos de padrón y flor de sal",
        "description": "Carnitina y creatina natural que optimizan la masa muscular magra en mujeres 30+.",
        "proteinGrams": 36,
        "estimatedCost": 3.8,
        "imageUrl": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"La ternera de pasto tiene el triple de Omega-3 y ácido linoleico conjugado que la de cebadero; marcada vuelta y vuelta con pimientos de padrón es un lujo saciante.\"",
        "prepTime": "12 min",
        "ingredients": [
          "170g de entrecot de ternera criado en pastos ecológicos",
          "Puñado de pimientos de padrón dorados con AOVE",
          "Flor de sal marina y pimienta negra"
        ],
        "instructions": [
          "Dora los pimientos de padrón en sartén con aceite hasta que se inflen y sazona.",
          "Cocina el entrecot en plancha de hierro muy caliente 2 minutos por lado.",
          "Deja reposar 2 minutos antes de cortar y espolvorea escamas de sal."
        ]
      }
    ]
  },
  {
    "dayId": "fle_jue",
    "dayName": "Jueves",
    "dayTheme": "Equilibrio de Prostaglandinas & Longevidad",
    "dailyEstimatedCost": 12.7,
    "totalProtein": 104,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"El pulpo a la brasa sobre puré de boniato aporta taurina, un aminoácido que potencia la relajación vascular y el tono vagal.\"",
    "meals": [
      {
        "id": "fle_jue_1",
        "mealTime": "Desayuno",
        "name": "Tostada de centeno con aguacate laminado, huevo trufado y germinados vivos",
        "description": "Sulforafano concentrado de germinados de brócoli para desintoxicación hepática de fase 2.",
        "proteinGrams": 24,
        "estimatedCost": 2.1,
        "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Añado brotes germinados de brócoli sobre el aguacate y huevo; los germinados multiplican por 50 la concentración de sulforafano respecto a la verdura adulta.\"",
        "prepTime": "6 min",
        "ingredients": [
          "1 rebanada de pan de centeno 100% artesano",
          "1/2 aguacate maduro en abanico",
          "1 huevo ecológico pochado con gotas de trufa",
          "Puñado de brotes vivos germinados"
        ],
        "instructions": [
          "Tuesta el pan y coloca el abanico de aguacate sazonado.",
          "Corona con el huevo pochado tibio y añade los germinados frescos."
        ]
      },
      {
        "id": "fle_jue_2",
        "mealTime": "Almuerzo",
        "name": "Pulpo a la brasa sobre parmentier sedosa de boniato y pimentón de la Vera",
        "description": "Taurina, hierro, cobre y carbohidratos de bajo índice glucémico para el metabolismo hormonal.",
        "proteinGrams": 36,
        "estimatedCost": 5.5,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Paso la pata de pulpo cocido por la plancha bien caliente hasta que la piel queda crujiente; el puré de boniato aporta la cremosidad dulce perfecta.\"",
        "prepTime": "10 min",
        "ingredients": [
          "1 pata hermosa de pulpo cocido (180g)",
          "1 boniato cocido triturado con AOVE y leche de coco",
          "Pimentón dulce de la Vera y flor de sal",
          "Aceite de oliva virgen extra de cosecha temprana"
        ],
        "instructions": [
          "Tritura el boniato caliente con un chorrito de AOVE hasta dejar puré aterciopelado.",
          "Dora el pulpo en plancha muy caliente 2 minutos por lado.",
          "Sirve el pulpo sobre la cama de boniato y espolvorea pimentón y sal gruesa."
        ]
      },
      {
        "id": "fle_jue_3",
        "mealTime": "Snack Hormonal",
        "name": "Fruta de la pasión fresca con semillas de granada y nueces de Brasil",
        "description": "Selenio orgánico biodisponible para proteger la tiroides y el tejido ovárico.",
        "proteinGrams": 8,
        "estimatedCost": 1.9,
        "imageUrl": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Dos nueces de Brasil al día cubren el 100% del selenio que necesita la tiroides; con fruta de la pasión y granada es un tazón antioxidante lleno de frescura.\"",
        "prepTime": "3 min",
        "ingredients": [
          "2 maracuyás o frutas de la pasión frescas",
          "3 cucharadas de semillas de granada fresca",
          "2 nueces de Brasil troceadas (ricas en selenio)"
        ],
        "instructions": [
          "Abre las frutas de la pasión y vierte la pulpa en un cuenco.",
          "Añade la granada y corona con las nueces de Brasil troceadas."
        ]
      },
      {
        "id": "fle_jue_4",
        "mealTime": "Cena",
        "name": "Papillote de salmón salvaje con hinojo fresco, eneldo y naranja sanguina",
        "description": "Cocción hermética en vapor propio que sella aromas y previene la oxidación de lípidos.",
        "proteinGrams": 36,
        "estimatedCost": 3.2,
        "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Envuelvo el salmón en papel de horno con hinojo en láminas finas y rodajas de naranja; en 12 minutos a 180°C los aceites del salmón se fusionan con el hinojo calmante.\"",
        "prepTime": "15 min",
        "ingredients": [
          "170g de lomo de salmón salvaje limpio",
          "1/2 bulbo de hinojo en juliana fina",
          "Rodajas finas de naranja fresca",
          "Eneldo fresco y sal marina"
        ],
        "instructions": [
          "Dispón el hinojo y la naranja sobre papel de hornear.",
          "Coloca el salmón encima, sazona con eneldo y AOVE y pliega los bordes en papillote.",
          "Hornea a 180°C durante 12-14 minutos y abre en la mesa."
        ]
      }
    ]
  },
  {
    "dayId": "fle_vie",
    "dayName": "Viernes",
    "dayTheme": "Antioxidantes de Élite & Relajación Somática",
    "dailyEstimatedCost": 12.9,
    "totalProtein": 105,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"El rape con langostinos al azafrán aporta colágeno marino soluble y minerales que tonifican el suelo pélvico.\"",
    "meals": [
      {
        "id": "fle_vie_1",
        "mealTime": "Desayuno",
        "name": "Bowl energético de açai orgánico silvestre con kiwi dorado, coco laminado y chía",
        "description": "Vitamina C cítrica para la absorción de hierro y ácidos grasos saciantes.",
        "proteinGrams": 22,
        "estimatedCost": 2.3,
        "imageUrl": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"El kiwi dorado tiene el doble de vitamina C que una naranja; combinado con açai puro silvestre da luminosidad inmediata a la piel y energía matutina.\"",
        "prepTime": "5 min",
        "ingredients": [
          "100g de pulpa de açai orgánico congelado",
          "1 kiwi dorado en rodajas",
          "2 cucharadas de copos de coco tostado sin azúcar",
          "Semillas de chía y proteína limpia"
        ],
        "instructions": [
          "Bate el açai con un chorrito de agua vegetal hasta textura helada densa.",
          "Sirve en tazón hondo y decora con el kiwi dorado, coco laminado y chía."
        ]
      },
      {
        "id": "fle_vie_2",
        "mealTime": "Almuerzo",
        "name": "Cazuela de rape con langostinos en salsa marinera ligera de azafrán",
        "description": "Carne firme de pescado blanco de roca con cero grasa saturada y aroma calmante.",
        "proteinGrams": 37,
        "estimatedCost": 5.4,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"El rape tiene una textura similar a la langosta y no tiene espinas; en una salsa suave con hebras de azafrán y fumet casero es un almuerzo de fiesta.\"",
        "prepTime": "15 min",
        "ingredients": [
          "180g de medallones de rape limpio",
          "80g de langostinos frescos pelados",
          "Hebras de azafrán tostado",
          "Fumet de pescado casero y vino blanco evaporado"
        ],
        "instructions": [
          "Marca el rape y langostinos 1 minuto en cazuela con AOVE.",
          "Añade el azafrán y el fumet caliente, cocina a fuego suave 6 minutos.",
          "Sirve con perejil fresco picado."
        ]
      },
      {
        "id": "fle_vie_3",
        "mealTime": "Snack Hormonal",
        "name": "Bombones caseros de dátil Medjool rellenos de nuez y cacao amargo",
        "description": "Triptófano natural, fibra soluble y magnesio en un bocado dulce de repostería limpia.",
        "proteinGrams": 9,
        "estimatedCost": 1.8,
        "imageUrl": "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Abro 2 dátiles Medjool jugosos, introduzco media nuez en el centro y espolvoreo cacao puro 100%; es el dulce más reconfortante que existe.\"",
        "prepTime": "2 min",
        "ingredients": [
          "2 dátiles Medjool deshuesados",
          "2 mitades de nuez crujiente",
          "Cacao puro 100% en polvo",
          "Pizca de flor de sal"
        ],
        "instructions": [
          "Abre los dátiles longitudinalmente.",
          "Coloca una nuez en el interior y presiona ligeramente.",
          "Espolvorea con cacao puro y una mota de flor de sal."
        ]
      },
      {
        "id": "fle_vie_4",
        "mealTime": "Cena",
        "name": "Brochetas de pollo de corral al curry suave con verduras braseadas al fuego",
        "description": "Curcumina lipofílica y proteínas limpias para calmar dolores lumbares premenstruales.",
        "proteinGrams": 37,
        "estimatedCost": 3.4,
        "imageUrl": "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Ensarto dados de pollo marinado en curry suave con calabacín y cebolla morada; a la parrilla se doran en 8 minutos con un aroma exótico delicioso.\"",
        "prepTime": "15 min",
        "ingredients": [
          "180g de pechuga de pollo de corral en dados grandes",
          "Curry suave, jengibre y yogur para macerar",
          "Trozos de pimiento y cebolla morada",
          "Aceite de oliva virgen extra"
        ],
        "instructions": [
          "Ensarta el pollo y las verduras en brochetas de madera.",
          "Cocina en sartén grill bien caliente 4 minutos por lado hasta que estén doradas.",
          "Sirve con un hilo de zumo de limón fresco."
        ]
      }
    ]
  },
  {
    "dayId": "fle_sab",
    "dayName": "Sábado",
    "dayTheme": "Fusión Culinaria & Alta Vitalidad",
    "dailyEstimatedCost": 13.2,
    "totalProtein": 105,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"El caviar o huevas de pescado son el alimento más denso del planeta en fosfolípidos cerebrales y ácidos grasos Omega-3.\"",
    "meals": [
      {
        "id": "fle_sab_1",
        "mealTime": "Desayuno",
        "name": "Tostada brioche artesanal con revuelto de huevos camperos y caviar de salmón",
        "description": "Fosfatidilcolina pura y micronutrientes marinos para agudeza mental instantánea.",
        "proteinGrams": 26,
        "estimatedCost": 2.6,
        "imageUrl": "https://images.unsplash.com/photo-1484723091739-004a802422f6?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Hago un revuelto cremosísimo con 2 huevos a fuego mínimo sobre una rebanada de brioche tostado y corono con una cucharadita de huevas de salmón; un festival de nutrientes.\"",
        "prepTime": "7 min",
        "ingredients": [
          "1 rebanada de pan brioche artesano o masa madre tostada",
          "2 huevos camperos ecológicos",
          "1 cucharada de huevas de salmón o trucha",
          "Cebollino picado y flor de sal"
        ],
        "instructions": [
          "Cuaja los huevos a fuego muy bajo con una nuez de mantequilla o AOVE removiendo sin parar.",
          "Sirve sobre el pan crujiente y corona con las huevas y cebollino."
        ]
      },
      {
        "id": "fle_sab_2",
        "mealTime": "Almuerzo",
        "name": "Caldereta de bogavante o marisco con fumet casero de roca y arroz bomba",
        "description": "Minerales marinos iónicos (zinc, cobre, yodo) que modulan la tiroides y el sistema inmune.",
        "proteinGrams": 36,
        "estimatedCost": 5.7,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Cocinar el marisco en su propio caldo con pimientos y azafrán libera minerales esenciales para la vitalidad ovárica en una receta tradicional inolvidable.\"",
        "prepTime": "25 min",
        "ingredients": [
          "Bogavante o cola de langosta partida en trozos",
          "50g de arroz bomba de grano corto",
          "Fumet casero concentrado de pescados de roca",
          "Tomate rallado, pimiento y hebras de azafrán"
        ],
        "instructions": [
          "Dora el marisco en cazuela con AOVE y retira.",
          "Haz el sofrito de tomate y pimiento, añade el arroz y el azafrán.",
          "Vierte el caldo hirviendo, cocina 15 minutos, añade el marisco y deja reposar 3 minutos."
        ]
      },
      {
        "id": "fle_sab_3",
        "mealTime": "Snack Hormonal",
        "name": "Cacao ceremonial caliente con canela de Ceilán, cardamomo y leche de anacardo",
        "description": "Pasta pura de cacao ceremonial que relaja arterias uterinas y eleva la serotonina.",
        "proteinGrams": 9,
        "estimatedCost": 1.8,
        "imageUrl": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"El cacao ceremonial sin desgrasar conserva todos los antioxidantes y grasas nobles; con cardamomo y canela es un ritual de autocuidado insuperable.\"",
        "prepTime": "5 min",
        "ingredients": [
          "25g de pasta de cacao puro ceremonial rallada",
          "200ml de leche artesana de anacardo o avellana",
          "1 vaina de cardamomo machacada",
          "Canela de Ceilán pura"
        ],
        "instructions": [
          "Calienta la leche vegetal con el cardamomo.",
          "Añade el cacao ceremonial y bate con espumador hasta disolver por completo."
        ]
      },
      {
        "id": "fle_sab_4",
        "mealTime": "Cena",
        "name": "Ensalada templada de vieiras a la plancha con canónigos, granada y reducción balsámica",
        "description": "Glicina, ácido elágico antioxidante y textura delicada que favorece el vaciado gástrico.",
        "proteinGrams": 34,
        "estimatedCost": 3.1,
        "imageUrl": "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Las vieiras a la plancha con unas gotas de limón sobre canónigos frescos y perlas de granada crujientes son la cena ligera más elegante para un sábado.\"",
        "prepTime": "8 min",
        "ingredients": [
          "160g de vieiras frescas limpias",
          "Canónigos y brotes tiernos ecológicos",
          "Semillas de granada fresca",
          "Aceite de oliva virgen extra y reducción balsámica"
        ],
        "instructions": [
          "Dora las vieiras 1 minuto por lado en sartén con AOVE bien caliente.",
          "Monta la base de ensalada con la granada en un plato plano.",
          "Coloca las vieiras calientes encima y rocía con el aliño balsámico."
        ]
      }
    ]
  },
  {
    "dayId": "fle_dom",
    "dayName": "Domingo",
    "dayTheme": "Brunch de Gala & Serenidad Vagal",
    "dailyEstimatedCost": 13,
    "totalProtein": 106,
    "isPremium": true,
    "elenaDailyTip": "Recomendación de Elena: \"El chuletón o lomo alto de vaca madurada a la parrilla con espárragos aporta zinc y hierro para la síntesis mitocondrial de energía.\"",
    "meals": [
      {
        "id": "fle_dom_1",
        "mealTime": "Desayuno",
        "name": "Brunch hormonal: Huevos poché sobre pan brioche, aguacate hass y microgreens",
        "description": "Fitoquímicos vivos, grasas monoinsaturadas y proteínas de altísima biodisponibilidad.",
        "proteinGrams": 25,
        "estimatedCost": 2.4,
        "imageUrl": "https://images.unsplash.com/photo-1513442542250-854d436a73f2?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"El brunch del domingo con huevos poché sobre aguacate cremoso y microgreens es mi momento favorito de la semana para nutrir cuerpo y mente sin prisas.\"",
        "prepTime": "10 min",
        "ingredients": [
          "2 huevos de pastoreo escalfados",
          "1 rebanada de brioche tostado",
          "1/2 aguacate hass laminado",
          "Microgreens de rábano y sal en escamas"
        ],
        "instructions": [
          "Tuesta el brioche y coloca el aguacate sazonado.",
          "Posa los huevos poché encima con cuidado de no romper la yema.",
          "Termina con los microgreens frescos y sal marina."
        ]
      },
      {
        "id": "fle_dom_2",
        "mealTime": "Almuerzo",
        "name": "Chuletón de vaca madurada a la parrilla con espárragos trigueros y ensalada mixta",
        "description": "Hierro hemo orgánico de máxima densidad para asegurar hematocrito saludable.",
        "proteinGrams": 38,
        "estimatedCost": 5.6,
        "imageUrl": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Asar un buen corte de vaca madurada con sal gruesa y acompañarlo de espárragos y ensalada verde garantiza hierro limpio sin carbohidratos pesados.\"",
        "prepTime": "15 min",
        "ingredients": [
          "180g de lomo alto de vaca madurada limpia de grasa exterior excesiva",
          "Manojo de espárragos trigueros a la brasa",
          "Ensalada de hojas verdes y tomatitos",
          "Flor de sal"
        ],
        "instructions": [
          "Asa la carne a la plancha o brasa 2.5 minutos por lado para sellar jugos.",
          "Asa los espárragos a fuego vivo.",
          "Corta la carne en tiras diagonales y acompaña de la ensalada fresca."
        ]
      },
      {
        "id": "fle_dom_3",
        "mealTime": "Snack Hormonal",
        "name": "Mousse fría de aguacate, cacao puro criollo y frutos rojos silvestres",
        "description": "Textura aterciopelada sin lácteos que sacia el sistema endocannabinoide.",
        "proteinGrams": 9,
        "estimatedCost": 1.9,
        "imageUrl": "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Trituro 1 aguacate maduro con 3 cucharadas de cacao crudo y un chorrito de leche de coco; queda una mousse cremosa de chocolate gourmet sin nada de azúcar refinado.\"",
        "prepTime": "4 min",
        "ingredients": [
          "1 aguacate maduro mediano",
          "3 cucharadas de cacao puro en polvo",
          "3 cucharadas de leche de coco o almendras",
          "Arándanos o frambuesas para decorar"
        ],
        "instructions": [
          "Tritura el aguacate con el cacao y la leche vegetal hasta que quede brillante y sin grumos.",
          "Enfría en la nevera 15 minutos y sirve con frutos rojos por encima."
        ]
      },
      {
        "id": "fle_dom_4",
        "mealTime": "Cena",
        "name": "Crema tibia de boletus y castañas con aceite de oliva de cosecha temprana",
        "description": "Fibra soluble y minerales de bosque para preparar el nervio vago hacia el descanso semanal.",
        "proteinGrams": 34,
        "estimatedCost": 3.1,
        "imageUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=85",
        "isPremium": true,
        "elenaQuote": "\"Cocinar castañas asadas con boletus y puerro crea una crema suave como el terciopelo que relaja la digestión y cierra la semana en paz absoluta.\"",
        "prepTime": "18 min",
        "ingredients": [
          "150g de boletus salteados con chalota",
          "6 castañas asadas o cocidas peladas",
          "Caldo vegetal casero",
          "Aceite de oliva virgen extra de cosecha temprana",
          "Huevo poché para aportar proteína"
        ],
        "instructions": [
          "Saltea los boletus y chalota con AOVE.",
          "Añade las castañas y caldo vegetal caliente, hierve 8 minutos.",
          "Tritura hasta textura sedosa, sirve con el huevo poché en el centro y unas gotas de aceite virgen extra."
        ]
      }
    ]
  }
],
};

export const WEEKLY_SHOPPING_LISTS: Record<BudgetTier, ShoppingListItem[]> = {
  economico: [
    { category: 'Proteínas Asequibles', name: 'Huevos camperos locales (2 docenas)', quantity: '24 unidades', estimatedPrice: 6.5, savingTip: 'Comprar cartones de 24 huevos en mercado ahorra 30% vs paquete de 6' },
    { category: 'Proteínas Asequibles', name: 'Pechuga de pollo fresca en filetes', quantity: '800g', estimatedPrice: 5.5, savingTip: 'Comprar pechuga entera o bandeja familiar y porcionar para la semana' },
    { category: 'Proteínas Asequibles', name: 'Lomos de merluza y caballa limpia', quantity: '600g', estimatedPrice: 6.8, savingTip: 'Pescado blanco y azul pequeño rico en Omega-3 a excelente precio' },
    { category: 'Proteínas Asequibles', name: 'Pechuga de pavo y tofu firme', quantity: '500g', estimatedPrice: 4.5, savingTip: 'Proteína magra y vegetal para variar almuerzos y cenas' },
    { category: 'Legumbres & Granos Inteligentes', name: 'Lentejas y garbanzos cocidos o secos', quantity: '1 kg', estimatedPrice: 2.2, savingTip: 'La base económica más rica en fibra prebiótica para el estroboloma' },
    { category: 'Legumbres & Granos Inteligentes', name: 'Copos de avena integral fina', quantity: '500g', estimatedPrice: 1.2, savingTip: 'Carbohidrato de absorción lenta para desayunos saciantes de menos de 0.30$' },
    { category: 'Legumbres & Granos Inteligentes', name: 'Quinoa tricolor o arroz integral', quantity: '500g', estimatedPrice: 3.2, savingTip: 'Cocinar en lote el domingo y refrigerar para cenas de 7 minutos' },
    { category: 'Verduras & Frutas de Temporada', name: 'Espinacas frescas y zanahorias locales', quantity: '1 bolsa grande + 1kg', estimatedPrice: 3.5, savingTip: 'Consumir verduras de temporada en frutería local abarata la cesta' },
    { category: 'Verduras & Frutas de Temporada', name: 'Calabacines frescos, brócoli y calabaza', quantity: '1.5kg surtido', estimatedPrice: 4.2, savingTip: 'Base digestiva para cremas y salteados antiinflamatorios' },
    { category: 'Verduras & Frutas de Temporada', name: 'Manzanas crujientes y plátanos', quantity: '1.5kg', estimatedPrice: 2.8, savingTip: 'Pectina y potasio para calmar la ansiedad dulce de las 5 PM' },
    { category: 'Grasas Esenciales', name: 'Nueces de temporada y semillas de chía/lino', quantity: '250g cada una', estimatedPrice: 4.2, savingTip: 'Comprar a granel evita envases caros y conserva la frescura' },
  ],
  equilibrado: [
    { category: 'Proteínas Asequibles', name: 'Lomos de salmón fresco con piel', quantity: '4 unidades (650g)', estimatedPrice: 11.8, savingTip: 'Cocinar con piel crujiente para sellar todos los ácidos grasos' },
    { category: 'Proteínas Asequibles', name: 'Filetes de lubina y dorada fresca', quantity: '600g', estimatedPrice: 9.8, savingTip: 'Pescado blanco para cenas ligeras reparadoras sin somnolencia' },
    { category: 'Proteínas Asequibles', name: 'Pechuga de pavo braseada y ternera magra', quantity: '700g', estimatedPrice: 8.5, savingTip: 'Hierro hemo y triptófano de máxima asimilación' },
    { category: 'Proteínas Asequibles', name: 'Huevos camperos ecológicos', quantity: '18 unidades', estimatedPrice: 5.8, savingTip: 'Calidad superior de ácidos grasos y colina para el cortisol' },
    { category: 'Proteínas Asequibles', name: 'Gambas o langostinos pelados frescos', quantity: '350g', estimatedPrice: 6.2, savingTip: 'Astaxantina marina y yodo para tiroides y energía' },
    { category: 'Legumbres & Granos Inteligentes', name: 'Quinoa real andina y pan de masa madre', quantity: '500g + 1 hogaza', estimatedPrice: 6.4, savingTip: 'Fermentación lenta que respeta el índice glucémico' },
    { category: 'Verduras & Frutas de Temporada', name: 'Espárragos trigueros y setas silvestres', quantity: '2 manojos + 300g', estimatedPrice: 6.2, savingTip: 'Drenaje de líquidos y beta-glucanos para el sistema inmune' },
    { category: 'Verduras & Frutas de Temporada', name: 'Aguacates hass maduros y arándanos frescos', quantity: '4 unid + 250g', estimatedPrice: 6.5, savingTip: 'Grasas monoinsaturadas y polifenoles anti-envejecimiento' },
    { category: 'Grasas Esenciales', name: 'Aceite de oliva virgen extra de primera presión', quantity: '1 litro', estimatedPrice: 8.5, savingTip: 'Pilar antiinflamatorio para cocinar a fuego suave y aliñar' },
  ],
  flexible: [
    { category: 'Proteínas Asequibles', name: 'Lomo de atún rojo y salmón salvaje', quantity: '700g', estimatedPrice: 17.5, savingTip: 'El rey de los ácidos grasos EPA y DHA sin antibióticos' },
    { category: 'Proteínas Asequibles', name: 'Vieiras frescas, bogavante y langostinos', quantity: '500g', estimatedPrice: 16.0, savingTip: 'Minerales marinos iónicos (zinc, cobre, yodo) para la ovulación' },
    { category: 'Proteínas Asequibles', name: 'Chuletón de vaca madurada y magret de pato', quantity: '600g', estimatedPrice: 13.5, savingTip: 'Crianza en libertad con perfil lipídico y proteico óptimo' },
    { category: 'Proteínas Asequibles', name: 'Huevos ecológicos de pastoreo & huevas de salmón', quantity: '2 docenas + 1 tarro', estimatedPrice: 10.5, savingTip: 'Fosfatidilcolina pura y luteína para la retina y memoria' },
    { category: 'Legumbres & Granos Inteligentes', name: 'Lentejas beluga negras y arroz bomba artesano', quantity: '500g cada uno', estimatedPrice: 6.5, savingTip: 'Cereales ancestrales y legumbres gourmet ricas en antocianinas' },
    { category: 'Verduras & Frutas de Temporada', name: 'Espárragos trigueros y corazones de alcachofa confitados', quantity: 'Variedad selecta', estimatedPrice: 9.5, savingTip: 'Depuración hepática de estrógenos de nivel premium' },
    { category: 'Verduras & Frutas de Temporada', name: 'Frambuesas, moras, fruta de la pasión y granadas', quantity: '600g', estimatedPrice: 11.5, savingTip: 'Antioxidantes celulares para vitalidad mitocondrial 30+' },
    { category: 'Grasas Esenciales', name: 'Aceite de oliva virgen extra ecológico y trufa', quantity: '750ml + condimento', estimatedPrice: 14.5, savingTip: 'Polifenoles superiores para protección cardiovascular' },
  ],
};
