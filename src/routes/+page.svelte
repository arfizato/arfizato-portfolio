<!-- App.svelte -->
<script lang="ts">
	// @ts-ignore
	import intro from '@lottie/intro.json'; // @ts-ignore
	import arrow from '@lottie/arrow.json';

	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import lottie from 'lottie-web';

	import '$lib/deck/slide.svelte';
	import Slide from '$lib/deck/slide.svelte';

	let introAnimContainer: HTMLElement, arrowAnimContainer: HTMLElement, arroAnim: any;

	onMount(() => {
		lottie.loadAnimation({
			container: introAnimContainer,
			animationData: intro,
			loop: false
		});

		setTimeout(() => {
			arroAnim = lottie.loadAnimation({
				container: arrowAnimContainer,
				animationData: arrow,
				loop: false,
				autoplay: false
			});
		}, 1700);
	});
	function arroAnimation(anim: any, direction: number) {
		// console.log("ha",direction)
		let lastFrame = anim.totalframes - 1;
		anim.setDirection(direction);
		anim.goToAndPlay(direction > 0 ? 0 : lastFrame, true);
	}
</script>

<svelte:head>
	<title>Ibrahim DOGHRI's Portfolio</title>
</svelte:head>

<Slide />

<style>
</style>
