<template>
  <div class="main">
    <section class="signup">
      <div class="container">
        <div class="signup-content">
          <div class="signup-form">
            <h2 class="form-title">Đăng ký</h2>
            <div class="register-form" id="register-form">
              <div class="form-group">
                <label for="name"><i class="fas fa-user-edit"></i></label>
                <input
                  v-model="name"
                  type="text"
                  name="name"
                  id="name"
                  @focus="checkError"
                  :class="isError ? 'input-error error-border-bottom ' : ''"
                  :placeholder="!isError ? 'Họ và tên' : errorName"
                />
              </div>
              <div class="form-group">
                <label for="phone"><i class="fas fa-phone"></i></label>
                <input
                  v-model="phone"
                  type="phone"
                  name="phone"
                  id="phone"
                  @focus="checkError"
                  @keypress="IsNumber"
                  :class="isError ? 'input-error' : ''"
                  :placeholder="!isError ? 'Số điện thoại' : errorPhone"
                  maxlength="15"
                />
              </div>
              <div class="form-group">
                <label for="email"><i class="fa fa-envelope"></i></label>
                <input
                  v-model="email"
                  type="emails"
                  name="email"
                  id="email"
                  @focus="checkError"
                  :class="isError ? 'input-error' : ''"
                  :placeholder="!isError ? 'Email' : errorEmail"
                />
              </div>
              <div class="form-group">
                <label for="address"
                  ><i class="fas fa-map-marker-alt"></i
                ></label>
                <input
                  v-model="address"
                  type="address"
                  name="address"
                  id="address"
                  @focus="checkError"
                  :class="isError ? 'input-error' : ''"
                  :placeholder="!isError ? 'Địa chỉ' : errorAddress"
                />
              </div>
              <div class="form-group">
                <label for="pass"><i class="fa fa-lock"></i></label>
                <input
                  v-model="password"
                  type="password"
                  name="pass"
                  id="pass"
                  @focus="checkError"
                  :class="isError ? 'input-error' : ''"
                  :placeholder="!isError ? 'Mật khẩu' : errorPassword"
                />
              </div>
              <div class="form-group">
                <label for="re-pass"><i class="fa fa-lock"></i></label>
                <input
                  v-model="re_password"
                  type="password"
                  name="re_pass"
                  id="re_pass"
                  @focus="checkError"
                  :class="isError ? 'input-error' : ''"
                  :placeholder="
                    !isError ? 'Nhập lại mật khẩu' : errorRe_Password
                  "
                />
              </div>
              <v-checkbox
                v-model="isRole"
                label="Bạn là người cho thuê"
                color="indigo"
                value="rent"
                hide-details
                @click="checkError"
                :class="errorIsRole ? 'checkbox' : ''"
              ></v-checkbox>
              <v-checkbox
                v-model="isRole"
                label="Bạn là người giới thiệu"
                color="indigo"
                value="sale"
                hide-details
                @click="checkError"
                :class="errorIsRole ? 'checkbox' : ''"
              ></v-checkbox>
              <div class="form-group form-button">
                <button class="form-submit" @click="checkInfor">Đăng ký</button>
              </div>
            </div>
          </div>
          <div class="signup-image">
            <figure>
              <img src="@/assets/images/signup-image.jpg" alt="sing up image" />
            </figure>
            <h4 class="signup-image-link">Bạn đã sẵn sàng là thành viên</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="sign-in">
      <div class="container">
        <div class="signin-content">
          <div class="signin-image">
            <figure>
              <img src="images/signin-image.jpg" alt="sing up image" />
            </figure>
            <a href="#" class="signup-image-link">Create an account</a>
          </div>

          <div class="signin-form">
            <h2 class="form-title">Sign up</h2>
            <form method="POST" class="register-form" id="login-form">
              <div class="form-group">
                <label for="your_name"
                  ><i class="zmdi zmdi-account material-icons-name"></i
                ></label>
                <input
                  type="text"
                  name="your_name"
                  id="your_name"
                  placeholder="Your Name"
                />
              </div>
              <div class="form-group">
                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                <input
                  type="password"
                  name="your_pass"
                  id="your_pass"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  class="agree-term"
                />
                <label for="remember-me" class="label-agree-term"
                  ><span><span></span></span>Remember me</label
                >
              </div>
              <div class="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  class="form-submit"
                  value="Log in"
                />
              </div>
            </form>
            <div class="social-login">
              <span class="social-label">Or login with</span>
              <ul class="socials">
                <li>
                  <a href="#"
                    ><i class="display-flex-center zmdi zmdi-facebook"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="display-flex-center zmdi zmdi-twitter"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="display-flex-center zmdi zmdi-google"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <v-dialog v-model="dialog" width="auto" persistent>
      <!-- <v-card > -->
      <SignUpSuccess />
      <!-- </v-card> -->
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      right
      :color="colorSnackbar"
    >
      {{ textSnackbar }}
    </v-snackbar>
  </div>
