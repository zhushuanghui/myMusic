import axios from './axios';

//推荐列表也

// 获取首页轮播图
export let getBannerApi=()=>axios.get('/banner');
//获取推荐歌单
export let getRdSongApi=()=>axios.get('/personalized');




//登陆、退出等

//判断是否登陆
export let isLoginApi=()=>axios.get('/login/status');

//获取用户详情
export let getUserInfo=()=>axios.get('/user/detail');