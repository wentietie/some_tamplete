<template>
	<view class="popWindow">
		<view class="middleViewPop">
			<p>提示</p>
			<view class="popContentPop">
				这是内容
			</view>
			<view class="bottomBtnPop">
				<view class="eachBtnPop" style="border-right: 1upx solid rgb(233,233,233);" @click="close(1)">
					确定
				</view>
				<view class="eachBtnPop" @click="close(0)">
					取消
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			popWin:{
				value: false,
				type: Boolean
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			close(index){
				this.$emit('operate', index)
			}
		}
	}
</script>

<style>
	.eachBtnPop{
		width: 250upx;
		float: left;
		line-height: 80upx;
		font-size: 30upx;
		text-align: center;
		color: #007AFF;
	}
	.bottomBtnPop{
		width: 100%;
		border-top: 1upx solid rgb(233,233,233);
	}
	.popContentPop{
		font-size: 30upx;
		width: 90%;
		margin: 20upx auto;
		max-height: 300upx;
	}
	.popWindow{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		background-color: rgba(0,0,0,0.5);
	}
	.middleViewPop{
		width: 502upx;
		background-color: #FFFFFF;
		border-radius: 10upx;
		overflow: hidden;
		margin: 0 auto;
		margin-top: 300upx;
		padding-top: 20upx;
	}
	.middleViewPop p{
		text-align: center;
		font-size: 36upx;
		
	}
</style>
