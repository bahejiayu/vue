module.exports = {
	devServer:{
			port: 8071,

   proxy: {
      "/v2": {
        target: "https://douban.uieee.com",
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
     
      }
   }
		
	},

  lintOnSave:false
}

