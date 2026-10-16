const fs = require('fs');

const MATCHES = {
  'photo-1525351484163-7529414344d8': {
    name: 'Tostada de pan de masa madre con huevos revueltos cremosos y brotes de espinaca',
    description: 'Proteína biodisponible de asimilación limpia y colina para regular el cortisol matutino.',
    prepTime: '8 min',
    quote: '"Bato 3 huevos camperos con una pizca de sal marina y los cuajo a fuego lento con unas gotas de aceite virgen extra; los sirvo jugosos sobre la tostada integral con espinacas frescas."',
    ingredients: ['3 huevos camperos frescos', 'Puñado de espinacas tiernas', '1 rebanada de pan de masa madre', 'Aceite de oliva virgen extra y sal marina'],
    instructions: ['Saltea las espinacas 1 minuto.', 'Bate los huevos y cuájalos a fuego suave 2 minutos.', 'Sirve sobre la tostada caliente con unas gotas de AOVE.']
  },
  'photo-1540420773420-3366772f4999': {
    name: 'Ensalada templada de pechuga de pollo a la plancha con brotes frescos y tomates cherry',
    description: '32g de proteína limpia y antioxidantes vegetales sin provocar somnolencia.',
    prepTime: '12 min',
    quote: '"Cocino medio kilo de pechuga de pollo a la plancha los domingos con orégano y limón; la corto en tiras para la nevera y así preparo este almuerzo proteico en solo 3 minutos."',
    ingredients: ['160g de pechuga de pollo en tiras', 'Brotes tiernos y rúcula fresca', 'Tomates cherry partidos al medio', 'Aceite de oliva virgen extra y limón'],
    instructions: ['Dora la pechuga a la plancha con limón y sal.', 'Dispón los brotes y tomates cherry en un cuenco.', 'Corona con el pollo templado y aliña con AOVE.']
  },
  'photo-1511690656952-34342bb7c2f2': {
    name: 'Tazón de yogur natural cremoso con arándanos silvestres, nueces y semillas de chía',
    description: 'Probióticos activos para el microbioma y polifenoles antioxidantes para regular los estrógenos.',
    prepTime: '4 min',
    quote: '"Mezclo un yogur natural entero sin azúcar con un puñado de arándanos y nueces; los polifenoles y probióticos calman el intestino en 2 minutos."',
    ingredients: ['200g de yogur natural entero o kéfir sin azúcar', 'Puñado de arándanos silvestres', '30g de nueces troceadas', '1 cucharadita de semillas de chía'],
    instructions: ['Vierte el yogur en un cuenco.', 'Añade los arándanos, las nueces partidas y las semillas de chía.']
  },
  'photo-1546069901-ba9599a7e63c': {
    name: 'Bowl mediterráneo de quinoa con huevo poché, calabacín salteado y brotes',
    description: 'Carbohidratos complejos de absorción lenta y aminoácidos completos que no elevan la temperatura de noche.',
    prepTime: '10 min',
    quote: '"Cuezo un vaso de quinoa el fin de semana y lo guardo en la nevera en un táper de cristal; por la noche solo salteo calabacín con un huevo y tengo una cena saciante en 7 minutos."',
    ingredients: ['80g de quinoa cocida', '1 huevo campero pochado o a la plancha', '1 calabacín en rodajas salteado', 'Hojas de espinaca baby', 'Aceite de oliva virgen extra'],
    instructions: ['Saltea el calabacín 3 minutos en sartén con aceite y sal marina.', 'Dispón la quinoa templada en un cuenco hondo con las espinacas y el calabacín.', 'Corona con el huevo pochado y un chorrito de AOVE.']
  },
  'photo-1584365685547-9a5fb6f3a70c': {
    name: 'Porridge templado de avena integral con frutos del bosque, canela y semillas',
    description: 'Fibra soluble beta-glucano y carbohidratos lentos que sacian y nutren la microbiota.',
    prepTime: '7 min',
    quote: '"Hiervo 40g de copos de avena con una taza de agua o bebida vegetal y abundante canela de Ceilán; los betaglucanos calman el intestino y el zinc de las semillas apoya la producción hormonal."',
    ingredients: ['40g de copos de avena integral', '200ml de agua o bebida vegetal sin azúcar', '1 cucharadita de canela de Ceilán pura', 'Frutos del bosque frescos', '1 cucharada de semillas de calabaza o girasol'],
    instructions: ['Hierve la avena con el líquido 4 minutos en un cazo a fuego medio removiendo con cuchara.', 'Vierte en un tazón, espolvorea canela y decora con los frutos del bosque y semillas.']
  },
  'photo-1519708227418-c8fd9a32b7a2': {
    name: 'Lomo de salmón a la plancha con espárragos trigueros y limón',
    description: 'Omega-3 marino DHA/EPA que reduce la inflamación silenciosa y favorece el descanso profundo nocturno.',
    prepTime: '12 min',
    quote: '"Coloco el salmón con la piel hacia abajo en la sartén bien caliente durante 4 minutos sin moverlo; luego le doy la vuelta un minuto más. Queda crujiente por fuera y jugoso por dentro, conservando todo su Omega-3 natural."',
    ingredients: ['170g de lomo de salmón fresco con piel', 'Manojo de espárragos trigueros', 'Rodajas de limón fresco', 'Aceite de oliva virgen extra y flor de sal'],
    instructions: ['Saltea los espárragos 5 minutos en la sartén con unas gotas de AOVE.', 'Cocina el lomo de salmón 4 minutos por el lado de la piel hasta que esté crujiente, voltea 1 minuto y sirve con limón.']
  },
  'photo-1568571780765-9276ac8b75a2': {
    name: 'Gajos de manzana fresca con canela de Ceilán y nueces crujientes',
    description: 'Pectina prebiótica calmante para la mucosa gástrica y regulación del apetito dulce.',
    prepTime: '3 min',
    quote: '"Corto una manzana fresca en gajos finos con bastante canela de Ceilán y 4 nueces; la pectina natural calma el apetito dulce de media tarde de inmediato sin elevar la insulina."',
    ingredients: ['1 manzana fresca crujiente', 'Canela de Ceilán pura en polvo', '4 nueces partidas'],
    instructions: ['Corta la manzana en gajos limpios.', 'Espolvorea canela generosa y acompaña con las nueces.']
  },
  'photo-1512621776951-a57141f2eefd': {
    name: 'Cazuela reconfortante de verduras de la huerta y legumbres con aceite virgen extra',
    description: 'Nutrientes desinflamantes y fibra soluble prebiótica que reconfortan el sistema digestivo.',
    prepTime: '15 min',
    quote: '"Preparo una olla grande de caldo de verduras y legumbres con una hoja de laurel; reconforta el sistema digestivo y es ideal para las noches de descanso."',
    ingredients: ['150g de legumbres cocidas', 'Espinacas tiernas y calabacín', 'Zanahoria y puerro pochados', 'Aceite de oliva virgen extra y pimentón dulce'],
    instructions: ['Saltea las verduras con AOVE en una cazuela 4 minutos.', 'Añade las legumbres y caldo vegetal caliente; hierve suavemente 8 minutos y sirve caliente.']
  },
  'photo-1467003909585-2f8a72700288': {
    name: 'Filete de pescado blanco al horno sobre lecho de calabacín, cebolla dulce y limón',
    description: 'Proteína pura ultra digestiva que no sobrecarga el hígado antes del descanso nocturno.',
    prepTime: '18 min',
    quote: '"Coloco el filete de pescado blanco sobre rodajas finas de calabacín con un chorrito de aceite de oliva y horneo 12 minutos a 180°C; la cena más limpia y digestiva para dormir como un bebé."',
    ingredients: ['1 filete de pescado blanco fresco (merluza o dorada)', '1 calabacín en rodajas finas', 'Cebolla dulce en juliana', 'Limón, romero y sal marina'],
    instructions: ['Coloca el calabacín y cebolla en la fuente de horno con unas gotas de AOVE.', 'Dispón el pescado encima con rodajas de limón y horneo 12 minutos a 180°C.']
  },
  'photo-1553530666-ba11a7da3888': {
    name: 'Batido verde energizante con espinacas frescas, pepino y manzana verde',
    description: 'Clorofila celular, electrolitos naturales y drenaje de líquidos retenidos.',
    prepTime: '4 min',
    quote: '"Trituro un puñado de espinacas tiernas con medio pepino, manzana verde y zumo de limón; hidrata en profundidad y ayuda a drenar líquidos retenidos."',
    ingredients: ['Puñado generoso de espinacas baby frescas', '1/2 pepino pelado', '1/2 manzana verde', 'Zumo de medio limón fresco y agua mineral'],
    instructions: ['Introduce todo en el vaso de la batidora y tritura 1 minuto hasta que esté fino y homogéneo.']
  },
  'photo-1502741224143-90386d7f8c82': {
    name: 'Batido antioxidante de frutos rojos con semillas de chía y bebida vegetal',
    description: 'Polifenoles que protegen el endotelio y saciedad limpia sin azúcar añadido.',
    prepTime: '3 min',
    quote: '"Bato frutos del bosque con una taza de bebida vegetal y una cucharada de chía; obtienes una recarga de antioxidantes antiinflamatorios en 2 minutos."',
    ingredients: ['1 taza de frutos rojos frescos o congelados', '200ml de bebida de almendras o avena sin azúcar', '1 cucharada de semillas de chía', 'Pizca de canela'],
    instructions: ['Bate todo junto durante 45 segundos y disfruta recién preparado.']
  },
  'photo-1556881286-fc6915169721': {
    name: 'Pudding cremoso de chía con frutos rojos y canela de Ceilán',
    description: 'Calcio vegetal, omega-3 ALA y mucílagos que protegen la mucosa gástrica.',
    prepTime: '5 min + reposo',
    quote: '"Dejo 3 cucharadas de semillas de chía hidratando con leche vegetal toda la noche en un tarrito de cristal; por la mañana solo añado canela y frutos rojos para un desayuno rápido."',
    ingredients: ['3 cucharadas de semillas de chía', '180ml de bebida vegetal sin endulzar', 'Canela de Ceilán en polvo', 'Frutos rojos frescos'],
    instructions: ['Remueve las semillas con la bebida vegetal y canela en un tarro de cristal.', 'Refrigera al menos 2 horas o toda la noche; añade los frutos rojos al servir.']
  }
};

