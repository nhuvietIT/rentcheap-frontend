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
              <a href="#" class="logo">
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
                  <a href="#">Trang chủ</a>
                </li>
                <li class="scroll-to-section" @click="myMenu">
                  <a href="#rentandsale">Rent & Sale</a>
                </li>
                <li
                  v-if="isRole === 'rent' && isRole"
                  class="scroll-to-section"
                  @click="myMenu"
                >
                  <a @click="$router.push('/rent')">Quản lý Rent </a>
                </li>
                <li
                  v-if="isRole === 'sale' && isRole"
                  class="scroll-to-section"
                  @click="myMenu"
                >
                  <a @click="$router.push('/sale')">Quản lý Sale</a>
                </li>
                <li v-if="!token" class="scroll-to-section gradient-button">
                  <a id="modal_trigger" @click.stop="openDialog"
                    ><i class="fa fa-sign-in-alt"></i> Đăng Nhập</a
                  >
                  <v-dialog v-model="dialog" width="auto">
                    <v-card>
                      <i
                        text
                        @click="dialog = false"
                        class="fas fa-times"
                        style="
                          font-size: 21px;
                          color: #3b5998;
                          margin-top: 20px;
                          height: 36px;
                          min-width: 64px;
                          padding: 0 16px;
                          right: 0px;
                          position: absolute;
                        "
                      ></i>
                      <SignIn />
                    </v-card>
                  </v-dialog>
                </li>
                <li v-else class="scroll-to-section gradient-button">
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

    <div id="modal" class="popupContainer" style="display: none">
      <div class="popupHeader">
        <span class="header_title">Login</span>
        <span class="modal_close"><i class="fa fa-times"></i></span>
      </div>

      <section class="popupBody">
        <!-- Social Login -->
        <div class="social_login">
          <div class="">
            <a href="#" class="social_box fb">
              <span class="icon"><i class="fab fa-facebook"></i></span>
              <span class="icon_title">Connect with Facebook</span>
            </a>

            <a href="#" class="social_box google">
              <span class="icon"><i class="fab fa-google-plus"></i></span>
              <span class="icon_title">Connect with Google</span>
            </a>
          </div>

          <div class="centeredText">
            <span>Or use your Email address</span>
          </div>

          <div class="action_btns">
            <div class="one_half">
              <a href="#" id="login_form" class="btn">Login</a>
            </div>
            <div class="one_half last">
              <a href="#" id="register_form" class="btn">Sign up</a>
            </div>
          </div>
        </div>

        <!-- Username & Password Login form -->
        <div class="user_login">
          <form>
            <label>Email / Username</label>
            <input type="text" />
            <br />

            <label>Password</label>
            <input type="password" />
            <br />

            <div class="checkbox">
              <input id="remember" type="checkbox" />
              <label for="remember">Remember me on this computer</label>
            </div>

            <div class="action_btns">
              <div class="one_half">
                <a href="#" class="btn back_btn"
                  ><i class="fa fa-angle-double-left"></i> Back</a
                >
              </div>
              <div class="one_half last">
                <a href="#" class="btn btn_red">Login</a>
              </div>
            </div>
          </form>

          <a href="#" class="forgot_password">Forgot password?</a>
        </div>

        <!-- Register Form -->
        <div class="user_register">
          <form>
            <label>Full Name</label>
            <input type="text" />
            <br />

            <label>Email Address</label>
            <input type="email" />
            <br />

            <label>Password</label>
            <input type="password" />
            <br />

            <div class="checkbox">
              <input id="send_updates" type="checkbox" />
              <label for="send_updates">Send me occasional email updates</label>
            </div>

            <div class="action_btns">
              <div class="one_half">
                <a href="#" class="btn back_btn"
                  ><i class="fa fa-angle-double-left"></i> Back</a
                >
              </div>
              <div class="one_half last">
                <a href="#" class="btn btn_red">Register</a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <div
      class="main-banner wow fadeIn"
      id="top"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6 align-self-center">
                <div
                  class="
                    left-content
                    show-up
                    header-text
                    wow
                    fadeInLeft
                    slide-signup
                  "
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <div class="row">
                    <div class="col-lg-12">
                      <h2>CHÀO BẠN ĐẾN VỚI RENT</h2>
                      <p>
                        Du lịch bằng xe máy không còn là điều mới lạ, nó là tất
                        yếu ở cả Việt Nam. Không chỉ bởi sự tiện lợi " thích thì
                        đi, chán thì dừng, đói thì ăn, mệt thì ngủ " mà còn vì
                        "đặc sản" mà việc thuê xe máy mang lại sẽ giúp bạn có
                        những trải nghiệm khó có thể quên trong chuyến đi du
                        dịch này.
                      </p>
                    </div>
                    <div class="col-lg-12">
                      <!-- <div
                        class="
                          white-button
                          first-button
                          scroll-to-section
                          v-step-0
                        "
                      >
                        <a href="#contact"
                          >Đăng ký Rent <i class="fas fa-sign-in-alt"></i
                        ></a>     background: linear-gradient(150deg, rgb(83 123 238) 0%, rgb(240 237 243) 100%);
                      </div> -->
                      <div class="white-button scroll-to-section v-step-1">
                        <a href="#signup"
                          >Đăng ký<i class="fas fa-sign-in-alt"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="right-image wow fadeInRight slide-img"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img src="@/assets/images/slider-dec.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="rentandsale" class="services section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div
              class="section-heading wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <h4>Dịch Vụ <em>Rent</em> cho bạn</h4>
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
          <p>
            Hợp đồng thuê tài sản là sự thỏa thuận giữa các bên, theo đó bên cho
            thuê giao tài sản cho bên thuê để sử dụng trong một thời hạn, bên
            thuê phải trả tiền thuê.
          </p>
          <img src="@/assets/images/heading-line-dec.png" alt="" />
        </div>
        <!-- <UserLocationRent /> -->
      </div>

      <div class="container">
        <div class="row">
          <!--
          <div class="col-lg-3">
            <div class="service-item second-service">
              <div class="icon"></div>
              <h4>Rocket Speed of App</h4>
              <p>
                You are allowed to use the Chain App Dev HTML template. Feel
                free to modify or edit this layout.
              </p>
              <div class="text-button">
                <a href="#">Read More <i class="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="service-item third-service">
              <div class="icon"></div>
              <h4>Multi Workflow Idea</h4>
              <p>
                If this template is beneficial for your work, please support us
                <a
                  rel="nofollow"
                  href="https://paypal.me/templatemo"
                  target="_blank"
                  >a little via PayPal</a
                >. Thank you.
              </p>
              <div class="text-button">
                <a href="#">Read More <i class="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="service-item fourth-service">
              <div class="icon"></div>
              <h4>24/7 Help &amp; Support</h4>
              <p>
                Lorem ipsum dolor consectetur adipiscing elit sedder
                williamsburg photo booth quinoa and fashion axe.
              </p>
              <div class="text-button">
                <a href="#">Read More <i class="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </div>-->
        </div>
      </div>
    </div>

    <div id="signup" class="about-us section">
      <div class="container">
        <div class="row">
          <div class="align-self-center">
            <div class="section-heading">
              <h4>Đăng ký <em>Rent</em> &amp; sale</h4>
              <img src="@/assets/images/heading-line-dec.png" alt="" />
            </div>
            <div class="row">
              <SignUp />
            </div>
          </div>
        </div>
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
              <p><a href="#">0899-885-880</a></p>
              <p><a href="#">nhuvietmmo@gmail.com</a></p>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="footer-widget">
              <h4>Về chúng tôi</h4>
              <ul>
                <li><a href="#home">Trang Chủ</a></li>
                <li><a href="#signup">Đăng ký</a></li>
                <li><a href="#rentandsale">Rent & Sale</a></li>
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
// import UserLocationRent from "../../components/UserLocation_Rent.vue";
import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";
import localStorageUtils from "@/utils/utils_local_storage";
const localStorage = localStorageUtils.getService();
export default {
  name: "HomeRent",
  components: { SignUp, SignIn },
  data: () => ({
    dialog: false,
    isLoading: true,
    checkMenu: true,
    token: "",
    isRole: "",
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
      this.$router.push('/rent').catch(() => {})
    },
  },
  created() {
    this.token = localStorage.getToken();
    const currentUser = JSON.parse(localStorage.getCurrentUser());
    this.isRole = currentUser?.isRole;
  },
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
