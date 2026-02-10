const menuData = [
  {
    category: "APPETIZER",
    items: [
      { name: "Rujak Manis Surabaya", price: 30000 },
      { name: "Crispy Fruit Salad", price: 30000 },
      { name: "Gado Gado", price: 35000 }
    ]
  },
  {
    category: "SOUP",
    items: [
      { name: "Sweet Corn Soup", price: 25000 },
      { name: "Asparagus Soup", price: 30000 },
      { name: "Tom Yum Seafood Soup", price: 35000 }
    ]
  },
  {
    category: "ASIAN",
    items: [
      { name: "Capjay Ayam", price: 55000 },
      { name: "Sapo Tofu Seafood", price: 55000 },
      { name: "Beef Blackpepper", price: 60000 },
      { name: "Kwetiauw Goreng Seafood", price: 55000 },
      { name: "Udang Sauce Telur Asin", price: 65000 },
      { name: "Ayam Sauce Kungpao", price: 55000 }
    ]
  },
  {
    category: "WESTERN",
    items: [
      { name: "Spaghetti Bolognaise", price: 50000 },
      { name: "Spaghetti Aglio Olio Chicken", price: 50000 },
      { name: "Fettuccini Carbonara", price: 50000 },
      { name: "Fish & Chips", price: 50000 },
      { name: "Grilled Chicken Leg BBQ Sauce", price: 50000 }
    ]
  },
  {
    category: "INDONESIAN",
    items: [
      { name: "Rawon Iga", price: 75000 },
      { name: "Sup Iga Bakar", price: 75000 },
      { name: "Sup Buntut", price: 75000 },
      { name: "Soto Ayam Lamongan", price: 45000 },
      { name: "Tahu Telur", price: 35000 },
      { name: "Nasi Goreng Empunala", price: 55000 },
      { name: "Nasi Goreng Kampung", price: 50000 },
      { name: "Nasi Goreng Bumbu Rawon w/ Empal Serundeng", price: 55000 },
      { name: "Nasi Goreng Oriental w/ Chicken Katsu", price: 50000 },
      { name: "Ayam Penyet Majapahit", price: 60000 },
      { name: "Bebek Goreng Majapahit", price: 65000 },
      { name: "Bebek Goreng Bumbu Hitam Madura", price: 65000 },
      { name: "Nasi Timbel", price: 55000 },
      { name: "Mie Godog Jawa", price: 45000 },
      { name: "Mie Goreng Jawa", price: 50000 },
      { name: "Nasi Ulam Jimbaran", price: 70000 }
    ]
  },
  {
    category: "SNACK",
    items: [
      { name: "Cheese Beef Risol Mayo", price: 30000 },
      { name: "Mix Platter", price: 40000 },
      { name: "Tahu Bakso", price: 35000 },
      { name: "Mix Gorengan", price: 40000 },
      { name: "Ote Ote Udang", price: 30000 },
      { name: "Onion Ring", price: 30000 },
      { name: "Chicken Springroll", price: 30000 },
      { name: "Spicy Chicken Wings", price: 35000 },
      { name: "French Fries", price: 25000 },
      { name: "Tahu Cabe Garam", price: 35000 },
      { name: "Samosa Chicken Curry", price: 35000 }
    ]
  },
  {
    category: "DESSERT",
    items: [
      { name: "Pisang Goreng Madu Wijen", price: 30000 },
      { name: "Pisang Goreng Keju Krezz", price: 30000 },
      { name: "Banana Split w/ Ice Cream", price: 35000 },
      { name: "Pudding Caramel", price: 25000 },
      { name: "Brownies Burnt Cheese Cake", price: 45000 },
      { name: "Fruits Platter", price: 25000 }
    ]
  },
  {
    category: "BEVERAGE",
    items: [
      { name: "Orange Juice", price: 20000 },
      { name: "Guava Juice", price: 20000 },
      { name: "Mango Juice", price: 20000 },
      { name: "Watermelon Juice", price: 25000 },
      { name: "Honeydew Juice", price: 25000 },
      { name: "Strawberry Juice", price: 25000 },
      { name: "Tomato Juice", price: 25000 },
      { name: "Carrot Juice", price: 25000 },
      { name: "Cucumber Juice", price: 25000 },
      { name: "Avocado Juice", price: 30000 },
      { name: "Mix Juice", price: 30000 },
      { name: "Original Tea", price: 18000 },
      { name: "Lemon Tea", price: 22000 },
      { name: "Lychee Tea", price: 25000 },
      { name: "Espresso", price: 20000 },
      { name: "Americano Hot/Ice", price: 20000 },
      { name: "Cappucino Hot/Ice", price: 35000 },
      { name: "Butterscotch Sea Salt Coffee Hot/Ice", price: 35000 },
      { name: "Kopi Ndeso", price: 20000 },
      { name: "Kopi Butter", price: 25000 },
      { name: "Mineral Water Ice/No", price: 10000 }
    ]
  },
  {
    category: "TRADITIONAL DRINK",
    items: [
      { name: "Wedang Uwuh", price: 25000 },
      { name: "Wedang Jahe Empunala", price: 30000 },
      { name: "Wedang Bandrek Susu", price: 30000 },
      { name: "Wedang Jeruk", price: 25000 },
      { name: "Wedang Teh Sereh Jeruk Nipis", price: 25000 },
      { name: "Es Cendol", price: 20000 },
      { name: "Es Bandung", price: 20000 },
      { name: "Es Jeruk Nipis", price: 18000 }
    ]
  },
  {
    category: "MILKSHAKE",
    items: [
      { name: "Milkshake Chocolate", price: 35000 },
      { name: "Milkshake Strawberry", price: 35000 },
      { name: "Milkshake Vanilla", price: 35000 }
    ]
  },
  {
    category: "MOCKTAIL",
    items: [
      { name: "Sparkling Lychee Butterfly Pea Tea", price: 25000 },
      { name: "Watermelon Lemonade", price: 25000 },
      { name: "Summer Strawberry Ly", price: 27000 }
    ]
  },
  {
    category: "OLEH-OLEH",
    items: [
      { name: "Brownies", price: 70000 },
      { name: "Choco Croissant", price: 70000 },
      { name: "Kue Choux", price: 70000 },
      { name: "Pie Susu", price: 70000 },
      { name: "Strudel Bollen", price: 70000 },
      { name: "Roll Cake", price: 70000 },
      { name: "BooLynn Beef Triple Cheese", price: 52000 },
      { name: "BooLynn Banana Choco", price: 90000 },
      { name: "Rollyn Floss Abon", price: 130000 },
      { name: "LYNN De Napoleon", price: 150000 }
    ]
  }
];