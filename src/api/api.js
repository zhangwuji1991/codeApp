import axios from 'axios';
import qs    from 'qs';

//请求ip地址
let base = 'https://cnodejs.org/api/v1/topics';
//设置跨域
let heads = {
				 headers: {
			                'Content-Type': 'application/x-www-form-urlencoded'
			              }
            }

//登录接口
export const getUserList = params => { return axios.get(`${base}`, { params: params }) };
