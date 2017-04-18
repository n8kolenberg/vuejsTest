Vue.component('tabs', {
	template: `
		<div class="container">
			<div class="tabs is-centered is-boxed is-medium">
				  <ul>
					  <li v-for="tab in tabs">
					    <a>
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
	class: {}
},

data() {
	return {
		tabs: [],
	};
},

	created() {
		this.tabs = this.$children;

	},

});


Vue.component('tab', {
	template: `
		<div><slot></slot></div>
	`,
	props: {
		name: {required: true},
		symbolClass: {required: true}
	},

});



var app = new Vue({
	el: '#root',

	data: {
		message: 'Hello World'

	},

})