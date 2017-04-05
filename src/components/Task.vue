<template>
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
</template>

<script>
	export default {
	  name: 'Task',
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
	};
</script>
