<template>
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
</template>

<script>
	export default {
	  name: 'TaskAddForm',
	  props: ['bus'],
		data: () => {
			return {
				task: '',
				isValid: true,
			}
		},
		methods: {
			addTask() {
				if (this.task !== '') {
					this.bus.$emit('task-added', { title: this.task });
					this.task = '';
					return this.isValid = true;
				}

				return this.isValid = false;
			}
		}
	};
</script>
