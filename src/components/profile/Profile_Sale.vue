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
            <v-btn class="mx-2" fab dark color="indigo" small>
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-card-subtitle>
          <b class="ml-2">Chỉnh sửa</b>
          <v-btn v-on:click="saveBio" icon>
            <v-icon small>{{ bioIcon }}</v-icon>
          </v-btn>
        </v-card-subtitle>

        <!-- <p v-if="!editBio" class="pl-6 pr-6 pt-0">
        {{ currentUser.fullName }}
      </p> -->
        <!-- <v-textarea
        v-model="currentUser.fullName"
        rows="2"
        v-if="editBio"
        label="Editar minha Bio"
        class="pa-6"
      ></v-textarea> -->
        <v-text-field
          class="pa-4"
          v-model="currentUser.fullName"
          prepend-icon="mdi-account-arrow-right"
          label="Họ & tên"
          :disabled="!editBio"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-text-field
          class="pa-4"
          v-model="currentUser.phone"
          prepend-icon="mdi-phone-forward"
          label="Số điện Thoại"
          :disabled="!editBio"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-text-field
          class="pa-4"
          v-model="currentUser.email"
          prepend-icon="mdi-email-check-outline"
          label="Email"
          :disabled="!editBio"
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

        <!-- <v-row>
        <v-col cols="6" class="text-end">
          <v-list-item-content class="sutitles">
            <v-list-item-title class="text-h6"> 1002 </v-list-item-title>
            <v-list-item-subtitle class="text-caption"
              >Curtidas</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-col>
        <v-col cols="6" class="text-start">
          <v-list-item-content class="sutitles">
            <v-list-item-title class="text-h6"> 10 </v-list-item-title>
            <v-list-item-subtitle class="text-caption"
              >Seguindo</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-col>
      </v-row> -->
        <!--<v-row>
              <v-col class="d-flex justify-end align-right pa-2" cols="6">
                <v-btn rounded color="primary" dark>
                  Agendar um Horário
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-left align-left pa-2" cols="6">
                <v-btn rounded color="primary" dark>
                  Contato
                </v-btn>
              </v-col>
            </v-row>-->
      </v-card>
    </div>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script>
import localStorageUtils from "@/utils/utils_local_storage";
const localStorage = localStorageUtils.getService();
export default {
  data() {
    return {
      currentUser: {},
      Phone: "00 00000-0000",
      editBio: false,
      Bio: "my bio test about myself, what do you know about me?",
      bioIcon: "mdi-pencil-outline ",
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
    };
  },
  props: {
    isDevice: Boolean,
  },
  created() {
    this.currentUser = JSON.parse(localStorage.getCurrentUser());

    console.log(this.currentUser);
  },
  methods: {
    onScroll() {
      this.scrollInvoked++;
    },
    saveBio() {
      this.editBio = !this.editBio;
      this.bioIcon = "mdi-content-save-all";
      if (!this.editBio) {
        this.bioIcon = "mdi-pencil";

        alert("salvo com sucesso!");
      }
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
  z-index: 999;
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
