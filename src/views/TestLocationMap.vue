<template>
  <div class="set-body">
    <div class="set-header">
      <!-- <img src="https://i.postimg.cc/xT82v0Tz/logo-poker.png" aria-hidden="true" class="img-size"
            alt="img not workning" /> -->
      <h3 style="color: #ffffff">Location address</h3>
    </div>

    <!-- <div>
      <table
        border-color="#2828da"
        cellpadding="0"
        cellspacing="0"
        class="set-table"
      >
        <tbody>
          <tr>
            <td
              border-size="1px"
              height="100"
              class="set-table-td"
              width="100%"
              border-style="dashed"
            >
              <div>
                <p class="title-size">Location Address Me</p>
              </div>
              <div class="set-img-center">
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      width="1060"
                      height="500"
                      id="gmap_canvas"
                      :src="
                        'https://maps.google.com/maps?q=' +
                        lat +
                        ',' +
                        lng +
                        '&t=k&z=13&ie=UTF8&iwloc=&output=embed'
                      "
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div style="color: black">
                <p class="set-text-welcome-poker" v-if="innerHTML === ''">
                  Please, click button address
                </p>

                <p class="set-text-welcome-poker" v-else>
                  {{ innerHTML }}
                </p>
              </div>
              <div
                style="text-align: center; margin-bottom: 39px"
                class="font-text"
              >
                <a class="set-button" @click="inforIP">Address</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->

    <!-- <div class="html">
      <body>
        <div class="container" id="item1">
          <h1>My Contend</h1>
          <p>
            But let's take a look at each property individually to see how to
            define them.
          </p>
        </div>
        <div class="container" id="item2">
          <h1>My Contend</h1>
          <p>
            But let's take a look at each property individually to see how to
            define them.
          </p>
        </div>
        <div class="container" id="item3">
          <h1>My Contend</h1>
          <p>
            But let's take a look at each property individually to see how to
            define them.
          </p>
        </div>
        <div class="container" id="item4">
          <h1>My Contend</h1>
          <p>
            But let's take a look at each property individually to see how to
            define them.
          </p>
        </div>
        <div class="container" id="item5">
          <h1>My Contend</h1>
          <p>
            But let's take a look at each property individually to see how to
            define them.
          </p>
        </div>
      </body>
    </div> -->
    <div class="container">
      <div class="table-game">Table Game</div>
      <div v-for="(item, index) in arrGame1" :key="index">
        <div class="item1">
          <div :class="'item1-' + index"></div>
          <!-- <div class="item1-2"></div>
          <div class="item1-3"></div>
          <div class="item1-4"></div>
          <div class="item1-5"></div> -->
        </div>
      </div>

      <div class="item2">
        <div class="item2-1"></div>
        <div class="item2-2"></div>
        <div class="item2-3"></div>
        <div class="item2-4"></div>
        <div class="item2-5"></div>
      </div>
      <div class="item3">
        <div class="item3-1"></div>
        <div class="item3-2"></div>
        <div class="item3-3"></div>
        <div class="item3-4"></div>
        <div class="item3-5"></div>
      </div>
      <!-- <div class="item4"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TestLocationMap",
  components: {},
  data: () => ({
    innerHTML: "",
    lat: "",
    lng: "",
    arrGame1: [],
    arrGame2: [],
    arrGame3: [],
  }),
  created() {
    this.inforIP();
    let member = 15;
    for (let i = 0; i < member; i++) {
      if (i <= 5) {
        this.arrGame1.push({ member: i });
      }
      if (i <= 10 && i > 5) {
        this.arrGame2.push({ member: i });
      }
      if (i <= 15 && i > 10) {
        this.arrGame3.push({ member: i });
      }
    }
    console.log("ARR", this.arrGame1, this.arrGame2, this.arrGame3);
  },
  methods: {
    inforIP() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.innerHTML = "Geolocation is not supported by this browser.";
      }
    },
    async showPosition(position) {
      const request = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=3478f57344614ee2b8b2349348cdb591`
      );
      const json = await request.json();
      console.log(
        "location",
        json.results[0].geometry.lat,
        json.results[0].geometry.lng,
        position.coords.latitude,
        position.coords.longitude
      );
      this.innerHTML = json.results[0].formatted;
      this.lat = json.results[0].geometry.lat;
      this.lng = json.results[0].geometry.lng;
    },
  },
};
</script>

<style>
iframe {
  width: 92%;
  height: 100%;
}
.mapouter {
  position: relative;
  text-align: center;
  height: 500px;
  width: 1060px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 1060px;
}
.v-application--wrap {
  min-height: 0 !important;
}
.set-header {
  padding: 7px 15px 7px 25px;
  background-color: transparent;
  box-shadow: none;
}

.img-size {
  display: block;
  width: 152px;
}

.title-size {
  font-weight: bold;
  line-height: 19pt;
  text-align: center;
  font-size: 29px;
  line-height: 21pt;
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  margin-top: 9px;
}

.set-img-center {
  text-align: center;
  width: 100%;
  margin-bottom: 21px;
}

.img-banner {
  width: 90%;
  margin-right: 10px;
  padding: 0px;
}

.font-text {
  font-family: Arial, Helvetica, sans-serif;
}

.set-text-welcome-poker {
  line-height: 19pt;
  text-align: center;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

.set-text-verify {
  line-height: 19pt;
  text-align: center;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  color: #000;
}

.set-button {
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  width: 200px;
  display: block;
  margin: auto;
  background-color: #60a7dd;
  color: #ffffff !important;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  padding: 10px 0px;
  cursor: pointer;
}

.set-button:hover {
  background: #488fc6;
}

.set-table {
  font-size: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.set-body {
  width: 80%;
  margin: auto;
}

.set-table-td {
  border-bottom: 1px dashed #60a7dd;
  border-left: 1px dashed #60a7dd;
  border-right: 1px dashed #60a7dd;
  border-top: none #60a7dd;
}

.set-header {
  background-color: #60a7dd;
}

@media only screen and (max-width: 768px) {
  .set-header {
    padding: 7px 15px 7px;
  }

  .img-size {
    width: 139px;
  }

  .img-banner {
    width: 100%;
  }

  .title-size {
    font-size: 21px;
  }

  .set-table {
    width: 100%;
  }

  .set-body {
    width: 100%;
  }
}
</style>
<style lang="scss" scoped>
.circle {
  display: grid;
  grid-template-areas: "layer";
  place-items: center;
  // background: #185adb;
  border-radius: 50%;
  --radius: 25vmin;
  width: calc(2 * var(--radius));
  height: calc(2 * var(--radius));
}

.stat {
  grid-area: layer;
  width: 10vmin;
  height: 10vmin;
  border-radius: 50%;

  display: grid;
  place-items: center;

  background: #ffc947;
  // color: #185adb;
  font-weight: bold;
  font-size: 3vmin;

  // Decimal value, 0-1 based on the child's index.
  --d: calc(var(--i) / var(--total));
  // Offset to get better starting placement on the circle
  --r-offset: -0.25turn;
  // Full circle
  --r-amount: 1turn;
  // Rotation based on the decimal and r modifiers
  --r: calc((var(--r-amount) * var(--d)) + var(--r-offset));
  // Rotate, transform out, then negative rotation so the content appears upright
  --transform: rotate(var(--r)) translate(var(--radius))
    rotate(calc(-1 * var(--r)));

  transform: var(--transform);
  transition: transform 1.5s ease-in-out;
  //transition-delay: calc(0.1s * var(--i));

  // .circle:hover & {
  //   --radius: calc(-20vmin);
  //   // Animate the rotation
  //   --r-offset: -1.75turn; //0.75turn;
  // }
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-auto-flow: row;
  grid-template-areas:
    ". item1 ."
    "item4 table-game item2"
    ". item3 .";
  width: 100%;
  height: 100%;
  background: rgb(207, 240, 197);
  padding: 0;
  margin: 0;
}

.table-game {
  align-self: center;
  grid-area: table-game;
  width: 100%;
  height: 200px;
  background: rgb(84, 161, 81);
  text-align: center;
  padding: 79px;
  color: #ffff;
  font-weight: 500;
}

.item1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas: "item1-1 item1-2 item1-3 item1- item1-5";
  justify-self: center;
  align-self: center;
  grid-area: item1;
  width: 100%;
  height: 70%;
  // background: rgb(135, 233, 237);
}

.item1-1 {
  justify-self: center;
  align-self: center;
  grid-area: item1-1;
  width: 90%;
  height: 150px;
  background: rgb(223, 122, 82);
}
.item1-2 {
  justify-self: center;
  align-self: center;
  grid-area: item1-2;
  width: 90%;
  height: 150px;
  background: rgb(223, 122, 82);
}
.item1-3 {
  justify-self: center;
  align-self: center;
  grid-area: item1-3;
  width: 90%;
  height: 150px;
  background: rgb(223, 122, 82);
}
.item1-4 {
  justify-self: center;
  align-self: center;
  grid-area: item1-4;
  width: 90%;
  height: 150px;
  background: rgb(223, 122, 82);
}
.item1-5 {
  justify-self: center;
  align-self: center;
  grid-area: item1-5;
  width: 90%;
  height: 150px;
  background: rgb(223, 122, 82);
}

.item2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas: "item2-4 item2-2 item2-1 item2-3 item2-5";
  justify-self: center;
  align-self: center;
  grid-area: item2;
  width: 100%;
  height: 70%;
  // background: rgb(135, 233, 237);
}
.item2-1 {
  justify-self: center;
  align-self: center;
  grid-area: item2-1;
  width: 90%;
  height: 150px;
  background: rgb(223, 122, 82);
}
.item2-2 {
  justify-self: center;
  align-self: center;
  grid-area: item2-2;
  width: 90%;
  height: 150px;
  background: rgb(223, 122, 82);
}
.item2-3 {
  justify-self: center;
  align-self: center;
  grid-area: item2-3;
  width: 90%;
  height: 150px;
  background: rgb(223, 122, 82);
}
.item2-4 {
  justify-self: center;
  align-self: center;
  grid-area: item2-4;
  width: 90%;
  height: 150px;
  background: rgb(223, 122, 82);
}
.item2-5 {
  justify-self: center;
  align-self: center;
  grid-area: item2-5;
  width: 90%;
  height: 150px;
  background: rgb(223, 122, 82);
}
.item3 {
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas: "item3-4 item3-2 item3-1 item3-3 item3-5";
  justify-self: center;
  align-self: center;
  grid-area: item3;
  width: 100%;
  height: 70%;
  // background: rgb(135, 233, 237);
}
.item3-1 {
  justify-self: center;
  align-self: center;
  grid-area: item3-1;
  width: 90%;
  height: 150px;
  background: rgb(223, 122, 82);
}
.item3-2 {
  justify-self: center;
  align-self: center;
  grid-area: item3-2;
  width: 90%;
  height: 150px;
  background: rgb(223, 122, 82);
}
.item3-3 {
  justify-self: center;
  align-self: center;
  grid-area: item3-3;
  width: 90%;
  height: 150px;
  background: rgb(223, 122, 82);
}
.item3-4 {
  justify-self: center;
  align-self: center;
  grid-area: item3-4;
  width: 90%;
  height: 150px;
  background: rgb(223, 122, 82);
}
.item3-5 {
  justify-self: center;
  align-self: center;
  grid-area: item3-5;
  width: 90%;
  height: 150px;
  background: rgb(223, 122, 82);
}

.item4 {
  justify-self: center;
  align-self: center;
  grid-area: item4;
  width: 100%;
  height: 100%;
  background: rgb(135, 233, 237);
}
</style>
