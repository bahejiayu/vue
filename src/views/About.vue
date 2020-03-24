<template>
  <div class="about">
    <h1 @click="gai()">This is an about page</h1>
    <div  @click="t_" >跳转</div>
    
    <button @click="add()" class="a" :class="is_color==true?'red':'a'" >
    	添加
    	
    </button>
  </div>
</template>
<script>
	import stroe from "@/store"
	
	
		export default {
					stroe,
					data(){
							return{
									is_color:false
								
							}
					},
					methods:{
//						1273753708
						t_(){
							this.$router.push({
   name:"home",
   params:{
    name:'nameValue',
    code:10011
 }
});
						},
							
							gai:function(){
									stroe.commit('gai')
								
							},
							add(){
								stroe.commit("add",{name:"张三",age:23})
								
							}
						
						
					},
					created(){
						console.log(this.$route.params)
					}
				
			
			
		}
		
</script>
<style>
	.red{
		color: red;
	}
</style>