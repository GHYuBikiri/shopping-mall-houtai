import Axios from 'axios';
import ev from '@/libs/events'
import {ROOT,API_KEY} from '@/config';

const axios = Axios.create({
  baseURL: ROOT,
  headers: {
    apikey: API_KEY
  }
})
let loading = 0;
axios.interceptors.request.use(config=>{
  loading+=1;
  if(loading==1){
    ev.emit('axios_start_loading');
  }
  return config;
});
axios.interceptors.response.use(res=>{
  loading-=1;
  if(loading==0){
    ev.emit('axios_end_loading');
  }
  if(res.data.err){
    alert(res.data.msg);
    throw res;
  }else{
    return res
  }
},err=>{
  alert('请求失败');
  console.error(err.response);
  throw err;
});

export default axios;