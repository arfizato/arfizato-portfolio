<script>
    import MyImage from "../../assets/images/fullmoon.jpg";
    import Socials from "./socials.svelte";
    import about from "../../assets/data/about.json";
</script>


<section id="about">
    <div class="aboutSubContainer ">
        <div class="contentContainer">
            <h2  data-animated="fadeInDown">{about.name}</h2>
            <Socials data={about.socials}/>
            <p data-animated="fadeInUp" >{about.bio}</p>
        </div>
        <img src={MyImage} alt="of ibrahim serving the audio gods" data-animated="fadeInRight">
    </div>
</section>

<style>
    h1{
        font-size: 1rem;
        /* font-weight: 700;
        margin-bottom: 1rem; */
    }
    .aboutSubContainer{
        display: grid;
        align-items: center;
        justify-items: center;
        
        grid-template-columns: 2.5fr auto;
        gap: 20px;
        /* height: 70vh; */
    }
    .contentContainer{      
        text-align: justify;
        -moz-text-align-last: center;
        text-align-last: center;
    }
    img{
        height: 70vh; 
        border: var(--r-main-color) 2px solid;
    }
</style>
