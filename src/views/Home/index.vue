<template>
	<div>
		<img class="header-img" src="./img/img1_1.jpg">
		<div class="background">
			<div class="active">
				<div>活动礼包</div>
			</div>
			<!--渲染满减优惠券列表-->
			<div class="list">
				<div class="list1" v-for="item in 1">
					<div class="left">
						<h3>627.7元</h3>
						<div>满5000元可用</div>
					</div>
					<div class="right">
						<h3>满减券</h3>
						<div>2019-10-12至2019-11-12有效</div>
						<div>此优惠券洗涤全场通用</div>
					</div>
				</div>
				<input type="text" placeholder="请输入姓名" v-model="name" />
				<input type="text" placeholder="请输入手机号" v-model="mobile" />
				<div class="identify">
					<input class="identify-input" type="text" placeholder="验证码" v-model="code">
					<button class="identify-btn" type="submit" @click="getCode()" v-show="show">获取验证码</button>
					<button class="identify-btn-time" type="submit" v-show="!show">{{count}}</button>
				</div>
				<button class="get" type="submit" @click="submit()">立即领取</button>
			</div>
			<!--活动规则-->
			<div class="active">
				<div>活动规则</div>
			</div>
			<div class="list">
				<div style="height: 2.75rem;"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				mobile: '',
				code: '',
				name: '',
				show: true,
				count: '',
				timer: null
			}
		},
		methods: {
			//获取验证码
			getCode() {

				let data = {
					mobile: this.mobile,
					remark: "农商行领券注册"
				}
				//倒计时
				const TIME_COUNT = 60;
				if (!this.timer) {
					this.count = TIME_COUNT;
					this.show = false;
					this.timer = setInterval(() => {
						if (this.count > 0 && this.count <= TIME_COUNT) {
							this.count--;
						} else {
							this.show = true;
							clearInterval(this.timer);
							this.timer = null;
						}
					}, 500)
				}
				/* 发起axios请求 */

			},

			//提交领取优惠券
			submit() {
				let data = {
					mobile: this.mobile,
					code: this.code,
					name: this.name,
					city: this.city,
					type: '11-33-1-1125'
				}
				if (this.mobile == '') {
					this.$toast("请输入电话号码")
					return
				} else if (this.name == '') {
					this.$toast("请输入姓名")
					return
				} else if (this.code == '') {
					this.$toast("请输入验证码")
					return
				} else {
					//跳转到获取成功页面（get.vue)
					 this.$router.push({path:'get'}) 
					/* 发起axios请求 */
					

				}
			}
		},



	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header-img{
		width: 100%;
	}
	.background {
		background: rgb(255, 180, 0);
		padding-bottom: 1.25rem;
		margin-top: -0.02rem;
	}

	.active {
		background: url(./img/img3.png) no-repeat;
		background-size: 5.52rem 1.49rem;
		min-width: 4.12rem;
		min-height: 1.49rem;
		/* background-position: 2.7rem 0rem; */
		background-position: center;
		margin: 0 auto;
		text-align: center;
	}

	.active div {
		color: white;
		padding-top: .21rem;
		font-size: .43rem;
		font-weight: 700;
	}

	.list {
		background: rgb(174, 33, 210);
		width: 9.6rem;
		border: rgb(252, 229, 170) solid 0.15rem;
		border-radius: .45rem;
		margin: 0 auto;
		margin-bottom: 2.5rem;
	}

	.list1 {
		background: url(./img/img4.png) no-repeat;
		background-size: 9.2rem 2.99rem;
		background-position: .2rem 1rem;
		height: 4rem;
	}

	.left {
		width: 2.1rem;
		display: inline-block;
		position: relative;
		top: 1.2rem;
		left: 1.1125rem;
	}

	.left h3 {
		color: red;
		font-size: 0.45rem
	}

	.left div {
		font-size: .32rem
	}

	.left div {
		color: #ccc;
	}

	.right {
		left: 1.5125rem;
		text-align: left;
		width: 5.1rem;
		position: relative;
		top: 1.5rem;
		display: inline-block;
	}

	.right h3 {
		font-size: .45rem
	}

	.right div {
		color: #CCCCCC;
		font-size: .32rem
	}

	input {
		margin: 0.625rem auto 0rem .5rem;
		width: 8.04rem;
		height: 1rem;
		border-radius: 0.775rem;
		padding-left: 0.3125rem;
		font-size: 0.4rem;
		border: #CCCCCC solid 0px;
	}

	button {
		margin: 0.625rem auto 0.5rem .57rem;
		width: 8.14rem;
		height: 1.1rem;
		border-radius: 0.775rem;
		padding-left: 0.3125rem;
		font-size: 0.4rem;
		border: #AAAAAA solid 0px;
		background: rgb(255, 180, 0);
		cursor: pointer;
	}

	.identify {
		width: 100%;

	}

	.identify-input {
		width: 5.04rem;
		float: left;
		margin-right: 0rem;
		border-bottom-right-radius: 0rem;
		border-top-right-radius: 0rem;
	}

	.identify-btn {
		width: 3.04rem;
		float: left;
		height: 1rem;
		margin-left: 0rem;
		padding-left: .1rem;
		border-bottom-left-radius: 0rem;
		border-top-left-radius: 0rem;
	}

	.identify-btn-time {
		width: 3.04rem;
		float: left;
		height: 1rem;
		margin-left: 0rem;
		padding-left: .1rem;
		border-bottom-left-radius: 0rem;
		border-top-left-radius: 0rem;
		color: darkred;
		font-size: .5rem
	}

	.get {
		margin-top: .2rem;
	}
</style>