const filePath = './src/data/weeklyDietData.ts';
let code = fs.readFileSync(filePath, 'utf8');

// Replace meal blocks matching any photo
for (const [key, data] of Object.entries(MATCHES)) {
  // Regex to find meals with this imageUrl
  // We want to replace name, description, quote, prepTime, ingredients, instructions
  // We will do a structured replacement on each meal
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const mealRegex = new RegExp(`(\\{[\\s\\S]*?imageUrl:\\s*['"][^'"]*` + escapedKey + `[^'"]*['"][\\s\\S]*?\\})`, 'g');

  code = code.replace(mealRegex, (fullMeal) => {
    let updated = fullMeal;
    // Replace name
    updated = updated.replace(/name:\s*['"][^'"]*['"]/, `name: '${data.name}'`);
    // Replace description
    updated = updated.replace(/description:\s*['"][^'"]*['"]/, `description: '${data.description}'`);
    // Replace elenaAction
    updated = updated.replace(/elenaAction:\s*['"][^'"]*['"]/, `elenaAction: 'Elena preparando la receta'`);
    // Replace elenaQuote
    updated = updated.replace(/elenaQuote:\s*['"][^'"]*['"]/, `elenaQuote: ${JSON.stringify(data.quote)}`);
    // Replace prepTime
    updated = updated.replace(/prepTime:\s*['"][^'"]*['"]/, `prepTime: '${data.prepTime}'`);
    // Replace ingredients
    updated = updated.replace(/ingredients:\s*\[[\s\S]*?\],/, `ingredients: ${JSON.stringify(data.ingredients)},`);
    // Replace instructions
    updated = updated.replace(/instructions:\s*\[[\s\S]*?\],/, `instructions: ${JSON.stringify(data.instructions)},`);
    return updated;
  });
}

fs.writeFileSync(filePath, code, 'utf8');
console.log('Successfully aligned ALL recipes to their exact photos and Elena quotes!');
