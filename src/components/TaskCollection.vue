<template>
  <div class="row">
		<task v-for="task in this.tasks" :text="task.title" :key="task.id"></task>
  </div>
</template>

<script>
	import Task from '../components/Task.vue'

	export default {
	  name: 'TaskCollection',
	  components: {
			task: Task
		},
		methods: {
			taskAdded(task) {
				let id = this.tasks.length + 1;
				this.tasks.push({ id, title: task.title, status: 'new' });
			}
		},
		created: function () {
		  this.$on('task-added', this.taskAdded)
		},
	  data : () => {
		  return {
				tasks: [
					{ id:1, title: 'Learn Vue', status: 'todo' },
					{ id:2, title: 'Learn React', status: 'done' },
				]
			}
	  }
	};
</script>
