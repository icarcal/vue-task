<template>
	<div :id="id" v-show="isActive"><slot></slot></div>
</template>

<script>
	export default {
	  name: 'tab',
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
	}
</script>
