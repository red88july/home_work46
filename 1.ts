type Size = 'small' | 'big';
type Topping = 'cheese' | 'salad' | 'fries';

class Hamburger {
    private static SIZE_PRICES: Record<Size, number> = {
        small: 60,
        big: 80,
    };

    private static SIZE_CALORIES: Record<Size, number> = {
        small: 200,
        big: 300,
    };

    private static TOPPING_PRICES: Record<Topping, number> = {
        cheese: 15,
        salad: 5,
        'fries': 10,
    };

    private static TOPPING_CALORIES: Record<Topping, number> = {
        cheese: 50,
        salad: 5,
        'fries': 25,
    };

    constructor (
        private size: Size,
        private topping: Topping) {
        if (!(size in Hamburger.SIZE_PRICES) || !(topping in Hamburger.TOPPING_PRICES)) {
            throw new Error('Invalid size or topping for hamburger');
        }
    }

    getPrice(): number {
        const basePrice = Hamburger.SIZE_PRICES[this.size];
        const toppingPrice = Hamburger.TOPPING_PRICES[this.topping];
        return basePrice + toppingPrice;
    }

    getCalories(): number {
        const baseCalories = Hamburger.SIZE_CALORIES[this.size];
        const toppingCalories = Hamburger.TOPPING_CALORIES[this.topping];
        return baseCalories + toppingCalories;
    }
}

// Usage examples:
const cheeseburger = new Hamburger('medium', 'fries');
console.log(cheeseburger.getPrice()); // Output: 75
console.log(cheeseburger.getCalories()); // Output: 250