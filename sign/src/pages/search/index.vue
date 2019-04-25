<template>
  <div class="wrap">
    <header>
      <span>北京</span>
      <input type="text" placeholder="面试地址" v-model="address">
    </header>
    <ul>
      <li v-for="(item, index) in suggestion" :key="index" hover-class="hover" @click="select(index)">
        <p>{{item.title}}</p>
        <p>{{item.address}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {debounce} from '@/utils/index.js'
import {mapState, mapMutations} from 'vuex'

export default {
  data () {
    return {
      address: '',
      suggestion: []
    }
  },

  computed: {
    ...mapState({
      state: state=>state.index.count,
      state2: state=>state.index.count,
    })
  },
  //http://123.206.55.50:7001/user/code2session
  watch: {
    address(val, oldVal){
      this.search(val);
    }
  },

  methods: {
    ...mapMutations({
      updateState: 'interview/updateState'
    }),
    select(index){
      console.log("index...",index);
      //更新地址数据
      this.updateState({
        address:this.suggestion[index]
      })
      wx.navigateBack()
    }
  },

  created () {
    var that = this;

    //使用防抖函数控制事件的触发频率
    this.search = debounce((val)=>{
      this.$map.search({
        keyword: val,
        region: '北京',
        success: function (res) {
          console.log(res);
          that.suggestion = res.data;
        }
      })
    }, 300);
  }
}
</script>

<style lang="scss" scoped>
header{
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  height: 88rpx;
  span{
    width: 26%;
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #eee;
  }
  input{
    padding: 0 20rpx;
  }
}
li{
  height: 100rpx;
  padding: 10rpx 0 10rpx 100rpx;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  p:nth-child(1){
    font-size: 34rpx;
  }
  p:nth-child(2){
    font-size: 24rpx;
    color: #c0c0c0;
  }
}
</style>
