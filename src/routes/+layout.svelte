<script lang="ts">
    /* -------------------------- PACKAGES AND MODULES -------------------------- */
// @ts-nocheck
    import "../app.css";    
    import PageTransition from '../lib/components/PageTransition.svelte';
    import { page } from "$app/stores";
    import { pageIndex,themeStore } from "./stores";

    const origin = $page.url.origin;
    /* ---------------------------- IMAGES AND ASSETS --------------------------- */
    import logo from "@imgs/logo w.png";
    import themeCat from "@imgs/themeCat.png";

    import purr  from "$lib/assets/sounds/purr.wav"

    import meow  from "$lib/assets/sounds/meow.wav"
    import meow1 from "$lib/assets/sounds/meow1.wav"
    import meow2 from "$lib/assets/sounds/meow2.wav"
    import meow3 from "$lib/assets/sounds/meow3.wav"
    import meow4 from "$lib/assets/sounds/meow4.wav"
    import meow5 from "$lib/assets/sounds/meow5.wav"

    const meows = [meow, meow1, meow2, meow3, meow4, meow5]
/* --------------------------------- EXPORTS -------------------------------- */
    /** @type {import('./$types').LayoutData} */
    export let data: {pathname:string};
/* -------------------------------- FUNCTIONS ------------------------------- */
    let audio = new Audio(purr);
    const changeTheme = () => {
        const root = document.documentElement,
        theme = root.getAttribute("theme");
        let r = document.querySelector(':root')

        if (theme == "light") {
            root.setAttribute("theme", "dark");
            r.style.setProperty('--r-background-color', '#090909');
            r.style.setProperty('--r-main-color', '#f0f0f0');
            document.body.classList.remove("lightTheme");
            themeStore.set("dark");
        } else {
            root.setAttribute("theme", "light");
            r.style.setProperty('--r-main-color', '#090909');
            r.style.setProperty('--r-background-color', '#f0f0f0');
            document.body.classList.add("lightTheme");
            themeStore.set("light");

        }
    }

/* ---------------------------- LIFECYCLE METHODS --------------------------- */  
</script>

<PageTransition pathname={data.pathname}>
    <main >
        <div class="navbar"  >
            <div class="logo">
                <a href={origin+"/#/home"}>
                    <img src={logo} alt="logo">
                </a>
            </div>
            <div class="navLinks spixelFont upFont" >

                <a class={$pageIndex == 0 ? "current": "wa"} href={origin+"/#/home"}>HOME </a> 
                <a class={$pageIndex == 1 ? "current": "wa"} href={origin+"/#/about"}>ABOUT</a> 
                <a class={$pageIndex == 2 ? "current": "wa"} href={origin+"/#/work"}>WORK</a>
                <a class={$pageIndex == 3 ? "current": "wa"} href={origin+"/#/projects"}>PROJECTS</a>
                <!-- <a class={$pageIndex == 4 ? "current": "wa"} href={origin+"/#/contact"}>CONTACT ME</a> -->
            </div>
            <label class="theme" for="dark" 
                on:mouseenter|stopImmediatePropagation ={()=>{
                    if (audio.paused) {
                        audio = new Audio(purr);
                        audio.play();
                        console.log("purr")
                    }
                }}
            >            
                <img src={themeCat} alt="themeCat">
                <input type="checkbox" name="dark" id="dark" 
                    on:change={()=>{   
                        if((!audio.paused && audio.src.includes("purr") )|| audio.paused){                            
                            audio.pause();
                            audio = new Audio(meows[Math.floor(Math.random() * meows.length)]);
                            audio.play();
                            console.log("meow");
                            changeTheme();
                        }
                    }}
                >
            </label>
        </div>
        <slot />
    </main>
</PageTransition> 

<style >
    main{
        display: grid;
        grid-template-columns: 20vw auto 8px;
    }
    .navbar{
        color: var(--r-main-color);
        height: calc(100vh - 8px) ;
        width: 20vw;
        border: 4px solid var(--r-main-color);
        border-right: none;
        background-color: var(--r-background-color) ;

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
    .lightTheme .logo a img{
        filter: invert(1);
    }
    .logo a img:hover{
        scale: 1.1;
    }

    .navLinks{
        display: flex;
        flex-direction: column;
        font-size:max(1em,2.2vw);
        
    }
    .navLinks a{        
        color: var(--r-main-color);
        text-decoration: none;
        transition: all .5s;
        padding: .5em .25em;
    }
    .navLinks a:hover{
        transform: translateX(.5em);
    }
    .navLinks .current{
        transform: translateX(.5em);
        color: var(--r-link-color);
    }

    .theme{
        width: 100%;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }
    .theme img{
        width: 80px;
    }
    /* .theme:checked ~ img{
        transform: rotateZ(90deg);
    } */

    .theme input{
        visibility: hidden;
    }
    @media only screen and (max-width: 500px) {
        main{
            grid-template-columns: 1fr;
            grid-template-rows: 20dvh auto 8px;
        }
        .navbar{
            width: calc(100vw - 8px);
            border: 4px solid var(--r-main-color);
            
            height: calc(20dvh - 4px);
            grid-template-rows: 1fr;
            grid-template-columns: 100px 1fr 100px;
        }
        .navLinks{
            /* transform: rotateZ(90deg) translateX(10%); */
            writing-mode: vertical-rl;
            justify-content: center;
            /* flex-direction: column-reverse; */
        }
        .navLinks a:hover, .navLinks .current{
            transform: translateY(.5em);
        }
    }

</style>