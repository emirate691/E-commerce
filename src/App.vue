<template>
  <div id="app">
    <Header />
    <div class="custom-wrapper">
    <router-view/>
    </div>
    
<div id="Footer">
      <Footer />
      </div>
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name:'App',
  components: {
    Header,
    Footer
  }


}
</script>
<style>
.custom-wrapper {
  margin-top: 62px;
}
</style>
