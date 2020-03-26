<template>
  <div id="app">
    <div id="nav">
    <Header />
      <router-link to="/"></router-link> |
      <router-link to="/about"></router-link>
    </div>
  
    <router-view/>
    
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

</style>
