<script lang="ts">
    import { page } from "$app/stores";
    import externalURL from "@imgs/external-link.png";


    export let data: any;
    const imagepath = `${$page.url.origin}/api?file=projects/${data.imgpath}`;
</script>
<section id={data.id}>
    <div class="jobContainer">
        <div class="textContainer">
            <div class="titleContainer">
                <h1>{data.title}</h1>
                {#if data.url && data.url !== ""}
                    <a class="projectLink" href={data.url} target="_blank" rel="noreferrer"><img src={externalURL} alt="externalurl"></a>
                {/if}
            </div>
            <h6 class="offbitDotFont stack ">{data.stack}</h6>
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
    justify-content: center;
    align-items: center;
    gap: 20px;
    /* margin: 0 0 5rem 0; */
}
.textContainer {
    /* width: 50%; */
}
.titleContainer{
    display: grid;
    grid-template-columns: 1fr 25px;
    /* flex-direction: row; */
    /* justify-content: center; */
    align-items: start;
    gap: 10px;
}
.projectLink{
    transition: all 0.2s;
}
.projectLink:hover{
    transform: scale(1.3);
}
.titleContainer img{
    margin: 0 !important;
    width: 20px !important;
}

.stack{
    font-size: .5em;
    letter-spacing: 2px;
    font-weight: 100;
}

.jobImg{
    width: 50%;
    max-width: 450px;
    height: auto;
    object-fit: contain;
    /* border: var(--r-main-color) 2px solid; */
    /* filter: drop-shadow(1px 1px  0 #fff) drop-shadow(-1px -1px  0 #fff) drop-shadow(-1px 1px  0 #fff) drop-shadow(1px -1px  0 #fff); */
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