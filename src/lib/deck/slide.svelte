<script>
	// @ts-nocheck
/* ------------------------------- Components ------------------------------- */
	import { onMount } from 'svelte';
    import About from './about/about.svelte';
    import Main from './home/home.svelte';
    import Projects from './projects/projects.svelte';
    import Work from './work/work.svelte';
	import Contact from './contact/contact.svelte';
    import { pageIndex } from '@routes/stores.ts';
	import { page } from "$app/stores";


    /* --------------------------------- plugins -------------------------------- */
	import Reveal from 'reveal.js'; 
	import Animate from '../plugins/animate/animate.esm.js';
	import Verticator from '../plugins/verticator/plugin/verticator/verticator.esm.js';
	// import Markdown from 'reveal.js/plugin/markdown/markdown';
	// import Highlight from 'reveal.js/plugin/highlight/highlight';
	// import Notes from 'reveal.js/plugin/notes/notes';
	// import Simplemenu from 'reveal.js/plugin/simplemenu/plugin/simplemenu/simplemenu';
	// import 'reveal.js/plugin/simplemenu/plugin/simplemenu/simplemenu.css';

/* ------------------------------- stylesheets ------------------------------ */
    import 'animate.css';
    import 'reveal.js/dist/reveal.css';
    import './arfizato.css';
    // import 'reveal.js/dist/theme/black.css';
    import 'reveal.js/plugin/highlight/monokai.css';
    import verticatorCssPath from '../plugins/verticator/plugin/verticator/verticator.css?url';
	import { init } from 'svelte/internal';

/* -------------------------------- functions ------------------------------- */
function initAnimations(deck){
	
	// console.log('slidechanged',deck.getCurrentSlide().querySelectorAll('[data-animated], h2'))
	deck.getCurrentSlide().querySelectorAll('[data-animated]').forEach(item => {
		// console.log(item)
		if (item.nodeType==1){            
			for (let i = item.classList.length - 1; i >= 0; i--) {
				const className = item.classList[i];
				if (className.startsWith('animate__')) {
					item.classList.remove(className);
				}
			}
			item.style.display='none';
			item.offsetHeight;
			item.style.display='block';
			let animation = 'animate__' + item.getAttribute('data-animated');
			if(item.dataset.repeat!=undefined){
				item.classList.add('animate__'.concat(item.dataset.repeat));
			}
			if(item.dataset.speed!=undefined){
				item.classList.add('animate__'.concat(item.dataset.speed));
			}
			item.classList.add('animate__animated', animation);
		}
		
	});

}

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
			plugins: [   Animate, Verticator],// Simplemenu],// Notes, Highlight, Markdown,
			// animated: {
				// H1: { animated: 'slideInDown' },
				// H2: { animated: 'slideInDown', repeat: 'repeat-3' },
				// IMG: { animated: 'backInDown', repeat: 'repeat-2', speed: 'slower' },
				// P: { animated: 'bounceInRight', speed: 'fast' },
				// IMG: { animated: 'jello', repeat: 'infinite', speed: 'slower' }
			// },
			verticator: {
				csspath: verticatorCssPath,
                clickable: false,
			},
			// simplemenu: {
			// 	csspath: false
			// }
		});
		// console.log("deck",document.querySelectorAll(".slides > section"), $page)
		if(["","#/home"].includes($page.url.hash))
			pageIndex.set(1);

        deck.on( 'slidechanged', event => {
            // event.previousSlide, event.currentSlide, event.indexh, event.indexv
            // console.log( "event.indexh:",event.indexh, "event.indexv:",event.indexv); /// "event.previousSlide:",event.previousSlide, "event.currentSlide:",event.currentSlide,
            pageIndex.set(event.indexh + 1);
			initAnimations(deck);
        });
	});
</script>

<div class="reveal">
	<div class="slides">
        <Main />
        <About />
        <Work />
        <Projects />
		<!-- <Contact /> -->
	</div>
</div>


<style>
    .reveal {
        border: 4px solid var(--r-main-color);
        width: 100%;
        height: calc(100dvh - 8px);
	}
	@media only screen and (max-width: 500px) {
		.reveal{
			width: calc(100vw - 8px);
			height: calc(100dvh - 20dvh - 8px);
		}
	}
</style>