</template>

<script>
import UserApi from "@/api/userApi.js";
import SignUpSuccess from "../components/SignUpSuccess.vue";
export default {
  components: { SignUpSuccess },
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      address: "",
      password: "",
      re_password: "",
      errorName: "",
      errorPhone: "",
      errorEmail: "",
      errorAddress: "",
      errorPassword: "",
      errorRe_Password: "",
      isRole: "",
      errorIsRole: false,
      isError: false,
      snackbar: false,
      textSnackbar: "",
      timeout: 10000,
      colorSnackbar: "",
      dialog: false,
    };
  },
  created() {},
  provide() {
    return {
      closeDialogSignIn: this.closeDialog,
    };
  },
  methods: {
    isEmpty(str) {
      return str.replace(/^\s+|\s+$/g, "");
    },
    async checkInfor() {
      this.isError = true;
      this.errorIsRole = true;

      if (this.isEmpty(this.name) == "") {
        this.errorName = "Vui lòng nhập họ và tên";
        this.name = "";
      }

      if (
        !this.regexPhoneNumber(this.phone) ||
        this.isEmpty(this.phone) == ""
      ) {
        this.errorPhone =
          this.isEmpty(this.phone) != ""
            ? "Số điện thoại không chính xác !"
            : "Vui lòng nhập số điện thoại";
        this.phone = "";
      }

      if (!this.isEmailValid(this.email) || this.isEmpty(this.email) == "") {
        this.errorEmail =
          this.isEmpty(this.email) != ""
            ? "Email không đúng, vui lòng nhập lại"
            : "Vui lòng nhập email";
        this.email = "";
      }

      if (this.isEmpty(this.address) == "") {
        this.errorAddress = "Vui lòng nhập địa chỉ";
        this.address = "";
      }

      if (this.isEmpty(this.password) == "") {
        this.errorPassword = "Vui lòng nhập mật khẩu";
        this.password = "";
      }

      if (this.isEmpty(this.re_password) == "") {
        this.errorRe_Password = "Vui lòng nhập lại mật khẩu";
        this.re_password = "";
      }

      if (this.isRole == "rent" || this.isRole == "sale") {
        this.errorIsRole = false;
      }

      if (
        this.isEmpty(this.name) != "" &&
        this.regexPhoneNumber(this.phone) &&
        this.isEmailValid(this.email) &&
        this.isEmpty(this.address) != "" &&
        this.isEmpty(this.password) != "" &&
        this.isEmpty(this.re_password) != ""
      ) {
        if (this.isRole == "rent" || this.isRole == "sale") {
          if (this.password == this.re_password) {
            this.saveUsers();
          } else {
            this.snackbar = true;
            this.textSnackbar = "Mật khẩu bạn nhập không trùng khớp !";
            this.colorSnackbar = "rgb(253 146 156)";
          }
        } else {
          this.snackbar = true;
          this.textSnackbar =
            "Vui lòng chọn, bạn là người cho thuê hay người giới thiệu !";
          this.colorSnackbar = "rgb(253 146 156)";
        }
      } else {
        this.snackbar = true;
        this.textSnackbar = "Vui lòng nhập thông tin đăng ký ! ";
        this.colorSnackbar = "rgb(253 146 156)";
      }
    },
    async saveUsers() {
      const data = await UserApi.signup([
        {
          fullName: this.name,
          phone: this.phone,
          email: this.email,
          address: this.address,
          isRole: this.isRole,
          passWord: this.re_password,
        },
      ]);

      if (data.token) {
        this.name = "";
        this.phone = "";
        this.email = "";
        this.address = "";
        this.password = "";
        this.re_password = "";
        this.isRole = "";
        this.openDialog();
      } else {
        this.snackbar = true;
        this.textSnackbar = data.message;
        this.colorSnackbar = data.token ? "rgb(52 153 15)" : "rgb(255 180 30)";
      }
    },
    checkError() {
      this.isError = false;
      this.errorIsRole = false;
    },
    isEmailValid(email) {
      const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return reg.test(email);
    },
    regexPhoneNumber(str) {
      const regexPhoneNumber = /^((\+)33|0)[1-9](\d{2}){4}$/;
      if (str.match(regexPhoneNumber)) {
        return true;
      } else {
        return false;
      }
    },
    IsNumber(event) {
      if (!/\d/.test(event.key) && event.key !== ".")
        return event.preventDefault();
    },
    openDialog() {
      this.checkError()
      this.dialog = true;
      this.myMenu();
    },
    closeDialog() {
      this.dialog = false;
    },
    myMenu() {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
        this.checkMenu = true;
      } else {
        x.style.display = "block";
        this.checkMenu = false;
      }
    },
  },
};
</script>

