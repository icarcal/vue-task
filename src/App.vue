<template>
  <div id="app" class="container">
    <div class="col s12">
    	<h2 class="center-align">Todo list</h2>
    </div>
  	<task-add-form :bus="eventBus"></task-add-form>
  	<tabs>
  		<tab title="Todo" id="todo" selected="true">
				<task-collection :bus="eventBus"></task-collection>
  		</tab>
  		<tab title="Done" id="done">
  		</tab>
  		<tab title="Dismissed" id="dismissed">
  		</tab>
  	</tabs>
  </div>
</template>

<script>
	import Vue from 'vue'
	import Tabs from './components/Tabs.vue'
	import Tab from './components/Tab.vue'
	import TaskAddForm from './components/TaskAddForm.vue'
	import TaskCollection from './components/TaskCollection.vue'

	const eventBus = new Vue();

	export default {
	  name: 'app',
		components: {
			tab: Tab,
			tabs: Tabs,
			taskAddForm: TaskAddForm,
			taskCollection: TaskCollection
		},
		data: () => {
			return {
				eventBus
			};
		}
	}
</script>
