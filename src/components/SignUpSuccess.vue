<template>
  <body>
    <div class="card">
      <div class="circle-background">
        <i class="checkmark">✓</i>
      </div>
      <h1>Thành Công</h1>
      <p>Bạn có thể đăng nhập ngay bây giờ !</p>
      <button class="gradient-button" @click="openSignIn">Đăng Nhập</button>
    </div>
  </body>
</template>
<script>
export default {
  inject: ["openDialog","closeDialogSignIn"],
  data() {
    return {
      address: "",
      error: "",
      spinner: false,
    };
  },
  methods:{
    openSignIn(){
      this.openDialog()
      this.closeDialogSignIn()
    }
  }
};
</script>

<style scoped>
.circle-background {
  border-radius: 150px;
  height: 150px;
  width: 150px;
  background: rgb(29 160 242);
  margin: 0 auto;
}
.gradient-button {
  color: rgb(255 255 255);
  background: rgb(16, 165, 228);
  background: linear-gradient(105deg, rgb(91 104 235) 0%, rgb(40 225 253) 100%);
  border-radius: 23px;
  letter-spacing: 0.3px;
  transition: all 0.5s;
  width: 155px;
  height: 45px;
  margin-top: 12px;
  font-size: 18px;
  font-weight: 400;
}

.gradient-button:hover {
  background: linear-gradient(105deg, rgb(96 111 255) 0%, rgb(99 234 255) 100%);
}

body {
  text-align: center;
  background: #ebf0f5;
}
h1 {
  color: #1da0f2;
  font-weight: 900;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
}
p {
  color: #1da0f2;
  font-size: 18px;
  margin: 0;
  font-weight: inherit;
}
i {
  color: rgb(255 255 255);
  font-size: 90px;
  line-height: 150px;
}
.card {
  background: white;
  padding: 32px 68px;
  border: none;
  box-shadow: 0 2px 3px #c8d0d8;
  display: inline-block;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .circle-background {
    border-radius: 90px;
    height: 90px;
    width: 90px;
    background: rgb(29 160 242);
    margin: 0 auto;
  }
  i {
    font-size: 52px;
    line-height: 90px;
  }
  h1 {
    font-size: 25px;
    margin-top: 10px;
  }
  p {
    font-size: 16px;
  }
  .card {
    padding: 17px 29px;
  }
  .gradient-button {
    font-size: 16px;
    width: 139px;
    height: 39px;
  }
}
</style>
