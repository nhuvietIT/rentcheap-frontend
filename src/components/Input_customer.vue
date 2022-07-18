<template>
  <div>
    <div id="rentandsale" class="services section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div
              class="section-heading wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <h4><em>Quản lý </em></h4>
              <img src="@/assets/images/heading-line-dec.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/vendor/bootstrap/css/bootstrap.min.css";
import "@/assets/css/templatemo-chain-app-dev.css";
import "@/assets/css/animated.css";
import "@/assets/css/owl.css";

// import UserApi from "@/api/userApi.js";

export default {
  name: "information-rent",
  data: () => ({}),
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style scoped>
.v-tour__target--highlighted {
  box-shadow: 0 0 0 99999px rgba(0, 0, 0, 0.4);
}
.slide-signup {
  animation-name: example;
  animation-duration: 4s;
  animation-delay: 2s;
}
.align-self-center {
  text-align: center;
}
@keyframes example {
  50% {
    right: 0px;
    top: 0px;
  }
  0% {
    right: 200px;
    top: 0px;
  }
}
.slide-img {
  animation-name: example-img;
  animation-duration: 2s;
  animation-delay: 2s;
}
@keyframes example-img {
  50% {
    left: 0px;
    top: 0px;
  }
  0% {
    left: 200px;
    top: 0px;
  }
}
#navbar {
  position: fixed;
  top: 0;
  width: 100%;
  transition: top 0.5s;
}

.mobile-container {
  max-width: 480px;
  margin: auto;
  background-color: #555;
  height: 500px;
  color: white;
  border-radius: 10px;
}

.topnav {
  overflow: hidden;
  background-color: #333;
  position: relative;
}

.topnav #myLinks {
  display: none;
}

.topnav a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

.topnav a.icon {
  background: black;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}
/* @media (min-width: 992px) {
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
    top: 17%;
    z-index: 3;
    position: absolute;
    opacity: 0.1;
  }
} */
</style>
