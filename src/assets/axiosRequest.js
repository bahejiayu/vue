import axios from 'axios'
axios.create({
	baseURL: baseUrl, // baseUrl 公共前缀
	timeout: 60 * 1000,  // 不可超过 manifest.json 中配置 networkTimeout的超时时间
	// #ifdef H5
	withCredentials: true,
	// #endif
	headers: {
		'Content-Type': 'application/json'
	},
});

 export default   function axiosRequest(obj) {
	if(obj.type == 'post') {
		return new Promise(function(reslove, reject) {
			axios.post(obj.url, obj.data || {}).then(function(res) {
				reslove(res)
			}, function(fail) {
				reject(fail)

			})
		});

	} else {
		var url;
		obj.data=obj.data||{}
		var str = '';
		if(JSON.stringify(obj.data) != '{}') {
			for(var key in obj.data) {
				str += `${key}=${obj.data[key]}&`;
			}
			str = str.substring(0, str.length - 1);
			url = `${obj.url}?${str}`;

		} else {
			url = obj.url
		}

		return new Promise(function(reslove, reject) {
			axios.get(url).then(function(res) {
				reslove(res)
			}, function(fail) {
				reject(fail)

			})
		});

	}

}




