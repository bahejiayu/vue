<template>
			<!--<div>
			
				
					{{c}}
				<button  @click="add()">dd</button>
			</div>
	-->
			<mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">

  <ul >
    <li v-for="item in 100">{{ item }}</li>
  </ul>
</mt-loadmore>

	
	
	
	
</template>

<script>
import { Indicator } from 'mint-ui';	
import axiosRequest from '@/assets/axiosRequest'
import axios from 'axios'
import 'vue-resource'
	export default{
		
		data(){
			
			return {
				allLoaded:true,
				list:['1','1','1','1','1','1','1','1','1','1','1','1','1'],
				b:[
					{
						test:1
					},
					{
						test:4
					}
					
				
				]
			}
			
		},
	 mounted(){



			axiosRequest({
				url:'/v2/movie/subject/1764796'

			}).then((res)=>{
				console.log(res)
				
			})

//			this.$http.post('https://vinocave.com/market/index.php?model=index&fun=load_common?username=2')
	
		},
		computed:{
				c(){
				
				return this.b.reduce((pev,cur)=>{

						return pev.test+cur.test
					
				})
			}
					

					
					
		},
		methods:{
			handleTopChange(){
				console.log(11)
			},
			allLoaded(){
				
			},
			loadTop() {
			alert(1)
  this.$refs.loadmore.onTopLoaded();
},
loadBottom() {

	console.log('pp')

  this.$refs.loadmore.onBottomLoaded();
			alert(2)
  
},
			qx(){
				
				 
					return	new Promise(function(resolve,reject){
					
					
					setTimeout(function(){
						
						resolve(1)
						
					},5000)
					

				})
			}, 
		async	add(){
			
			Indicator.open('111')
				
				this.$set(this.b[0],'test',4);
				console.log('执行')
				 const result_= await  this.qx()
				
					console.log(result_)
					console.log('wws')
				
		
				
				
				
			}
		},
		created(){
			
		
			
			

}
		
		
	}
	
</script>

<style>
	
</style>