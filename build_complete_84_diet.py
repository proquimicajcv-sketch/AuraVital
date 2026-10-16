# -*- coding: utf-8 -*-
import json

# Let's write the complete generator for all 84 distinct meals
exec(open('generate_final_weekly_diet.py').read())

MEALS_EQUILIBRADO = [
    # Lunes (4 meals)
    {
        "id": "eq_lun_1",
        "mealTime": "Desayuno",
        "name": "Tostada de centeno con huevos escalfados, medio aguacate laminado y copos de chile",
        "description": "Fitoquímicos y grasas monoinsaturadas para amortiguar el pico de cortisol de inicio de semana.",
        "proteinGrams": 24,
        "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Escalfo los huevos en agua hirviendo con una cucharada de vinagre de manzana durante 3 minutos exactos; la yema líquida crea la salsa perfecta sobre el pan."',
        "prepTime": "10 min",
        "ingredients": ["2 huevos ecológicos", "1 rebanada de pan de centeno 100%", "Medio aguacate en láminas", "Copos de chile suave y flor de sal"],
        "instructions": ["Tuesta el pan de centeno.", "Escalfa los huevos en agua a punto de hervir durante 3 minutos.", "Monta las láminas de aguacate sobre el pan y corona con los huevos y chile."],
        "estimatedCost": 2.10
    },
    {
        "id": "eq_lun_2",
        "mealTime": "Almuerzo",
        "name": "Bowl energético de pechuga de pollo a la parrilla con aguacate, quinoa tricolor y brotes",
        "description": "Distribución balanceada de macronutrientes para sostener la energía sin niebla mental.",
        "proteinGrams": 36,
        "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Cocino el pollo a la parrilla bien dorado con hierbas aromáticas y monto el bowl con la quinoa tibia y aguacate fresco; el contraste de texturas es insuperable."',
        "prepTime": "18 min",
        "ingredients": ["170g de pechuga de pollo", "50g de quinoa cocida", "Medio aguacate", "Hojas de espinaca baby y canónigos", "AOVE y zumo de lima"],
        "instructions": ["Marca el pollo en parrilla caliente hasta que esté bien dorado.", "Coloca la base de hojas y quinoa en un cuenco.", "Distribuye el pollo en tiras, el aguacate y aliña con lima y AOVE."],
        "estimatedCost": 2.80
    },
    {
        "id": "eq_lun_3",
        "mealTime": "Snack Hormonal",
        "name": "Batido detoxificante de manzana verde con espinaca, apio y zumo de limón",
        "description": "Potasio y clorofila activa para aliviar la inflamación pélvica y la retención de agua.",
        "proteinGrams": 8,
        "imageUrl": "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Bato la manzana con la piel bien lavada para conservar la quercetina; es un antihistamínico natural que desinflama el cuerpo a media tarde."',
        "prepTime": "4 min",
        "ingredients": ["1 manzana verde", "Manojo de espinacas tiernas", "1 rama de apio fresco", "Zumo de medio limón y agua fría"],
        "instructions": ["Trocea los vegetales limpios.", "Tritura en batidora potente con hielo o agua fría durante 50 segundos."],
        "estimatedCost": 0.90
    },
    {
        "id": "eq_lun_4",
        "mealTime": "Cena",
        "name": "Filete de dorada fresca al horno sobre colchón de calabacín, tomates cherry y orégano",
        "description": "Proteína marina de altísima digestibilidad que no interrumpe la secreción de melatonina.",
        "proteinGrams": 30,
        "imageUrl": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Horneo la dorada a 180°C con los tomates cherry y un chorrito de vino blanco o limón; el jugo natural de los tomates humecta el pescado a la perfección."',
        "prepTime": "20 min",
        "ingredients": ["1 filete de dorada limpia", "1 calabacín en rodajas", "8 tomates cherry", "Aceite de oliva virgen extra y orégano"],
        "instructions": ["Dispón el calabacín y los cherrys en una fuente para horno.", "Coloca la dorada encima y hornea durante 14 minutos."],
        "estimatedCost": 2.90
    },

    # Martes (4 meals)
    {
        "id": "eq_mar_1",
        "mealTime": "Desayuno",
        "name": "Cuenco cremoso de yogur de cabra o kéfir con arándanos silvestres, nueces de nogal y chía",
        "description": "Lácteo A2 de fácil tolerancia digestiva con polifenoles ováricos protectores.",
        "proteinGrams": 22,
        "imageUrl": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Uso kéfir o yogur de cabra entero sin azúcar; su proteína A2 se digiere sin pesadez y las nueces aportan el Omega-3 vegetal que el cerebro necesita."',
        "prepTime": "4 min",
        "ingredients": ["200g de kéfir o yogur de cabra", "Puñado generoso de arándanos frescos", "4 nueces troceadas", "1 cucharada de chía"],
        "instructions": ["Vierte el kéfir en cuenco de cerámica.", "Añade los arándanos, las nueces partidas y la chía."],
        "estimatedCost": 1.90
    },
    {
        "id": "eq_mar_2",
        "mealTime": "Almuerzo",
        "name": "Pechuga de pavo braseada con brócoli salteado al dente, semillas de sésamo y cúrcuma",
        "description": "Sulforafano activador de la fase 2 hepática para metabolizar correctamente los estrógenos.",
        "proteinGrams": 34,
        "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Salteo el brócoli cortado pequeño con cúrcuma y unas gotas de aceite durante 5 minutos para que quede crujiente y conserve todos sus glucosinolatos."',
        "prepTime": "15 min",
        "ingredients": ["160g de solomillo de pavo", "150g de ramilletes de brócoli", "Cúrcuma en polvo, pimienta y sésamo tostado", "AOVE"],
        "instructions": ["Saltea el brócoli en sartén tapada con un chorrito de agua y aceite 5 min.", "Dora el pavo en la misma sartén y sirve con semillas de sésamo."],
        "estimatedCost": 2.40
    },
    {
        "id": "eq_mar_3",
        "mealTime": "Snack Hormonal",
        "name": "Manzana asada al microondas con canela de Ceilán, nueces y pizca de jengibre",
        "description": "Pectina templada que repara la mucosa gástrica y alivia la acidez hormonal.",
        "proteinGrams": 7,
        "imageUrl": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Cocino la manzana descorazonada 3 minutos al microondas con canela; se transforma en un postre reconfortante que sabe a tarta sin un gramo de azúcar."',
        "prepTime": "4 min",
        "ingredients": ["1 manzana reineta o fuji", "Canela de Ceilán abundante", "3 nueces picadas"],
        "instructions": ["Haz pequeños cortes en la manzana y espolvorea canela.", "Calienta 3 minutos y sirve templada con las nueces."],
        "estimatedCost": 0.80
    },
    {
        "id": "eq_mar_4",
        "mealTime": "Cena",
        "name": "Crema suave de calabacín y puerro con semillas de cáñamo y huevo poché",
        "description": "Caldo nutritivo alcalinizante que relaja el tono simpático vespertino.",
        "proteinGrams": 21,
        "imageUrl": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Trituro el calabacín con un hilo de AOVE en crudo hasta que emulsione como una crema aterciopelada y coloco el huevo caliente en el centro."',
        "prepTime": "18 min",
        "ingredients": ["2 calabacines medianos", "1 puerro tierno", "1 huevo campero", "Semillas de cáñamo peladas y AOVE"],
        "instructions": ["Cuece el puerro y calabacín con poca agua 12 min y tritura con AOVE.", "Corona con un huevo poché y semillas de cáñamo."],
        "estimatedCost": 1.70
    },

    # Miércoles (4 meals)
    {
        "id": "eq_mie_1",
        "mealTime": "Desayuno",
        "name": "Omelette de dos huevos camperos con queso feta de cabra, espinacas y tomates cherry",
        "description": "Calcio bioasimilable y proteínas completas para nutrir las fibras musculares.",
        "proteinGrams": 24,
        "imageUrl": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Desmenuzo el queso feta justo antes de doblar la tortilla; el calor residual lo funde suavemente sin resecar la preparación."',
        "prepTime": "9 min",
        "ingredients": ["2 huevos camperos", "30g de queso feta auténtico", "Puñado de espinacas", "4 tomates cherry partidos", "AOVE"],
        "instructions": ["Saltea las espinacas y cherrys 2 minutos.", "Vierte los huevos batidos, esparce el queso feta y dobla."],
        "estimatedCost": 1.95
    },
    {
        "id": "eq_mie_2",
        "mealTime": "Almuerzo",
        "name": "Ensalada tibia de lentejas con calabaza asada, rúcula y vinagreta de mostaza antigua",
        "description": "Complejo B y fibra para prevenir la lentitud del tránsito intestinal lúteo.",
        "proteinGrams": 28,
        "imageUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Mezclo las lentejas templadas con la calabaza asada y la vinagreta de mostaza; es un plato saciante que evita la caída de energía de las 4 PM."',
        "prepTime": "15 min",
        "ingredients": ["200g de lentejas cocidas", "100g de calabaza asada en dados", "Base de rúcula", "Mostaza de Dijon antigua, vinagre y AOVE"],
        "instructions": ["Mezcla la vinagreta emulsionando mostaza y AOVE.", "Junta las lentejas templadas con la calabaza y la rúcula y aliña."],
        "estimatedCost": 1.80
    },
    {
        "id": "eq_mie_3",
        "mealTime": "Snack Hormonal",
        "name": "Batido de frutos rojos con bebida de coco sin azúcar y semillas de lino",
        "description": "Ácido láurico anti-patógenos y antioxidantes de bayas para el cutis femenino 30+.",
        "proteinGrams": 9,
        "imageUrl": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Bato las bayas con bebida de coco cremosa; aporta triglicéridos de cadena media que dan energía limpia a las mitocondrias."',
        "prepTime": "3 min",
        "ingredients": ["120g de frutos rojos", "180ml de bebida de coco sin azúcar", "1 cucharada de lino molido"],
        "instructions": ["Tritura todo en batidora hasta textura suave y sirve frío."],
        "estimatedCost": 1.15
    },
    {
        "id": "eq_mie_4",
        "mealTime": "Cena",
        "name": "Lomo de salmón noruego a la plancha con espárragos verdes y flor de sal",
        "description": "Omega-3 antiinflamatorio para calmar la tensión mamaria y favorecer el sueño REM.",
        "proteinGrams": 32,
        "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Cocino el salmón sin añadir grasa a la sartén; su propio aceite saludable basta para dorarlo a la perfección con los espárragos."',
        "prepTime": "12 min",
        "ingredients": ["160g de lomo de salmón fresco", "Manojo de espárragos trigueros", "Limón fresco y flor de sal"],
        "instructions": ["Saltea los espárragos en sartén caliente.", "Dora el salmón 4 minutos por el lado de la piel y 1 minuto por el otro."],
        "estimatedCost": 3.10
    },

    # Jueves (4 meals)
    {
        "id": "eq_jue_1",
        "mealTime": "Desayuno",
        "name": "Porridge templado de avena con manzana cocida a la canela y nueces crujientes",
        "description": "Equilibrio neuro-glucémico para empezar el día con saciedad prolongada de 4 horas.",
        "proteinGrams": 18,
        "imageUrl": "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Cocino los copos de avena con agua y un pellizco de canela; añado la manzana en dados que se ablanda con el calor del porridge."',
        "prepTime": "8 min",
        "ingredients": ["50g de avena integral", "1 manzana en dados", "Canela de Ceilán", "Nueces troceadas y leche de almendras"],
        "instructions": ["Hierve la avena con la bebida vegetal y manzana 5 minutos.", "Sirve en bol y corona con nueces."],
        "estimatedCost": 1.10
    },
    {
        "id": "eq_jue_2",
        "mealTime": "Almuerzo",
        "name": "Tiras de pollo salteadas con verduras de colores, jengibre y semillas de calabaza",
        "description": "Zinc y aminoácidos ramificados para la preservación muscular frente a la sarcopenia.",
        "proteinGrams": 35,
        "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Salteo el pollo a fuego muy vivo con jengibre rallado; el toque picante estimula la termogénesis y mejora la digestión."',
        "prepTime": "15 min",
        "ingredients": ["160g de pechuga de pollo en tiras", "Pimiento rojo, verde y calabacín", "Jengibre fresco", "Semillas de calabaza tostadas y AOVE"],
        "instructions": ["Dora el pollo en el wok o sartén amplia con jengibre.", "Añade las verduras crujientes y saltea 4 minutos más."],
        "estimatedCost": 2.20
    },
    {
        "id": "eq_jue_3",
        "mealTime": "Snack Hormonal",
        "name": "Chocolate negro 85% con mantequilla de almendras pura",
        "description": "Grasas saludables y magnesio para mitigar el antojo premenstrual dulce.",
        "proteinGrams": 8,
        "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Ununto una cucharadita de crema de almendras sobre dos onzas de chocolate amargo; es el bocado saciante más elegante."',
        "prepTime": "1 min",
        "ingredients": ["25g de chocolate negro 85%", "1 cucharadita de crema de almendras 100%"],
        "instructions": ["Unta la crema sobre las onzas de chocolate y disfruta despacio."],
        "estimatedCost": 0.90
    },
    {
        "id": "eq_jue_4",
        "mealTime": "Cena",
        "name": "Merluza al horno con espárragos verdes, rodajas de limón y aceite virgen extra",
        "description": "Yodo natural para la función tiroidea y proteínas de fácil descomposición enzimática.",
        "proteinGrams": 28,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Horneo la merluza con una rodaja de limón sobre el lomo; el ácido cítrico suaviza el pescado y realza su frescura natural."',
        "prepTime": "15 min",
        "ingredients": ["160g de lomo de merluza", "Manojo de espárragos tiernos", "Limón, sal marina y AOVE"],
        "instructions": ["Coloca los espárragos y el pescado en una bandeja.", "Rocía con AOVE y zumo de limón y hornea 12 minutos a 185°C."],
        "estimatedCost": 2.50
    },

    # Viernes (4 meals)
    {
        "id": "eq_vie_1",
        "mealTime": "Desayuno",
        "name": "Tostada crujiente con aguacate pisado, huevo campero a la plancha y semillas de cáñamo",
        "description": "Grasas cardiosaludables y proteínas de absorción inmediata para iniciar el viernes.",
        "proteinGrams": 22,
        "imageUrl": "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Aplasto el aguacate con un tenedor y un chorrito de aceite de oliva; es la mejor base cremosa para coronar con el huevo caliente."',
        "prepTime": "8 min",
        "ingredients": ["1 rebanada de pan de masa madre", "Medio aguacate maduro", "1 huevo campero", "Semillas de cáñamo y flor de sal"],
        "instructions": ["Tuesta el pan.", "Cocina el huevo a la plancha con la yema tierna.", "Extiende el aguacate y coloca el huevo encima."],
        "estimatedCost": 1.70
    },
    {
        "id": "eq_vie_2",
        "mealTime": "Almuerzo",
        "name": "Pechuga de pollo asada con batata dorada al romero y ensalada verde",
        "description": "Carbohidratos complejos de recarga lenta y aminoácidos anti-catabólicos.",
        "proteinGrams": 34,
        "imageUrl": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Horneo la batata con romero y AOVE en dados pequeños; aporta la glucosa limpia que el músculo necesita sin provocar letargo."',
        "prepTime": "22 min",
        "ingredients": ["160g de pechuga de pollo", "1 batata mediana", "Hojas verdes variadas", "Romero seco, sal y AOVE"],
        "instructions": ["Hornea la batata en dados con aceite y romero a 190°C durante 18 min.", "Cocina el pollo a la plancha y sirve junto a la batata."],
        "estimatedCost": 2.30
    },
    {
        "id": "eq_vie_3",
        "mealTime": "Snack Hormonal",
        "name": "Yogur cremoso con semillas de calabaza tostadas y una pizca de canela",
        "description": "Calcio y zinc para reforzar el sistema inmunológico y el bienestar dérmico.",
        "proteinGrams": 14,
        "imageUrl": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Tuesto las semillas de calabaza 2 minutos en sartén seca; el crujiente con el yogur frío es el snack más reconfortante del viernes."',
        "prepTime": "3 min",
        "ingredients": ["150g de yogur natural cremoso", "20g de semillas de calabaza tostadas", "Canela en polvo"],
        "instructions": ["Mezcla el yogur con canela y decora con las semillas de calabaza."],
        "estimatedCost": 0.95
    },
    {
        "id": "eq_vie_4",
        "mealTime": "Cena",
        "name": "Filete de lubina fresca a la plancha sobre salteado de verduras mediterráneas",
        "description": "Ácidos grasos esenciales y minerales alcalinizantes para un sueño profundo y reparador.",
        "proteinGrams": 30,
        "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Doro la lubina 3 minutos por el lado de la piel hasta que quede crujiente y la acompaño de calabacín y pimientos salteados al dente."',
        "prepTime": "15 min",
        "ingredients": ["1 filete de lubina limpia", "Calabacín y pimiento rojo en dados", "Aceite de oliva virgen extra y limón"],
        "instructions": ["Saltea las verduras en sartén caliente.", "Marca la lubina 3 min por la piel, voltea 1 min y sirve con limón."],
        "estimatedCost": 3.20
    },

    # Sábado (4 meals)
    {
        "id": "eq_sab_1",
        "mealTime": "Desayuno",
        "name": "Tortitas esponjosas de avena y plátano con arándanos frescos y nueces",
        "description": "Desayuno saciante de fin de semana para recargar energía celular sin pesadez.",
        "proteinGrams": 20,
        "imageUrl": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Trituro el plátano maduro con 2 huevos y avena; se cocinan en 2 minutos y aportan carbohidratos de bajo impacto glucémico."',
        "prepTime": "12 min",
        "ingredients": ["1 plátano maduro", "2 huevos camperos", "40g de avena molida", "Arándanos frescos y nueces"],
        "instructions": ["Bate la mezcla hasta que esté homogénea.", "Cocina a fuego medio en sartén antiadherente."],
        "estimatedCost": 1.40
    },
    {
        "id": "eq_sab_2",
        "mealTime": "Almuerzo",
        "name": "Solomillo de ternera de pasto a la plancha con ensalada crujiente y aguacate",
        "description": "Hierro hemo, carnitina y creatina natural para la fuerza muscular femenina 30+.",
        "proteinGrams": 36,
        "imageUrl": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Sello el solomillo a fuego muy vivo 2 minutos por lado con sal marina gruesa; mantiene sus jugos y todo su hierro biodisponible intacto."',
        "prepTime": "12 min",
        "ingredients": ["150g de medallón de ternera de pasto", "Base de rúcula y canónigos", "Medio aguacate", "Aceite de oliva virgen extra"],
        "instructions": ["Sella la carne en plancha bien caliente al punto deseado.", "Sirve junto a la ensalada de hojas verdes y aguacate aliñada con AOVE."],
        "estimatedCost": 3.80
    },
    {
        "id": "eq_sab_3",
        "mealTime": "Snack Hormonal",
        "name": "Batido de espinacas tiernas con plátano congelado y leche vegetal",
        "description": "Potasio y magnesio para relajar las fibras musculares tras el entrenamiento del sábado.",
        "proteinGrams": 8,
        "imageUrl": "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Bato las espinacas con plátano congelado; la textura queda densa y cremosa como un batido de heladería sin azúcar añadido."',
        "prepTime": "3 min",
        "ingredients": ["Puñado de espinacas tiernas", "Medio plátano congelado", "200ml de bebida vegetal", "Semillas de chía"],
        "instructions": ["Bate a velocidad máxima durante 40 segundos y disfruta de inmediato."],
        "estimatedCost": 0.85
    },
    {
        "id": "eq_sab_4",
        "mealTime": "Cena",
        "name": "Revuelto campero de dos huevos con espárragos trigueros y champiñones",
        "description": "Cena suave reparadora con fitoquímicos fúngicos y colina cerebral.",
        "proteinGrams": 22,
        "imageUrl": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Salteo los espárragos y champiñones primero; apago el fuego y vierto los huevos para que se cuajen con el calor residual."',
        "prepTime": "10 min",
        "ingredients": ["2 huevos ecológicos", "Manojo de espárragos verdes en trozos", "80g de champiñones laminados", "AOVE y sal marina"],
        "instructions": ["Saltea los vegetales con AOVE hasta que estén tiernos.", "Añade los huevos y remueve suavemente a fuego apagado."],
        "estimatedCost": 1.80
    },

    # Domingo (4 meals)
    {
        "id": "eq_dom_1",
        "mealTime": "Desayuno",
        "name": "Huevos camperos al plato horneados con salsa de tomate y aguacate fresco",
        "description": "Licopeno y grasas saludables para la salud cardiovascular y ovárica.",
        "proteinGrams": 22,
        "imageUrl": "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Horneo los huevos con la salsa de tomate 8 minutos; la yema queda líquida para mojar con aguacate fresco al final."',
        "prepTime": "12 min",
        "ingredients": ["2 huevos camperos", "120g de tomate triturado natural", "Medio aguacate", "Orégano y AOVE"],
        "instructions": ["Coloca el tomate sazonado en una cazuela baja.", "Casca los huevos y hornea a 180°C durante 8 minutos."],
        "estimatedCost": 1.65
    },
    {
        "id": "eq_dom_2",
        "mealTime": "Almuerzo",
        "name": "Bowl de quinoa con pechuga de pavo dorada, tomates secos y canónigos",
        "description": "Antioxidantes concentrados y proteína magra para nutrir los tejidos conectivos.",
        "proteinGrams": 33,
        "imageUrl": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Añado tomates secos picados a la quinoa tibia; aportan un sabor intenso y licopeno sin necesidad de salsas calóricas."',
        "prepTime": "16 min",
        "ingredients": ["150g de pechuga de pavo", "50g de quinoa cocida", "4 tomates secos rehidratados", "Canónigos frescos y AOVE"],
        "instructions": ["Cocina el pavo en la sartén hasta que esté dorado.", "Mezcla con la quinoa cocida, los tomates secos y los canónigos."],
        "estimatedCost": 2.45
    },
    {
        "id": "eq_dom_3",
        "mealTime": "Snack Hormonal",
        "name": "Pudín de chía con bebida de almendras y frambuesas silvestres frescas",
        "description": "Ácidos grasos antiinflamatorios y fibra saciante para el final de la semana.",
        "proteinGrams": 10,
        "imageUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Preparo el pudín en vasitos individuales de cristal; es el postre saludable perfecto para cerrar el domingo con calma."',
        "prepTime": "3 min",
        "ingredients": ["3 cucharadas de chía", "180ml de bebida vegetal", "Puñado de frambuesas frescas"],
        "instructions": ["Mezcla la chía con la bebida vegetal y deja reposar.", "Corona con frambuesas frescas."],
        "estimatedCost": 1.20
    },
    {
        "id": "eq_dom_4",
        "mealTime": "Cena",
        "name": "Crema aterciopelada de calabaza con semillas de sésamo y merluza al vapor",
        "description": "Cena ligera de bajo residuo que favorece el descanso profundo antes de iniciar el ciclo laboral.",
        "proteinGrams": 27,
        "imageUrl": "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Trituro la calabaza con el caldo hasta que quede muy fina y sirvo los dados de merluza cocinada en el centro."',
        "prepTime": "18 min",
        "ingredients": ["250g de calabaza cocida", "120g de merluza al vapor", "Semillas de sésamo tostadas", "Caldo vegetal y AOVE"],
        "instructions": ["Tritura la calabaza con caldo vegetal hasta que quede suave.", "Sirve en tazón con los trozos de merluza al vapor y sésamo."],
        "estimatedCost": 2.10
    }
]

