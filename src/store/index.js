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
        productPrice: "3000"
      },
      {
        id: 2,
        imageLink: require("@/assets/32 inch flat led  tv (series 4).jpg"),
        productName: "32 inch flat led  tv (series 4)",
        productPrice: "45,000"
      },
      {
        id: 3,
        imageLink: require("@/assets/out door and indor home theartre.jpg"),
        productName: "out door and indor home theartre",
        productPrice: "54,499"
      },
      {
        id: 4,
        imageLink: require("@/assets/32 inch televition + free .jpg"),
        productName: "32 inch televition + free",
        productPrice: "40,000"
      },
      {
        id: 5,
        imageLink: require("@/assets/T-shirt.jpg"),
        productName: "T-shirt",
        productPrice: "10,000"
      },
      {
        id: 6,
        imageLink: require("@/assets/polo and cap bundle.jpg"),
        productName: "polo and cap bundle",
        productPrice: "15,000"
      },
      {
        id: 7,
        imageLink: require("@/assets/silver shoes.jpg"),
        productName: "silver shoes",
        productPrice: 4500
      },
      {
        id: 8,
        imageLink: require("@/assets/touch pad.jpg"),
        productName: "touch pad",
        productPrice: 5000
      },
      {
        id: 9,
        imageLink: require("@/assets/fancy shoes.jpg"),
        productName: "fancy shoes",
        productPrice: 6000
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
