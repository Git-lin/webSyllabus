/**
 * 功能：Vue的class和style绑定
 * 日期：2017/6/26
 **/
Vue.config.silent = true;

let app1 = new Vue({
	el: '#app-1',
	data: {
		statusTrue: true,
		statusFalse: false
	}
});

let app2 = new Vue({
	el: '#app-2',
	data: {
		styleObject: {
			'fz-26': true,
			'text-blue': true,
			'text-underline': false
		}
	}
});

let app3 = new Vue({
	el: '#app-3',
	data: {
		hobbyList: [
			{ buttonName: '编程', activeStatus: true },
			{ buttonName: '游戏', activeStatus: true },
			{ buttonName: '看书', activeStatus: false },
			{ buttonName: '美食', activeStatus: true },
			{ buttonName: '运动', activeStatus: false },
			{ buttonName: '电影', activeStatus: true }
		]
	},
	methods: {
		toggleClass: function (index) {
			this.hobbyList[index].activeStatus = !this.hobbyList[index].activeStatus;
		}
	}
});

let app4 = new Vue({
	el: '#app-4',
	data: {
		stateText: {
			success: '成功',
			fail: '失败'
		},
		toggle: true,
		status: 'ok',
		header: null
	},
	computed: {
		successClass: function () {
			return {
				'border-success': this.toggle && this.status && !this.header,
				'text-success': this.toggle === true && this.status === 'ok' && this.header === null
			}
		},
		failClass: function (index) {
			return {
				'border-success': !this.toggle && !this.status  && this.header,
				'text-success': this.toggle === false && this.status === 'fail' &&  this.header !== null,
				'border-fail': 2 > 3 || 5 > 3,
				'text-fail': true,
				'mt-10': 53 + 47 === 100
			}
		}
	}
});

let app5 = new Vue({
	el: '#app-5',
	data: {
		red: 'text-red',
		blue: 'text-blue',
		fz: 'fz-22',
		fs: 'fs-italic',
		yes: true,
		no: false
	}
});

Vue.component('test-class', {
	props: ['prop'],
	template: '<p class="text-success">测试组件挂载class，及样式优先级</p>'
});
let app6 = new Vue({
	el: '#app-6',
	data: {}
});
