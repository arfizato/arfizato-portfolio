<script lang="ts">
</script>

<main>
  <img class="fog1" src="/fog1.png" alt="fog asset by upklyak on Freepik" >
  <img class="fog2" src="/fog2.png" alt="fog asset by upklyak on Freepik" >
  <img class="fog3" src="/fog3.png" alt="fog asset by upklyak on Freepik" >
  <a href="https://github.com/arfizato">
    <h1 id="sayMyName">
      IBRAHIM <br>
      DOGHRI
    </h1>
  </a>
  <p class="NB">This website is still being designed. Want to take a look at my GitHub Instead?</p>
</main>

<style lang="scss">

  main{
    overflow-y: hidden;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .NB{
      position: absolute;
      z-index: 5;
      font-family: "Torchwood", sans-serif;
      font-size: 1.2em;

      background-color: #000000a0;
      padding: .2em 1em;
      color: #ffffffa0;
      clip-path: polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%);
      
      transition: all .3s;
      opacity: 0;
      
      &::selection{
          /* color: #000000bd; */
          background-color: transparent;
        }
    }
    a{
      z-index: 5;
      &::selection{
        color: #000000bd;
        background-color: transparent;
      }
      &:hover{
        span{
          img{
            /* opacity: .4; */
          }
        }
        cursor: pointer;
        &~.NB{
          opacity: 1;
        }
    }
      h1{
        margin:  0;
        font-size: 10rem;
        color:#ffffffbd;
        z-index: 5;
        animation: TextBePopping 3s linear both;
        padding: .3em .4em;
        &::selection, br::selection{
          color: #000000bd;
          background-color: transparent;
        }
      }
      /* span{
        position: relative;
        margin: 0 .2rem;
        transition: all 1s;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        img{
          margin-left: 0.2rem;
          width: 0.3em;
          height: 0.3em;
          position: absolute;
          opacity: 0;
          transition: all 1s;
          filter: invert(1);
        }
      } */
    }
    img{
      position: absolute;
      width: 80vw;
      opacity: 20%;
      max-height: 100vh;
      z-index: 2;
      user-select: none;
      pointer-events: none;
      &.fog1{
        animation: smokeBeVibrate 17s infinite normal both;
        padding-left: 200px;
      }
      &.fog2{
        /* transform: translateX(500px); */
        animation: smokeBeVibrate 20s infinite reverse both;
        padding-right: 200px;
        padding-top: 100px;
      }
      &.fog3{
        /* transform: translateX(100px); */
        animation: smokeBeJello 20s infinite alternate both;
        transform: translateX(-100px);
      }
    }
  }
</style>
