<template>
  <div id="rentandsale" :class="!isDevice ? 'services section' : 'section'">
    <div class="container scrollable-wallet-mobile">
      <v-card class="mx-auto bg" elevation="2">
        <v-img
          class=""
          height="200px"
          src="http://unblast.com/wp-content/uploads/2021/09/Real-Estate-Agent-Illustration.jpg"
          gradient="150deg, rgb(185 224 255 / 58%) 0%, rgb(243 220 246 / 52%) 35%, rgb(223 255 242 / 74%) 74%"
        >
        </v-img>
        <v-row justify="center">
          <v-col
            align-self="start"
            class="d-flex justify-center align-center pa-0"
            cols="12"
          >
            <v-avatar
              class="profile avatar-center-heigth avatar-shadow"
              color="grey"
              size="164"
            >
              <v-btn @click="onButtonClick" class="upload-btn" x-large icon>
                <v-icon> mdi-camera </v-icon>
              </v-btn>
              <input
                ref="uploader"
                class="d-none"
                type="file"
                accept="image/*"
                :change="onFileChanged"
              />
              <v-img
                src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
              ></v-img>
            </v-avatar>
          </v-col>
        </v-row>
        <v-list-item color="#0000" class="profile-text-name ma-4 pt-16">
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{ currentUser.fullName }}
            </v-list-item-title>
            <v-list-item-subtitle>{{
              currentUser.isRole == "sale" ? "Người giới thiệu" : ""
            }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn
              class="mx-2"
              fab
              dark
              color="deep-purple lighten-1"
              small
              @click="dialog = true"
            >
              <v-icon dark> mdi-wallet </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-card-subtitle>
          <b class="ml-2">Chỉnh sửa</b>
          <v-btn v-on:click="UpdateUser()" icon>
            <v-icon small>{{ bioIcon }}</v-icon>
          </v-btn>
        </v-card-subtitle>

        <v-text-field
          class="pa-4"
          v-model="currentUser.fullName"
          prepend-icon="mdi-account-arrow-right"
          label="Họ & tên"
          :disabled="!editBio"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-text-field
          class="pa-4 iserror"
          v-model="currentUser.phone"
          prepend-icon="mdi-phone-forward"
          label="Số điện Thoại"
          :disabled="!editBio"
          :rules="
            isUpdate
              ? [rules.required, rules.min]
              : [rules.required, rules.min, errorPhone]
          "
          ref="form"
          @focus="errorHandle"
          type="number"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-text-field
          class="pa-4"
          v-model="currentUser.address"
          prepend-icon="mdi-whatsapp"
          label="Địa chỉ"
          :disabled="!editBio"
        ></v-text-field>
        <v-spacer></v-spacer>

        <v-card-subtitle>
          <b class="ml-2">Thay đổi email</b>
          <v-btn v-on:click="updateEmail()" icon>
            <v-icon small>{{ bioIconEmail }}</v-icon>
          </v-btn>
        </v-card-subtitle>
        <v-spacer></v-spacer>
        <v-text-field
          class="pa-4"
          v-model="currentUser.email"
          prepend-icon="mdi-email-check-outline"
          label="Email"
          :disabled="!editEmail"
          :rules="
            isUpdate
              ? [rules.requiredEmail, rules.email]
              : [rules.requiredEmail, rules.email, errorEmail]
          "
          ref="forms"
          @focus="errorHandle"
          error-messages=""
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-card>
    </div>
    <v-dialog v-model="dialog" max-width="679" content-class="elevation-0">
      <v-card>
        <v-card-title
          >Ví của bạn
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <WalletSale :isDevice="isDevice" />
      </v-card>
    </v-dialog>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script>
import localStorageUtils from "@/utils/utils_local_storage";
import WalletSale from "../wallet/Wallet_Sale.vue";
const localStorage = localStorageUtils.getService();
import UserApi from "@/api/userApi.js";
export default {
  components: { WalletSale },
  data() {
    return {
      dialog: false,
      currentUser: {},
      phone: "",
      email: "",
      editBio: false,
      editEmail: false,
      Bio: "my bio test about myself, what do you know about me?",
      bioIcon: "mdi-pencil-outline ",
      bioIconEmail: "mdi-pencil-outline ",
      focus: "",
      type: "month",
      typeToLabel: {
        month: "Month",
        week: "Week",
        day: "Day",
        "4day": "4 Days",
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: [],
      names: [],
      tab: null,
      items: ["Minha agenda", "Sobre Mim"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rules: {
        required: (value) => !!value || "Nhập số điện thoại",
        requiredEmail: (v) => !!v || "Nhập email",
        min: (v) => v.length == 10 || "Số điện thoại phải 10 kí tự",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Email không hợp lệ";
        },
      },
      errorPhone: "",
      errorEmail: "",
      isUpdate: false,
    };
  },
  props: {
    isDevice: Boolean,
  },
  created() {
    this.currentUser = JSON.parse(localStorage.getCurrentUser());
    // this.phone = this.currentUser.phone;
    // this.email = this.currentUser.email;
    console.log(this.currentUser);
  },
  methods: {
    isEmpty(str) {
      return str.replace(/^\s+|\s+$/g, "");
    },
    regexPhoneNumber(str) {
      const regexPhoneNumber = /^((\+)33|0)[1-9](\d{2}){4}$/;
      if (str.match(regexPhoneNumber)) {
        return true;
      } else {
        return false;
      }
    },
    isEmailValid(email) {
      const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return reg.test(email);
    },
    onScroll() {
      this.scrollInvoked++;
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async updateEmail() {
      this.editEmail = !this.editEmail;
      this.bioIconEmail = "mdi-content-save-all";
      if (!this.editEmail) {
        if (this.isEmailValid(this.isEmpty(this.currentUser.email))) {
          const data = await UserApi.updateUser(
            [
              {
                id: this.currentUser.id,
                fullName: this.currentUser.fullName,
                phone: this.currentUser.phone,
                email: this.currentUser.email,
                address: this.currentUser.address,
                isRole: "sale",
              },
            ],
            { typeUpdate: "emailSale" }
          );

          if (data.isError == "email") {
            this.editEmail = true;
            this.isUpdate = data.isUpdate;
            this.errorEmail = data.message;
            return;
          }
          console.log("data", data);
          this.editEmail = false;
          this.bioIconEmail = "mdi-pencil-outline ";
        } else {
          this.editEmail = true;
          this.bioIconEmail = "mdi-content-save-all";
        }
      }
    },
    async UpdateUser() {
      this.editBio = !this.editBio;
      this.bioIcon = "mdi-content-save-all";

      if (!this.editBio) {
        if (this.regexPhoneNumber(this.isEmpty(this.currentUser.phone))) {
          const data = await UserApi.updateUser(
            [
              {
                id: this.currentUser.id,
                fullName: this.currentUser.fullName,
                phone: this.currentUser.phone,
                email: this.currentUser.email,
                address: this.currentUser.address,
                isRole: "sale",
              },
            ],
            { typeUpdate: "inforSale" }
          );

          if (data.isError == "phone") {
            this.editBio = true;
            this.isUpdate = data.isUpdate;
            this.errorPhone = data.message;
            return;
          }
          this.editBio = false;
          this.bioIcon = "mdi-pencil-outline ";
        } else {
          this.editBio = true;
          this.bioIcon = "mdi-content-save-all";
        }
      }
    },
    errorHandle() {
      this.errorPhone = "";
      this.errorEmail = "";
      this.isUpdate = true;
    },
    onButtonClick() {
      this.isSelecting = true;
      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
        },
        { once: true }
      );

      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0];

      // do something
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        });
      }

      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
  computed: {},
};
</script>
<style></style>
<style scoped>
.services {
  padding-top: 21px;
}
.container {
  max-width: 60%;
}
.avatar-center-heigth {
  position: absolute;
}

