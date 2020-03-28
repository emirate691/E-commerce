import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    slide: [
      {
        id: 1,
        imageSlide: require("@/assets/mouse.jpg")
      }
    ],
    stock: [
      {
        id: 1,
        categoryName: "Accessories"
      },

      {
        id: 2,
        categoryName: "Electronics"
      },

      {
        id: 3,
        categoryName: "Fashions"
      },

      {
        id: 4,
        categoryName: "Furnitures"
      }
    ],
    products: [
      {
        id: 1,
        imageLink: require("@/assets/mouse.jpg"),
        productName: "Mouse",
        productPrice: "3000",
        productDescription:
          "Mouse 2 track easier and move with less resistance across your desk. And the Multi-Touch surface allows you to perform simple gestures such as swiping between web pages and scrolling through documents. Magic Mouse 2 is ready to go right out of the box and pairs automatically with your Mac."
      },
      {
        id: 2,
        imageLink: require("@/assets/32 inch flat led  tv (series 4).jpg"),
        productName: "32 inch flat led  tv (series 4)",
        productPrice: "45,000",
        productDescription:
          "Biobetic is the Ideal therapeutic supplements that has therapeutic doses of Alpha Lipoid Acid (300mg) and methylcobalamin 1500mcg. It also contains chromium which is very good for Diabetic patients. It serves as an antioxidant and also protects the pancreas. Oxidative stress is an imbalance between the free radical activities in the body and the antioxidant activity, it is implicated in several disease conditions such as Diabetes, Heart diseases, cancer, aging, Skin diseases, Eye defects, Erectile dysfunction just to mention a few.Biobetic is also protected with MAS"
      },
      {
        id: 3,
        imageLink: require("@/assets/out door and indor home theartre.jpg"),
        productName: " Home theartre",
        productPrice: "54,499",
        productDescription:
          "The Bluetooth Wireless Portable Stereo Speaker with Hi-Fi output can be used indoor and outdoor. This speaker features loud volume & good bass sound quality; room filling sound. Its perfect for home, dorm room, kitchen, bathroom.Connect your IPhone, Samsung, Android, or Bluetooth device to experience good quality stereo sound. Enjoy conference calling system feature in the office or with a group of friends. Enjoy FM radio function while in and out of the house.Bluetooth Speaker, you will thoroughly get rid of the littery cable of headset or other music player when listen to music from your portable devices at home or outdoor. And, you just need to pair you phone or other music player which support Bluetooth with the Speaker. After paired, you can immediately enjoy the music with the speaker that offer you great sound quality. Moreover, if your device does not have Bluetooth function, you have no need to worry about it. The Speaker's bluetooth mode allows to connect with any audio device, after connected, the Speaker play the music of the connected audio device. Even more, the speaker can play music of the TF card. It is perfectly suitable for home use, office use, picnic, etc"
      },
      {
        id: 4,
        imageLink: require("@/assets/32 inch televition + free .jpg"),
        productName: "32 inch televition + free",
        productPrice: "40,000",
        productDescription:
          "Urban Fashionz range of kids footwear gives the best comfort and long lasting desire in owing one. its one every kid would love to own. all at an affordable price. The colorful design makes it unique, fashionable and kids oriented, it can be worn in all seasons it to wash and very comfortable for kids."
      },
      {
        id: 5,
        imageLink: require("@/assets/T-shirt.jpg"),
        productName: "T-shirt",
        productPrice: "10,000",
        productDescription:
          "Whether you are one of those men who loves to shop as much as women and looking good is an important part of you are or if clothing is just there to be practical, keep warm or covered well then at Jumia we have exactly what you are looking for with our wide range of men’s clothes whatever your fashion and style . Do your shopping without leaving the comfort of your home by the click of a mouse button. Let Jumia help you find the perfect look whether sporty, casual or smart with our wide selection of quality men’s clothes from t-shirts and shoes to all the other accessories in between such as ties, cufflinks, watches, caps and much more."
      },
      {
        id: 6,
        imageLink: require("@/assets/polo and cap bundle.jpg"),
        productName: "polo and cap bundle",
        productPrice: "15,000",
        productDescription:
          "Whether you are one of those men who loves to shop as much as women and looking good is an important part of you are or if clothing is just there to be practical, keep warm or covered well then at Jumia we have exactly what you are looking for with our wide range of men’s clothes whatever your fashion and style . Do your shopping without leaving the comfort of your home by the click of a mouse button. Let Jumia help you find the perfect look whether sporty, casual or smart with our wide selection of quality men’s clothes from t-shirts and shoes to all the other accessories in between such as ties, cufflinks, watches, caps and much more."
      },
      {
        id: 7,
        imageLink: require("@/assets/silver shoes.jpg"),
        productName: "silver shoes",
        productPrice: 4500,
        productDescription:
          "products contain gifts, the product may have some small accessories, please keep it safe Some of the products in this store may have gifts, and the gifts are not produced by the company. If there is any flaw, please understand.Some of the goods in this shop are produced by ourselves, using the highest quality raw materials, to achieve the lowest price and the best quality.Please carefully select the color and size before ordering, which will reduce the inconvenience.All products are available for one month free repair or replacement service. The service will be provided by China. Some of these products can be serviced by your local area.Not all products contain gifts, the product may have some small accessories, please keep it safe.Some of the products in this store may have gifts, and the gifts are not produced by the company. If there is any flaw, please understand.Some of the goods in this shop are produced by ourselves, using the highest quality raw materials, to achieve the lowest price and the best quality. Please carefully select the color and size before ordering, which will reduce the inconvenience.All products are available for one month free repair or replacement service. The service will be provided by China. Some of these products can be serviced by your local area.If you think this product is very good, you can enter this shop, there are more quality products in this shop for you to choose."
      },
      {
        id: 8,
        imageLink: require("@/assets/touch pad.jpg"),
        productName: "touch pad",
        productPrice: 5000,
        productDescription:
          " The mouse speed automatic adjustment ( DPI: 800, 1200, 1600 ) ● 2.4G high-speed transmission, stable, precise positioning, anti-jamming● Powered by 1 x Li-ion battery ( built-in  ● Built-in magnetic stable suction receiver ● Low battery reminder function ( low battery, function signal, charge reminder )"
      },
      {
        id: 9,
        imageLink: require("@/assets/fancy shoes.jpg"),
        productName: "fancy shoes",
        productPrice: 6000,
        productDescription:
          "Urban Fashionz range of kids footwear gives the best comfort and long lasting desire in owing one. its one every kid would love to own. all at an affordable price. The colorful design makes it unique, fashionable and kids oriented, it can be worn in all seasons it to wash and very comfortable for kids."
      },
      {
        id: 10,
        imageLink: require("@/assets/3D wall art ocean.webp"),
        productName: "3D wall art ocean",
        productPrice: "60,000",
        productDescription:
          "More vibrant colours for better images Using an advanced picture quality improvement algorithm, Samsung’s Wide Colour Enhancer Plus drastically improves the quality of any image and uncovers hidden details. Now see colours as they were meant to be seen with Wide Colour Enhancer Plus"
      }
    ],
    selectedProduct: null
  },
  mutations: {
    setSelectedProductValue(state, product) {
      state.selectedProduct = product;
    }
  },
  actions: {},
  modules: {}
});
