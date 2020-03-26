<template>
  <div class="home">
  
    <b-list-group id= 'menu'>
    
        <b-list-group-item id="menu-1">
        <b-col cols="4">
        <ul>
        <li v-for="item in stock" :key="item.id">{{ item.categoryName }}</li>
        </ul>
        </b-col>
        </b-list-group-item>
    </b-list-group>
     
      <b-row>
      <b-col v-for="product in products"  :key="product.id" cols="3">
      <b-card 
    
  
    :img-src ="product.imageLink"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
    
  >
    <b-card-text>
      <p class="name">{{product.productName}}</p>
       <h5> Price: &#8358; {{product.productPrice}}</h5>
    </b-card-text>

    <b-button href="#" variant="primary">Buy Now</b-button>
  </b-card>

      </b-col>
      </b-row>
  
</div>

</template>
<script>
export default {
  name: 'Home',
  data(){
    return {
       stock: [
        {
        id:1,
        categoryName:"Accessories"
        },

         {
        id:2,
        categoryName:"Electronics"
        },

         {
        id:3,
        categoryName:"Fashions"
        },

         {
        id:4,
        categoryName:"Furnitures"
        },

       ],
       products : [
         {
          id:1,
          imageLink: require("@/assets/mouse.jpg"),
          productName:"Mouse",
          productPrice:"3000"
        },
        {
          id:2,
          imageLink: require("@/assets/32 inch flat led  tv (series 4).jpg"),
          productName:"32 inch flat led  tv (series 4)",
          productPrice:"45,000"
        },
        {
          id:3,
          imageLink: require("@/assets/out door and indor home theartre.jpg"),
          productName:"out door and indor home theartre",
           productPrice:"54,499"
        },
        {
          id:4,
          imageLink: require("@/assets/32 inch televition + free .jpg"),
          productName:"32 inch televition + free",
          productPrice:"40,000"
        },
         {
          id:5,
          imageLink: require("@/assets/T-shirt.jpg"),
          productName:"T-shirt",
          productPrice:"10,000"
        },
         {
          id:6,
          imageLink: require("@/assets/polo and cap bundle.jpg"),
          productName:"polo and cap bundle",
          productPrice:"15,000"
        },
         {
          id:7,
          imageLink: require("@/assets/silver shoes.jpg"),
          productName:"silver shoes",
          productPrice:4500
        },
        {
          id:8,
          imageLink: require("@/assets/touch pad.jpg"),
          productName:"touch pad",
          productPrice:5000
        },
        {
          id:9,
          imageLink: require("@/assets/fancy shoes.jpg"),
          productName:"fancy shoes",
          productPrice:6000
        },
        {
          id:10,
          imageLink: require("@/assets/3D wall art ocean.webp"),
          productName:"3D wall art ocean",
          productPrice:"60,000"
        }
        
      ]
       
    }
  }
}
</script>