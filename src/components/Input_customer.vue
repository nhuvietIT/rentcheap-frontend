<template>
  <div>
    <div id="rentandsale" class="services section">
      <div class="container">
        <div class="row">
          <div class="infor-customer">
            <div
              class="section-heading wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <h4 class="infor-customer-mobile">
                <em>Danh sách khách hàng </em>
              </h4>
              <img src="@/assets/images/heading-line-dec.png" alt="" />
            </div>
            <v-data-table
              :headers="headers"
              :items="listCustomer"
              class="elevation-1" 
              disable-sort
            >
              <template v-slot:[`item.actions`]="{ item }">
                <v-icon color="red" @click="deleteItem(item)">
                  mdi-delete
                </v-icon>
              </template>
              <template v-slot:[`item.isApproved`]="{ item }">
                <v-chip
                  :text-color="getColor(item.isApproved)"
                  class="is-approved"
                >
                  {{ item.isApproved }}
                </v-chip>
              </template>
            </v-data-table>
          </div>
        </div>
      </div>
    </div>
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">Bạn có muốn xóa người này ?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm"
            >OK</v-btn
          >
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

export default {
  name: "information-rent",
  props: {
    dataCustomer: Array,
  },
  data: () => ({
    headers: [
      {
        text: "Tên khách hàng",
        align: "start",
        sortable: false,
        value: "nameCustomer",
      },
      { text: "Số điện thoại", value: "phoneCustomer" },
      { text: "Địa chỉ", value: "addressCustomer" },
      { text: "Phê duyệt", value: "isApproved" },
      { text: "Xóa KH", value: "actions", sortable: false },
    ],
    dialog: false,
    dialogDelete: false,
  }),
  async created() {},
  mounted() {},
  computed: {
    listCustomer() {
      const dataCustomer = this.dataCustomer.map(
        ({ nameCustomer, phoneCustomer, addressCustomer, isApproved }) => ({
          nameCustomer: nameCustomer,
          phoneCustomer: phoneCustomer,
          addressCustomer: addressCustomer,
          isApproved:
            isApproved === "waiting"
              ? "Đang chờ đợi"
              : "" || isApproved === "requesting"
              ? "Đang gửi yêu cầu"
              : "" || isApproved === "successful"
              ? "Bạn đã giới thiệu thành công"
              : "",
        })
      );
      return dataCustomer;
    },
  },
  methods: {
    getColor(isApproved) {
      if (isApproved == "Đang chờ đợi") return "red";
      if (isApproved == "Đang gửi yêu cầu") return "rgb(255 142 0)";
      if (isApproved == "Bạn đã giới thiệu thành công") return "rgb(76 175 80)";
    },
    deleteItem(item) {
      console.log("AAA", item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      console.log("BBB");
      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
    },
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

.is-approved {
  background: none !important;
  font-weight: 500;
}

.infor-customer {
  z-index: 2;
}
.services {
  padding-top: 121px !important;
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
@media screen and (max-width: 768px) {
  .services {
    padding-top: 39px !important;
  }
  .infor-customer-mobile {
    font-size: 26px;
  }
}
</style>
