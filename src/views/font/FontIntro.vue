<template>
    <div class="hero">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
                 <div class="graphic">
                    <img src="../../assets/graphic3.svg" alt="">
                    <!-- <a href="https://www.freepik.com/vectors/business">Business vector created by freepik - www.freepik.com</a> -->
                </div>
            </div>
            <div class="col-md-7">
              <div class="hero-content">
                <h1 class="hero-title">
                  StreamFlow Class
                </h1>
                <p>
                  we learn, we study, we play. Have fun and enjoy the classes here!
                </p>
                <div class="hero-btn mt-5">
                    <button class="btn custom-btn btn-info mr-4">Explore</button>
                    <button class="btn custom-btn btn-outline-secondary">Products</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hero{
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: right;
  }

</style>
