import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();

const meal1 = mainDishBuilder.makeMeal().makeDessert().makeBeverage().getMeal();

console.log(meal1);

mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeBeverage().getMeal();

console.log(meal2);

const veganDishBuilder = new VeganDishBuilder();

const mealVegan = veganDishBuilder.makeMeal().getMeal();

console.log(mealVegan);
