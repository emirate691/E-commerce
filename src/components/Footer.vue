<template>
<div class="Footer">
<b-container class="bv-example-row">
<b-row>
    <b-col class="list" v-for="list in lists" :footen="list.listHeader" :key="list.id" >
    <h3 class="heading"></h3>
    <li class="order">
     
    </li>
    </b-col>
    <b-col class="list">
    <ul>
    <li class="theader">How can we Help you</li>
    <li class="theaders">Help Center</li>
    <li class="theaders">Privacy</li>
    <li class="theaders">Terms</li>
     <li class="theaders">Call center</li>
    </ul>
    </b-col>
    <b-col class="list">
    <ul>
        <li class="theader">About Topnoch</li>
        <li class="theaders">Topnoch career</li>
        <li class="theaders">Topnoch Express </li>
        <li class="theaders">Terms and Condition</li>
        <li class="theaders">Privacy Policy</li>
    </ul>
    </b-col>
     <b-col class="list">
     <ul>
     <li class="theader">Make money with Topnoch</li>
     <li class="theaders">Become an Affiliate Partner</li>
     <li class="theaders">Become a sales Consultant</li>
     <li class="theaders">Become a logistics service Partner</li>
     <li class="theaders">Become Topnoch Service Provider</li>
     </ul>
     </b-col>
     <b-col class="list">
     <ul>
     <li class="theader">International Office</li>
     <li class="theaders">HeadQuarter, Abuja</li>
     <li class="theaders">Lagos</li>
     <li class="theaders">Ilorin</li>
     <li class="theaders">Kaduna</li>
     <li class="theaders">Kano</li>
     </ul>
     </b-col>
  </b-row>
  <b-row>
 
<b-col sm="4">

              <h5 class="text-left">Join us on</h5>

            <div class="icon">

               <i class="fab fa-twitter"></i>

                <i class="fab fa-facebook"></i>

                <i class="fab fa-youtube"></i>

                <i class="fab fa-linkedin"></i>

                <i class="fab fa-instagram"></i>
                </div>     
    </b-col>
    <div class="col-md-8">

               <h5 class="text-left">Our Payment Methods and Partners</h5>

              <ul class="Paymentmethod">

                 
                  <li><a href="#"><img class="method" src="../assets/payments/interswitch.jpg"></a></li>

                  <li><a href="#"><img class="method" src="../assets/payments/mastercard.jpg"></a></li>

                  <li><a href="#"><img class="method" src="../assets/payments/verve.png"></a></li>
                  <li><a href="#"><img class="method" src="../assets/payments/paystack.jpg"></a></li>



              </ul>

          </div>
    </b-col>  
 

     
          
</b-row>

     <hr />    
     <p>&copy; 2020 Topnoch.com</p> 

    </b-row>

  
</b-container>
</div>
</template>

<script>
export default {
  name: 'Footer',
  component: {
     //ooter
  }
  
}
        
</script>
<style>
.Footer{
    background-color:#17a2b8;
    height:400px;
    font-size:30px;
    color:white;
    font-family:Avenir, Helvetica, Arial, sans-serif;
}

.theader{
  list-style-type: none;
  font-weight:bold;
  font-size:17px;
  margin:0px;
  text-align:left;
  cursor:pointer;
}

.theaders{
  list-style-type: none;
  font-weight:bold;
  font-size:15px;
  margin:0px;
  text-align:left;
  cursor:pointer;
  font-family:sans serif
}
#buys{
    padding:10px;
    background-color:#17a2b8;
    width:40%;
}
.text-left{
  padding-left:150px;
}

.paymentmethod{
   margin: 0;
   padding:0;
 
  
   
}
.Paymentmethod li {
    list-style: none;
     text-align: left;
     float: left;

}
.Paymentmethod li a {
      text-align: left;
    

    }
    .method{

        width: 80px;
        height: 40px;
        margin-left: 10px;
        text-align: left;
        padding-left:10px;
        
    }
     .fa-twitter, .fa-facebook, .fa-linkedin, .fa-youtube, .fa-instagram {

        color:rgb(10 34 70);
        font-size: 40px;
        padding-left: 10px;
        padding-right: 0;
        cursor: pointer
     }
.copy{
  text-align:center;
}

</style>