const baseUrl = 'http://ygys.sdyilian.top/'

// 请求
const request = (opts, data) => {
	let httpDefaultOpts = {
		url: baseUrl + opts.url,
		data: data,
		method: opts.method,
		header: opts.method == 'get' ? {
			'X-Requested-With': 'XMLHttpRequest',
			"Accept": "application/json",
			"Content-Type": "application/json; charset=UTF-8"
		} : {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		},
		dataType: 'json',
	}
	let promise = new Promise(function(resolve, reject) {
		uni.request(httpDefaultOpts).then(
			(res) => {
				resolve(res[1])
			}
		).catch(
			(response) => {
				reject(response)
			}
		)
	})
	return promise
}

// 微信分享
const wxShare = () => {
	let promise = new Promise(function(resolve, reject) {
		uni.share({
		    provider: "weixin",
		    scene: "WXSceneSession",
		    type: 0,
		    href: "https://wxapi.chinayygg.com/sharePage.html?"+ curId,
		    title: title,
		    summary: summary,
		    imageUrl: imageUrl
		}).then(
			(res) => {
				resolve(res[1])
			}
		).catch(
			(response) => {
				reject(response)
			}
		)
	})
	return promise
	
}

// 上传图片
const uploadImg = () => {
	let promise = new Promise(function(resolve, reject) {
		uni.chooseImage({
			count: 1,
			success: (res) => {
				uni.showLoading({
					title: '上传中',
					mask: true
				});
				let tempFilePath = res.tempFilePaths[0];
				//上传文件
				uni.uploadFile({
					url: 'http://ygys.sdyilian.top/api/Oss/OpLoadFile', //仅为示例，非真实的接口地址
					filePath: tempFilePath,
					name: 'file',
					formData: {
						'path': 'vip'
					},
				}).then(
					(res) => {
						uni.hideLoading()
						var url = JSON.parse(res[1].data).url
						resolve(url)
					}
				).catch(
					(response) => {
						uni.hideLoading()
						reject(response)
					}
				)
			}
		})
	})
	return promise
}

// 上传图片
const uploadVideo = () => {
	let promise = new Promise(function(resolve, reject) {
		uni.chooseVideo({
			count: 1,
			success: (res) => {
				uni.showLoading({
					title: '上传中',
					mask: true
				});
				let tempFilePath = res.tempFilePaths;
				//上传文件
				uni.uploadFile({
					url: 'http://ygys.sdyilian.top/api/Oss/OpLoadFile', //仅为示例，非真实的接口地址
					filePath: tempFilePath,
					name: 'file',
					formData: {
						'path': 'vip'
					},
				}).then(
					(res) => {
						uni.hideLoading()
						var url = JSON.parse(res[1].data).url
						resolve(url)
					}
				).catch(
					(response) => {
						uni.hideLoading()
						reject(response)
					}
				)
			}
		})
	})
	return promise
}

// 支付
const payFunc = (provider, orderInfo) => {
	if(provider == 'wxpay'){
		orderInfo = JSON.stringify(orderInfo)
	}
	let promise = new Promise(function(resolve, reject) {
		uni.requestPayment({
			provider: provider,
			orderInfo: orderInfo
		}).then(
			(res) => {
				resolve(res[1])
			}
		).catch(
			(response) => {
				reject(response)
			}
		)
	})
	return promise
}
export default {
	request,
	uploadImg,
	uploadVideo
}
