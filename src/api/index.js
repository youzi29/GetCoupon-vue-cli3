import axios from 'axios'
import qs from 'qs'



if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = 'https://wx.ihuanxi.cn/kd/washing/PlatformApi/';} 
else if (process.env.NODE_ENV == 'debug') {    
    axios.defaults.baseURL = 'https://wx.ihuanxi.cn/kd/washing/PlatformApi/';
} 
else if (process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = 'https://wx.ihuanxi.cn/kd/washing/PlatformApi/';
}





//Àý
export const xxx = data => {
	return axios.request({
		url: "index.php",
		method: 'post',
		headers: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		data: qs.stringify(data)
	})
}

