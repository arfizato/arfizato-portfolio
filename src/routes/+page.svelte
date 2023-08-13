<!-- App.svelte -->
<script lang="ts">// @ts-ignore
    import intro from "@lottie/intro.json";// @ts-ignore
    import arrow from "@lottie/arrow.json";

    import { browser } from '$app/environment';
    import { onMount } from "svelte";
    import lottie from "lottie-web";

    import "$lib/deck/slide.svelte";
	import Slide from "$lib/deck/slide.svelte";


    let introAnimContainer: HTMLElement,
        arrowAnimContainer: HTMLElement,
        arroAnim: any;


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
    function arroAnimation(anim: any, direction: number){
        // console.log("ha",direction)
        let lastFrame = anim.totalframes -1;
        anim.setDirection(direction)
        anim.goToAndPlay(direction>0? 0 : lastFrame ,true)
    }

</script>

<svelte:head>
    <title>Ibrahim DOGHRI's Portfolio</title>
</svelte:head>

<!-- <div class="animContainer">
    <div class="introContainer animC" bind:this={introAnimContainer} />
    <div class="arrowContainer animC" bind:this={arrowAnimContainer} 
        on:mouseenter={()=>arroAnimation(arroAnim,1)} 
        on:mouseleave={()=>arroAnimation(arroAnim,-1)} 
    />
</div> -->
<!-- <main>
    <img class="fog1" src="/fog1.png" alt="fog asset by upklyak on Freepik" >
    <img class="fog2" src="/fog2.png" alt="fog asset by upklyak on Freepik" >
    <img class="fog3" src="/fog3.png" alt="fog asset by upklyak on Freepik" >
    <a href="https://github.com/arfizato">
      <h1 id="sayMyName">
        IBRAHIM <br>
        DOGHRI
      </h1>
    </a>
    <p class="NB">This website is still being designed. Want to take a look at my GitHub Instead?</p>
</main> -->

<Slide>

</Slide>


<style>
    /* .animContainer{
        position: relative; 
        display: flex;
        justify-content: center;
    }
    .animC{
        border: 4px solid #fff;
        height: calc(100vh - 8px);
        width: calc(100vw - 20vw - 10px);
        position: absolute;
    }
    .arrowContainer{
        animation: showBoy 2.5s ;
    }
    @keyframes showBoy{
        0%{opacity: 0;}
        90%{opacity: 0;}
        100%{opacity: 100;}
    }
    @media only screen and (max-width: 500px) {
        .animC{
            
            height: calc(100vh - 20vh- 10px);
            width: calc(100vw - 8px);
        }
    } */
</style>