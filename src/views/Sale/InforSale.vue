<template>
  <div ref="infoBox">
    <!-- ***** Preloader Start ***** -->
    <!-- <div id="js-preloader" class="js-preloader" v-if="isLoading">
      <div class="preloader-inner">
        <span class="dot"></span>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div> -->

    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        absolute
        permanent
        right
        style="z-index: 3"
        ref="drawer"
        width="280"
        height="100vh"
        src="../../assets/images/drawer.png"
        dark
        mini-variant-width="52" 
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>Tên User</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense :style="setHeight">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            @click="clickTab(item.tab)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <div v-if="numberTab == 1">
          <InputCustomer :dataCustomer="dataCustomer" />
        </div>
        <div v-if="numberTab == 2" style="background: red">
          <InputCustomer :dataCustomer="dataCustomer" />
        </div>
        <div v-if="numberTab == 3" style="background: yellow">
          <InputCustomer :dataCustomer="dataCustomer" />
        </div>
      </v-main>
    </v-layout>
  </div>
</template>

<script>
import "@/vendor/bootstrap/css/bootstrap.min.css";
import "@/assets/css/templatemo-chain-app-dev.css";
import "@/assets/css/animated.css";
import "@/assets/css/owl.css";
import localStorageUtils from "@/utils/utils_local_storage";
import CustomerApi from "@/api/customerApi.js";
import InputCustomer from "../../components/Input_customer.vue";
export default {
  name: "information-sale",
  components: { InputCustomer },
  data: () => ({
    dialog: false,
    isLoading: true,
    checkMenu: true,
    drawer: true,
    items: [
      // { tab: 4, title: "Trang chủ", icon: "mdi-home-city" },
      { tab: 1, title: "Danh sách khách hàng", icon: "fas fa-list" },
      { tab: 2, title: "Ví", icon: "mdi-wallet" },
      { tab: 3, title: "Users", icon: "mdi-account-group-outline" },
      { tab: 4, title: "Đăng xuất", icon: "mdi-logout" },
    ],
    mini: true,
    numberTab: "",
    setHeight: "",
    dataCustomer: [],
  }),
  provide() {
    return {
      closeDialog: this.closeDialog,
    };
  },
  methods: {
    signOut() {
      localStorageUtils.clearToken();
      localStorageUtils.clearCurrentUser();
      window.location.replace("/");
    },
    // async testAPI() {
    //   const data = await UserApi.showUser();
    //   console.log("DATA sale", data);
    // },
    clickTab(numberTab) {
      if (!this.mini) {
        if (numberTab == 4) this.signOut();
        this.numberTab = numberTab;
        this.mini = true;
      }
    },
  },
  async created() {
    this.numberTab = 1;
    const data = await CustomerApi.showCustomer();
    this.dataCustomer = data[0].Customer;
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    // document.getElementById("navbar").style.border = "none";
    // let prevScrollpos = window.pageYOffset;
    // window.onscroll = () => {
    //   const currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > 50) {
    //     document.getElementById("navbar").style.backgroundColor = "white";
    //     document.getElementById("navbar").style.borderBottom =
    //       "1px solid #E6E6E6";
    //   } else {
    //     document.getElementById("navbar").style.backgroundColor = "";
    //     document.getElementById("navbar").style.border = "none";
    //   }
    //   prevScrollpos = currentScrollPos;
    // };
    // setTimeout(() => {
    //   this.$tours["myTour"].start();
    // }, 4000);
  },
};
</script>

<style scoped>
v-main {
  width: 200px;
}
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
