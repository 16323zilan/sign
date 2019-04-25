
import {addSign} from "../../api/index"

const state={
  list:[],
  current:{
    company:"北京小桔科技有限公司",
    phone:"15811521233",
    address:"",
    description:""
  }
}
const mutations={
  updateState(state,payload){
    state.current={...state.current,...payload}
  }
}
const actions={
  async submit(state,{...payload}){
    console.log("payload...",payload);
    return new Promise( async (resolve,reject)=>{
      //填充经纬度
      payload.latitude=payload.address.location.lat;
      payload.longitude=payload.address.location.lat;
      //序列化地址
      payload.address=JSON.stringify(payload.address);
      let result = await addSign(payload);
      console.log("result....",result)
      resolve(result)
    })
  }
}

export default {

  namespaced: true,
  state,
  actions,
  mutations
}

