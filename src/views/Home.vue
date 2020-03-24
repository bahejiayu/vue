<template>
	<div class="home">

		{{time|datefilter}}
	<div>{{zjy|test2}}</div>
		{{c}} {{b.test}}
		<img alt="Vue logo" src="../static/images/logo.png" @click="add"> {{$store.state.zjy}}
		<ul>
			<li v-for="item in list ">
				{{item.name}}--{{item.age}}
			</li>

		</ul>



	</div>
</template>

<script>
	// @ is an alias to /src

	import store from "@/store"
import axiosRequest from '@/assets/axiosRequest'

	import { Toast } from 'mint-ui';

	export default {
		name: 'home',
		components: {
			
		},
		store,
		data() {
			return {
				time:new Date().getTime(),
				dataList: [1, 2, 3, 1, 2, 31, 2, 31, 2, 3],
				zjy: store.state.zjy,
				list: store.state.List,
				a: 1,
				b: [{
						test: 5,

					},
					{
						test: 5,

					}, {
						test: 5,

					},

				]
			}
		},
		computed: {
			c() {
				var total=0;
				for(var i=0;i<this.b.length;i++){
					total+=this.b[i].test
				console.log(this.b[i].test)
					
				};
				
			
				
				
			
				return this.a + total + 'bbbbbbbbbbbb'

			}
		},
		created() {
			
//			console.log(this.$router)
		

		},
		mounted(){
				axiosRequest({
				url: 'https://douban.uieee.com/v2/movie/subject/25924056',
				type: 'get'
			}).then(function(res) {
				console.log(res.data)

			})
		},
		methods: {
			add() {
				this.b[0].test = 2
			},
			loadTop() {
				// 加载更多数据
				this.$refs.loadmore.onTopLoaded();
			}

		}

	}
</script>