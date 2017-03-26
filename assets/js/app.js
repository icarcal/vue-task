'use strict';

const bus = new Vue();

Vue.component('tab', {
	template: `<div :id="id" v-show="isActive"><slot></slot></div>`,
	computed: {
		slug() {
			return `#${this.id}`
		}
	},
	mounted() {
		this.isActive = this.selected
	},
	data: function () {
		return {
			isActive: false
		}
	},
	props: {
		title: { required: true },
		id: { required: true },
		selected: { default: false }
	}
});

Vue.component('tabs', {
	template: `
	  <div class="row">
	    <div class="col s12">
	      <ul class="tabs">
	        <li v-for="tab in tabs" class="tab col s3 tabs-fixed-width"><a :class="{ 'active': tab.isActive }" :href="tab.slug" @click="activateTab(tab)">{{ tab.title }} {{ tab.isActive }}</a></li>
	      </ul>
	    </div>
	    <slot></slot>
	  </div>
	`,
	methods: {
		activateTab(tab) {
			this.tabs.forEach(function (item) {
				item.isActive = (item.id == tab.id);
			});
		}
	},
	created() {
		this.tabs = this.$children;
	},
	data: function() {
		return {
			tabs: []
		};
	},
	props: ['title']
});

Vue.component('task', {
	template: `
		<div class="col s12 m6">
      <div class="card grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{ text }}</span>
        </div>
        <div class="card-action center-align">
          <a class="btn green" @click="finishTask">finish</a>
          <a class="btn blue-grey lighten-3" @click="dismissTask">Dismiss</a>
        </div>
      </div>
    </div>
	`,
	props: ['text'],
	methods: {
		finishTask() {
			console.log('finish');
		},
		removeTask(id) {
			this.tasks.pop(id);
		},
		dismissTask(id) {
			let task = this.tasks[id];
			task.status = 'dismissed';
		}
	}
});

Vue.component('task-collection', {
	template: `
    <div class="row">
			<task v-for="task in this.tasks" :text="task.title" :key="task.id"></task>
    </div>
	`,
	methods: {
		taskAdded(task) {
			let id = this.tasks.length + 1;
			this.tasks.push({ id, title: task.title, status: 'new' });
		}
	},
	created: function () {
	  bus.$on('task-added', this.taskAdded)
	},
  data : () => {
	  return {
			tasks: [
				{ id:1, title: 'Learn Vue', status: 'todo' },
				{ id:2, title: 'Learn React', status: 'done' },
			]
		}
  }
});

Vue.component('task-add-form', {
	template: `
		<div class="row">
			<form class="col s6 offset-s3">
				<div class="row">
			    <div class="input-field col s10">
			      <i class="material-icons prefix">mode_edit</i>
			      <input id="new-task" type="text" class="validate" :class="{ 'invalid': !isValid }" placeholder="Add your task here" v-model="task">
			      <span v-show="!isValid" class="badge">Field required</span>
			    </div>
					<div class="input-field col s2">
  					<a class="btn-floating waves-effect waves-light" @click="addTask"><i class="material-icons">add</i></a>
  				</div>
			  </div>
		  </form>
	  </div>
	`,
	data: () => {
		return {
			task: '',
			isValid: true,
		}
	},
	methods: {
		addTask() {
			if (this.task !== '') {
				bus.$emit('task-added', { title: this.task });
				this.task = '';
				return this.isValid = true;
			}

			return this.isValid = false;
		}
	}
});

const app = new Vue({
  el: '#app'
});
