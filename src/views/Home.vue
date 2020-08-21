<template>
  <div class="home">
    <Header></Header>
       <FontIntro/>
       <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
       <carousle/>
       <br/><br/><br/><br/><br/><br/><br/>
       <div class="row">
       <div class="container h-100">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <img src="../assets/graphic1.svg" alt="" width="400">
          </div>
          <div></div>
          <div class="col-md-6">
            <h3>Learn More About us</h3>
            <p>
              start with four people, we have math, science, cs, electric engineer background and so on (write some shite about background)
            </p>
             <button class="btn custom-btn btn-outline-primary mr-4">Group History</button>
          </div>
        </div>
       </div>
      </div>
      <Login></Login>
  </div> 
</template>

<script>
import carousle from "@/views/font/carousle.vue"
import FontIntro from "@/views/font/FontIntro.vue"
import Login from "@/components/Login.vue"
export default {
    name:"home",
    components:{
        FontIntro,Login,carousle
    }
}
</script>

<style>

</style>