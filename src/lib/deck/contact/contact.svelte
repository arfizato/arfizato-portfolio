<script>
// @ts-nocheck


</script>

<section id="contact">
    <h1>CONTACT ME</h1>
    <form name="hit-me-up" netlify data-netlify="true" >
        <label for="text">
            <input type="text" name="name" id="name" placeholder="Name" class="formInp">
        </label>
        <label for="email">
            <input type="email" name="email" id="email" placeholder="Email" class="formInp">
        </label>
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" class="formInp"></textarea>
        <button type="submit">Send</button>
    </form>
</section>

<style>
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1em;
        
    }
    .formInp{
        background-color: var(--r-background-color);
        border: 1px solid var(--r-main-color);
        border-radius: 1em;
        padding: .5em;
        width: 30dvw;
        resize: none;
        color: var(--r-main-color);
        font-family: 'Share Tech', 'Exo 2', sans-serif;
        
    }
    button{
        background-color: var(--r-main-color);
        border: 1px solid var(--r-main-color);
        border-radius: .5em;
        padding: .5em;
        padding-bottom: .4em;
        width: 20dvw;
        color: var(--r-background-color);
        font-weight: bold;
        cursor: pointer;
        font-family: 'OffBit Bold', 'vt323' , 'Press Start 2P', sans-serif;
        transition: all .2s ease-in-out;
    }
    button:hover{
        background-color: var(--r-background-color);
        color: var(--r-main-color);
    }
	@media only screen and (max-width: 500px) {
        .formInp{
            width: 100dvw;
            font-size: 1.1em;
        }
        button{
            width: 100dvw;
            font-size: 1.1em;
        }
    }
</style>