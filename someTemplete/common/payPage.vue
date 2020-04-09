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
				// 请求签名
				this.GF.request(this.payOpts, this.payData).then(res => {
					this.GF.wxPay(res.data).then(response => {
						console.log(response)
						uni.hideLoading()
					})
				})
			},
			aliPay(){
				var that = this
				uni.showLoading({
				
				})
				this.closePay()
				// 请求签名
				this.GF.request(this.payOpts, this.payData).then(res => {
					this.GF.wxPay(res.data).then(response => {
						console.log(response)
						uni.hideLoading()
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
