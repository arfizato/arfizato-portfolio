<script>
    import OneProject from "./oneProject.svelte";
    
    import {items} from "../../assets/data/projects.json";
</script>


<section id="projects">
    {#each items as item}
        <OneProject data={item } />
    {/each}       

</section>

<style>
    #projects{
        width: 100%;
        height: 100%;
    }
</style>