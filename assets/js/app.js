'use strict';

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
    	<div class="col s12">
    		<h2 class="center-align">{{ title }}</h2>
    	</div>
			<task v-for="task in this.tasks" :text="task.title" :key="task.id"></task>
    </div>
	`,
	props: ['title', 'tasks'],
});

Vue.component('task-add-form', {
	template: `
		<div class="row">
			<form class="col s6 offset-s3">
				<div class="row">
			    <div class="input-field col s10">
			      <i class="material-icons prefix">mode_edit</i>
			      <input id="new-task" type="text" class="validate" placeholder="Add your task here" v-model="task">
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
			task: ''
		};
	},
	props: ['tasks'],
	methods: {
		addTask() {
			let id = this.tasks.length + 1;
			this.tasks.push({ id, title: this.task, status: 'new' });
			this.task = '';
		}
	}
});

const app = new Vue({
  el: '#app',
  data : {
		tasks: [
			{ id:1, title: 'Learn Vue', status: 'todo' },
			{ id:2, title: 'Learn React', status: 'done' },
		]
  }
});
