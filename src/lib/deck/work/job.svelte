<script lang="ts">
    import { page } from "$app/stores";
    export let data: any;
    const imagepath = `${$page.url.origin}/api?file=work/${data.imgpath}`;
</script>
<section id={data.id}>
    <div class="jobContainer">
        <div class="textContainer">
            <h1>{data.title}</h1>
            <h6 class="offbitDotFont employer">{data.employer}</h6>
            <p>{data.description}</p>
        </div> 
        {#if data.imgpath!== ""}
                <img src={imagepath} alt={data.title} class="jobImg">                
        {/if}
    </div>
</section>

<style>
.jobContainer {
    width: calc(100% - 3vmin - 42px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    /* margin: 0 0 5rem 0; */
}
.textContainer {
    /* width: 50%; */
}

.employer{
    font-size: 1em;
    letter-spacing: 2px;
    font-weight: 100;
}
.jobImg{
    width: 50%;
    max-width: 450px;
    height: auto;
    object-fit: contain;
    /* filter: drop-shadow(1px 1px  0 #fff) drop-shadow(-1px -1px  0 #fff) drop-shadow(-1px 1px  0 #fff) drop-shadow(1px -1px  0 #fff); */
    /* border: var(--r-main-color) 2px solid; */
}
section{
    width: 100%;
    top: 0 !important;
    /* align-self: center; */
    height: 100%;
    display: flex !important;
    justify-content: center;
    align-items: stretch;
}
</style>