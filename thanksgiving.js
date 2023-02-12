const thanksgivingMeal = {
    starter: {
      fruit: "honeydew melon",
      wine: "moscato",
      calories: 180
    },
    entree: {
      meat: "Turkey",
      alt: "Stuffed green peppers",
      vegetables: {
        potatoes: "Creamed mashed potatoes",
        greens: "French beans",
        salad: "Radacchio"
      },
      sides: {
        bread: "Garlic bread rolls",
        pasta: "Macaroni and Cheese"
      },
      calories: 450
    },
    dessert: {
      ice_cream: "Pumpkin-vanilla",
      cake: "Frosted pumpkin pie",
      calories: 300
    },
    total_cost: 25.0,
    senior_discount: 0.10,
  
    prettyPrint: function() {
      // Collate the menu here
      // display the content of the starter, the entree and the dessert
      let menuStr = `Start your meal with ${this.starter.fruit}, ${this.starter.wine}. Help yourself to ${this.entree.meat} or ${this.entree.alt}, with ${this.entree.vegetables.greens}, ${this.entree.vegetables.potatoes}, ${this.entree.vegetables.salad}. Have a side! Plenty of ${this.entree.sides.bread} or ${this.entree.sides.pasta}.
      Finish your meal with a sweet ${this.dessert.ice_cream} or ${this.dessert.cake}.`;
      return menuStr;
    },
  
    totalPrice: function(isSenior) {
      // display the total price, given indicator isSenior - true or false
      if (isSenior) {
        return this.total_cost * (1 - this.senior_discount);
      } else {
        return this.total_cost;
      }
    },
  
    totalCalories: function() {
      // Add the total calories
      return this.starter.calories + this.entree.calories + this.dessert.calories;
    },
  
    caloriesFrom: function(indicator) {
      // get the total calories for the indicator
      // 1 - starter, 2 - entree, 3 - dessert
      switch (indicator) {
        case 1:
          return this.starter.calories;
        case 2:
          return this.entree.calories;
        case 3:
          return this.dessert.calories;
        default:
          return 0;
      }
    }
  };
  
let helloRef = document.querySelector(".greeting");
let priceRef = document.querySelector(".priceInfo");
let menuRef = document.querySelector(".fullMeal");
let calRef = document.querySelector(".calorieInfo");

menuRef.innerHTML = (`${thanksgivingMeal.prettyPrint()}`);
priceRef.innerHTML = `The total cost is $${thanksgivingMeal.totalPrice(false)}`;
calRef.innerHTML = `Calories don't count on Thanksgiving right? Good! Because the total calorie count is ${thanksgivingMeal.totalCalories()}.`;

alert("Happy Thanksgiving! Ready to eat?");

  