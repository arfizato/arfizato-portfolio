<script lang="ts">
    export let data: any;
</script>


<section id={data.id}>
    <h1>{data.title}</h1>
    <h6>{data.employer}</h6>
    <p>{data.description}</p>

</section>