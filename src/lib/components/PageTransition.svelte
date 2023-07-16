<script>
	import { fly,slide } from 'svelte/transition';
	import {linear} from "svelte/easing";
	export let pathname = '';
</script>

{#key pathname}
	<div 
		in:fly={{ x:-1920, duration: 300, opacity: 1, easing:linear}} 
		out:fly={{ x: 1000, duration: 300, opacity: 1, easing:linear }}
	>
		<slot />
	</div>
{/key}