<style>
i.v-icon.notranslate.mdi.mdi-checkbox-blank-outline.theme--light {
  font-size: 21px !important;
}
.checkbox i.v-icon.notranslate.mdi.mdi-checkbox-blank-outline.theme--light {
  font-size: 21px !important;
  color: red;
}
.v-label {
  font-size: 14px !important;
  color: rgb(119 131 197) !important;
}
.v-dialog:not(.v-dialog--fullscreen) {
  border-radius: 15px;
}
</style>

<style scoped>
.input-error::placeholder {
  color: red !important;
  border: none;
  box-sizing: border-box;
}

input .error-border-bottom {
  width: 100%;
  display: block;
  border: none;
  border-bottom: 1px solid red !important;
}

display-flex,
.display-flex,
.display-flex-center,
.signup-content,
.signin-content,
.social-login,
.socials {
  display: flex;
  display: -webkit-flex;
}

/* @extend list-type-ulli; */
list-type-ulli,
.socials {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none !important;
  -moz-appearance: none !important;
  -webkit-appearance: none !important;
  -o-appearance: none !important;
  -ms-appearance: none !important;
  margin: 0;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  box-shadow: none !important;
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  -o-box-shadow: none !important;
  -ms-box-shadow: none !important;
}

input[type="checkbox"] {
  appearance: checkbox !important;
  -moz-appearance: checkbox !important;
  -webkit-appearance: checkbox !important;
  -o-appearance: checkbox !important;
  -ms-appearance: checkbox !important;
}

input[type="radio"] {
  appearance: radio !important;
  -moz-appearance: radio !important;
  -webkit-appearance: radio !important;
  -o-appearance: radio !important;
  -ms-appearance: radio !important;
}

img {
  max-width: 100%;
  height: auto;
}

figure {
  margin: 0;
}

p {
  margin-bottom: 0px;
  font-size: 15px;
  color: #777;
}

h2 {
  line-height: 1.66;
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #222;
  font-size: 36px;
}

.main {
  /* background: #f8f8f8;
  padding: 150px 0; */
  z-index: 2;
}

.clear {
  clear: both;
}

body {
  font-size: 13px;
  line-height: 1.8;
  color: #222;
  background: #f8f8f8;
  font-weight: 400;
}

