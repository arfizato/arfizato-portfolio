<script>
	// @ts-nocheck
/* ------------------------------- Components ------------------------------- */
	import { onMount } from 'svelte';
    import About from './about/about.svelte';
    import Main from './home/home.svelte';
    import Projects from './projects/projects.svelte';
    import Work from './work/work.svelte';
    import { pageIndex } from '@routes/stores.ts';
    /* --------------------------------- plugins -------------------------------- */
	import Reveal from 'reveal.js';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Highlight from 'reveal.js/plugin/highlight/highlight';
	// import Notes from 'reveal.js/plugin/notes/notes';
	import Animate from 'reveal.js/plugin/animate/animate.esm.js';
	import Simplemenu from 'reveal.js/plugin/simplemenu/plugin/simplemenu/simplemenu';
	// import 'reveal.js/plugin/simplemenu/plugin/simplemenu/simplemenu.css';
	import Verticator from 'reveal.js/plugin/verticator/plugin/verticator/verticator';

/* ------------------------------- stylesheets ------------------------------ */
    import 'animate.css';
    import 'reveal.js/dist/reveal.css';
    import 'reveal.js/dist/theme/black.css';
    import 'reveal.js/plugin/highlight/monokai.css';
    import 'reveal.js/plugin/verticator/plugin/verticator/verticator.css';

/* -------------------------------- functions ------------------------------- */

/* ---------------------------- Liyfecycle Events --------------------------- */
	onMount(() => {
		// @ts-ignore
		const deck = new Reveal({
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true,
			controls: true,
			progress: false,
            autoSlide: 5000,

		});

		deck.initialize({
			plugins: [   Animate, Verticator, Simplemenu],// Notes, Highlight, Markdown,
			animated: {
				H1: { animated: 'slideInDown' },
				IMG: { animated: 'backInDown', repeat: 'repeat-2', speed: 'slower' },
				P: { animated: 'bounceInRight', speed: 'fast' },
				UL: { animated: 'jello', repeat: 'infinite', speed: 'slower' }
			},
			verticator: {
				csspath: 'reveal.js/plugin/verticator/plugin/verticator/verticator.css',
                clickable: false,
			},
			simplemenu: {
				csspath: false
			}
		});
        deck.on( 'slidechanged', event => {
            // event.previousSlide, event.currentSlide, event.indexh, event.indexv
            // console.log( "event.indexh:",event.indexh, "event.indexv:",event.indexv); /// "event.previousSlide:",event.previousSlide, "event.currentSlide:",event.currentSlide,
            pageIndex.set(event.indexh);
        } );
	});
</script>

<div class="reveal">
	<div class="slides">
		<!-- <section id="home">slide 1</section> -->
        <Main />
        <About />
        <Work />
        <Projects />
	</div>
</div>


<style>
    .reveal {
        border: 4px solid #fff;
        width: 100%;
        height: calc(100vh - 8px);
}
</style>