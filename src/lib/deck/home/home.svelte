<script lang="ts">
/* -------------------------------- packages -------------------------------- */
    import { onMount } from "svelte";
    import lottie from "lottie-web";

/* --------------------------------- assets --------------------------------- */// @ts-ignore
    import intro from "@lottie/intro.json";// @ts-ignore
    import arrow from "@lottie/arrow.json";

/* ------------------------------- components ------------------------------- */

/* ------------------------------- stylesheets ------------------------------ */

/* -------------------------------- functions ------------------------------- */
    let introAnimContainer: HTMLElement,
        arrowAnimContainer: HTMLElement,
        arroAnim: any;

    function arroAnimation(anim: any, direction: number){
        // console.log("ha",direction)
        let lastFrame = anim.totalframes -1;
        anim.setDirection(direction)
        anim.goToAndPlay(direction>0? 0 : lastFrame ,true)
    }
/* ---------------------------- lifecycle events ---------------------------- */
    onMount(()=>{
        lottie.loadAnimation({
            container: introAnimContainer,
            animationData: intro,
            loop: false,
        })

        setTimeout(()=>{
            arroAnim = lottie.loadAnimation({
                container: arrowAnimContainer,
                animationData: arrow,
                loop: false,
                autoplay: false,

            })
        },1700)
    })

</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<section id="home">
    <div class="introContainer animC" bind:this={introAnimContainer} />

</section>