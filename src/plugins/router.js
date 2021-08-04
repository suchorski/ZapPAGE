import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Support from '@/views/Support'
import Commands from '@/views/Commands'
import Coins from '@/views/Coins'
import Login from '@/views/Login'
import Blog from '@/views/Blog'
import Post from '@/views/Post'

Vue.use(Router);

import entries from '@/blog/entries.json'

const router = new Router({
	mode: 'history',
	routes: [
		{ name: 'Index', path: '/', components: { default: Home } },
		{ name: 'Suporte', path: '/suporte', components: { default: Support } },
		{ name: 'Comandos', path: '/comandos', components: { default: Commands } },
		{ name: 'Moedas', path: '/moedas', components: { default: Coins } },
		{ name: 'Login', path: '/login', components: { default: Login } },
		{ name: 'Blog', path: '/blog', components: { default: Blog } },
		{
			path: '/postagem', components: { default: Post }, children: [
				...entries.map(e => ({
					name: e.title,
					path: `${e.id}`,
					component: () => import(`@/blog/posts/${e.id}.md`)
				}))
			]
		},
	]
});

export default router;