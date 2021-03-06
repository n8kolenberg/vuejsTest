Vue.component('tabs', {
	template: `
		<div class="container">
			<div class="tabs is-centered is-boxed is-medium">
				  <ul>
					  <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
					    <a href="#" @click=selectTab(tab)>
								<span class="icon is-small"><i :class="tab.symbolClass"></i></span>
								<span>{{tab.name}}</span>
					  	</a>
					  
					  </li>
				    
				  </ul>
				</div>
				
				<div class="tabs-details">
					<slot></slot>
				</div>
		</div>
	`,

props: {
	class: {},
},

data() {
	return {
		tabs: [],
	};
},

methods: {
	selectTab(selectedTab) {
 		this.tabs.forEach(tab => {
 			tab.isActive = (tab.name == selectedTab.name)
 		});
	}
},

	created() {
		this.tabs = this.$children;

	},

});


Vue.component('tab', {
	template: `
		<div v-show="isActive"><slot></slot></div>
	`,

	data() {
		return {
			isActive: false
		};
	},

	mounted() {
		this.isActive = this.selected;
	},

	props: {
		name: {required: true},
		symbolClass: {required: true},
		selected: {default: false}
	},

});



var app = new Vue({
	el: '#root',

	data: {
		message: 'Hello World'

	},

});