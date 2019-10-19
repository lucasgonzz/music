<template>
	<li class="artist">
		<h2><a :href="artist.url" target="_blank">{{artist.name}}</a></h2>
		<img :src="artist.image[1]['#text']" alt="">
	</li>
</template>
<script>
export default {
	name: 'artist',
	props: ['artist'],
	data() {
		return {

		}
	}
}
</script>
<style lang="sass" scoped>
	li.artist
		display: block

</style>