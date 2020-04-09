<template>
	<view class="content">
		<view class="get" @click="get">
			接口调用
		</view>
		<view class="get" @click="upImg">
			上传图片
		</view>
		<view class="get" @click="upVideo">
			上传视频
		</view>
		<view class="get" @click="openShareComp">
			打开分享
		</view>
		<view class="get" @click="openPayComp">
			打开支付
		</view>
		<view class="get" @click="openPopWin">
			打开弹窗
		</view>
		<shareChild :openShare="openShare" @changeOpen="changeOpen" ></shareChild>
		<payChild :payView='payView' @closePay='closePay'></payChild>
		<popWindow v-if="popWin == true" @operate='operate'></popWindow>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				openShare: false,
				payView: false,
				popWin: false
			}
		},
		onLoad() {
			
		},
		methods: {
			operate(state){
				uni.showToast({
					title:String(state),
					icon:'none',
					duration:1000
				})
				this.openPopWin()
			},
			openPopWin(){
				// this.popWin = !this.popWin
				this.model.model({
					content:'haha',
					confirmText:'嘻嘻',
					cancelText:'哈哈',
					confirmColor:'red',
					cancelText:'green',
					callBack (res) {
						console.log(res)
					}
				})
			},
			openPayComp(){
				this.payView = true
			},
			// 用于子组件关闭
			closePay(status){
				this.payView = status
			},
			openShareComp(){
				this.openShare = true
			},
			// 用于子组件关闭
			changeOpen(status){
				this.openShare = status
			},
			upVideo(){
				this.GF.uploadVideo().then(res => {
					console.log(res)
				})
			},
			upImg(){
				this.GF.uploadImg().then(res => {
					console.log(res)
				})
			},
			get(){
				var that = this
				var option = {
					url:'api/Information/getProvinceCity',
					// methods:'post' // 根据接口实际情况
				}
				var data = {
					
				}
				this.GF.request(option, data).then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
