import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();

    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 4);
    const bean = new Beans('Feijão', 3);
    const meat = new Meat('Carne', 8);

    this._meal.add(rice, bean, meat);

    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Coca Cola', 5);

    this._meal.add(beverage);

    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Banana com mel', 10);

    this._meal.add(dessert);

    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
