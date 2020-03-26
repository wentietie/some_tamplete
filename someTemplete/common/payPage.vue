<template>
	<view>
		<view class="choosePayType" v-bind:class="{openChooseBig:payView == true}">
			<view class="bottomChoose_sp" v-bind:class="{openChooseLit:payView == true}">
				<p>请选择支付方式</p>
				<view class="eachTypePay" @click="wxPay">
					<image src="https://zhongwang.sdyilian.top/Public/uploads/static/wxPay.png" mode=""></image>
					<p>微信支付</p>
				</view>
				<view class="eachTypePay" @click="aliPay">
					<image src="https://zhongwang.sdyilian.top/Public/uploads/static/aliPay.png" mode=""></image>
					<p>支付宝支付</p>
				</view>
				<view style="width: 100%;float: left;height: 10upx;background-color: #EEEEEE;margin-top: 10upx;">

				</view>
				<view class="cancelPay" @click="closePay">
					<p>取消</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			payView: {
				type: Boolean,
				value: false
			},
			orderInfo: {
				type: Object,
				value: {}
			},
			payOpts: {
				type: Array,
				value: []
			},
			payData: {
				type: Array,
				value: []
			}
		},
		data() {
			return {

			}
		},
		methods: {
			closePay() {
				this.$emit('closePay', false)
			},
			wxPay() {
				var that = this
				uni.showLoading({

				})
				this.closePay()
				this.$http.httpRequest(this.payOpts[0], this.payData[0]).then(res => {
					console.log(res.data)
					uni.hideLoading()
					if (res.data.code == 1 || res.data.code == '0000') {
						this.$http.wxPayMoney(JSON.stringify(res.data.res.app_response), response => {
								uni.showToast({
									title: '支付成功',
									icon: 'none',
									duration: 1500,
									success() {
										setTimeout(() => {
											uni.navigateBack({

											})
										}, 1500)
									}
								})
							},
							err => {
								console.log(err)
								uni.showToast({
									title: '支付失败',
									icon: 'none',
									duration: 1500
								})
							})
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 1500
						})
					}
				})

			},
			aliPay(){
				var that = this
				uni.showLoading({
					
				})
				this.$http.httpRequest(this.payOpts[1], this.payData[1]).then(res => {
					that.closePay()
					uni.hideLoading()
					that.$http.aliPayMoney(res.data.data.sing, success => {
							uni.showToast({
								title: '支付成功',
								icon: 'none',
								duration: 1500,
								success() {
									setTimeout(() => {
										uni.navigateBack({
				
										})
									}, 1500)
								}
							})
						},
						err => {
							uni.showToast({
								title: '支付失败',
								icon: 'none',
								duration: 1500
							})
						})
				})
			}
		}
	}
</script>

<style>
	.choosePayType {
		width: 100%;
		position: fixed;
		top: 100%;
		left: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 100000000000000000000000000;
	}

	.openChooseBig {
		top: 0;
	}

	.bottomChoose_sp {
		width: 100%;
		height: 300upx;
		position: fixed;
		background-color: #FFFFFF;
		overflow: hidden;
		left: 0;
		bottom: -330upx;
		text-align: center;
		transition: 0.3s;
		padding-top: 30upx;
	}

	.openChooseLit {
		bottom: 0;
	}

	.eachTypePay {
		width: 150upx;
		height: 150upx;
		float: left;
		margin-left: 30upx;
		font-size: 26upx;
		text-align: center;
	}

	.eachTypePay image {
		width: 80upx;
		height: 80upx;
		display: block;
		margin: 20upx auto;
	}

	.selCla {
		background-color: #F8EEDF;
	}

	.cancelPay {
		width: 100%;
		float: left;
		line-height: 80upx;
		text-align: center;
		font-size: 30upx;
	}
</style>
