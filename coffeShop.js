const generalMenu = [
  {
    foodName: "orange juice",
    type: "drink",
    price: 250,
  },
  {
    foodName: "lemonade",
    type: "drink",
    price: 50,
  },
  {
    foodName: "cranberry juice",
    type: "drink",
    price: 350,
  },
  {
    foodName: "pineapple juice",
    type: "drink",
    price: 400,
  },
  {
    foodName: "lemon iced tea",
    type: "drink",
    price: 450,
  },
  {
    foodName: "vanilla chai latte",
    type: "drink",
    price: 400,
  },
  {
    foodName: "hot chocolate",
    type: "drink",
    price: 350,
  },
  {
    foodName: "iced coffee",
    type: "drink",
    price: 300,
  },
  {
    foodName: "tuna sandwich",
    type: "whetherfood",
    price: 300,
  },
  {
    foodName: "ham and cheese sandwich",
    type: "whetherfood",
    price: 350,
  },
  {
    foodName: "bacon and egg",
    type: "whetherfood",
    price: 400,
  },
  {
    foodName: "steak",
    type: "whetherfood",
    price: 1000,
  },
  {
    foodName: "hamburger",
    type: "whetherfood",
    price: 500,
  },
  {
    foodName: "cinnamon roll",
    type: "whetherfood",
    price: 350,
  },
];

class CoffeeShop {
  #name;
  #menu;
  #orders;
  #orderNames;
  constructor(name, menu) {
    this.#name = name;
    this.#menu = menu;
    this.#orders = [];
    this.#orderNames = [];
  }

  addOrder(order) {
    const res = this.#menu.find(({ foodName }) => foodName === order);
    if (res) {
      this.#orders.push(res);
      this.#orderNames.push(res.foodName);
      return "Order added!";
    }
    return "This item is currently unavailable!";
  }

  fulfillOrder() {
    if (this.#orders.length !== 0) {
      const res = this.#orderNames.shift();
      this.#orders.shift();
      return `The ${res} is ready!.`;
    }
    return "All orders have been fulfilled!";
  }

  listOrders() {
    return this.#orderNames;
  }

  dueAmount() {
    return this.#orders.reduce((acc, { price }) => acc + price, 0);
  }

  cheapestItem() {
    const cheapestItem = this.#menu.reduce(
      (acc, currentObj) => {
        return currentObj.price < acc.price ? currentObj : acc;
      },
      { price: Infinity }
    );

    return cheapestItem.foodName;
  }

  drinksOnly() {
    return this.#menu
      .filter(({ type }) => type === "drink")
      .map(({ foodName }) => foodName);
  }

  foodOnly() {
    return this.#menu
      .filter(({ type }) => type === "whetherfood")
      .map(({ foodName }) => foodName);
  }
}
