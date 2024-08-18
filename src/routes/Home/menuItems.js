const RestData = [
    {
      name: 'Grande Roast',
      id: "GrandeRoast",
      IconUrl: 'https://i.ibb.co/C6q5y3g/granderost.webp',
      location: 'Elwood, Utah',
      menu: [
        {
          category: 'Burgers',
          items: [
            { id: 1, name: 'HamBurger', imageUrl: 'https://i.ibb.co/NCzkNC1/burger.webp', price: 6 },
            { id: 2, name: 'CheeseBurger', imageUrl: 'https://i.ibb.co/GsVvGgy/ai-generative-cheeseburger-free-png.png', price: 5.5 },
            { id: 3, name: 'Bacon Burger', imageUrl: 'https://i.ibb.co/G2D3MTK/ai-generated-juicy-bacon-burger-on-transparent-background-png.webp', price: 7 },
            { id: 4, name: 'Chicken Burger', imageUrl: 'https://i.ibb.co/M14SCjf/3243c6eb4ef984c3df69a597efd1d47e.jpg', price: 6.5 },
          ],
        },
        {
          category: 'Sandwiches',
          items: [
            { id: 5, name: 'Egg Sandwich', imageUrl: 'https://i.ibb.co/hRfJ5QP/01-Nov-2022-Photography-163.png', price: 3 },
            { id: 6, name: 'Grilled Cheese', imageUrl: 'https://i.ibb.co/KGjsx9Q/ai-generated-grilled-cheese-sandwich-isolated-on-white-background-png.png', price: 4.5 },
            { id: 7, name: 'Chicken Shawarma', imageUrl: 'https://i.ibb.co/09XYgvF/ns-shawarma-wrap-image.webp', price: 4 },
            { id: 8, name: 'Beef Shawarma', imageUrl: 'https://i.ibb.co/BCWMMMz/shawarma-isolated-on-transparent-background-png.webp', price: 5 },
            { id: 9, name: 'BLT', imageUrl: ' https://i.ibb.co/mGZgFgG/delicious-grilled-sandwich-png.png ', price: 4.5 },
          ],
        },
        {
          category: 'Drinks',
          items: [
            { id: 10, name: 'Orange', imageUrl: ' https://i.ibb.co/drNv4KN/pngtree-orange-juice-in-a-big-glass-glass-picture-image-13277403.png ', price: 3 },
            { id: 11, name: 'Lemonade', imageUrl: ' https://i.ibb.co/34H8ryj/ai-generated-glass-of-fresh-lemon-juice-isolated-on-transparent-background-png.png ', price: 2.5 },
            { id: 12, name: 'Soft Drink', imageUrl: ' https://i.ibb.co/mq2W7MR/1d4f36e3-846e-4d91-a725-6ab961a66c82-softdrinks-juiceandsoda-LRGAYUWSQL-MN.jpg ', price: 3 },
            { id: 13, name: 'Energy Drink', imageUrl: ' https://i.ibb.co/6nCx5jF/91344299929563802882798326849137414033467205.png ', price: 4 },
            { id: 14, name: 'Water', imageUrl: ' https://i.ibb.co/VLn9M66/100021123-2-4-aquafina-packaged-drinking-water.webp ', price: 1.5 },
          ],
        },
        {
          category: 'Desserts',
          items: [
            { id: 15, name: 'Chocolate Cake', imageUrl: ' https://i.ibb.co/tmdHMDL/adj-So-Good-Choc-Cake.png ', price: 5 },
            { id: 16, name: 'Ice Cream', imageUrl: ' https://i.ibb.co/XC3ttc0/37-chocolate.png ', price: 4 },
            { id: 17, name: 'Brownie', imageUrl: ' https://i.ibb.co/nCvMztx/moje-malo-zlato-brownie-bez-glutena-kakao-4-1.png ', price: 3.5 },
            { id: 18, name: 'Cheesecake', imageUrl: ' https://i.ibb.co/FDRkKS3/SAYTO-Packshot-600x600-DESSERTS-Cheesecake.png ', price: 5.5 },
          ],
        },
        {
          category: 'Milkshakes',
          items: [
            { id: 19, name: 'Strawberry Milkshake', imageUrl: ' https://i.ibb.co/xgGR016/Shmoo-Posh-Shake-Glass-Strawberry-2-550x550h.png ', price: 6.5 },
            { id: 20, name: 'Oreo Milkshake', imageUrl: ' https://i.ibb.co/hs55gt6/oreo-3.png ', price: 5.5 },
            { id: 21, name: 'Lotus Milkshake', imageUrl: ' https://i.ibb.co/6XtN3BR/ai-generated-chocolate-milk-shake-isolated-on-transparent-background-free-png.webp ', price: 6 },
            { id: 22, name: 'Vanilla Milkshake', imageUrl: ' https://i.ibb.co/m9gt2kw/Vanilla.png ', price: 5 },
            { id: 23, name: 'Banana Milkshake', imageUrl: ' https://i.ibb.co/NCfY9Sp/Shmoo-banana-milkshake-in-a-glass.webp ', price: 4.5 },
          ],
        },
      ],
    },
    {
      name: 'Bermada Cafe',
      id: "BermadaCafe",
      IconUrl: 'https://i.ibb.co/n7TM6CX/bermadacafe.png',
      location: 'Vancouver, Canada',
      menu: [
        {
          category: 'Pizzas',
          items: [
            { id: 1, name: 'Margherita Pizza', imageUrl: ' https://i.ibb.co/yRmmnsj/Margherita-1.png ', price: 8 },
            { id: 2, name: 'Pepperoni Pizza', imageUrl: ' https://i.ibb.co/FxvJPhk/pepperoni-pizza.png ', price: 9 },
            { id: 3, name: 'BBQ Chicken Pizza', imageUrl: ' https://i.ibb.co/vY791LX/PR-menu-BBQChicken-960x800.png ', price: 10 },
            { id: 4, name: 'Veggie Pizza', imageUrl: ' https://i.ibb.co/fS6Kjtm/12500.png ', price: 8.5 },
          ],
        },
        {
          category: 'Pastas',
          items: [
            { id: 5, name: 'Spaghetti Bolognese', imageUrl: ' https://i.ibb.co/25rw7Q5/image.webp ', price: 7 },
            { id: 6, name: 'Carbonara', imageUrl: ' https://i.ibb.co/5xKGjZX/image.webp ', price: 7.5 },
            { id: 7, name: 'Penne Arrabbiata', imageUrl: ' https://i.ibb.co/ChrDkX5/Penne-Arrabiata.webp ', price: 6.5 },
            { id: 8, name: 'Lasagna', imageUrl: ' https://i.ibb.co/Yhf2FrD/image.png ', price: 8 },
          ],
        },
        {
          category: 'Salads',
          items: [
            { id: 9, name: 'Caesar Salad', imageUrl: ' https://i.ibb.co/5r33y64/87371e96-8e73-4a91-bdda-853540cde4d4.jpg ', price: 5.5 },
            { id: 10, name: 'Greek Salad', imageUrl: ' https://i.ibb.co/cwLhZTs/greek.webp ', price: 6 },
            { id: 11, name: 'Caprese Salad', imageUrl: ' https://i.ibb.co/RHmFRTt/Caprese-Salad-WS-CO-2501.png ', price: 5.5 },
            { id: 12, name: 'Cobb Salad', imageUrl: ' https://i.ibb.co/3cGHWmW/cobb-salad.png ', price: 6.5 },
          ],
        },
        {
          category: 'Soups',
          items: [
            { id: 13, name: 'Tomato Soup', imageUrl: ' https://i.ibb.co/ccBty2p/i-HMV1p-O0-LEJm-RA.png ', price: 4 },
            { id: 14, name: 'Chicken Soup', imageUrl: ' https://i.ibb.co/y60jYvb/image.webp ', price: 4.5 },
            { id: 15, name: 'Minestrone Soup', imageUrl: ' https://i.ibb.co/C9Hyg0s/image.webp ', price: 5 },
            { id: 16, name: 'Lentil Soup', imageUrl: ' https://i.ibb.co/Y219Hjt/image.webp ', price: 4.5 },
          ],
        },
        {
          category: 'Milkshakes',
          items: [
            { id: 17, name: 'Strawberry Milkshake', imageUrl: ' https://i.ibb.co/xgGR016/Shmoo-Posh-Shake-Glass-Strawberry-2-550x550h.png ', price: 6.5 },
            { id: 18, name: 'Oreo Milkshake', imageUrl: ' https://i.ibb.co/hs55gt6/oreo-3.png ', price: 5.5 },
            { id: 19, name: 'Lotus Milkshake', imageUrl: ' https://i.ibb.co/6XtN3BR/ai-generated-chocolate-milk-shake-isolated-on-transparent-background-free-png.webp ', price: 6 },
            { id: 20, name: 'Vanilla Milkshake', imageUrl: ' https://i.ibb.co/m9gt2kw/Vanilla.png ', price: 5 },
            { id: 21, name: 'Banana Milkshake', imageUrl: ' https://i.ibb.co/NCfY9Sp/Shmoo-banana-milkshake-in-a-glass.webp ', price: 4.5 },
          ],
        },
      ],
    },
    {
      name: 'Urban Flame Grill',
      id: "UrbanFlameGrill",
      IconUrl: 'https://i.ibb.co/1KZKNVk/309715434-766196601136879-3444329496248163821-n.jpg',
      location: 'Beirut, Lebanon',
      menu: [
        {
          category: 'Appetizers',
          items: [
            { id: 1, name: 'Spring Rolls', imageUrl: ' https://i.ibb.co/H7jNzpP/spring-rolls.png ', price: 3.5 },
            { id: 2, name: 'Chicken Wings', imageUrl: ' https://i.ibb.co/3mzHpFY/thai-chicken-wings.webp ', price: 6 },
            { id: 3, name: 'Mozzarella Sticks', imageUrl: ' https://i.ibb.co/3NWHvfn/AH-Mozzarellesticks-frei-Anschnitt-Broesel-1361-Lowres.png ', price: 5 },
            { id: 4, name: 'Onion Rings', imageUrl: ' https://i.ibb.co/XtfKt0J/onionrings-0.png ', price: 4 },
          ],
        },
        {
          category: 'Tacos',
          items: [
            { id: 5, name: 'Beef Taco', imageUrl: ' https://i.ibb.co/0tZWy3c/image.webp ', price: 3 },
            { id: 6, name: 'Chicken Taco', imageUrl: ' https://i.ibb.co/ZckX5YB/FZY23587-Shredded-Chicken-Taco-RGB.png ', price: 3.5 },
            { id: 7, name: 'Fish Taco', imageUrl: ' https://i.ibb.co/QpDqzyH/f2af68365e934408b17c4b648a35bf2c.jpg ', price: 4 },
            { id: 8, name: 'Veggie Taco', imageUrl: ' https://i.ibb.co/sjC4dhL/image.webp ', price: 3 },
          ],
        },
        {
          category: 'BBQ',
          items: [
            { id: 9, name: 'BBQ Ribs', imageUrl: ' https://i.ibb.co/3rMWZgX/image.webp ', price: 12 },
            { id: 10, name: 'BBQ Chicken', imageUrl: ' https://i.ibb.co/XVG78tV/Golden-Original-1.png ', price: 10 },
            { id: 11, name: 'BBQ Pork', imageUrl: ' https://i.ibb.co/FK90zNX/P1522510-1.png ', price: 11 },
            { id: 12, name: 'BBQ Beef', imageUrl: 'https://i.ibb.co/6r3JLP6/8eca44a9-20a7-450e-b8ca-f9471fb8e334-BBQ-Beef-Bowl-optimized.jpg ', price: 13 },
          ],
        },
        {
          category: 'Milkshakes',
          items: [
            { id: 13, name: 'Chocolate Milkshake', imageUrl: 'https://i.ibb.co/4K6B2xZ/Chocolate-Milkshake-2.png', price: 6.5 },
            { id: 14, name: 'Vanilla Milkshake', imageUrl: 'https://i.ibb.co/m9gt2kw/Vanilla.png', price: 5 },
            { id: 15, name: 'Strawberry Milkshake', imageUrl: 'https://i.ibb.co/xgGR016/Shmoo-Posh-Shake-Glass-Strawberry-2-550x550h.png', price: 6 },
            { id: 16, name: 'Banana Milkshake', imageUrl: 'https://i.ibb.co/NCfY9Sp/Shmoo-banana-milkshake-in-a-glass.webp', price: 4.5 },
          ],
        },
        {
          category: 'Desserts',
          items: [
            { id: 17, name: 'Chocolate Cake', imageUrl: 'https://i.ibb.co/tmdHMDL/adj-So-Good-Choc-Cake.png', price: 5 },
            { id: 18, name: 'Ice Cream', imageUrl: 'https://i.ibb.co/XC3ttc0/37-chocolate.png', price: 4 },
            { id: 19, name: 'Brownie', imageUrl: 'https://i.ibb.co/nCvMztx/moje-malo-zlato-brownie-bez-glutena-kakao-4-1.png', price: 3.5 },
            { id: 20, name: 'Cheesecake', imageUrl: 'https://i.ibb.co/FDRkKS3/SAYTO-Packshot-600x600-DESSERTS-Cheesecake.png', price: 5.5 },
          ],
        },
      ],
    },
    {
      name: 'Royal Feast Diner',
      id: "RoyalFeastDiner",
      IconUrl: 'https://i.ibb.co/LtHPnhg/f4c0e7b6cdef9dfadcc867acb2845495.jpg',
      location: 'Tyre, Lebanon',
      menu: [
        {
          category: 'Steaks',
          items: [
            { id: 1, name: 'Ribeye Steak', imageUrl: 'https://i.ibb.co/4sVqXmK/ribeye-steak-sandwich.png', price: 15 },
            { id: 2, name: 'T-bone Steak', imageUrl: 'https://i.ibb.co/PDkwkH8/steak-and-onion-sandwich-png-22-vlsiphzmd5riyt3r.png', price: 18 },
            { id: 3, name: 'Filet Mignon', imageUrl: 'https://i.ibb.co/1rwq8MT/item-500000001914703431-1649425544.pngMignon', price: 20 },
            { id: 4, name: 'Sirloin Steak', imageUrl: 'https://i.ibb.co/cvD7R7t/Philly-Steak-Clipped.webp', price: 14 },
          ],
        },
        {
          category: 'Seafood',
          items: [
            { id: 5, name: 'Grilled Salmon', imageUrl: 'https://i.ibb.co/kqBcHPc/Gallery-2023-10-18-08-55-58-3734.png', price: 16 },
            { id: 6, name: 'Shrimp Scampi', imageUrl: 'https://i.ibb.co/GVrbppW/caspian-pizza-Shrimp-Scampi-Pasta.webp', price: 14 },
            { id: 7, name: 'Lobster Tail', imageUrl: 'https://i.ibb.co/2sgmLdw/Lobster-tail-min.png', price: 22 },
            { id: 8, name: 'Crab Cakes', imageUrl: 'https://i.ibb.co/1RCpDp2/free-spicy-crab-cake-crab-cake-bread-crumbs-mayonnaise-mustard-eggs-transparent-background-free-png.webp', price: 18 },
          ],
        },
        {
          category: 'Vegetarian',
          items: [
            { id: 9, name: 'Vegetarian Stir-fry', imageUrl: 'https://i.ibb.co/K5mrm1K/image.webp', price: 12 },
            { id: 10, name: 'Stuffed Peppers', imageUrl: 'https://i.ibb.co/y5wsqVM/Microsoft-Teams-image-3-720x.webp', price: 10 },
            { id: 11, name: 'Vegetarian Pizza', imageUrl: 'https://i.ibb.co/z4Sn54n/CRU5100-Veg-Supreme-600x600-tiny.png', price: 8.5 },
            { id: 12, name: 'Vegetable Lasagna', imageUrl: 'https://i.ibb.co/1vVbbvb/image.webp', price: 9 },
          ],
        },
        {
          category: 'Drinks',
          items: [
            { id: 13, name: 'Soda', imageUrl: 'https://i.ibb.co/GHTPNGp/fentimans-200ml-Soda-Water-1000x1000.webp', price: 2 },
            { id: 14, name: 'Iced Tea', imageUrl: 'https://i.ibb.co/TB9CjJz/lipton-ice-tea.png', price: 2.5 },
            { id: 15, name: 'Coffee', imageUrl: 'https://i.ibb.co/qyTpg8C/coffee-34251-640.webp', price: 2 },
            { id: 16, name: 'Hot Chocolate', imageUrl: 'https://i.ibb.co/4dc78bZ/Starbucks-SBU-Signature-Chocolate-Recipes-2022-Website-Recipe-KV-Toasted-Marshmallow-CS.webp', price: 3 },
          ],
        },
        {
          category: 'Desserts',
          items: [
            { id: 17, name: 'Chocolate Mousse', imageUrl: 'https://i.ibb.co/cYNGsHK/mini-deser-mus-czekoladowy-z-mango.png', price: 5 },
            { id: 18, name: 'Panna Cotta', imageUrl: 'https://i.ibb.co/YQWn4Sk/file.png', price: 6 },
            { id: 19, name: 'Tiramisu', imageUrl: 'https://i.ibb.co/2MTsDc5/dessert-patissier-tiramisu-pot-5014.webp', price: 5.5 },
            { id: 20, name: 'Creme Brulee', imageUrl: 'https://i.ibb.co/98SBv5w/creme-brulee.png', price: 6.5 },
          ],
        },
      ],
    },
    {
      name: 'Sunset Vista Cafe',
      id: "SunsetVistaCafe",
      IconUrl: 'https://i.ibb.co/3hS5kHK/img-rome-20.jpg',
      location: 'Bracciano, Roma',
      menu: [
        {
          category: 'Sushi',
          items: [
            { id: 1, name: 'California Roll', imageUrl: 'https://i.ibb.co/pZRdWPj/Soy-California-Roll-low-res.webp', price: 8 },
            { id: 2, name: 'Spicy Tuna Roll', imageUrl: 'https://i.ibb.co/Qr07whP/roll-spicy-tuna.png', price: 9 },
            { id: 3, name: 'Salmon Nigiri', imageUrl: 'https://i.ibb.co/xH6xJV6/NIGIRI-SAUMON-1.png', price: 10 },
            { id: 4, name: 'Eel Roll', imageUrl: 'https://i.ibb.co/QPQpWpS/hot-unagi.webp', price: 11 },
          ],
        },
        {
          category: 'Ramen',
          items: [
            { id: 5, name: 'Shoyu Ramen', imageUrl: 'https://i.ibb.co/7YWtv3b/Shoyu-Top-view-bowl-600px.png', price: 12 },
            { id: 6, name: 'Miso Ramen', imageUrl: 'https://i.ibb.co/qM5z1ts/Kichitora-Menu-Hokkaido-Miso-Ramen.png', price: 11 },
            { id: 7, name: 'Tonkotsu Ramen', imageUrl: 'https://i.ibb.co/gFTySJG/menu-0000s-0002-Tokyo-ramen-IR.webp', price: 13 },
            { id: 8, name: 'Spicy Ramen', imageUrl: 'https://i.ibb.co/WDqZM5w/beef-e3e61b80-3d35-4f42-a484-1592150bac3d.webp', price: 12 },
          ],
        },
        {
          category: 'Tempura',
          items: [
            { id: 9, name: 'Shrimp Tempura', imageUrl: 'https://i.ibb.co/HGF1R42/Shrimp-Tempura1.png', price: 10 },
            { id: 10, name: 'Vegetable Tempura', imageUrl: 'https://i.ibb.co/dkz8Tw4/Tempura.png', price: 8 },
            { id: 11, name: 'Chicken Tempura', imageUrl: 'https://i.ibb.co/8xgqPk9/icon-512-512-true-df0c208eef8408cf92f2c20fe0d4e202.png', price: 9 },
            { id: 12, name: 'Fish Tempura', imageUrl: 'https://i.ibb.co/QfR63ZK/TEMPURA-PRAWNS-Oodles-June-2023-70.webp', price: 10 },
          ],
        },
        {
          category: 'Bento Boxes',
          items: [
            { id: 13, name: 'Chicken Bento', imageUrl: 'https://i.ibb.co/2c9sBW3/featured-bento.png', price: 12 },
            { id: 14, name: 'Beef Bento', imageUrl: 'https://i.ibb.co/W58Jzyv/delicious-bento-box-with-beef-rice-and-assorted-vegetables-cut-out-stock-png.png', price: 13 },
            { id: 15, name: 'Salmon Bento', imageUrl: 'https://i.ibb.co/r4dtV9Z/Bento-Box-Somon.png', price: 14 },
            { id: 16, name: 'Vegetarian Bento', imageUrl: 'https://i.ibb.co/hdT87vZ/Bulgogi-bento-beef-1400x800-e1694194483670.png', price: 11 },
          ],
        },
        {
          category: 'Desserts',
          items: [
            { id: 17, name: 'Mochi Ice Cream', imageUrl: 'https://i.ibb.co/tCT32zN/Product-Hero-Staged-Strawberry-1024x.webp', price: 5 },
            { id: 18, name: 'Green Tea Ice Cream', imageUrl: 'https://i.ibb.co/vv7TG5w/a67f0e4e-f55b-46ef-a81a-9bb77fdbc4d6.png', price: 4.5 },
            { id: 19, name: 'Dorayaki', imageUrl: 'https://i.ibb.co/MMCLrSs/13-1-dorayaki-japonesa.webp', price: 5 },
            { id: 20, name: 'Taiyaki', imageUrl: 'https://i.ibb.co/gvgTp4C/puku-puku-taiyaki-1.webp', price: 6 },
          ],
        },
      ],
    },
  ];
  
  export default RestData;
  