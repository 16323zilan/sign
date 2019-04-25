<template>
    <div class="wrap">
        <ul>
            <li>
                <label for="">面试地址：</label>
                <span>{{info.address&&info.address.address}}</span>
            </li>
            <li>
                <label for="">面试时间：</label>
                <span>{{info.start_time}}</span>
            </li>
            <li>
                <label for="">联系方式：</label>
                <span>{{info.phone||15011444074}}</span>
            </li>
            <li>
                <label for="">是否提醒：</label>
                <span>{{info.remind?'未提醒':'已提醒'}}</span>
            </li>
            <li>
                <label for="">面试状态：</label>
                <span>{{info.status==-1?'未开始':info.status==0?'已打卡':'已放弃'}}</span>
            </li>
            <li>
                <label for="">取消提醒：</label>
                <switch></switch>
            </li>
            <select name="" id=""></select>
        </ul>
        <section v-if="info.status==-1" class="action">
            <button>去打卡</button>
            <button>放弃面试</button>
        </section>
    </div>
</template>


<script>
    import {mapState,mapActions} from 'vuex'
    export default{
        computed: {
          ...mapState({
              info:state=>state.sign.info
          })  
        },
        methods:{
            ...mapActions({
                getDetail:'sign/getDetail'
            })
        },
        onLoad(options){
            //获取id
            this.id=options.id
        },
        async onShow(){
            wx.showLoading({
                title:'加载数据中……',
                mask:true
            })
            await this.getDetail(this.id);
            //修改标题
            wx.setNavigationBarTitle({
                title:this.info.company
            })
            wx.hideLoading();
        }
    }
</script>

<style lang="scss" scoped>
    ul{
        border-top: 1rpx solid #eee;
        border-bottom: 1rpx solid #eee;
        background: #fff;
    }
    li{
        width: 720rpx;
        height: 88rpx;
        margin-left: 30rpx;
        border-bottom: 1rpx solid #eee;
        display: flex;
        align-items: center;
        justify-content: space-between;
        label{
            color: #666;
            width: 170rpx;
            font-size: 30rpx;
        }
        span,switch{
            flex: 1;
            // text-align: right;
            font-size: 30rpx;
            color: #333;
            height: 88rpx;
            line-height: 88rpx;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding-right: 30rpx;
            box-sizing: border-box;
        }
    }
    .action{
        display: flex;
        margin: 50rpx 15rpx;
        button{
            flex: 1;
            color: #fff;
            margin: 15rpx;
        }
        button:first-child{
            background: #197DBF;
        }
        button:last-child{
            background: #DC4E42;
        }
    }
    
</style>