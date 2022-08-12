<template>
  <div>
    <v-card class="mx-auto bg" elevation="2">
      <div class="container-wallet">
        <v-col cols="12">
          <v-card color="deep-purple lighten-2" dark>
            <div class="d-flex flex-no-wrap justify-space-between height-title">
              <div>
                <v-card-title class="ml-0 mt-0 card-title-mobile">
                  Xin chào Việt !
                </v-card-title>
                <v-card-subtitle class="v-card-subtitle-wallet">
                  <v-icon :size="!isDevice ? 25 : 20" color="cback">
                    mdi-currency-usd</v-icon
                  >
                  <v-icon size="14" color="cback">
                    {{
                      sumMoney.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })
                    }}
                  </v-icon>
                </v-card-subtitle>
              </div>
              <div>
                <v-card-actions v-if="totab">
                  <v-btn
                    class="mt-6 mr-2"
                    outlined
                    rounded
                    small
                    @click="withDrawMoney"
                  >
                    Yêu cầu rút tiền
                  </v-btn>
                </v-card-actions>
                <v-card-actions v-else>
                  <v-btn
                    class="mt-6 mr-2"
                    outlined
                    rounded
                    small
                    @click="withDrawMoney"
                  >
                    <v-icon>mdi-arrow-left</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
      </div>
      <v-card
        v-scroll.self="onScroll"
        class="overflow-y-auto wallet-content"
        :max-height="!isDevice ? 500 : 379"
        style="box-shadow: none"
        v-if="totab"
      >
        <v-col
          cols="12"
          style="padding-top: 0px"
          v-for="(item, i) in itemss"
          :key="i"
        >
          <v-card :color="item.color">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-title"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle
                  ><span class="text-subtitle"
                    >Tiền bạn được nhận :
                    <span style="color: rgb(244 67 54); font-weight: bold">{{
                      item.money.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })
                    }}</span>
                  </span></v-card-subtitle
                >
              </div>

              <v-card-actions>
                <v-card-subtitle v-text="item.dateIntro"></v-card-subtitle
              ></v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-card>
      <v-card
        v-scroll.self="onScroll"
        class="overflow-y-auto wallet-content"
        :max-height="!isDevice ? 500 : 379"
        style="box-shadow: none"
        v-else
      >
        <v-col cols="12" style="padding-top: 0px">
          <v-card> Cooming soon</v-card>
        </v-col>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    scrollInvoked: 0,
    itemss: [
      {
        // color: "rgb(237 243 253)",
        // src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Bạn đã giới thiệu thành công",
        artist: "Bạn đã giới thiệu thành công",
        money: 100000,
        dateIntro: "07/08/2022",
      },
      {
        // color: "rgb(233 251 255)",
        // src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Bạn đã giới thiệu thành công",
        artist: "Bạn đã giới thiệu thành công",
        money: 10000,
        dateIntro: "05/08/2022",
      },
      {
        // color: "rgb(237 243 253)",
        // src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Bạn đã giới thiệu thành công",
        artist: "Bạn đã giới thiệu thành công",
        money: 10000,
        dateIntro: "07/08/2022",
      },
      {
        // color: "rgb(233 251 255)",
        // src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Bạn đã giới thiệu thành công",
        artist: "Bạn đã giới thiệu thành công",
        money: 10000,
        dateIntro: "05/08/2022",
      },
      {
        // color: "rgb(237 243 253)",
        // src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Bạn đã giới thiệu thành công",
        artist: "Bạn đã giới thiệu thành công",
        money: 10000,
        dateIntro: "07/08/2022",
      },
      {
        // color: "rgb(237 243 253)",
        // src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Bạn đã giới thiệu thành công",
        artist: "Bạn đã giới thiệu thành công",
        money: 10000,
        dateIntro: "07/08/2022",
      },
      {
        // color: "rgb(237 243 253)",
        // src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Bạn đã giới thiệu thành công",
        artist: "Bạn đã giới thiệu thành công",
        money: 10000,
        dateIntro: "07/08/2022",
      },
      {
        // color: "rgb(237 243 253)",
        // src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Bạn đã giới thiệu thành công",
        artist: "Bạn đã giới thiệu thành công",
        money: 10000,
        dateIntro: "07/08/2022",
      },
    ],
    totab: true,
  }),
  props: {
    isDevice: Boolean,
  },
  methods: {
    onScroll() {
      this.scrollInvoked++;
    },
    withDrawMoney() {
      this.totab = !this.totab;
    },
  },
  computed: {
    sumMoney() {
      let sum = 0;
      for (let i = 0; i < this.itemss.length; i++) {
        sum += this.itemss[i].money;
      }
      return sum;
    },
  },
};
</script>

<style>
.container--fluid {
  padding: 0 !important;
}
</style>
<style scoped>
.services {
  padding-top: 21px;
}
.container {
  max-width: 60%;
}
.wallet-card {
  background: white;
}
.container-wallet {
  width: 100%;
  z-index: 100;
}
.wallet-header {
  font-size: 16px;
  font-weight: bold;
  height: 70px;
  margin-top: 18px;
}
.wallet-content {
  background: none;
  z-index: 2;
}
.wallet-content::-webkit-scrollbar {
  width: 3px;
}

.wallet-content::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(208 199 254);
}

.wallet-content::-webkit-scrollbar-thumb {
  background: rgb(99 134 230);
}

.waller-billing {
  padding: 12px;
  border-radius: 15px;
  border-top-right-radius: 0;
  margin: 0 12px;
}

.billing-container {
  display: flex;
  flex-direction: column;
}
.billding-items {
  display: flex;
  justify-content: flex-start;
  font-size: 21px;
}
.wallet-Detail {
  display: flex;
  justify-content: space-between;
}
.wallet-text {
  display: flex;
}
.v-card-subtitle-wallet {
  padding: 0 10px 16px;
  font-weight: bold;
}
.text-title {
  font-size: 14px;
  color: rgb(76, 175, 80);
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
@media screen and (max-width: 768px) {
  .services {
    padding-top: 0;
  }
  .container {
    max-width: 100%;
  }
  .text-title {
    font-size: 13px;
  }
  .text-subtitle {
    font-size: 13px;
  }
  .v-card__subtitle,
  .v-card__text,
  .v-card__title {
    padding: 9px;
  }
  .card-title-mobile {
    font-size: 1rem;
    margin-bottom: 5px;
  }
  .v-card-subtitle-wallet {
    padding: 5px 4px 0px;
    font-size: 1px !important;
  }
  .height-title {
    height: 82px;
  }
  .wallet-content {
    padding: 0;
  }
  .container-wallet {
    padding: 0;
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
