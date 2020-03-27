<template>
  <div class="home">
    <b-container>
      <b-row class="mb-2">
        <b-col lg="4" md="3" sm="12">
          <b-list-group>
            <b-list-group-item v-for="item in stock" :key="item.id">{{
              item.categoryName
            }}</b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col lg="8" md="9" sm="12">
          <div>
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <!-- Text slides with image -->

              <!-- Slides with custom text -->
              <b-carousel-slide
                img-src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1585035799/contentservice/carouselBanner_8_soloGames.png_BJJ7cVwUL.png"
              >
              </b-carousel-slide>

              <!-- Slides with image only -->
              <b-carousel-slide
                img-src="https://ng.jumia.is/cms/Homepage/2020/W13-2/ContactlessDelivery_NG_withoutCTA-(1).jpg"
              ></b-carousel-slide>

              <!-- Slides with img slot -->
              <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1585141248/contentservice/Artboard%205mrch.jpg_rk_bUROIL.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col
          v-for="product in products"
          :key="product.id"
          cols="6"
          lg="3"
          md="4"
        >
          <b-card
            :img-src="product.imageLink"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              <p class="name">{{ product.productName }}</p>
              <h5>Price: &#8358; {{ product.productPrice }}</h5>
            </b-card-text>

            <b-button @click="gotoPage(product)" variant="primary"
              >Buy Now</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    stock() {
      return this.$store.state.stock;
    },
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    gotoPage(product) {
      this.$store.commit("setSelectedProductValue", product);
      this.$router.push({ path: "/productdetail" });
    }
  }
};
</script>
<style>
body {
  /*background-image: url("https://ng.jumia.is/cms/8-18/fashion-frenzy/BG-FF.jpg");*/
  /*background-image: url("https://ng.jumia.is//cms/Homepage/2020/W13/1TechWeek_BSB_2pm+9pm-(1).gif");*/

  /*background-image: url("https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1554737513/woocommerce_kqwhux.png");*/
}
</style>
