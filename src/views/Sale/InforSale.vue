<template>
  <div>
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

    <!-- <v-btn icon absolute top right style="margin: 50px">
      <div class="btn-create">
        <v-icon size="52" color="rgb(67 161 243)">mdi-plus-box</v-icon>
      </div>
    </v-btn> -->

    <v-layout v-if="!isDevice">
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
          <h2>Thong bao</h2>
        </div>
        <div v-if="numberTab == 3">
          <InputCustomer :dataCustomer="dataCustomer" />
        </div>
        <div v-if="numberTab == 4">
          <UserLocationRent />
        </div>
      </v-main>
    </v-layout>

    <div v-else>
      <v-app-bar color="rgb(75 142 241)">
        <v-icon size="18" color="white">{{ items[numberTab - 1].icon }}</v-icon>
        &nbsp; &nbsp;
        <v-toolbar-title style="color: white">{{
          items[numberTab - 1].titlePage
        }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="openAdd" fab>
          <v-icon size="39" color="white"> mdi-plus</v-icon>
        </v-btn>
        <!-- <v-btn class="mx-2" size="39" fab dark color="indigo">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn> -->
      </v-app-bar>
      <v-app-bar app bottom class="bottomappbar">
        <v-bottom-navigation
          :value="value"
          color="rgb(75 142 241)"
          grow
          class="elevation-0"
          background-color="#ffffff"
        >
          <v-btn
            v-for="(item, index) in items"
            :key="index"
            @click="clickTaMobile(item.tab)"
          >
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-app-bar>

      <v-main class="scrollable" v-resize="onResize">
        <v-container fluid>
          <div v-if="numberTab == 1">
            <InputCustomer :dataCustomer="dataCustomer" :isDevice="isDevice" />
          </div>
          <div v-if="numberTab == 2" style="background: red">
            <h2>Thong bao</h2>
          </div>
          <div v-if="numberTab == 3">
            <InputCustomer :dataCustomer="dataCustomer" :isDevice="isDevice" />
          </div>
          <div v-if="numberTab == 4">
            <UserLocationRent />
          </div>
        </v-container>
      </v-main>
    </div>

    <v-dialog v-model="dialogAdd" max-width="552">
      <v-card>
        <v-card-title class="text-h6">Tạo khách hàng</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Tên khách hàng"
              required
            ></v-text-field>

            <v-text-field
              v-model="phone"
              :counter="10"
              :rules="phoneRules"
              label="Số điện thoại"
              required
              type="number"
            ></v-text-field>

            <v-text-field
              v-model="address"
              :rules="addressRules"
              label="Địa chỉ"
              required
            ></v-text-field>

            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || 'Vui lòng tích vào để tiếp tục']"
              label="Gửi yêu cầu"
              required
            ></v-checkbox>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <!-- <v-btn color="green   darken-1" text @click="closeAdd">Thoát</v-btn> -->
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!valid"
            color="primary"
            @click="addDataCustomer"
            depressed
            height="33"
          >
            Lưu
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import "@/vendor/bootstrap/css/bootstrap.min.css";
import "@/assets/css/templatemo-chain-app-dev.css";
import "@/assets/css/animated.css";
import "@/assets/css/owl.css";
import localStorageUtils from "@/utils/utils_local_storage";
const localStorage = localStorageUtils.getService();
import CustomerApi from "@/api/customerApi.js";
import InputCustomer from "../../components/Input_customer.vue";
import UserLocationRent from "../../components/UserLocation_Rent.vue";
export default {
  name: "information-sale",
  components: { InputCustomer, UserLocationRent },
  data: () => ({
    dialog: false,
    isLoading: true,
    checkMenu: true,
    drawer: true,
    items: [
      // { tab: 4, title: "Trang chủ", icon: "mdi-home-city" },
      {
        tab: 1,
        title: "Danh sách",
        icon: "fas fa-list",
        titlePage: "Danh sách khách hàng",
      },
      {
        tab: 2,
        title: "Thông báo",
        icon: "mdi-bell-badge-outline",
        titlePage: "Thông Báo",
      },
      {
        tab: 3,
        title: "Ví",
        icon: "mdi-wallet",
        titlePage: "Ví của bạn",
      },

      {
        tab: 4,
        title: "Users",
        icon: "mdi-account-group-outline",
        titlePage: "Thông tin",
      },
      { tab: 5, title: "Đăng xuất", icon: "mdi-logout" },
    ],
    mini: true,
    numberTab: "",
    setHeight: "",
    dataCustomer: [],
    value: 0,
    isDevice: false,
    dialogAdd: false,
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Vui lòng nhập tên khách hàng"],
    phone: "",
    phoneRules: [
      (v) => !!v || "Vui lòng nhập số điện thoại",
      (v) => (v && v.length <= 10) || "Số điện thoại không vượt quá 10 số",
      (v) =>
        v?.match(/^((\+)33|0)[1-9](\d{2}){4}$/)
          ? true
          : "Số điện thoại không lệ",
    ],
    address: "",
    addressRules: [(v) => !!v || "Vui lòng nhập địa chỉ"],
    checkbox: false,
    currentUser: {},
  }),
  provide() {
    return {
      closeDialog: this.closeDialog,
      openAdd: this.openAdd,
      updateDataCustomer: this.updateDataCustomer,
    };
  },
  methods: {
    signOut() {
      localStorageUtils.clearToken();
      localStorageUtils.clearCurrentUser();
      window.location.replace("/");
    },
    clickTab(numberTab) {
      if (!this.mini) {
        if (numberTab == 5) this.signOut();
        this.numberTab = numberTab;
        this.mini = true;
      }
    },
    clickTaMobile(numberTab) {
      window.scrollTo(0, 0);
      if (numberTab == 5) this.signOut();
      this.numberTab = numberTab;
      this.mini = true;
    },
    onResize() {
      document.querySelector(".scrollable").style.height =
        window.innerHeight - 110 + "px";
    },
    openAdd() {
      this.dialogAdd = true;
    },
    async closeAdd() {
      this.$refs.form.reset();
      this.dialogAdd = false;
    },
    async addDataCustomer() {
      if (
        this.name == "" ||
        this.phone == "" ||
        this.address == "" ||
        this.checkbox == ""
      ) {
        this.validate();
      } else {
        const data = await CustomerApi.createCustomer([
          {
            userId: this.currentUser.id,
            nameCustomer: this.name,
            phoneCustomer: this.phone,
            addressCustomer: this.address,
            isApproved: "waiting",
          },
        ]);
        this.dataCustomer = data;
        this.closeAdd();
      }
    },
    updateDataCustomer(data) {
      this.dataCustomer = data;
    },
    validate() {
      this.$refs.form.validate();
    },
  },
  async created() {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);
    if (isMobileDevice) {
      this.isDevice = true;
    } else {
      this.isDevice = false;
    }
    this.currentUser = JSON.parse(localStorage.getCurrentUser());
    this.numberTab = 1;
    const data = await CustomerApi.showCustomer();
    this.dataCustomer = data[0].Customer;
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
        default:
          return "blue-grey";
      }
    },
  },
  watch: {
    dialog() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
v-main {
  width: 200px;
}
.overStroll {
  top: initial !important;
  bottom: 0 !important;
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

.v-btn:not(.v-btn--round).v-size--default {
  height: 55px;
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

.bottomappbar >>> .v-toolbar__content {
  padding: 0;
  margin: 0;
}

.v-app-bar >>> .v-app-bar--fixed {
  top: initial !important;
  bottom: 0 !important;
}

.v-app-bar.v-app-bar--fixed {
  top: initial !important;
  bottom: 0 !important;
}

.v-app-bar--fixed {
  top: initial !important;
  bottom: 0 !important;
}

.v-app-bar {
  top: initial !important;
  bottom: 0 !important;
}
.scrollable {
  overflow-y: scroll;
}
.btn-create {
  z-index: 9;
}
.v-btn:not(.v-btn--round).v-size--default {
  min-width: 64px;
  padding: 0;
  margin: 0 0 7px;
}
.v-dialog > .v-card > .v-card__text {
  padding: 0 25px 0px;
}
</style>