print(f"Meals Equilibrado created: {len(MEALS_EQUILIBRADO)}")

MEALS_FLEXIBLE = [
    # Lunes (4 meals)
    {
        "id": "flex_lun_1",
        "mealTime": "Desayuno",
        "name": "Tostada nórdica de masa madre con salmón ahumado salvaje, aguacate y eneldo fresco",
        "description": "Omega-3 marino de cadena larga EPA/DHA y grasas monoinsaturadas para el rendimiento cognitivo.",
        "proteinGrams": 26,
        "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Coloco el salmón ahumado sobre el aguacate machacado con unas gotas de limón y eneldo; es el desayuno más saciante y antiinflamatorio."',
        "prepTime": "6 min",
        "ingredients": ["1 rebanada de pan de espelta artesanal", "60g de salmón salvaje", "Medio aguacate maduro", "Eneldo fresco y zumo de limón"],
        "instructions": ["Tuesta el pan.", "Unta el aguacate y coloca las lonchas de salmón con eneldo fresco y limón."],
        "estimatedCost": 3.40
    },
    {
        "id": "flex_lun_2",
        "mealTime": "Almuerzo",
        "name": "Tataki de atún rojo sellado a la sésamo con ensalada de algas wakame y edamame",
        "description": "Selenio, yodo natural para la tiroides y proteína marina de altísima pureza.",
        "proteinGrams": 38,
        "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Sello el atún solo 40 segundos por cada lado en sartén humeante; el centro debe quedar rosado para conservar todas sus vitaminas liposolubles."',
        "prepTime": "12 min",
        "ingredients": ["160g de lomo de atún fresco", "Semillas de sésamo blanco y negro", "50g de edamames cocidos", "Alga wakame y aceite de sésamo"],
        "instructions": ["Reboza el atún en semillas de sésamo.", "Sella a fuego muy fuerte 40 segundos por lado y corta en láminas finas."],
        "estimatedCost": 4.50
    },
    {
        "id": "flex_lun_3",
        "mealTime": "Snack Hormonal",
        "name": "Smoothie bowl de açaí orgánico con bayas silvestres, nibs de cacao y semillas de chía",
        "description": "Capacidad antioxidante ORAC superior para proteger el endotelio y las células ováricas.",
        "proteinGrams": 11,
        "imageUrl": "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Trituro la pulpa de açaí pura con frutos rojos congelados; la textura densa como un sorbete con nibs de cacao crujientes es un auténtico lujo biológico."',
        "prepTime": "5 min",
        "ingredients": ["100g de pulpa de açaí sin azúcar", "Frutos rojos", "1 cucharada de nibs de cacao puro", "Bebida de almendras"],
        "instructions": ["Tritura el açaí con los frutos rojos.", "Vierte en cuenco y decora con nibs de cacao y semillas."],
        "estimatedCost": 2.10
    },
    {
        "id": "flex_lun_4",
        "mealTime": "Cena",
        "name": "Filete de lubina salvaje a la plancha con puré suave de chirivía y trigueros",
        "description": "Cena gastronómica antiinflamatoria de digestión ultraligera para inducir el descanso reparador.",
        "proteinGrams": 32,
        "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Cuezo la chirivía con una cucharadita de aceite virgen extra y la trituro caliente; tiene una dulzura natural que complementa el pescado salvaje."',
        "prepTime": "20 min",
        "ingredients": ["170g de filete de lubina salvaje", "2 chirivías medianas", "Manojo de espárragos trigueros", "Flor de sal y AOVE"],
        "instructions": ["Cuece y tritura la chirivía como puré fino.", "Marca la lubina y los espárragos a la plancha y sirve sobre el puré."],
        "estimatedCost": 3.90
    },

    # Martes (4 meals)
    {
        "id": "flex_mar_1",
        "mealTime": "Desayuno",
        "name": "Huevos Benedictinos saludables con pechuga de pavo artesanal sobre pan de masa madre y crema de aguacate",
        "description": "Proteína y grasas saciantes sin salsas hidrogenadas ni mantequillas pesadas.",
        "proteinGrams": 25,
        "imageUrl": "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Sustituyo la salsa holandesa tradicional por una crema de aguacate emulsionada con limón y AOVE; queda deliciosa, ligera y repleta de potasio."',
        "prepTime": "12 min",
        "ingredients": ["2 huevos camperos escalfados", "40g de pechuga de pavo asada", "1 rebanada de pan de masa madre", "Crema de aguacate y limón"],
        "instructions": ["Tuesta el pan y coloca el pavo asado.", "Añade los huevos escalfados y salsea con la crema suave de aguacate."],
        "estimatedCost": 2.60
    },
    {
        "id": "flex_mar_2",
        "mealTime": "Almuerzo",
        "name": "Medallón de ternera de pasto 100% con setas shiitake salteadas y espárragos trigueros",
        "description": "Betaglucanos inmunomoduladores y hierro hemo orgánico para potenciar la hemoglobina.",
        "proteinGrams": 37,
        "imageUrl": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Salteo las setas shiitake con ajo laminado a fuego fuerte; potencian la inmunidad y su sabor umami combina a la perfección con la ternera de pasto."',
        "prepTime": "15 min",
        "ingredients": ["160g de medallón de ternera de pasto", "100g de setas shiitake frescas", "Manojo de espárragos verdes", "Ajo, sal marina y AOVE"],
        "instructions": ["Sella la ternera en sartén de hierro bien caliente.", "Saltea las setas con los espárragos y sirve caliente."],
        "estimatedCost": 4.10
    },
    {
        "id": "flex_mar_3",
        "mealTime": "Snack Hormonal",
        "name": "Cuenco de frambuesas silvestres con nueces de macadamia y chocolate negro 90%",
        "description": "Ácidos grasos palmitoleicos y fitoquímicos protectores de la barrera cutánea.",
        "proteinGrams": 8,
        "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Las nueces de macadamia aportan un perfil graso muy limpio; dos onzas de chocolate puro y un puñado de frambuesas calman cualquier ansiedad."',
        "prepTime": "2 min",
        "ingredients": ["Puñado de frambuesas frescas", "6 nueces de macadamia", "20g de chocolate negro 90%"],
        "instructions": ["Sirve en cuenco pequeño y saborea conscientemente."],
        "estimatedCost": 1.60
    },
    {
        "id": "flex_mar_4",
        "mealTime": "Cena",
        "name": "Brochetas de langostinos salvajes a la plancha con calabacín glaseado al limón",
        "description": "Astaxantina marina antioxidante y zinc para la síntesis de colágeno tisular.",
        "proteinGrams": 30,
        "imageUrl": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Ensarto los langostinos alternando con rodajas de calabacín y los doro 2 minutos por lado con zumo de limón y pimienta rosa."',
        "prepTime": "14 min",
        "ingredients": ["180g de langostinos pelados salvajes", "1 calabacín tierno", "Aceite de oliva virgen extra, limón y pimienta rosa"],
        "instructions": ["Monta las brochetas alternando ingredientes.", "Marca a fuego vivo en plancha 2-3 minutos por lado."],
        "estimatedCost": 3.80
    },

    # Miércoles (4 meals)
    {
        "id": "flex_mie_1",
        "mealTime": "Desayuno",
        "name": "Tostada francesa artesanal de masa madre con frutos rojos, canela y yogur griego",
        "description": "Desayuno antiinflamatorio gourmet que aporta proteína completa y carbohidratos no refinados.",
        "proteinGrams": 23,
        "imageUrl": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Remojo el pan de masa madre en huevo batido con bebida vegetal y canela; lo doro en sartén con unas gotas de AOVE y queda crujiente por fuera y tierno por dentro."',
        "prepTime": "10 min",
        "ingredients": ["1 rebanada gruesa de pan artesanal", "1 huevo campero", "Bebida vegetal y canela", "Frutos rojos frescos y yogur griego"],
        "instructions": ["Remoja el pan en la mezcla de huevo y canela.", "Dora en sartén caliente 2 minutos por lado y corona con frutos rojos."],
        "estimatedCost": 1.90
    },
    {
        "id": "flex_mie_2",
        "mealTime": "Almuerzo",
        "name": "Poke bowl de salmón salvaje marinado en jengibre con edamame, aguacate y arroz integral",
        "description": "Omega-3 marino crudo de máxima bioactividad y almidón resistente para la microbiota.",
        "proteinGrams": 36,
        "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Corto el salmón en dados y lo marino 10 minutos con zumo de lima y jengibre; el ácido cítrico cocina suavemente la proteína sin aplicar calor."',
        "prepTime": "15 min",
        "ingredients": ["150g de lomo de salmón salvaje", "60g de arroz integral cocido", "Medio aguacate", "Edamame y semillas de sésamo"],
        "instructions": ["Marina el salmón en dados con lima y jengibre.", "Monta el cuenco con la base de arroz, edamames, aguacate y salmón."],
        "estimatedCost": 4.20
    },
    {
        "id": "flex_mie_3",
        "mealTime": "Snack Hormonal",
        "name": "Batido de proteína limpia de cáñamo con arándanos silvestres y bebida de almendras",
        "description": "Complejo de aminoácidos vegetales sin alérgenos ni hinchazón abdominal.",
        "proteinGrams": 18,
        "imageUrl": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Uso proteína de cáñamo orgánica en polvo; no produce gases ni pesadez y nutre el tejido articular tras el ejercicio físico."',
        "prepTime": "3 min",
        "ingredients": ["20g de proteína de cáñamo en polvo", "Puñado de arándanos", "200ml de bebida de almendras sin endulzar"],
        "instructions": ["Bate todos los ingredientes hasta que emulsione y consume de inmediato."],
        "estimatedCost": 1.50
    },
    {
        "id": "flex_mie_4",
        "mealTime": "Cena",
        "name": "Suprema de bacalao fresco al horno sobre lecho de espinacas tiernas y piñones tostados",
        "description": "Proteína blanca pura rica en niacina que favorece la vasodilatación y el sosiego nocturno.",
        "proteinGrams": 32,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Horneo el bacalao solo 10 minutos a 180°C sobre las espinacas con piñones; las lascas del pescado deben separarse suavemente con el tenedor."',
        "prepTime": "18 min",
        "ingredients": ["170g de lomo de bacalao fresco", "150g de espinacas tiernas", "15g de piñones tostados", "Aceite virgen extra y ajo"],
        "instructions": ["Saltea las espinacas 1 minuto con los piñones en la base de la fuente.", "Coloca el bacalao y hornea 10 minutos."],
        "estimatedCost": 3.70
    },

    # Jueves (4 meals)
    {
        "id": "flex_jue_1",
        "mealTime": "Desayuno",
        "name": "Porridge cremoso de quinoa inflada y avena con nueces pecanas, higos y canela",
        "description": "Densidad mineral superior con calcio, magnesio y energía bioasimilable.",
        "proteinGrams": 20,
        "imageUrl": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Combino avena con quinoa cocida a fuego lento con canela y bebida vegetal; los higos frescos aportan un dulzor natural exquisito."',
        "prepTime": "9 min",
        "ingredients": ["30g de avena", "30g de quinoa cocida", "2 higos frescos", "4 nueces pecanas", "Bebida vegetal"],
        "instructions": ["Cocina la mezcla de cereales con la bebida vegetal 5 minutos.", "Sirve en tazón con los higos troceados y nueces pecanas."],
        "estimatedCost": 1.95
    },
    {
        "id": "flex_jue_2",
        "mealTime": "Almuerzo",
        "name": "Solomillo de pollo de corral con salteado de espárragos trigueros, champiñones portobello y romero",
        "description": "Aporte de zinc, selenio y proteínas limpias para apoyar el sistema endocrino femenino.",
        "proteinGrams": 36,
        "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Doro los portobello cortados en cuartos con romero fresco en la misma sartén del pollo; recogen todos los jugos naturales."',
        "prepTime": "16 min",
        "ingredients": ["170g de solomillos de pollo de corral", "100g de champiñones portobello", "Espárragos verdes", "Romero fresco y AOVE"],
        "instructions": ["Marca el pollo hasta que esté bien dorado.", "Saltea los portobello y espárragos con romero y sirve junto."],
        "estimatedCost": 3.10
    },
    {
        "id": "flex_jue_3",
        "mealTime": "Snack Hormonal",
        "name": "Kéfir ecológico artesanal con semillas de granada y almendras laminadas",
        "description": "Ácido punícico antioxidante y cepas bacterianas vivas que optimizan el estroboloma.",
        "proteinGrams": 13,
        "imageUrl": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"La granada es una joya para las mujeres 30+; sus polifenoles combinados con el kéfir ayudan a modular el metabolismo de estrógenos."',
        "prepTime": "3 min",
        "ingredients": ["180g de kéfir artesanal", "3 cucharadas de semillas de granada fresca", "15g de almendras laminadas tostadas"],
        "instructions": ["Mezcla el kéfir con las semillas de granada y corona con las almendras."],
        "estimatedCost": 1.45
    },
    {
        "id": "flex_jue_4",
        "mealTime": "Cena",
        "name": "Lomo de salmón salvaje en papillote con verduritas juliana y toque de hinojo",
        "description": "Cocción suave que conserva el 100% de los ácidos grasos omega-3 y evita la formación de aminas heterocíclicas.",
        "proteinGrams": 33,
        "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Envuelvo el salmón en papel de horno con hinojo fresco y calabacín; al hornearse en su propio vapor a 180°C queda increíblemente tierno."',
        "prepTime": "18 min",
        "ingredients": ["160g de salmón salvaje", "Calabacín y zanahoria en juliana fina", "Bulbo de hinojo", "Aceite de oliva virgen extra y limón"],
        "instructions": ["Coloca las verduras y el salmón en un paquete de papel de hornear cerrado.", "Hornea a 180°C durante 14 minutos."],
        "estimatedCost": 3.95
    },

    # Viernes (4 meals)
    {
        "id": "flex_vie_1",
        "mealTime": "Desayuno",
        "name": "Tostada de pan de centeno con aguacate, huevo campero frito en AOVE y copos de sésamo negro",
        "description": "Grasas cardiosaludables y fosfolípidos que potencian la síntesis celular.",
        "proteinGrams": 22,
        "imageUrl": "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Frío el huevo en solo una cucharada de aceite de oliva muy caliente para que quede con puntilla crujiente pero la yema totalmente líquida."',
        "prepTime": "7 min",
        "ingredients": ["1 rebanada de pan de centeno", "Medio aguacate", "1 huevo ecológico", "Sésamo negro y sal marina"],
        "instructions": ["Tuesta el pan y coloca el aguacate machacado.", "Cocina el huevo con puntilla y coloca sobre el aguacate."],
        "estimatedCost": 1.85
    },
    {
        "id": "flex_vie_2",
        "mealTime": "Almuerzo",
        "name": "Pasta sin gluten de trigo sarraceno con pesto casero de albahaca, nueces y tiras de pavo",
        "description": "Flavonoides de rutina para la microcirculación y saciedad glucémica balanceada.",
        "proteinGrams": 32,
        "imageUrl": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Hago el pesto triturando albahaca fresca con nueces y aceite de oliva virgen extra; es una salsa antiinflamatoria viva que transforma la pasta."',
        "prepTime": "15 min",
        "ingredients": ["70g de pasta de trigo sarraceno 100%", "120g de pechuga de pavo en dados", "Albahaca fresca, nueces y AOVE"],
        "instructions": ["Cuece la pasta al dente y saltea el pavo.", "Mezcla la pasta con el pesto casero y el pavo caliente."],
        "estimatedCost": 2.75
    },
    {
        "id": "flex_vie_3",
        "mealTime": "Snack Hormonal",
        "name": "Smoothie verde con espinaca fresca, piña natural diurética y jengibre",
        "description": "Bromelina antiinflamatoria que reduce edemas y acelera la recuperación de tejidos.",
        "proteinGrams": 7,
        "imageUrl": "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"La piña fresca contiene bromelina activa que desinflama las articulaciones y facilita la eliminación de líquidos retenidos."',
        "prepTime": "4 min",
        "ingredients": ["2 rodajas de piña fresca natural", "Puñado de espinacas", "Trozo de jengibre fresco", "Agua de coco"],
        "instructions": ["Bate a máxima potencia con agua de coco y hielo."],
        "estimatedCost": 1.20
    },
    {
        "id": "flex_vie_4",
        "mealTime": "Cena",
        "name": "Brochetas de pechuga de pollo de pasto con verduras a la parrilla y aliño de cítricos",
        "description": "Proteína magra digestiva con antioxidantes procedentes del pimiento y calabacín a la brasa.",
        "proteinGrams": 34,
        "imageUrl": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Mojo las brochetas con un aliño de zumo de naranja, limón y orégano antes de marcar en la parrilla; el pollo queda jugosísimo."',
        "prepTime": "18 min",
        "ingredients": ["160g de pechuga de pollo de pasto", "Pimiento rojo, amarillo y calabacín", "Zumo de limón, naranja y AOVE"],
        "instructions": ["Ensarta los dados de pollo y verdura en brochetas.", "Asa en parrilla caliente 8-10 minutos girando periódicamente."],
        "estimatedCost": 2.65
    },

    # Sábado (4 meals)
    {
        "id": "flex_sab_1",
        "mealTime": "Desayuno",
        "name": "Pancakes proteicos de avena con ricota de oveja, arándanos frescos y miel pura cruda",
        "description": "Calcio bioasimilable y proteínas de alta digestibilidad para una mañana activa.",
        "proteinGrams": 24,
        "imageUrl": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Añado una cucharada de ricota fresca a la masa de las tortitas; adquieren una esponjosidad increíble sin necesidad de levaduras químicas."',
        "prepTime": "12 min",
        "ingredients": ["2 huevos ecológicos", "40g de avena molida", "40g de ricota fresca", "Arándanos frescos y miel cruda"],
        "instructions": ["Mezcla los ingredientes y cocina pequeñas tortitas en sartén antiadherente.", "Sirve con arándanos frescos y un hilo de miel cruda."],
        "estimatedCost": 2.10
    },
    {
        "id": "flex_sab_2",
        "mealTime": "Almuerzo",
        "name": "Filete de ternera de pasto a la plancha con puré rústico de boniato y espárragos verdes",
        "description": "Hierro hemo, zinc orgánico y carbohidratos complejos de absorción sostenida.",
        "proteinGrams": 38,
        "imageUrl": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Chafé el boniato asado con un tenedor y un chorro generoso de AOVE; la textura rústica es el mejor acompañamiento para la carne de pasto."',
        "prepTime": "18 min",
        "ingredients": ["160g de filete de ternera de pasto", "1 boniato asado", "Manojo de espárragos trigueros", "Flor de sal y AOVE"],
        "instructions": ["Sella la carne en plancha humeante al punto deseado.", "Sirve junto al puré de boniato tibio y los espárragos marcados."],
        "estimatedCost": 4.40
    },
    {
        "id": "flex_sab_3",
        "mealTime": "Snack Hormonal",
        "name": "Cuenco de frutos del bosque frescos con chocolate negro rallado y nueces de Brasil",
        "description": "Selenio puro de nueces de Brasil para la síntesis de hormonas tiroideas T3 y T4.",
        "proteinGrams": 9,
        "imageUrl": "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Solo 2 nueces de Brasil al día cubren el 100% del requerimiento de selenio para que la tiroides convierta la T4 en T3 activa."',
        "prepTime": "2 min",
        "ingredients": ["Frutos del bosque variados", "2 nueces de Brasil", "15g de chocolate negro rallado"],
        "instructions": ["Coloca los frutos del bosque en cuenco, añade las nueces de Brasil y ralla chocolate encima."],
        "estimatedCost": 1.50
    },
    {
        "id": "flex_sab_4",
        "mealTime": "Cena",
        "name": "Filete de pescado blanco a la plancha con crema de calabaza y semillas de cáñamo",
        "description": "Cena nocturna de confort biológico que apaga las hormonas del estrés tras el sábado.",
        "proteinGrams": 28,
        "imageUrl": "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Sirvo el pescado blanco dorado sobre un lecho de crema tibia de calabaza; es el plato más digestivo y relajante para un descanso profundo."',
        "prepTime": "16 min",
        "ingredients": ["160g de pescado blanco limpio", "200ml de crema de calabaza", "Semillas de cáñamo", "Aceite virgen extra y limón"],
        "instructions": ["Calienta la crema de calabaza en cuenco hondo.", "Dora el pescado en la sartén y colócalo sobre la crema con semillas."],
        "estimatedCost": 2.80
    },

    # Domingo (4 meals)
    {
        "id": "flex_dom_1",
        "mealTime": "Desayuno",
        "name": "Aguacate horneado relleno de huevo campero con semillas de sésamo y pimentón ahumado",
        "description": "Grasas cardiosaludables y colina en un formato caliente que sacia durante horas.",
        "proteinGrams": 20,
        "imageUrl": "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Casco el huevo en el hueco del medio aguacate y horneo 12 minutos a 190°C; la textura cremosa del aguacate caliente con la yema es insuperable."',
        "prepTime": "15 min",
        "ingredients": ["1 aguacate grande partido al medio", "2 huevos camperos pequeños", "Pimentón dulce ahumado, sal marina y sésamo"],
        "instructions": ["Agranda ligeramente el hueco del aguacate y casca el huevo dentro.", "Hornea a 190°C durante 12-14 minutos."],
        "estimatedCost": 2.20
    },
    {
        "id": "flex_dom_2",
        "mealTime": "Almuerzo",
        "name": "Suprema de salmón salvaje a la plancha con quinoa tricolor, aguacate y vinagreta de lima",
        "description": "DHA marino y bioflavonoides que combaten la inflamación de bajo grado.",
        "proteinGrams": 37,
        "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Doro el salmón dejándolo rosado por dentro y lo sirvo con quinoa tibia y aguacate fresco; es mi comida favorita para recargar el domingo."',
        "prepTime": "15 min",
        "ingredients": ["170g de lomo de salmón salvaje", "50g de quinoa cocida", "Medio aguacate", "Lima fresca y AOVE"],
        "instructions": ["Marca el salmón en la plancha 4 minutos por la piel.", "Sirve con la quinoa tibia y rodajas de aguacate aliñadas con lima."],
        "estimatedCost": 4.20
    },
    {
        "id": "flex_dom_3",
        "mealTime": "Snack Hormonal",
        "name": "Pudin de chía con cacao puro criollo, bebida de coco y avellanas tostadas",
        "description": "Magnesio, polifenoles del cacao criollo y grasas buenas para calmar el nervio vago.",
        "proteinGrams": 11,
        "imageUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Mezclo la chía con cacao puro en polvo y leche de coco; tras unas horas en la nevera parece una mousse de chocolate saludable."',
        "prepTime": "4 min",
        "ingredients": ["3 cucharadas de chía", "1 cucharada de cacao puro criollo", "180ml de bebida de coco", "Avellanas tostadas picadas"],
        "instructions": ["Bate el cacao con la bebida vegetal y la chía.", "Deja reposar y decora con avellanas tostadas."],
        "estimatedCost": 1.55
    },
    {
        "id": "flex_dom_4",
        "mealTime": "Cena",
        "name": "Crema reconfortante de verduras de la huerta con virutas de jamón ibérico y semillas",
        "description": "Cena depurativa ligera con un toque de ácido oleico ibérico para preparar la semana.",
        "proteinGrams": 24,
        "imageUrl": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
        "isPremium": True,
        "elenaQuote": '"Trituro calabacín, puerro y espinacas con caldo suave y coloco virutas de jamón ibérico que se templan con el calor de la crema."',
        "prepTime": "18 min",
        "ingredients": ["Calabacín, puerro y espinacas", "30g de jamón ibérico en virutas", "Semillas de calabaza", "AOVE"],
        "instructions": ["Cuece las verduras y tritura hasta obtener textura cremosa.", "Sirve con las virutas de jamón y semillas por encima."],
        "estimatedCost": 2.60
    }
]

print(f"Meals Flexible created: {len(MEALS_FLEXIBLE)}")

# Now verify uniqueness of ALL 84 names
all_meals = MEALS_ECONOMICO + MEALS_EQUILIBRADO + MEALS_FLEXIBLE
print(f"Total meals to check: {len(all_meals)}")
names = [m["name"] for m in all_meals]
unique_names = set(names)
print(f"Unique names: {len(unique_names)}")
if len(names) != len(unique_names):
    from collections import Counter
    counts = Counter(names)
    for n, count in counts.items():
        if count > 1:
            print("DUPLICATE:", n, count)
    raise ValueError("Duplicate meal names detected!")
else:
    print("SUCCESS: All 84 meals have 100% UNIQUE names!")

