<script lang="ts">
    /* -------------------------- PACKAGES AND MODULES -------------------------- */
// @ts-nocheck
    import "../app.css";    
    import PageTransition from '../lib/components/PageTransition.svelte';
    import { page } from "$app/stores";
    import { afterNavigate } from '$app/navigation';
    import { onMount } from 'svelte/internal';
    import { pageIndex } from "./stores";
    // import { type Writable } from "svelte/store";

    /* ---------------------------- IMAGES AND ASSETS --------------------------- */
    import logo from "@imgs/logo w.png";
    import themeCat from "@imgs/themeCat.png";

/* --------------------------------- EXPORTS -------------------------------- */
    /** @type {import('./$types').LayoutData} */
    export let data: {pathname:string};
/* -------------------------------- FUNCTIONS ------------------------------- */
    $: pageindex = Number(pageIndex);

/* ---------------------------- LIFECYCLE METHODS --------------------------- */    

    
</script>

<PageTransition pathname={data.pathname}>
    <main >
        <div class="navbar"  >
            <div class="logo">
                <a href="/">
                    <img src={logo} alt="logo">
                </a>
            </div>
            <div class="navLinks spixelFont upFont" >

                <a class={$pageIndex == 0 ? "current": "wa"} href="#/home">HOME </a> 
                <a class={$pageIndex == 1 ? "current": "wa"} href="#/about">ABOUT</a> 
                <a class={$pageIndex == 2 ? "current": "wa"} href="#/work">WORK</a>
                <a class={$pageIndex == 3 ? "current": "wa"} href="#/projects">PROJECTS</a>
            </div>
            <label class="theme" for="dark">
                <img src={themeCat} alt="themeCat">
                <input type="checkbox" name="dark" id="dark">
            </label>
        </div>
        <slot />
    </main>
</PageTransition> 

<style >
    main{
        display: grid;
        grid-template-columns: 15em auto;
    }
    .navbar{
        color:white;
        height: calc(100vh - 8px) ;
        width: 15em;
        border: 4px solid #fff;
        border-right: none;

        display: grid;
        grid-template-rows: 150px auto 150px ;
        align-items: center;
        justify-content: center;
    }
    
    .logo a{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .logo a img{
        width: 64px;
        transition: all .5s ;
    }
    .logo a img:hover{
        scale: 1.1;
    }

    .navLinks{
        display: flex;
        flex-direction: column;
        font-size: x-large;
    }
    .navLinks a{        
        color: #fff;
        text-decoration: none;
        transition: all .5s;
        padding: .5em .25em;
    }
    .navLinks a:hover{
        transform: translateX(.5em);
    }
    .current{
        transform: translateX(.5em);
    }

    .theme{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .theme img{
        width: 80px;
    }
    .theme:checked ~ img{
        transform: rotateZ(90deg);
    }

    .theme input{
        visibility: hidden;
    }
</style>