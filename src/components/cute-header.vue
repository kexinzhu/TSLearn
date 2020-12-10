<template>
  <el-header class="header" height="60px" id="header">
    <el-menu
      class="menu el-menu-demo"
      mode="horizontal"
      :default-active="active"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#66b1ff"
    >
      <div class="systemName">宠乐牌后台管理系统</div>
      <template v-for="(value, key1, index) in menu">
        <el-submenu :index="index + ''" v-if="value.second_level" :key="index">
          <template slot="title">
            <router-link :to="value.link">
              {{ value.name }}
            </router-link>
          </template>
          <template v-for="(value2, index2) in value.second_level">
            <el-menu-item :index="index + '-' + index2" :key="index2">
              <router-link :to="value2.link">
                <div>
                  {{ value2.name }}
                </div>
              </router-link>
            </el-menu-item>
          </template>
        </el-submenu>

        <el-menu-item :index="index + ''" v-else :key="index">
          <router-link :to="value.link">
            {{ value.name }}
          </router-link>
        </el-menu-item>
      </template>

      <!--<el-button type="text" class="back" @click="changeDialog = true">修改密码</el-button>-->
      <div class="header-right">
        <div class="orderNumber">
          <div>售后待审核：{{ countList.postSaleWwaitCheckCount }} 单&nbsp;&nbsp;&nbsp;&nbsp;待发货：{{ countList.waitSendCount }} 单</div>
          <div></div>
          <div>剩余面单：{{ countList.quotaNum }} 单&nbsp;&nbsp;&nbsp;&nbsp;团购待审核：{{ countList.groupBuyWaitCheckCount}} 单</div>
          <div></div>
        </div>
        <!--<div class="orderNumber">-->
        <!--<div>-->
        <!--可发货面单：{{countList.quotaNum}} 单-->
        <!--</div>-->

        <!--</div>-->

        <el-popover placement="bottom" trigger="hover">
          <el-button type="primary" class="back" @click="logOut"
            >注销</el-button
          >
          <el-popover placement="right" width="200" trigger="click">
            <el-form>
              <el-form-item label="新密码">
                <el-input v-model="userData.passwd"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="updatePasswd()"
                  >确 定</el-button
                >
              </el-form-item>
            </el-form>

            <el-button type="primary" slot="reference">修改密码</el-button>
          </el-popover>
          <div class="lastLoginTime">
            上次登录时间：<br />{{ userInfo.lastLoginTime }}
          </div>

          <div class="userName" slot="reference" type="text">
            {{ userInfo.userName }}
          </div>
        </el-popover>
      </div>
    </el-menu>
  </el-header>
</template>

<script>
import api from "@/api";

export default {
  name: "cute-header",
  data() {
    return {
      menu: null,
      active: "2-0",
      timer: null,
      countList: [],
      changeDialog: false,
      userData: {},
      userInfo: {},
    };
  },
  created() {
    this.token = localStorage.getItem("token");
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.menu = api.getMenu();
    // this.getOrderTip();
    // this.timer = setInterval(this.getOrderTip, 60000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    logOut() {
      this.$router.push({ path: "/" });
    },
    // getOrderTip() {
    //   this.$ajax({
    //     url: this.source.order_controller.getOrderTip,
    //     method: "post",
    //     data: { token: this.token },
    //   }).then((res) => {
    //     this.countList = res.data;
    //     localStorage.setItem("jdBalance", res.data.jdBalance);
    //   });
    // },
    // updatePasswd() {
    //   this.userData.token = this.token;
    //   this.$ajax({
    //     url: this.source.sys_controller.updatePasswd,
    //     method: "post",
    //     data: this.userData,
    //   }).then((res) => {
    //     if (res.code === 10000) {
    //       this.$message.success("修改成功！请重新登录。");
    //       this.logOut();
    //     } else {
    //       this.$message.error(res.msg);
    //     }
    //   });
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  z-index: 8;
  box-shadow: 0px 0 20px #000000;

  .systemName {
    width: 300px;
    display: block;
    float: left;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    color: white;
  }

  .orderNumber {
    display: inline-block;
    color: #ffe404;
    margin-top: 2px;
    font-size: 12px;
    line-height: 18px;
  }

  .back {
    display: inline-block;
    float: right;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    width: 80px;
  }

  .header-right {
    float: right;
    display: flex;
  }

  .userName {
    line-height: 60px;
    color: #3a8ee6;
    padding: 0 20px;
  }
}

.lastLoginTime {
  font-size: 12px !important;
  text-align: center;
  color: #666666;
  padding-top: 10px;
}
</style>
