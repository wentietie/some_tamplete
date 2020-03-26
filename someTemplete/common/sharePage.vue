<template>
	<view class="sharePage" v-bind:class="{openCla: openShare == true}">
		<view class="bottomBtnList" v-bind:class="{bottomDis: openShare == true}">
			<p style='text-align: center;'>分享</p>
			<view class="topList">
				<view class="eachBtn" @click="shareFunc('WXSceneSession')">
					<image src="https://zhongwang.sdyilian.top/Public/uploads/static/weixinShare.png" mode=""></image>
					分享给朋友
				</view>
				<view class="eachBtn" @click="shareFunc('WXSenceTimeline')">
					<image src="https://zhongwang.sdyilian.top/Public/uploads/static/friendCir.png" mode=""></image>
					分享到朋友圈
				</view>
			</view>
			<view class="stuffView">

			</view>
			<view class="cancelBtn" @click="cancelShare">
				取消
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			openShare: {
				type: Boolean
			},
			msgInfo: {
				type: Object,
				value: {}
			}
		},
		data() {
			return {

			}
		},
		methods: {
			cancelShare() {
				this.$emit('changeOpen', false)
			},
			shareFunc(scene) {
				this.globalData.wxShare(
					scene,
					this.msgInfo.ar_title,
					this.msgInfo.ar_title,
					this.msgInfo.ar_id,
					this.msgInfo.label,
					success => {
						console.log(success)
						this.cancelShare()
					}
				)
			}
		}
	}
</script>

<style>
	.cancelBtn {
		width: 100%;
		line-height: 100upx;
		font-size: 30upx;
		text-align: center;
	}

	.stuffView {
		width: 100%;
		height: 10upx;
		background-color: #EFEFEF;
	}

	.topList {
		width: 100%;
		overflow: hidden;
		padding: 20upx 0;
	}

	.eachBtn {
		width: 200upx;
		float: left;
		font-size: 30upx;
		text-align: center;
		line-height: 50upx;
	}

	.eachBtn image {
		width: 80upx;
		height: 80upx;
		display: block;
		margin: 0 auto;
	}

	.bottomBtnList {
		width: 100%;
		background-color: #FFFFFF;
		position: fixed;
		left: 0;
		bottom: -400upx;
		transition: 0.3s;
		padding-top: 30upx;
	}

	.bottomDis {
		bottom: 0;
	}

	.sharePage {
		width: 100%;
		position: fixed;
		left: 0;
		top: 100%;
		bottom: 0upx;
		z-index: 1000000;
		background-color: rgba(0, 0, 0, 0.5);

	}

	.openCla {
		top: 0;
	}
</style>
