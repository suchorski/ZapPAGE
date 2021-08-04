module.exports = {
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'ZapBOT - Um poderoso BOT de Discord';
				return args;
			})
		config.module
			.rule('md')
			.test(/\.md$/)
			.use('vue-loader')
			.loader('vue-loader')
			.end()
			.use('vue-markdown-loader')
			.loader('vue-markdown-loader/lib/markdown-compiler')
			.options({
				raw: true
			})
	},
	"transpileDependencies": [
		"vuetify"
	]
}