.profile-text-name {
  margin-top: 70px;
}

.sutitles {
  margin: 5px;
  padding: 16px;
}
.upload-btn {
  position: absolute !important;
  z-index: 9;
  top: 121px;
  color: cadetblue;
  background: blueviolet;
  background: rgb(125, 198, 163);
  background: linear-gradient(
    50deg,
    rgba(125, 198, 163, 1) 0%,
    rgba(35, 216, 227, 1) 72%
  );
}

.bg {
  background: rgb(255, 197, 185);
  background: linear-gradient(
    0deg,
    rgba(237, 237, 237, 0.712) 0%,
    rgba(255, 255, 255, 0.667) 35%,
    rgba(255, 255, 255, 0.7539390756302521) 74%
  );
  margin-top: 30px;
  margin-bottom: 30px;
}

.avatar-shadow {
  box-shadow: 0px 0px 10px 0px rgba(50, 12, 112, 0.75);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(50, 12, 112, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(50, 12, 112, 0.75);
}
.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding: 5px 9px;
}

@media screen and (max-width: 768px) {
  .services {
    padding-top: 0;
  }
  .container {
    max-width: 100%;
  }
  .bg {
    background: rgb(255, 197, 185);
    background: linear-gradient(
      0deg,
      rgba(237, 237, 237, 0.712) 0%,
      rgba(255, 255, 255, 0.667) 35%,
      rgba(255, 255, 255, 0.7539390756302521) 74%
    );
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
</style>
