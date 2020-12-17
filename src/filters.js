import Vue from 'vue'
import {ROOT,API_KEY} from '@/config';
const assert=require('assert');

Vue.filter('imgurl',function (url){
  return ROOT+'/'+url+'?apikey='+API_KEY
})

Vue.filter('mktime',function(input){
  assert(typeof input=='number','时间戳必须是数字');
  let odate =new Date(input)
  return `${odate.getFullYear()}-${odate.getMonth()+1}-${odate.getDate()}`
})