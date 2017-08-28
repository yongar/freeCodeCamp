module.exports={
	entry:["babel-polyfill","./source/client.js"],
	output:{
		path:"/Users/yongar/freeCodeCamp/jdeDate",
		filename: "./public/index.js"
	},
	devServer: {
		inline:true,
		compress: true,
		contentBase:"./public",
		port:9999
	},
	module: {
		loaders:[
			{test:/\.js$/,
				exclude:/node_modules/,
				loaders:["babel-loader"]
			}
		]
	},
	node:{
		console:true,
		fs:"empty",
		net:"empty",
		tls:"empty"
	}
};