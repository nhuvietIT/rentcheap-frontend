<template>
  <div>
    <!-- ***** Preloader Start ***** -->
    <div id="js-preloader" class="js-preloader" v-if="isLoading">
      <div class="preloader-inner">
        <span class="dot"></span>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- ***** Preloader End ***** -->

    <!-- ***** Header Area Start ***** -->
    <header
      class="header-area header-sticky wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
      id="navbar"
    >
      <div class="container">
        <div class="row" style="width: 100%">
          <div class="col-12">
            <nav class="main-nav">
              <!-- ***** Logo Start ***** -->
              <a @click="$router.push('/')" class="logo">
                <img
                  src="@/assets/images/logo-rent.png"
                  alt="Chain App Dev"
                  width="60"
                  height="80"
                />
              </a>
              <!-- ***** Logo End ***** -->
              <!-- ***** Menu Start ***** -->
              <ul class="nav" id="myLinks">
                <li class="scroll-to-section active" @click="myMenu">
                  <a @click="$router.push('/')">Trang chủ</a>
                </li>
                <li class="scroll-to-section" @click="myMenu">
                  <a @click="$router.push('/sale').catch(() => {})"
                    >Quản lý Sale</a
                  >
                </li>
                <li class="scroll-to-section gradient-button">
                  <a id="modal_trigger" @click="signOut"
                    ><i class="fa fa-sign-in-alt"></i> Đăng Xuất</a
                  >
                </li>
              </ul>
              <a
                :class="checkMenu ? 'menu-trigger' : 'menu-trigger active'"
                @click="myMenu"
              >
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <!-- ***** Header Area End ***** -->

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

      <div class="container">
        <div
          class="section-heading wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <!-- <p>
            Hợp đồng thuê tài sản là sự thỏa thuận giữa các bên, theo đó bên cho
            thuê giao tài sản cho bên thuê để sử dụng trong một thời hạn, bên
            thuê phải trả tiền thuê.
          </p> -->
          <!-- <img src="@/assets/images/heading-line-dec.png" alt="" /> -->
          <!-- <li class="scroll-to-section gradient-button"> -->
            <!-- <a id="modal_trigger" @click="testAPI"><i></i>Test API</a> -->
          <!-- </li> -->
        </div>
        <!-- <UserLocationRent /> -->
      </div>

      <div class="container">
        <div class="row"></div>
      </div>
    </div>

    <footer id="newsletter">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="section-heading">
              <h4 style="text-transform: none">
                Tham gia cùng của chúng tôi để nhận tin tức &amp; ưa đãi mới
                nhất
              </h4>
            </div>
          </div>
          <div class="col-lg-6 offset-lg-3">
            <form id="search" action="#" method="GET">
              <div class="row">
                <div class="col-lg-6 col-sm-6">
                  <fieldset>
                    <input
                      type="address"
                      name="address"
                      class="email"
                      placeholder="Email Address..."
                      autocomplete="on"
                      required
                    />
                  </fieldset>
                </div>
                <div class="col-lg-6 col-sm-6">
                  <fieldset>
                    <button type="submit" class="main-button">
                      Theo dõi ngay <i class="fa fa-angle-right"></i>
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="row" style="justify-content: center">
          <div class="col-lg-3">
            <div class="footer-widget">
              <h4>Liên hệ chúng tôi</h4>
              <p>Điện Bàn - Hội An - Quảng Nam</p>
              <p><a>0899-885-880</a></p>
              <p><a>nhuvietmmo@gmail.com</a></p>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="footer-widget">
              <h4>Về chúng tôi</h4>
              <ul>
                <li><a @click="$router.push('/')">Trang Chủ</a></li>
                <li><a @click="$router.push('/')">Đăng ký</a></li>
                <li><a @click="$router.push('/')">Rent & Sale</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="footer-widget">
              <h4>Rent Cheap</h4>
              <div class="logo">
                <!-- <img src="@/assets/images/logo-rent.png" alt="" /> -->
              </div>
              <p>
                Rent Cheap là dịch dụ thuê xe giữa người cho thuê và người cần
                thuê. Đồng thời là dịch dụ giới thiệu khách hàng cần thuê xe và
                được chiếc khấu hoa hồng khi giới thiệu thành công.
              </p>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="copyright-text">
              <p>
                Copyright © 2022 Rent-Cheap App
                <br />Design:
                <a href="https://www.facebook.com/nhuvietit" target="_blank"
                  >Nguyễn Như Việt</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- <v-tour name="myTour" :steps="steps"></v-tour> -->
  </div>
</template>

<script>
import "@/vendor/bootstrap/css/bootstrap.min.css";
import "@/assets/css/templatemo-chain-app-dev.css";
import "@/assets/css/animated.css";
import "@/assets/css/owl.css";
import localStorageUtils from "@/utils/utils_local_storage";
// import UserApi from "@/api/userApi.js";

export default {
  name: "information-sale",
  components: {},
  data: () => ({
    dialog: false,
    isLoading: true,
    checkMenu: true,
    steps: [
      {
        target: ".v-step-0", // We're using document.querySelector() under the hood
        header: {
          title: "Get Started",
        },
        content: `Register to do Rent`,
        params: {
          enableScrolling: false,
        },
      },
      {
        target: ".v-step-1",
        content: "Register to do Sale",
        params: {
          enableScrolling: false,
        },
      },
      {
        target: ".v-step-3",
        content: "Sigin user",
        params: {
          placement: "top", // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
          enableScrolling: false,
          highlight: true,
        },
      },
      {
        target: ".v-step-4",
        content: "Search for a rental location",
        params: {
          // placement: "top", // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
          enableScrolling: true,
        },
      },
    ],
  }),
  provide() {
    return {
      closeDialog: this.closeDialog,
    };
  },
  methods: {
    myMenu() {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
        this.checkMenu = true;
      } else {
        x.style.display = "block";
        this.checkMenu = false;
      }
    },
    openDialog() {
      this.dialog = true;
      this.myMenu();
    },
    closeDialog() {
      this.dialog = false;
    },
    signOut() {
      localStorageUtils.clearToken();
      localStorageUtils.clearCurrentUser();
      window.location.replace("/")

    },
    // async testAPI() {
    //   const data = await UserApi.showUser();
    //   console.log("DATA sale", data);
    // },
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    document.getElementById("navbar").style.border = "none";
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > 50) {
        document.getElementById("navbar").style.backgroundColor = "white";
        document.getElementById("navbar").style.borderBottom =
          "1px solid #E6E6E6";
      } else {
        document.getElementById("navbar").style.backgroundColor = "";
        document.getElementById("navbar").style.border = "none";
      }
      prevScrollpos = currentScrollPos;
    };
    // setTimeout(() => {
    //   this.$tours["myTour"].start();
    // }, 4000);
  },
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
