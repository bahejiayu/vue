import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		zjy:"赵佳宇",
		List:[
			{name:"赵佳宇",age:12}
		
		]
  },
  mutations: {
		gai:function(){
				this.state.zjy="嘻嘻嘻"
			
		},
		add(a,cs){
			console.log(a==this.state)
			console.log(this.state)
			this.state.List.push(cs)
				
		}
  },
  actions: {

  }
})