.container {
  width: 1000px;
  background: #fff;
  margin: 0 auto;
  box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -o-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -ms-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  -o-border-radius: 20px;
  -ms-border-radius: 20px;
}

.display-flex {
  justify-content: space-between;
  -moz-justify-content: space-between;
  -webkit-justify-content: space-between;
  -o-justify-content: space-between;
  -ms-justify-content: space-between;
  align-items: center;
  -moz-align-items: center;
  -webkit-align-items: center;
  -o-align-items: center;
  -ms-align-items: center;
}

.display-flex-center {
  justify-content: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -o-justify-content: center;
  -ms-justify-content: center;
  align-items: center;
  -moz-align-items: center;
  -webkit-align-items: center;
  -o-align-items: center;
  -ms-align-items: center;
}

.position-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.signup {
  margin-bottom: 150px;
}

.signup-content {
  padding: 39px 0;
}

.signup-form,
.signup-image,
.signin-form,
.signin-image {
  width: 50%;
  overflow: hidden;
}

.signup-image {
  margin: 0 55px;
}

.form-title {
  margin-bottom: 33px;
}

.signup-image {
  margin-top: 45px;
}

figure {
  margin-bottom: 50px;
  text-align: center;
}

.form-submit {
  display: inline-block;
  background: #6dabe4;
  color: #fff;
  border-bottom: none;
  width: auto;
  padding: 15px 39px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  margin-top: 25px;
  cursor: pointer;
}
.form-submit:hover {
  background: #4292dc;
}

#signin {
  margin-top: 16px;
}

.signup-image-link {
  font-size: 18px;
  font-style: normal;
  color: #4b8ef1;
  display: block;
  text-align: center;
}

.term-service {
  font-size: 13px;
  color: #222;
}

.signup-form {
  margin-left: 75px;
  margin-right: 75px;
  padding-left: 34px;
}

.register-form {
  width: 100%;
}

.form-group {
  position: relative;
  margin-bottom: 25px;
  overflow: hidden;
}
.form-group:last-child {
  margin-bottom: 0px;
}

input {
  width: 100%;
  display: block;
  border: none;
  border-bottom: 1px solid #999;
  padding: 6px 30px;
  box-sizing: border-box;
}
input::-webkit-input-placeholder {
  color: #999;
}
input::-moz-placeholder {
  color: #999;
}
input:-ms-input-placeholder {
  color: #999;
}
input:-moz-placeholder {
  color: #999;
}
input:focus {
  border-bottom: 1px solid #222;
}
input:focus::-webkit-input-placeholder {
  color: #222;
}
input:focus::-moz-placeholder {
  color: #222;
}
input:focus:-ms-input-placeholder {
  color: #222;
}
input:focus:-moz-placeholder {
  color: #222;
}

input[type="checkbox"]:not(old) {
  width: 2em;
  margin: 0;
  padding: 0;
  font-size: 1em;
  display: none;
}

input[type="checkbox"]:not(old) + label {
  display: inline-block;
  line-height: 1.5em;
  margin-top: 6px;
}

input[type="checkbox"]:not(old) + label > span {
  display: inline-block;
  width: 13px;
  height: 13px;
  margin-right: 15px;
  margin-bottom: 3px;
  border: 1px solid #999;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  -o-border-radius: 2px;
  -ms-border-radius: 2px;
  background: white;
  background-image: -moz-linear-gradient(white, white);
  background-image: -ms-linear-gradient(white, white);
  background-image: -o-linear-gradient(white, white);
  background-image: -webkit-linear-gradient(white, white);
  background-image: linear-gradient(white, white);
  vertical-align: bottom;
}

input[type="checkbox"]:not(old):checked + label > span {
  background-image: -moz-linear-gradient(white, white);
  background-image: -ms-linear-gradient(white, white);
  background-image: -o-linear-gradient(white, white);
  background-image: -webkit-linear-gradient(white, white);
  background-image: linear-gradient(white, white);
}

