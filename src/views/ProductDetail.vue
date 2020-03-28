<template>
  <div class="product-detail">
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="9">
          <b-row>
            <b-col cols="4">
              <img :src="product.imageLink" />

              <hr />
              <p>SHARE THIS PORODUCT</p>
              <i class="fab fa-twitter"></i>

              <i class="fab fa-facebook"></i>
            </b-col>
            <b-col cols="8">
              <h3>{{ product.productName }}</h3>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>

              <hr />
              <p>
                <strong> #{{ product.productPrice }}</strong>
              </p>
              <div>
                <b-button block variant="warning">Add to Cart</b-button>
              </div>
              <hr />

              <h4>promotions</h4>
              <ul>
                <li class="promo">
                  <a href="#"
                    >Stay Safe, Go cashless with JumiaPay. Get additional 5% off
                    capped at N500 (Jumia APP only)</a
                  >
                </li>
                <li class="promo">
                  <a href="#">Enjoy unlimited Free Delivery with Jumia Prime</a>
                </li>
                <li class="promo">
                  <a href="#"
                    >Buy airtime and data on Jumia One and get up to N500 cash
                    back. Use code WELCOME50</a
                  >
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="3">
          <b-card>
            <p>Delivery & Return</p>
            <hr />

            <b-row>
              <b-col cols="3"> <i class="fas fa-undo-alt"></i></b-col>
              <b-col cols="9">
                Return Policy Free return within 15 days for Jumia Mall items
                and 7 days for other eligible items.See more
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="3"> <i class="fas fa-truck"></i></b-col>
              <b-col cols="9">
                Warranty YES
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <br />
      <br />

      <b-row>
        <b-col cols="9">
          <h4>PRODUCT DETAIL</h4>
          <hr />
          <p class="detail">{{ product.productDescription }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  computed: {
    product() {
      return this.$store.state.selectedProduct;
    }
  }
};
</script>
<style>
.fa-star {
  /*background-color: #ffc107;*/
  color: #ffc107;
}
#logis {
  height: 10px;
}

.detail {
  text-align: justify;
}
cols {
  background-color: #fff;
  border-radius: px;
}
.promo {
  list-style-type: none;
}
</style>
