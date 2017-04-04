<template>
  <div class="row">
    <div class="col s12">
      <ul class="tabs">
        <li v-for="tab in tabs" class="tab col s3 tabs-fixed-width"><a :class="{ 'active': tab.isActive }" :href="tab.slug" @click="activateTab(tab)">{{ tab.title }}</a></li>
      </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: 'tabs',
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
	}
</script>
