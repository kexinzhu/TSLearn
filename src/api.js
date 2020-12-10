// import axios from 'axios'
// import qs from 'qs'

//项目目录配置
//管理员目录
const menu = {
  // index: {
  //   name: "首页",
  //   link: "/index"
  // },

  goods: {
    name: "商品模块",
    link: "",
    second_level: [{
      name: "商品管理",
      link: "/goods/goods"
    }, {
      name: "品类管理",
      link: "/goods/category"
    }, {
      name: "品牌管理",
      link: "/goods/brand"
    }, {
      name: "库存管理",
      link: "/goods/inventory"
    }]
  },
  market: {
    name: "销售模块",
    link: "",
    second_level: [{
      name: "优惠券管理",
      link: "/market/market"
    }, {
      name: "猜价管理",
      link: "/market/guessGame"
    }, {
      name: "首页推荐商品",
      link: "/market/recommend"
    }, {
      name: "秒杀管理",
      link: "/market/secKill"
    }, {
      name: "团购管理",
      link: "/market/groupBuying"
    }, {
      name: "新人专区管理",
      link: "/market/newPeople"
    }
    ]
  },
  order: {
    name: "订单模块",
    link: "",
    second_level: [{
      name: "订单管理",
      link: "/order/order"
    }, {
      name: "售后订单",
      link: "/order/order1"
    }, {
      name: "订单明细",
      link: "/order/orderDetailList"
    }, {
      name: "代发订单",
      link: "/order/order2"
    }]
  },
  user: {
    name: "用户模块",
    link: "",
    second_level: [{
      name: "用户管理",
      link: "/user/user"
    }, {
      name: "提现管理",
      link: "/user/withdraw"
    }]
  },
  comment: {
    name: "评论模块",
    link: "/comment/comment",
  },
  statistics: {
    name: "统计",
    link: "",
    second_level: [{
      name: "商品浏览统计",
      link: "/statistics/goodsBrowseChart"
    }, {
      name: "猜价统计",
      link: "/statistics/guessChart"
    }, {
      name: "发货统计",
      link: "/statistics/sendProductChart"
    }, {
      name: "进入结算统计",
      link: "/statistics/settleAccountChart"
    }, {
      name: "优惠券领取",
      link: "/statistics/issueCouponsChart"
    }, {
      name: "订单统计",
      link: "/statistics/orderChart"
    },
      {
        name: "用户流量统计",
        link: "/statistics/userChart"
      },
      {
        name: "秒杀助力统计",
        link: "/statistics/secKillChart"
      }, {
        name: "拉取用户统计",
        link: "/statistics/acquiringChart"
      },
      {
        name: "每日数据统计",
        link: "/statistics/dailyDataChart"
      }
    ]
  },
  supplyChain: {
    name: "供应链管理",
    link: "",
    second_level: [{
      name: "商品池",
      link: "/supplyChain/JDProduct"
    }, {
      name: "京东售后订单",
      link: "/supplyChain/jdPostSaleOrder"
    }, {
      name: "京东订单",
      link: "/supplyChain/JDOrderList"
    }, {
      name: "余额记录",
      link: "/supplyChain/BalanceDetail"
    }]
  }

};

