<script lang="ts">
	import { each } from "svelte/internal";
    import {name, bio, imagePath, socials} from "./about.json";


</script>

<svelte:head>
    <title>ABOUT - Ibrahim DOGHRI</title>
</svelte:head>


<main>
        <h1 class="pixelFont name" >{name}</h1>
        <div class="container exoFont">

            <p class="bio">
                {bio}
                <span class="socials ">
                    {#each socials as social}
                        <a href={social.link}><img src={social.image} alt={social.link} class="socialImg"></a>
                    {/each}
                </span>
            </p>
            <img class="profile " src={ imagePath} alt="a pic of me ">
    </div>
</main>

<style>
    main{
        color: #fff;
        border: 4px solid #fff;
        padding: 1em;
        /* height: 100%; */
        height: calc(100vh);
        max-height: 100vh;
        box-sizing: border-box;
    }
    .name{
        font-weight: 500;
        padding-left: .5em;
    }
    .container{
        display: grid;
        grid-template-columns: 2fr 1fr;
        /* height: auto; */
        align-items: center;
        gap: 1em;
    }
    img.profile{
        object-fit: cover;
        width: 100%;
        border: 2px solid #fff;
    }
    p.bio{
        font-size: 2em;
        padding-left: .5em;
        line-height: 1.5em;

        /* position: relative; */
    }
    span.socials{
        position: absolute;
        bottom: .5em;
        right: calc(30%);
    }
    img.socialImg{
        transition: all .3s;
        opacity: .7;
    }
    img.socialImg:hover{
        scale: .9;
        opacity: 1;
    }
</style>