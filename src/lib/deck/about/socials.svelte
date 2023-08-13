<script>
// @ts-nocheck
    import { page } from "$app/stores";
    export let data;
    import { themeStore } from "@routes/stores.ts";
    

</script>

<div class="socialsContainer">
    {#each data as social}
        <a href={social.url} target="_blank" rel="noreferrer" >
            <img src={`${$page.url.origin}/${social.img}`}  alt={social.alt} class={$themeStore}>
        </a>
    {/each}
</div>

<style>
    .socialsContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        width: 100%;
        height: 100%;
    }
    img{
        width: 50px;
        height: 50px;
        transition: all 0.3s ease-in-out;
        filter: invert(1);
        margin: 0 !important;
    }
    img.light{
        filter: invert(0);
    }
    img:hover{
        transform: scale(0.9);
    }
</style>