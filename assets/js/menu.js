const menuData = [
  {
    category: "APPETIZER",
    items: [
      { name: "Rujak Manis Surabaya", price: 30000, image: "assets/images_menu/Rujak Manis Surabaya.png" },
      { name: "Crispy Fruit Salad", price: 30000, image: "assets/images_menu/Crispy Fruit Salad.png" },
      { name: "Gado Gado", price: 35000, image: "assets/images_menu/Gado Gado.png" }
    ]
  },
  {
    category: "SOUP",
    items: [
      { name: "Sweet Corn Soup", price: 25000, image: "assets/images_menu/Sweet Corn Soup.png" },
      { name: "Asparagus Soup", price: 30000, image: "assets/images_menu/Asparagus Soup.png" },
      { name: "Tom Yum Seafood Soup", price: 35000, image: "assets/images_menu/Tom Yum Seafood Soup.png" }
    ]
  },
  {
    category: "ASIAN",
    items: [
      { name: "Capjay Ayam", price: 55000, image: "assets/images_menu/Capjay Ayam.png" },
      { name: "Sapo Tofu Seafood", price: 55000, image: "assets/images_menu/Sapo Tofu Seafood.png" },
      { name: "Beef Blackpepper", price: 60000, image: "assets/images_menu/Beef Blackpepper.png" },
      { name: "Kwetiauw Goreng Seafood", price: 55000, image: "assets/images_menu/Kwetiauw Goreng Seafood.png" },
      { name: "Udang Sauce Telur Asin", price: 65000, image: "assets/images_menu/Udang Sauce Telur Asin.png" },
      { name: "Ayam Sauce Kungpao", price: 55000, image: "assets/images_menu/Ayam Sauce Kungpao.png" }
    ]
  },
  {
    category: "WESTERN",
    items: [
      { name: "Spaghetti Bolognaise", price: 50000, image: "assets/images_menu/Spaghetti Bolognaise.png" },
      { name: "Spaghetti Aglio Olio Chicken", price: 50000, image: "assets/images_menu/Spaghetti Aglio Olio Chicken.png" },
      { name: "Fettuccini Carbonara", price: 50000, image: "assets/images_menu/Fettuccini Carbonara.png" },
      { name: "Fish & Chips", price: 50000, image: "assets/images_menu/Fish & Chips.png" },
      { name: "Grilled Chicken Leg BBQ Sauce", price: 50000, image: "assets/images_menu/Grilled Chicken Leg BBQ Sauce.png" }
    ]
  },
  {
    category: "INDONESIAN",
    items: [
      { name: "Rawon Iga", price: 75000, image: "assets/images_menu/Rawon Iga.png" },
      { name: "Sup Iga Bakar", price: 75000, image: "assets/images_menu/Sup Iga Bakar.png" },
      { name: "Sup Buntut", price: 75000, image: "assets/images_menu/Sup Buntut.png" },
      { name: "Soto Ayam Lamongan", price: 45000, image: "assets/images_menu/Soto Ayam Lamongan.png" },
      { name: "Tahu Telur", price: 35000, image: "assets/images_menu/Tahu Telur.png" },
      { name: "Nasi Goreng Empunala", price: 55000, image: "assets/images_menu/Nasi Goreng Empunala.png" },
      { name: "Nasi Goreng Kampung", price: 50000, image: "assets/images_menu/Nasi Goreng Kampung.png" },
      { name: "Nasi Goreng Bumbu Rawon w/ Empal Serundeng", price: 55000, image: "assets/images_menu/Nasi Goreng Bumbu Rawon w Empal Serundeng.png" },
      { name: "Nasi Goreng Oriental w/ Chicken Katsu", price: 50000, image: "assets/images_menu/Nasi Goreng Oriental w Chicken Katsu.png" },
      { name: "Ayam Penyet Majapahit", price: 60000, image: "assets/images_menu/Ayam Penyet Majapahit.png" },
      { name: "Bebek Goreng Majapahit", price: 65000, image: "assets/images_menu/Bebek Goreng Majapahit.png" },
      { name: "Bebek Goreng Bumbu Hitam Madura", price: 65000, image: "assets/images_menu/Bebek Goreng Bumbu Hitam Madura.png" },
      { name: "Nasi Timbel", price: 55000, image: "assets/images_menu/Nasi Timbel.png" },
      { name: "Mie Godog Jawa", price: 45000, image: "assets/images_menu/Mie Godog Jawa.png" },
      { name: "Mie Goreng Jawa", price: 50000, image: "assets/images_menu/Mie Goreng Jawa.png" },
      { name: "Nasi Ulam Jimbaran", price: 70000, image: "assets/images_menu/Nasi Ulam Jimbaran.png" }
    ]
  },
  {
    category: "SNACK",
    items: [
      { name: "Cheese Beef Risol Mayo", price: 30000, image: "assets/images_menu/Cheese Beef Risol Mayo.png" },
      { name: "Mix Platter", price: 40000, image: "assets/images_menu/Mix Platter.png" },
      { name: "Tahu Bakso", price: 35000, image: "assets/images_menu/Tahu Bakso.png" },
      { name: "Mix Gorengan", price: 40000, image: "assets/images_menu/Mix Gorengan.png" },
      { name: "Ote Ote Udang", price: 30000, image: "assets/images_menu/Ote Ote Udang.png" },
      { name: "Onion Ring", price: 30000, image: "assets/images_menu/Onion Ring.png" },
      { name: "Chicken Springroll", price: 30000, image: "assets/images_menu/Chicken Springroll.png" },
      { name: "Spicy Chicken Wings", price: 35000, image: "assets/images_menu/Spicy Chicken Wings.png" },
      { name: "French Fries", price: 25000, image: "assets/images_menu/French Fries.png" },
      { name: "Tahu Cabe Garam", price: 35000, image: "assets/images_menu/Tahu Cabe Garam.png" },
      { name: "Samosa Chicken Curry", price: 35000, image: "assets/images_menu/Samosa Chicken Curry.png" }
    ]
  },
  {
    category: "DESSERT",
    items: [
      { name: "Pisang Goreng Madu Wijen", price: 30000, image: "assets/images_menu/Pisang Goreng Madu Wijen.png" },
      { name: "Pisang Goreng Keju Krezz", price: 30000, image: "assets/images_menu/Pisang Goreng Keju Krezz.png" },
      { name: "Banana Split w/ Ice Cream", price: 35000, image: "assets/images_menu/Banana Split w Ice Cream.png" },
      { name: "Pudding Caramel", price: 25000, image: "assets/images_menu/Pudding Caramel.png" },
      { name: "Brownies Burnt Cheese Cake", price: 45000, image: "assets/images_menu/Brownies Burnt Cheese Cake.png" },
      { name: "Fruits Platter", price: 25000, image: "assets/images_menu/Fruits Platter.png" }
    ]
  },
  {
    category: "OTHERS",
    items: [
      { name: "Nasi Putih", price: 20000, image: "assets/images_menu/Nasi Putih.png" },
      { name: "Additional Egg", price: 20000, image: "assets/images_menu/Additional Egg.png" }
    ]
  },
  {
    category: "BEVERAGE",
    items: [
      { name: "Orange Juice", price: 20000, image: "assets/images_menu/Orange Juice.png" },
      { name: "Guava Juice", price: 20000, image: "assets/images_menu/Guava Juice.png" },
      { name: "Mango Juice", price: 20000, image: "assets/images_menu/Mango Juice.png" },
      { name: "Watermelon Juice", price: 25000, image: "assets/images_menu/Watermelon Lemonade.png" },
      { name: "Honeydew Juice", price: 25000, image: "assets/images_menu/Honeydew Juice.png" },
      { name: "Strawberry Juice", price: 25000, image: "assets/images_menu/Strawberry Juice.png" },
      { name: "Tomato Juice", price: 25000, image: "assets/images_menu/Tomato Juice.png" },
      { name: "Carrot Juice", price: 25000, image: "assets/images_menu/Carrot Juice.png" },
      { name: "Cucumber Juice", price: 25000, image: "assets/images_menu/Cucumber Juice.png" },
      { name: "Avocado Juice", price: 30000, image: "assets/images_menu/Avocado Juice.png" },
      { name: "Mix Juice", price: 30000, image: "assets/images_menu/Mix Juice.png" },
      { name: "Original Tea", price: 18000, image: "assets/images_menu/Orange Juice.png" },
      { name: "Lemon Tea", price: 22000, image: "assets/images_menu/Lemon Tea.png" },
      { name: "Lychee Tea", price: 25000, image: "assets/images_menu/Lychee Tea.png" },
      { name: "Espresso", price: 20000, image: "assets/images_menu/Espresso.png" },
      { name: "Americano Hot/Ice", price: 20000, image: "assets/images_menu/Americano HotIce.png" },
      { name: "Cappucino Hot/Ice", price: 35000, image: "assets/images_menu/Cappucino HotIce.png" },
      { name: "Butterscotch Sea Salt Coffee Hot/Ice", price: 35000, image: "assets/images_menu/Butterscotch Sea Salt Coffee HotIce.png" },
      { name: "Kopi Ndeso", price: 20000, image: "assets/images_menu/Kopi Ndeso.png" }
    ]
  },
  {
    category: "MOCKTAIL",
    items: [
      { name: "Sparkling Lychee Butterfly Pea Tea", price: 25000, image: "assets/images_menu/Sparkling Lychee Butterfly Pea Tea.png" },
      { name: "Watermelon Lemonade", price: 25000, image: "assets/images_menu/Watermelon Lemonade.png" },
      { name: "Summer Strawberry Ly", price: 27000, image: "assets/images_menu/Summer Strawberry Ly.png" }
    ]
  },
  {
    category: "MILKSHAKE",
    items: [
      { name: "Milkshake Chocolate", price: 35000, image: "assets/images_menu/Milkshake Chocolate.png" },
      { name: "Milkshake Strawberry", price: 35000, image: "assets/images_menu/Milkshake Strawberry.png" },
      { name: "Milkshake Vanilla", price: 35000, image: "assets/images_menu/Milkshake Vanilla.png" }
    ]
  },
  {
    category: "TRADITIONAL DRINK",
    items: [
      { name: "Wedang Uwuh", price: 25000, image: "assets/images_menu/Wedang Uwuh.png" },
      { name: "Wedang Jahe Empunala", price: 30000, image: "assets/images_menu/Wedang Jahe Empunala.png" },
      { name: "Wedang Bandrek Susu", price: 30000, image: "assets/images_menu/Wedang Bandrek Susu.png" },
      { name: "Wedang Jeruk", price: 25000, image: "assets/images_menu/Wedang Jeruk.png" },
      { name: "Wedang Teh Sereh Jeruk Nipis", price: 25000, image: "assets/images_menu/Wedang Teh Sereh Jeruk Nipis.png" },
      { name: "Es Cendol", price: 20000, image: "assets/images_menu/Es Cendol.png" },
      { name: "Es Bandung", price: 20000, image: "assets/images_menu/Es Bandung.png" },
      { name: "Es Jeruk Nipis", price: 18000, image: "assets/images_menu/Es Jeruk Nipis.png" }
    ]
  },

  {
    category: "MILKSHAKE",
    items: [
      { name: "Milkshake Chocolate", price: 35000, image: "assets/images_menu/Milkshake Chocolate.png" },
      { name: "Milkshake Strawberry", price: 35000, image: "assets/images_menu/Milkshake Strawberry.png" },
      { name: "Milkshake Vanilla", price: 35000, image: "assets/images_menu/Milkshake Vanilla.png" }
    ]
  },

  {
    category: "MOCKTAIL",
    items: [
      { name: "Sparkling Lychee Butterfly Pea Tea", price: 25000, image: "assets/images_menu/Sparkling Lychee Butterfly Pea Tea.png" },
      { name: "Watermelon Lemonade", price: 25000, image: "assets/images_menu/Watermelon Lemonade.png" },
      { name: "Summer Strawberry Ly", price: 27000, image: "assets/images_menu/Summer Strawberry Ly.png" }
    ]
  },

  {
    category: "OLEH-OLEH",
    items: [
      { name: "Brownies", price: 70000, image: "assets/images_menu/Brownies.png" },
      { name: "Choco Croissant", price: 70000, image: "assets/images_menu/Choco Croissant.png" },
      { name: "Kue Choux", price: 70000, image: "assets/images_menu/Kue Choux.png" },
      { name: "Pie Susu", price: 70000, image: "assets/images_menu/Pie Susu.png" },
      { name: "Strudel Bollen", price: 70000, image: "assets/images_menu/Strudel Bollen.png" },
      { name: "Roll Cake", price: 70000, image: "assets/images_menu/Roll Cake.png" },
      { name: "BooLynn Beef Triple Cheese", price: 52000, image: "assets/images_menu/BooLynn Beef Triple Cheese.png" },
      { name: "BooLynn Banana Choco", price: 90000, image: "assets/images_menu/BooLynn Banana Choco.png" },
      { name: "Rollyn Floss Abon", price: 130000, image: "assets/images_menu/Rollyn Floss Abon.png" },
      { name: "LYNN De Napoleon", price: 150000, image: "assets/images_menu/LYNN De Napoleon.png" }
    ]
  }
];