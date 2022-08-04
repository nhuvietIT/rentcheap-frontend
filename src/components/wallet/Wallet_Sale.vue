<template>
  <div>
    <div id="rentandsale" :class="!isDevice ? 'services section' : 'section'">
      <div class="container">
        <div class="row">
          <!-- <div class="infor-customer">
            <div
              class="section-heading wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
              v-if="!isDevice"
            >
              <h4 class="infor-customer-mobile">
                <em>Ví của bạn</em>
              </h4>
              <img src="@/assets/images/heading-line-dec.png" alt="" />
            </div>
          </div> -->

          <div class="container-wallet">
            <v-col cols="12">
              <v-card color="rgb(99 155 221)" dark>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="ml-0 mt-0">
                      Xin chào Việt !
                    </v-card-title>
                    <v-card-subtitle class="v-card-subtitle-wallet">
                      <v-icon size="25" color="cback"> mdi-currency-usd</v-icon>
                      <v-icon size="18" color="cback">
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
                    <v-card-actions>
                      <v-btn class="mt-6 mr-2" outlined rounded small>
                        Yêu cầu rút tiền
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
            max-height="600"
            style="box-shadow: none"
          >
            <v-col
              cols="12"
              style="padding: 5px 12px"
              v-for="(item, i) in itemss"
              :key="i"
            >
              <v-card :color="item.color">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                      class="text-h7"
                      v-text="item.title"
                      style="color: rgb(76, 175, 80)"
                    ></v-card-title>

                    <v-card-subtitle
                      ><span
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
        </div>
      </div>
    </div>
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
        money: 1000000,
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
    ],
    items: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
  }),
  methods: {
    onScroll() {
      this.scrollInvoked++;
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
  padding-top: 52px;
}
.container {
  max-width: 50%;
}
.wallet-card {
  background: white;
}
.container-wallet {
  width: 100%;
  z-index: 1;
}
.wallet-header {
  font-size: 16px;
  font-weight: bold;
  height: 70px;
  margin-top: 18px;
}
.wallet-content {
  background: white;
  border-top-right-radius: 30px;
}
/* .wallet-content {
  background: white;
  border-top-right-radius: 30px;
  float: left;
  height: 379px;
  overflow-y: scroll;
    white-space: nowrap;
}

.force-overflow {
  min-height: 450px;
} */
.waller-billing {
  padding: 12px;
  background-color: beige;
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
</style>
