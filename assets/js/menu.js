const menuData = [
  {
    category: "APPETIZER",
    items: [
      { name: "Rujak Manis Surabaya", price: 30000, image: "assets/images_menu/1.png" },
      { name: "Crispy Fruit Salad", price: 30000, image: "assets/images_menu/2.png" },
      { name: "Gado Gado", price: 35000, image: "assets/images_menu/3.png" }
    ]
  },
  {
    category: "SOUP",
    items: [
      { name: "Sweet Corn Soup", price: 25000, image: "assets/images_menu/4.png" },
      { name: "Asparagus Soup", price: 30000, image: "assets/images_menu/5.png" },
      { name: "Tom Yum Seafood Soup", price: 35000, image: "assets/images_menu/6.png" }
    ]
  },
  {
    category: "ASIAN",
    items: [
      { name: "Capjay Ayam", price: 55000, image: "assets/images_menu/7.png" },
      { name: "Sapo Tofu Seafood", price: 55000, image: "assets/images_menu/8.png" },
      { name: "Beef Blackpepper", price: 60000, image: "assets/images_menu/9.png" },
      { name: "Kwetiauw Goreng Seafood", price: 55000, image: "assets/images_menu/10.png" },
      { name: "Udang Sauce Telur Asin", price: 65000, image: "assets/images_menu/11.png" },
      { name: "Ayam Sauce Kungpao", price: 55000, image: "assets/images_menu/12.png" }
    ]
  },
  {
    category: "WESTERN",
    items: [
      { name: "Spaghetti Bolognaise", price: 50000, image: "assets/images_menu/13.png" },
      { name: "Spaghetti Aglio Olio Chicken", price: 50000, image: "assets/images_menu/14.png" },
      { name: "Fettuccini Carbonara", price: 50000, image: "assets/images_menu/15.png" },
      { name: "Fish & Chips", price: 50000, image: "assets/images_menu/16.png" },
      { name: "Grilled Chicken Leg BBQ Sauce", price: 50000, image: "assets/images_menu/17.png" }
    ]
  },
  {
    category: "INDONESIAN",
    items: [
      { name: "Rawon Iga", price: 75000, image: "assets/images_menu/18.png" },
      { name: "Sup Iga Bakar", price: 75000, image: "assets/images_menu/19.png" },
      { name: "Sup Buntut", price: 75000, image: "assets/images_menu/20.png" },
      { name: "Soto Ayam Lamongan", price: 45000, image: "assets/images_menu/21.png" },
      { name: "Tahu Telur", price: 35000, image: "assets/images_menu/22.png" },
      { name: "Nasi Goreng Empunala", price: 55000, image: "assets/images_menu/23.png" },
      { name: "Nasi Goreng Kampung", price: 50000, image: "assets/images_menu/24.png" },
      { name: "Nasi Goreng Bumbu Rawon w/ Empal Serundeng", price: 55000, image: "assets/images_menu/25.png" },
      { name: "Nasi Goreng Oriental w/ Chicken Katsu", price: 50000, image: "assets/images_menu/26.png" },
      { name: "Ayam Penyet Majapahit", price: 60000, image: "assets/images_menu/27.png" },
      { name: "Bebek Goreng Majapahit", price: 65000, image: "assets/images_menu/28.png" },
      { name: "Bebek Goreng Bumbu Hitam Madura", price: 65000, image: "assets/images_menu/29.png" },
      { name: "Nasi Timbel", price: 55000, image: "assets/images_menu/30.png" },
      { name: "Mie Godog Jawa", price: 45000, image: "assets/images_menu/31.png" },
      { name: "Mie Goreng Jawa", price: 50000, image: "assets/images_menu/32.png" },
      { name: "Nasi Ulam Jimbaran", price: 70000, image: "assets/images_menu/33.png" }
    ]
  },
  {
    category: "SNACK",
    items: [
      { name: "Cheese Beef Risol Mayo", price: 30000, image: "assets/images_menu/34.png" },
      { name: "Mix Platter", price: 40000, image: "assets/images_menu/35.png" },
      { name: "Tahu Bakso", price: 35000, image: "assets/images_menu/36.png" },
      { name: "Mix Gorengan", price: 40000, image: "assets/images_menu/37.png" },
      { name: "Ote Ote Udang", price: 30000, image: "assets/images_menu/38.png" },
      { name: "Onion Ring", price: 30000, image: "assets/images_menu/39.png" },
      { name: "Chicken Springroll", price: 30000, image: "assets/images_menu/40.png" },
      { name: "Spicy Chicken Wings", price: 35000, image: "assets/images_menu/41.png" },
      { name: "French Fries", price: 25000, image: "assets/images_menu/42.png" },
      { name: "Tahu Cabe Garam", price: 35000, image: "assets/images_menu/43.png" },
      { name: "Samosa Chicken Curry", price: 35000, image: "assets/images_menu/44.png" }
    ]
  },
  {
    category: "DESSERT",
    items: [
      { name: "Pisang Goreng Madu Wijen", price: 30000, image: "assets/images_menu/45.png" },
      { name: "Pisang Goreng Keju Krezz", price: 30000, image: "assets/images_menu/46.png" },
      { name: "Banana Split w/ Ice Cream", price: 35000, image: "assets/images_menu/47.png" },
      { name: "Pudding Caramel", price: 25000, image: "assets/images_menu/48.png" },
      { name: "Brownies Burnt Cheese Cake", price: 45000, image: "assets/images_menu/49.png" },
      { name: "Fruits Platter", price: 25000, image: "assets/images_menu/50.png" }
    ]
  },
  {
    category: "BEVERAGE",
    items: [
      { name: "Orange Juice", price: 20000, image: "assets/images_menu/51.png" },
      { name: "Guava Juice", price: 20000, image: "assets/images_menu/52.png" },
      { name: "Mango Juice", price: 20000, image: "assets/images_menu/53.png" },
      { name: "Watermelon Juice", price: 25000, image: "assets/images_menu/54.png" },
      { name: "Honeydew Juice", price: 25000, image: "assets/images_menu/55.png" },
      { name: "Strawberry Juice", price: 25000, image: "assets/images_menu/56.png" },
      { name: "Tomato Juice", price: 25000, image: "assets/images_menu/57.png" },
      { name: "Carrot Juice", price: 25000, image: "assets/images_menu/58.png" },
      { name: "Cucumber Juice", price: 25000, image: "assets/images_menu/59.png" },
      { name: "Avocado Juice", price: 30000, image: "assets/images_menu/60.png" },
      { name: "Mix Juice", price: 30000, image: "assets/images_menu/61.png" },
      { name: "Original Tea", price: 18000, image: "assets/images_menu/62.png" },
      { name: "Lemon Tea", price: 22000, image: "assets/images_menu/63.png" },
      { name: "Lychee Tea", price: 25000, image: "assets/images_menu/64.png" },
      { name: "Espresso", price: 20000, image: "assets/images_menu/65.png" },
      { name: "Americano Hot/Ice", price: 20000, image: "assets/images_menu/66.png" },
      { name: "Cappucino Hot/Ice", price: 35000, image: "assets/images_menu/67.png" },
      { name: "Butterscotch Sea Salt Coffee Hot/Ice", price: 35000, image: "assets/images_menu/68.png" },
      { name: "Kopi Ndeso", price: 20000, image: "assets/images_menu/69.png" },
      { name: "Kopi Butter", price: 25000, image: "assets/images_menu/70.png" },
      { name: "Mineral Water Ice/No", price: 10000, image: "assets/images_menu/71.png" }
    ]
  },
  {
    category: "TRADITIONAL DRINK",
    items: [
      { name: "Wedang Uwuh", price: 25000, image: "assets/images_menu/72.png" },
      { name: "Wedang Jahe Empunala", price: 30000, image: "assets/images_menu/73.png" },
      { name: "Wedang Bandrek Susu", price: 30000, image: "assets/images_menu/74.png" },
      { name: "Wedang Jeruk", price: 25000, image: "assets/images_menu/75.png" },
      { name: "Wedang Teh Sereh Jeruk Nipis", price: 25000, image: "assets/images_menu/76.png" },
      { name: "Es Cendol", price: 20000, image: "assets/images_menu/77.png" },
      { name: "Es Bandung", price: 20000, image: "assets/images_menu/78.png" },
      { name: "Es Jeruk Nipis", price: 18000, image: "assets/images_menu/79.png" }
    ]
  },
  {
    category: "MILKSHAKE",
    items: [
      { name: "Milkshake Chocolate", price: 35000, image: "assets/images_menu/80.png" },
      { name: "Milkshake Strawberry", price: 35000, image: "assets/images_menu/81.png" },
      { name: "Milkshake Vanilla", price: 35000, image: "assets/images_menu/82.png" }
    ]
  },
  {
    category: "MOCKTAIL",
    items: [
      { name: "Sparkling Lychee Butterfly Pea Tea", price: 25000, image: "assets/images_menu/83.png" },
      { name: "Watermelon Lemonade", price: 25000, image: "assets/images_menu/84.png" },
      { name: "Summer Strawberry Ly", price: 27000, image: "assets/images_menu/85.png" }
    ]
  },
  {
    category: "OLEH-OLEH",
    items: [
      { name: "Brownies", price: 70000, image: "assets/images_menu/86.png" },
      { name: "Choco Croissant", price: 70000, image: "assets/images_menu/87.png" },
      { name: "Kue Choux", price: 70000, image: "assets/images_menu/88.png" },
      { name: "Pie Susu", price: 70000, image: "assets/images_menu/89.png" },
      { name: "Strudel Bollen", price: 70000, image: "assets/images_menu/90.png" },
      { name: "Roll Cake", price: 70000, image: "assets/images_menu/91.png" },
      { name: "BooLynn Beef Triple Cheese", price: 52000, image: "assets/images_menu/92.png" },
      { name: "BooLynn Banana Choco", price: 90000, image: "assets/images_menu/93.png" },
      { name: "Rollyn Floss Abon", price: 130000, image: "assets/images_menu/94.png" },
      { name: "LYNN De Napoleon", price: 150000, image: "assets/images_menu/95.png" }
    ]
  }
];