const admin = {
  goods: {
    name: "商品模块",
    link: "",
    second_level: [{
      name: "商品管理",
      link: "/goods/goods"
    }, {
      name: "品类管理",
      link: "/goods/category"
    }, {
      name: "品牌管理",
      link: "/goods/brand"
    }, {
      name: "库存管理",
      link: "/goods/inventory"
    }]
  },
  market: {
    name: "销售模块",
    link: "",
    second_level: [{
      name: "优惠券管理",
      link: "/market/market"
    }, {
      name: "猜价管理",
      link: "/market/guessGame"
    }, {
      name: "首页推荐商品",
      link: "/market/recommend"
    }, {
      name: "秒杀管理",
      link: "/market/secKill"
    }, {
      name: "团购管理",
      link: "/market/groupBuying"
    }, {
      name: "新人专区管理",
      link: "/market/newPeople"
    }
    ]
  },
  order: {
    name: "订单模块",
    link: "",
    second_level: [{
      name: "订单管理",
      link: "/order/order"
    }, {
      name: "售后订单",
      link: "/order/order1"
    }, {
      name: "订单明细",
      link: "/order/orderDetailList"
    }, {
      name: "代发订单",
      link: "/order/order2"
    }]
  },
  user: {
    name: "用户模块",
    link: "",
    second_level: [{
      name: "用户管理",
      link: "/user/user"
    }, {
      name: "提现管理",
      link: "/user/withdraw"
    }]
  },
  comment: {
    name: "评论模块",
    link: "/comment/comment",
  },
  system: {
    name: "系统管理",
    link: "",
    second_level: [{
      name: "会员管理",
      link: "/system/vip"
    }, {
      name: "界面管理",
      link: "/system/banner"
    }, {
      name: "系统常量",
      link: "/system/system"
    }, {
      name: "图片管理",
      link: "/system/images"
    }, {
      name: "物流快递",
      link: "/goods/logistics"
    }]
  },
  statistics: {
    name: "统计",
    link: "",
    second_level: [{
      name: "商品浏览统计",
      link: "/statistics/goodsBrowseChart"
    }, {
      name: "猜价统计",
      link: "/statistics/guessChart"
    }, {
      name: "发货统计",
      link: "/statistics/sendProductChart"
    }, {
      name: "进入结算统计",
      link: "/statistics/settleAccountChart"
    }, {
      name: "优惠券领取",
      link: "/statistics/issueCouponsChart"
    }, {
      name: "订单统计",
      link: "/statistics/orderChart"
    },
      {
        name: "用户流量统计",
        link: "/statistics/userChart"
      },
      {
        name: "秒杀助力统计",
        link: "/statistics/secKillChart"
      }, {
        name: "拉取用户统计",
        link: "/statistics/acquiringChart"
      },
      {
        name: "每日数据统计",
        link: "/statistics/dailyDataChart"
      }
    ]
  },
  supplyChain: {
    name: "供应链管理",
    link: "",
    second_level: [{
      name: "商品池",
      link: "/supplyChain/JDProduct"
    }, {
      name: "京东售后订单",
      link: "/supplyChain/jdPostSaleOrder"
    }, {
      name: "京东订单",
      link: "/supplyChain/JDOrderList"
    }, {
      name: "余额记录",
      link: "/supplyChain/BalanceDetail"
    }]
  }
};
//客服目录
const menu_kefu = {
  order: {
    name: "订单模块",
    link: "/order/order"
  }
};

const api = {
  getMenu: () => {
    // console.log(localStorage.getItem('userType'));
    if (localStorage.getItem('userType') && localStorage.getItem('userType') == 0) {
      return menu;
    }
    if (localStorage.getItem('userType') && localStorage.getItem('userType') == 1) {
      return menu_kefu;
    }
    if (localStorage.getItem('userType') && localStorage.getItem('userType') == 2) {
      return admin;
    }
  },
  //导出表格
  // exportList(url, data, title) {
  //   return new Promise((resolve, reject) => {
  //     axios.get(url, {
  //       params: data,
  //       responseType: 'blob',
  //       paramsSerializer: params => {
  //         return qs.stringify(params, {indices: false})
  //       }
  //     }).then(res => {
  //       if (res.data.type === "application/json") {
  //         this.$message.error("暂无数据！");
  //         reject();
  //       } else {
  //         let link = document.createElement("a");
  //         link.href = window.URL.createObjectURL(new Blob([res.data]));
  //         link.target = "_blank";
  //         link.download = title + ".xlsx";
  //         document.body.appendChild(link);
  //         link.click();
  //         document.body.removeChild(link);
  //         resolve();
  //       }
  //     })
  //   })

  // }
};

export default api

