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
              Product detail
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
              <h1>promotion</h1>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="3">
          <b-card>
            <p>Delivery & Return</p>
            <hr />
            <b-row>
              <b-col cols="3"> <i class="fas fa-truck"></i></b-col>
              <b-col cols="9">
                Express delivery in main cities. Details
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="3"> <i class="fas fa-truck"></i></b-col>
              <b-col cols="9">
                Delivery Information Normally delivered between Tuesday 31 Mar
                and Wednesday 1 Apr. Please check exact dates in the Checkout
                page.See more
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="3"> <i class="fas fa-truck"></i></b-col>
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
</style>