input[type="checkbox"]:not(old):checked + label > span:before {
  content: "\f26b";
  display: block;
  color: #222;
  font-size: 11px;
  line-height: 1.2;
  text-align: center;
  font-weight: bold;
}

.agree-term {
  display: inline-block;
  width: auto;
}

label {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  color: #222;
}

.label-has-error {
  top: 22%;
}

label.error {
  position: relative;
  /* background: url("../images/unchecked.gif") no-repeat; */
  background-position-y: 3px;
  padding-left: 20px;
  display: block;
  margin-top: 20px;
}

label.valid {
  display: block;
  position: absolute;
  right: 0;
  left: auto;
  margin-top: -6px;
  width: 20px;
  height: 20px;
  background: transparent;
}
label.valid:after {
  content: "\f269";
  width: 100%;
  height: 100%;
  position: absolute;
  /* right: 0; */
  font-size: 16px;
  color: green;
}

.label-agree-term {
  position: relative;
  top: 0%;
  transform: translateY(0);
  -moz-transform: translateY(0);
  -webkit-transform: translateY(0);
  -o-transform: translateY(0);
  -ms-transform: translateY(0);
}

.material-icons-name {
  font-size: 18px;
}

.signin-content {
  padding-top: 67px;
  padding-bottom: 87px;
}

.social-login {
  align-items: center;
  -moz-align-items: center;
  -webkit-align-items: center;
  -o-align-items: center;
  -ms-align-items: center;
  margin-top: 80px;
}

.social-label {
  display: inline-block;
  margin-right: 15px;
}

.socials li {
  padding: 5px;
}
.socials li:last-child {
  margin-right: 0px;
}
.socials li a {
  text-decoration: none;
}
.socials li a i {
  width: 30px;
  height: 30px;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  transform: translateZ(0);
  -moz-transform: translateZ(0);
  -webkit-transform: translateZ(0);
  -o-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.socials li:hover a i {
  -webkit-transform: scale(1.3) translateZ(0);
  transform: scale(1.3) translateZ(0);
}

.zmdi-facebook {
  background: #3b5998;
}

.zmdi-twitter {
  background: #1da0f2;
}

.zmdi-google {
  background: #e72734;
}

.signin-form {
  margin-right: 90px;
  margin-left: 80px;
}

.signin-image {
  margin-left: 110px;
  margin-right: 20px;
  margin-top: 10px;
}

@media screen and (max-width: 1200px) {
  .container {
    width: calc(100%);
    max-width: 100%;
  }
}
@media screen and (min-width: 1024px) {
  .container {
    max-width: 1200px;
  }
}
@media screen and (max-width: 768px) {
  .signup-content,
  .signin-content {
    flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -o-flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    -o-justify-content: center;
    -ms-justify-content: center;
  }

  .signup-form {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 0px;
    /* box-sizing: border-box; */
    padding: 0 30px;
  }

  .signin-image {
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 50px;
    order: 2;
    -moz-order: 2;
    -webkit-order: 2;
    -o-order: 2;
    -ms-order: 2;
  }

  .signup-form,
  .signup-image,
  .signin-form,
  .signin-image {
    width: auto;
  }

  .social-login {
    justify-content: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    -o-justify-content: center;
    -ms-justify-content: center;
  }

  .form-button {
    text-align: center;
  }

  .signin-form {
    order: 1;
    -moz-order: 1;
    -webkit-order: 1;
    -o-order: 1;
    -ms-order: 1;
    margin-right: 0px;
    margin-left: 0px;
    padding: 0 30px;
  }

  .form-title {
    text-align: center;
  }
}
@media screen and (max-width: 400px) {
  .social-login {
    flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -o-flex-direction: column;
    -ms-flex-direction: column;
  }

  .social-label {
    margin-right: 0px;
    margin-bottom: 10px;
  }
}

/*# sourceMappingURL=style.css.map */
</style>
