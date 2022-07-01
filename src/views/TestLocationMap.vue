<template>
  <div class="set-body">
    <div class="set-header">
      <!-- <img src="https://i.postimg.cc/xT82v0Tz/logo-poker.png" aria-hidden="true" class="img-size"
            alt="img not workning" /> -->
      <h3 style="color: #ffffff">Location address</h3>
    </div>

    <div>
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
  }),
  created() {
    this.inforIP(); 
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
