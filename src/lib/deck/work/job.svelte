<script lang="ts">
    import { page } from "$app/stores";
    export let data: any;
    // const imagepath = `${$page.url.origin}/api?file=work/${data.imgpath}`;
    const imagepath = `${$page.url.origin}/work/${data.imgpath}`;
</script>
<section id={"work__"+data.id }>
    <div class="jobContainer">
        <div class="textContainer">
            <h1 data-animated="fadeInDown">{data.title}</h1>
            <h6 data-animated="zoomIn" class="offbitDotFont employer">{data.employer}</h6>
            <p data-animated="fadeInUp">{data.description}</p>
        </div> 
        {#if data.imgpath!== ""}
            <img src={imagepath} alt={data.title} class="jobImg" data-animated="fadeIn">                
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
    /* .textContainer {
        width: 50%;
    } */
    .textContainer > p{
        
        text-align: justify;
        -moz-text-align-last: center;
        text-align-last: center;
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

    @media only screen and (max-width: 500px) {
        
        .jobContainer {
            width: calc(100vmax - 20vmin -  42px);
            flex-direction: column-reverse;
        }
    }

</style>