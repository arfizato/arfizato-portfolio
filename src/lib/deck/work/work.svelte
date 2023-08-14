<script>
    import Job from "./job.svelte";
    import {items} from "../../assets/data/work.json";
</script>


<section id="work">
    <!-- <Job data={{
        id:"job-"+99, 
        title:"Summer Internship", 
        employer:"Sopra Steria", 
        imgpath: "",
        description:"I worked as a full stack developer in a team of 4 people. We developed a web application for a client using React, Spring Boot and PostgreSQL."
    }} /> -->
    {#each items as item}
        <Job data={ item } />
    {/each}
</section>

<style>
    #work{
        width: 100%;
        height: 100%;
    }
</style>