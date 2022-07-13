<template>
  <div>
    <body>
      <div class="card">
        <div
          style="
            border-radius: 200px;
            height: 200px;
            width: 200px;
            background: #f8faf5;
            margin: 0 auto;
          "
        >
          <i class="checkmark">✓</i>
        </div>
        <h1>Thành Công</h1>
        <p>Bạn có thể đăng nhập ngay bây giờ !</p>
        <button class="gradient-button">
          Đăng Nhập<i class="fas fa-sign-in-alt size-icon"></i>
        </button>
      </div>
    </body>
  </div>
</template>
<script>
export default {
  data() {
    return {
      address: "",
      error: "",
      spinner: false,
    };
  },
};
</script>

<style scoped>
.gradient-button {
  color: rgb(255 255 255);
  font-size: 17px;
  background: rgb(16, 165, 228);
  background: linear-gradient(105deg, rgb(91 104 235) 0%, rgb(40 225 253) 100%);
  border-radius: 23px;
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: all 0.5s;
  width: 155px;
  height: 45px;
  margin-top: 21px;
}
.gradient-button i {
  line-height: 0;
  margin-left: 5px;
  color: #ffffff;
  font-size: 17px;
}
body {
  text-align: center;
  background: #ebf0f5;
}
h1 {
  color: #1da0f2;
  font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 10px;
}
p {
  color: #1da0f2;
  font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  margin: 0;
}
i {
  color: #1da0f2;
  font-size: 100px;
  line-height: 200px;
  margin-left: -15px;
}
.card {
  background: white;
  padding: 32px 68px;
  border-radius: 4px;
  box-shadow: 0 2px 3px #c8d0d8;
  display: inline-block;
  margin: 0 auto;
}
</style>
