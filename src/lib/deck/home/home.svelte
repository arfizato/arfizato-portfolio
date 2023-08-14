<script lang="ts">
    // export let deck: any;
/* -------------------------------- packages -------------------------------- */
    import { onMount } from "svelte";
    import lottie from "lottie-web";
    import { pageIndex } from '@routes/stores.ts';
    

/* --------------------------------- assets --------------------------------- */// @ts-ignore
    import intro from "@lottie/intro.json";// @ts-ignore
    import arrow from "@lottie/arrow.json";

/* ------------------------------- components ------------------------------- */

/* ------------------------------- stylesheets ------------------------------ */

/* -------------------------------- functions ------------------------------- */
    let introAnimContainer: HTMLElement,
        arrowAnimContainer: HTMLElement,
        introAnim: any;

    function arroAnimation(anim: any, direction: number){
        // console.log("ha",direction)
        let lastFrame = anim.totalframes -1;
        anim.setDirection(direction)
        anim.goToAndPlay(direction>0? 0 : lastFrame ,true)
    }
    function handleSlideChange(){    
            // console.log("page index",$pageIndex);
            if ($pageIndex == 1){
                introAnim.goToAndPlay(0,true)
            }
            // }else{
            //     introAnim.goToAndPause(introAnim.totalframes-1,true)
            // }
    }
/* ---------------------------- lifecycle events ---------------------------- */
    $: $pageIndex && handleSlideChange();

    onMount(()=>{
        introAnim = lottie.loadAnimation({
            container: introAnimContainer,
            animationData: intro,
            loop: false,
            
        })
        
        document.querySelectorAll("path").forEach((path)=>{
            path.style.fill = "var(--r-main-color)"
        });
        // console.log("home deck", deck);
        // deck.on('slidechanged', function(event) {
        //     if (event.indexh==0){
        //         introAnim.goToAndPlay(0,true)
        //     }else{
        //         introAnim.goToAndPause(introAnim.totalframes-1,true)
        //     }
        // });

    })

</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<section id="home">
    <div class="introContainer animC " bind:this={introAnimContainer} />

</section>

<style>
</style>