<template>
  <div class="wrap">
    <div class="content">
      <header>
        <span class="mine">
          <img src="/static/images/mine.png" alt="">
        </span>
        <p>150*****233</p>
      </header>
      <ul>
        <li @click="goDetail">
          <icon type="waiting" size="24px"></icon>
          <p>我的面试</p>
          <span>〉</span>
        </li>
      </ul>
    </div>
    <div v-if="flag?true:false" class="model">
      <div class="main">
        <div class="title">
          还没有获取到您的电话号码,需要获取您的电话号码，是否同意
        </div>
        <div class="btns">
          <button>取消</button>
          <button open-type="getPhoneNumber" @click="sure">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import login from "@/api"
  import { getLocation, getAuth } from '@/utils/index.js'
  import { mapState, mapMutations } from 'vuex'

  export default {
    data() {
      return {
        flag: 1,
      }
    },

    computed: {
      ...mapState({
        info: state => state.info
      })
    },


    methods: {
      sure() {
        let user = wx.getStorageSync("login");
        console.log(user)
        wx.login
        this.flag = 0;
        console.log("info....", this.info)
      },
      goDetail(){
        wx.navigateTo({
          url: '/pages/sign/detail/main'
        })
      }
    },

    created() {
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    width: 100%;
    height: 100%;
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    header {
      width: 100%;
      height: 200px;
      background:  #F4F6F9;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .mine {
        width: 150rpx;
        height: 150rpx;
        background: orange;
        border-radius: 50%;
        text-align:center;
        line-height:200rpx;
        image {
          width: 100rpx;
          height: 100rpx;
        }
      }


    }
    ul{
      width:100%;
      flex: 1;
      li{
        width:100%;
        height:60px;
        display:flex;
        line-height:60px;
        icon{
          padding:18px 20px;
        }
        p{
          height:100%;
          flex: 1;
        }
        span{
          height:100%;
          padding:0 10px;
        }
      }
    }
  }

  .model {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
    position: fixed;
    top: 0;
    left: 0;

    .main {
      width: 90%;
      height: 300px;
      background: #fff;
      border-radius: 10px;
      margin: 0 auto;
      margin-top: 150px;
      padding: 0 5px;


      .title {

        width: 100%;
        height: 200px;
        box-sizing: border-box;
        padding: 50px 20px;
        border-bottom: 1px solid #ccc;
        text-align: center;
        line-height: 40px;
      }

      .btns {
        width: 100%;
        height: 40px;
        display: flex;
        margin-top: 50px;
        justify-content: space-around;

        button {
          display: inline-block;
          width: 100px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border: 0;
        }
      }
    }
  }
</style>
