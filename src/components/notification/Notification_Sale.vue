<template>
  <div>
    <div id="rentandsale" :class="!isDevice ? 'services section' : 'section'">
      <div class="container scrollable-wallet-mobile">
        <v-card class="mx-auto bg" elevation="2">
          <div
            class="section-heading wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
            v-if="!isDevice"
          >
          <br/>
            <h4 class="infor-customer-mobile">
              <em>Thông Báo </em>
            </h4>
            <img src="@/assets/images/heading-line-dec.png" alt="" />
          </div>

          <v-list
            three-line
            v-scroll.self="onScroll"
            class="overflow-y-auto wallet-content"
            :max-height="!isDevice ? 600 : ''"
            style="box-shadow: none"
          >
            <template v-for="(item, index) in items">
              <v-subheader
                v-if="item.header"
                :key="item.header"
                v-text="item.header"
              ></v-subheader>

              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item v-else :key="item.title">
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
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
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to trys",
        subtitle:
          '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
  }),
  props: {
    isDevice: Boolean,
  },
  methods: {
    onScroll() {
      this.scrollInvoked++;
    },
  },
  computed: {},
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
  z-index: 2;
}
.wallet-card {
  background: white;
}
.container-wallet {
  width: 100%;
  z-index: 2;
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
  z-index: 2;
}

.wallet-content::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(208 199 254);
  z-index: 2;
}

.wallet-content::-webkit-scrollbar-thumb {
  background: rgb(99 134 230);
  z-index: 2;
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
  margin-top: 30px;
  margin-bottom: 30px;
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
    font-size: 1.25rem;
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
    z-index: 2;
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
