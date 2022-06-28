<template>
 <section class="newsletter">  
        <div class="text-center content p-5" id="mc_embed_signup" >
<form 
action="https://servax.us11.list-manage.com/subscribe/post?u=a569ad533741592bef61397e5&amp;id=f3bfcc5e6b" 
method="post"
 id="mc-embedded-subscribe-form" 
 name="mc-embedded-subscribe-form" 
 class="validate"
 target="_blank" novalidate>

<h4>Signup for Our Newsletter</h4> 
<p>Get updated about ServaX and the next wave in social media evolution!</p>
 

   <input type="email"
     class="form-control" name="EMAIL"  id="mce-EMAIL" aria-describedby="helpId" placeholder=""  required> 
<button type="submit" class="btn btn-success mt-3">Subscribe</button>
      
</form>
</div>
    </section>
     


      



 <footer>
      <div class="  footer">
         
        <div class=" d-none d-lg-block  "> <router-link :to="{ name: 'Home' }"><img src="../assets/img/logo.svg" alt="" /></router-link></div>
        <!-- <div class="col-md-12 col-lg-2  mt-col-"><h6>ServaX</h6></div> -->
        <div class=" d-none d-lg-block">
           <router-link :to="{ name: 'Home' }" class="a
                
              ">Home</router-link>
                <router-link :to="{ name: 'Team' }" class="a
                
              ">Team</router-link>
                <router-link :to="{ name: 'Roadmap' }" class="a
                
              ">Roadmap</router-link>
                <router-link :to="{ name: 'Tokenomics' }" class="a 
                
              ">Tokenomics</router-link> 
                <a href="mailto:support@servax.io" class="a">Contact</a>
        </div>
        <div class=" text-center">
         <a href="https://t.me/ServaX_Officalgroup" target="_blank"> <img src="../assets/img/telegram-black.svg" alt="px-2" class="px-3 " style="width:50px; height:50px;"></a>
          <a href="https://twitter.com/ServaX_live" target="_blank" > <img src="../assets/img/twitter-icon.svg" alt="px-2" class="px-3 " style="width:50px; height:50px;"></a>
          <a href="mailto:mailto:support@servax.io" target="_blank"> <img src="../assets/img/Email.svg" alt="px-2" class="px-3 " style="width:50px; height:50px;"></a> 
        </div>

      </div>



    </footer>
     

</template>

<script>
export default {
name: 'Footer', 


}
</script> 
<style scoped>


.newsletter {

    color: #E5E5E5;
    /* z-index: 9; */
    background: #0E0E0E;
    position: absolute;
    width: 900px;
    height: 300px;
    /* border-radius: 20px; */
    left: -50%;
    right: -50%;
    /* padding: 20px; */
    margin: 0px auto -250px auto;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.newsletter .content {
    width:500px ;
    padding:10px;
}

.newsletter h4 {
    font-family: DM Sans;
}

.newsletter p {
    font-family: DM Sans;
    /* width:400px; */
}

footer {
    display: flex;
    align-items: flex-end;
    /* flex-direction: row !important; */
    justify-content: center;

    /* ff 3.6+ */
    background: -moz-radial-gradient(ellipse at 72% 51%, rgba(255, 255, 255, 1) 48%, rgba(84, 255, 142, 1) 100%);

    /* safari 5.1+,chrome 10+ */
    background: -webkit-radial-gradient(ellipse at 72% 51%, rgba(255, 255, 255, 1) 48%, rgba(84, 255, 142, 1) 100%);

    /* opera 11.10+ */
    background: -o-radial-gradient(ellipse at 72% 51%, rgba(255, 255, 255, 1) 48%, rgba(84, 255, 142, 1) 100%);

    /* ie 10+ */
    background: -ms-radial-gradient(ellipse at 72% 51%, rgba(255, 255, 255, 1) 48%, rgba(84, 255, 142, 1) 100%);

    /* global 92%+ browsers support */
    background: radial-gradient(ellipse at 72% 51%, rgba(255, 255, 255, 1) 48%, rgba(84, 255, 142, 1) 100%);

    min-height: 300px;
    margin-top: 100px;
    max-width: 100%;
}


 
.footer {
  padding: 10px;   
   display: flex;
  justify-content:space-evenly;
  flex-direction: row !important;
 width:100%; 
 /* background:red; */
 padding-top:300px;
}  

.footer h6 {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  /* padding-left: 10px;  */

}

.footer .a {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  text-decoration: none;
  color: #0E0E0E !important;
  padding-right: 5px; 
}







  






@media only screen and (max-width:800px) {
  
.newsletter {
        /* position:relative; */
        max-width: 300px;
        height: 400;
        border-radius: 10px;
        /* margin: -100px auto 0px auto;  */
        /* box-shadow: #54FF8E 0px 20px 200px -10px; */
        padding: 10px
    }

    .newsletter .content input {
        width: 90%
    }

    footer {
        max-width: 100vw;

    }

}

   




    




     


      







 
</style>