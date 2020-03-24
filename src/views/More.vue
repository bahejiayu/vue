<template>
	
	<div class="page-infinite-wrapper">
			<ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
		<li class="page-infinite-listitem" v-for="item in list">{{ item }}</li>
	</ul>
	<div style="text-align: center;">
		加载中
	</div>
		
		
	</div>



</template>

	<script>
		export default {

			data() {
				return {
					list:[1,1,1,1,1,1,1,1]
				}

			},
			methods: {
				loadMore() {
					this.loading = true;
					setTimeout(() => {
						let last = this.list[this.list.length - 1];
						for(let i = 1; i <= 10; i++) {
							this.list.push(last + i);
						}
						this.loading = false;
					}, 2500);
				}
			}

		}
	</script>

	<style>
.page-infinite-wrapper {
    margin-top: -1px;
    overflow: scroll;
}
.page-infinite-listitem:first-child {
    border-top: 1px solid #eee;
}
.page-infinite-listitem {
    height: 50px;
    line-height: 50px;
}
.page-infinite-desc, .page-infinite-listitem {
    text-align: center;
    border-bottom: 1px solid #eee;
}
div,p,ul,li,body{
	margin: 0;
	padding: 0;
}
.page-infinite-wrapper{
	height: 300px;
}
	</style>