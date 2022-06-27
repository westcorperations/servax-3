<template>
  <header>
    <div class="d-block d-lg-none">
      <div class="navigation-bar p-4">
        <div class=""><img src="../assets/img/logo.svg" alt="" /></div>
        <div class="">
          <span class="">
            <div
              class=""
              :class="{ change: normal }"
              @click.prevent="toggle(x)"
            >
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>
          </span>
        </div>
      </div>

      <div id="myNav" class="overlay" :style="{ width: width + '%' }">
        <!-- Overlay content -->
        <!-- Overlay content -->
        <div class="overlay-content">
          <router-link :to="{ name: 'Home' }" class="">Home</router-link>
          <router-link :to="{ name: 'Team' }" class="">Team</router-link>
          <router-link :to="{ name: 'Roadmap' }" class="">Roadmap</router-link>
          <router-link :to="{ name: 'Tokenomics' }" class=""
            >Tokenomics</router-link
          >
          <router-link :to="{ name: 'Whitepaper' }" class=""
            >whitepaper</router-link
          >
        </div>
      </div>
      <div class="text" data-aos="fade-left">
        <h3>Meet the ServaX Team</h3>
       
      </div>
    </div>
    <div class="d-none d-lg-block">
      <div class="container listtopnav green borderXwidth p-3">
  <a> <router-link :to="{ name: 'Team' }" class="">Team</router-link></a>
  <a><router-link :to="{ name: 'Roadmap' }" class="">Roadmap</router-link></a>
  <a><router-link :to="{ name: 'Home' }" class=""><img src="../assets/img/desktoplogo.svg" alt="logo" class="" /></router-link></a>
  <a><router-link :to="{ name: 'Tokenomics' }" class="">Tokenomics</router-link></a>
  <a><router-link :to="{ name: 'Whitepaper' }" class="">Whitepaper</router-link></a>
</div>
      <div class="wrapper">
        <div class="text-container">
          <!-- navigation bar setion -->
          <div class="navigation-bar p-4 d-lg-none">
            <!-- Logo -->
            <div class=""><img src="../assets/img/logo.svg" alt="" /></div>
            <!-- navbar icon  -->
            <div class="">
              <span class="">
                <div
                  class=""
                  :class="{ change: normal }"
                  @click.prevent="toggle(x)"
                >
                  <div class="bar1"></div>
                  <div class="bar2"></div>
                  <div class="bar3"></div>
                </div>
              </span>
            </div>

            <!-- nav bar links mobile -->
            <div id="myNav" class="overlay" :style="{ width: width + '%' }">
              <!-- Overlay content -->
              <div class="overlay-content">
                <router-link :to="{ name: 'Home' }" class="">Home</router-link>
                <a href="team.html">Team</a>
                <router-link :to="{ name: 'Roadmap' }" class=""
                  >Roadmap</router-link
                >
                <a href="tokenomics.html">Tokenomics</a>
                <a href="whitepaper.html">White Paper</a>
              </div>
            </div>
          </div>

          <!-- planet icon/logo image -->
          <div class="planet">
            <img src="../assets/img/planet.svg" alt="" class="d-none" />
          </div>
          <!-- header text  -->
          <div class="text">
            <h3>Meet the ServaX Team</h3>
            <div  data-aos="fade-left">
            <p class="">
              The master team of value-driven techies, focused on bringing value
              and utility to the social media and communication space..
            </p></div>
          </div>
        </div>
        <div class="list-container d-none d-lg-block">
         
        </div>
      </div>
    </div>
  </header>

  <div class="body">
    <section class="section1">
      <div class="con">
        <div class="wrap">
          <div class="sec1 m-3">
            <div class="box6 mb-4" data-aos="zoom-in">
              <img src="../assets/img/avatar2.svg" alt="" srcset="" />
            </div>
            <div class="box5" data-aos="zoom-in">
              <h4>Prince Peter Antai</h4>
              <small>CEO, Founder ServaX</small>
              w
            </div>
          </div>
          <div class="sec2 m-3">
            <div class="box6 mb-4" data-aos="zoom-in">
              <img src="../assets/img/avatar2.svg" alt="" srcset="" />
            </div>
            <div class="box5" data-aos="zoom-in">
              <h4>Harry Bright</h4>
              <small>COO,. Co-Founder ServaX</small>
            </div>
          </div>
        </div>
        <div class="wrap">
          <div class="sec1 m-3">
            <div class="box6 mb-4" data-aos="zoom-in">
              <img src="../assets/img/avatar2.svg" alt="" srcset="" />
            </div>
            <div class="box5" data-aos="zoom-in">
              <h4>Victory</h4>
              <small>Designer</small>
            </div>
          </div>
          <div class="sec2 m-3">
            <div class="box6 mb-4" data-aos="zoom-in" >
              <img src="../assets/img/avatar2.svg" alt="" srcset="" />
            </div>
            <div class="box5" data-aos="zoom-in">
              <h4>Richard Mills</h4>
              <small>Developer</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="newsletter">
      <div class="text-center content p-5">
        <h4>Signup for Our Newsletter</h4>
        <p>
          Get updated about ServaX and the next wave in social media evolution!
        </p>

        <input
          type="email"
          class="form-control"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder=""
        />
        <button type="submit" class="btn btn-success mt-3">Subscribe</button>
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
          <a href="mailto:support@servax.io" target="_blank"> <img src="../assets/img/Email.svg" alt="px-2" class="px-3 " style="width:50px; height:50px;"></a> 
        </div>

      </div>



    </footer>
  </div>
</template>

<script>
export default {
  name: "Roadmap",

  data() {
    return {
      show: false,

      width: 0,
      normal: "",
      show: true,
    };
  },

  methods: {
    toggle() {
      if (this.normal == "") {
        this.normal = "change";
      } else {
        this.normal = "";
      }
      if (this.width === 0) {
        this.width = 50;
      } else {
        this.width = 0;
      }
    },
  },
};
</script>

<style  scoped>
.wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

/* header footer newsletter */
header {
  max-width: 100vw !important;
  height: 100vh;
  /* background: radial-gradient(100% 218.5% at 0% 0%, #000854 0%, #000854 100%); */
  /* background:radial-gradient(circle at 0% 2%, rgba(168, 238, 130, 1) 0%, rgba(5, 3, 183, 1) 24%); */

  /* ff 3.6+ */

  /* ff 3.6+ */

  /* ff 3.6+ */
  background: -moz-linear-gradient(
    205deg,
    rgba(0, 8, 84, 1) 63%,
    rgba(52, 255, 142, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-linear-gradient(
    205deg,
    rgba(0, 8, 84, 1) 63%,
    rgba(52, 255, 142, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-linear-gradient(
    205deg,
    rgba(0, 8, 84, 1) 63%,
    rgba(52, 255, 142, 1) 100%
  );

  /* ie 6-9 */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#34FF8E', endColorstr='#000854', GradientType=1);

  /* ie 10+ */
  background: -ms-linear-gradient(
    205deg,
    rgba(0, 8, 84, 1) 63%,
    rgba(52, 255, 142, 1) 100%
  );

  /* global 94%+ browsers support */
  background: linear-gradient(
    205deg,
    rgba(0, 8, 84, 1) 63%,
    rgba(52, 255, 142, 1) 100%
  );
}

header .wrapper {
  height: 100vh;
  display: flex;
  flex-direction: row;
}

header .wrapper .text-container {
  /* position:absolute; */
  margin-top: 40px;
  padding-top: 3%;
  max-width: 100%;
  flex-grow: 8;
  background: linear-gradient(
    111.08deg,
    rgba(255, 255, 255, 0.35) 4.12%,
    rgba(255, 255, 255, 0.1) 99.32%
  );
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(15px);
}

header .wrapper .text-container .text {
  display: flex;
  /* background: red;  */
  margin-top: 9.5%;
  margin-left: 20%;
  /* height:40px; */
  justify-content: center;

  flex-direction: column;
}

header .wrapper .text-container h3 {
  /* width: fit-content; */
  /* text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5); */
  margin: 7px 6.5%;

  width: 400px;
  /* height: fit-content; */
  font-family: "Monument Extended";
  font-style: normal;
  font-weight: 800;
  font-size: 32.6896px;
  line-height: 2.5rem;

  color: #fcfcfc;
}

header .wrapper .list-container {
  /* height: 100%; */
  margin-top: 40px;
  flex-grow: 8;
}

header .wrapper .list-container .list {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  /* background-color: green; */
  gap: 21px;
}

header .wrapper .list-container .list li {
  list-style-type: none;
  /* width: 124px;
      height: 21px; */
  color: #fcfcfc;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  padding-bottom: 10px;
  line-height: 21px;
}

.navbar-toggler {
  border: 5px solid white !important;
}

.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100vh;
  width: 0;
  position: fixed;
  /* Stay in place */
  z-index: 100 !important;
  /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  /* Black fallback color */
  background-color: rgba(0, 0, 0, 0.9);
  /* Black w/opacity */
  overflow-x: hidden;
  /* Disable horizontal scroll */
  transition: 0.5s;
  /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  /* top: 25%; */
  /* 25% from the top */
  width: 100%;
  /* 100% width */
  text-align: left;
  /* Centered text/links */
  margin-top: 30px;
  /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 16px;
  color: #ffffff;
  display: block;
  /* Display block instead of inline */
  transition: 0.3s;
  /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover,
.overlay a:focus {
  color: #0e0e0e;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */

.newsletter {
  color: #e5e5e5;
  /* z-index: 9; */
  background: #0e0e0e;
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
  width: 500px;
  padding: 10px;
}

.newsletter h4 {
  font-family: DM Sans;
}

.newsletter p {
  font-family: DM Sans;
  /* width:400px; */
}

footer {
  /* ff 3.6+ */
  background: -moz-radial-gradient(
    ellipse at 72% 51%,
    rgba(255, 255, 255, 1) 48%,
    rgba(84, 255, 142, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    ellipse at 72% 51%,
    rgba(255, 255, 255, 1) 48%,
    rgba(84, 255, 142, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    ellipse at 72% 51%,
    rgba(255, 255, 255, 1) 48%,
    rgba(84, 255, 142, 1) 100%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    ellipse at 72% 51%,
    rgba(255, 255, 255, 1) 48%,
    rgba(84, 255, 142, 1) 100%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    ellipse at 72% 51%,
    rgba(255, 255, 255, 1) 48%,
    rgba(84, 255, 142, 1) 100%
  );

  min-height: 300px;
  margin-top: 100px;
  max-width: 100%;
}

.footer {
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row !important;
  width: 100%;
  /* background:red; */
  padding-top: 300px;
}

.footer h6 {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  /* padding-left: 10px;  */
}

.footer .a {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  text-decoration: none;
  color: #0e0e0e !important;
  padding-right: 4px;
}

.footer img {
  /* margin: 10px; */
}

section .con {
  z-index: 9;
  width: 900px;
  position: relative;

  /* border-radius: 20px; */
  /* left: -50%;
    right: -50%; */
  /* padding: 20px; */
  margin: -200px auto 0px auto;
  padding: 10px 0px;
}

section .wrapper2a h4 {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  height: 42px;
  padding: 14px;
  color: #54ff8e;
}

section .wrapper2a small {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  height: 26px;
  padding: 16px;
  /* identical to box height */

  color: #ffffff;
}

section .wrapper2a p {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 26px;
  height: 208px;
  padding: 16px;
  color: #fcfcfc;
}

section .box5 {
  padding: 20px;
}

section .box5 h4 {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  height: 42px;
  padding: 14px;
  color: #54ff8e;
}

section .box5 small {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  height: 26px;
  padding: 16px;
  /* identical to box height */

  color: #ffffff;
}

section .box5 p {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 26px;
  height: 208px;
  padding: 16px;
  color: #fcfcfc;
}

section .box4 {
  width: 400px;
  height: 300px;
  /* background: #0E0E0E; */
}

section .box4 img {
  width: 400px;
  height: 300px;
  /* background: #0E0E0E; */
}

section .box5 {
  width: 400px;
  height: 150px;
  background: #0e0e0e;
}

section .box6 {
  width: 300px;
  height: 300px;
  /* background: #0E0E0E; */
}

section .box6 img {
  width: 400px;
  height: 300px;
  background: grey;
  /* margin:0 important;  */
}

section .box7 {
  width: 400px;
  height: 150px;
  background: #0e0e0e;
}

@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }

  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

@media only screen and (max-width: 800px) {
  .wrap {
    flex-direction: column;
  }

  section .box6 {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0E0E0E;
  }

  section .box6 img {
    width: 60%;
    height: 200px;

    background: #0E0E0E;

    /* margin:0 important;  */
  }

  section .box5 {
    width: 100%;
    height: 100px;
    border-radius: 7px;
    /* margin:10px; */

    /* padding: 5px;  */
  }

  section .box5 h4 {
    font-size: 13px;
    line-height: 16px;
    height: 16px;
    padding: 14px;
    color: #54ff8e;
  }

  section .box5 small {
    font-size: 8px;
    line-height: 10px;
    height: 10px;
    padding: 16px;
    /* identical to box height */

    color: #ffffff;
  }

  header {
    background: radial-gradient(100% 239.5% at 0% 0%, #4789be 0%, #000854 100%);
    border: none;
  }

  header .wrapper .text-container p {
    padding: 0px 35px 35px 40px;
    width: 100%;
    font-size: 13px;
    line-height: normal;
  }

  header .wrapper {
    display: flex;
    flex-direction: column-reverse;
  }

  header .wrapper .list-container {
    height: fit-content;

    margin-top: 0;
    flex-grow: 1;
  }

  header .wrapper .text-container {
    margin-top: 0;
    flex-grow: 99;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    background: radial-gradient(100% 239.5% at 0% 0%, #4789be 0%, #000854 100%);
    border: transparent;
  }

  header .wrapper .text-container .planet {
    flex-direction: row;
    justify-content: center;
    margin: 45px auto 0px auto;
  }

  header .wrapper .text-container .planet img {
    width: 150px;
    height: 150px;
  }

  header .wrapper .text-container img {
    height: 100%;
  }

  header .wrapper .text-container h3 {
    padding: 40px 35px 2px 40px;
    width: 100%;
    font-size: 24px;

    line-height: normal;
  }

  f header .wrapper .text-container p {
    padding: 0px 35px 35px 40px;
    width: 100%;
    font-size: small;

    line-height: normal;
  }

  header .wrapper .list-container {
    /* background: #; */
  }

  header .wrapper .list-container .list li {
    list-style-type: none;
    /* width: 124px;
         height: 21px; */
    color: #fcfcfc;

    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    display: inline-flex;
    font-size: 16px;
    line-height: 21px;
  }

  header .wrapper .list-container img {
    border: 3px solid #000854;
    margin: 7px 15px;
    border-radius: 5px;
    padding: 4px;
    cursor: pointer;
  }

  .navigation-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .navigation-bar img {
    height: 21px !important;
  }

  .container {
    /* display: inline-block; */
    cursor: pointer;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 3px;
    background-color: #ffffff;
    margin: 6px 0;
    transition: 0.4s;
  }

  /* Rotate first bar */
  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  /* Fade out the second bar */
  .change .bar2 {
    opacity: 0;
  }

  /* Rotate last bar */
  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
}

@media only screen and (max-width: 800px) {
  .body {
    background: radial-gradient(100% 239.5% at 0% 0%, #4789be 0%, #000854 100%);
  }
  header .text h3 {
    padding: 40px 35px 2px 40px;
    width: 100%;
    /* font-size: 24px; */
    width: 245px;
    height: 60px;
    font-family: "Monument Extended";
    font-style: normal;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 30px;

    color: #fcfcfc;

    line-height: normal;
  }
  header .text p {
    padding: 40px 35px 35px 40px;
    max-width: 100%;
    width: inherit;
    height: 42px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: medium;
    line-height: 14px;

    color: #fcfcfc;
  }

  .newsletter {
    /* position:relative; */
    max-width: 300px;
    height: 400;
    border-radius: 10px;
    /* margin: -100px auto 0px auto;  */
    /* box-shadow: #54FF8E 0px 20px 200px -10px; */
    padding: 10px;
  }

  .newsletter .content input {
    width: 90%;
  }

  footer {
    background: radial-gradient(100% 239.5% at 0% 0%, #4789be 0%, #000854 100%);
  }

  section .con {
    margin: -100% auto 0px auto;
    width: 100vw;
    position: relative;
    padding: 10px 0px;
    /* border-radius: 20px; */
  }

  section .newsletter {
    /* position:relative; */
    max-width: 300px;
    height: 400;
    border-radius: 10px;
    /* margin: -100px auto 0px auto;  */
    /* box-shadow: #54FF8E 0px 20px 200px -10px; */
    padding: 10px;
  }

  .newsletter .content input {
    width: 90%;
  }

  footer {
    background: radial-gradient(100% 239.5% at 0% 0%, #4789be 0%, #000854 100%);
  }
  footer img {
    color: #fcfcfc;
  }

  .section1 .box3 {
    z-index: 9;
    background: #0e0e0e;
    position: relative;
    width: 900px;
    height: 300px;
    /* border-radius: 20px; */

    /* padding: 20px; */
    margin: -180px auto 0px auto;
  }

  .section1 .box3 .wrapper {
    /* position: absolute; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .section1 .box3 .wrapper .question-mark {
    padding: 30px 25px;
    /* border: 1px solid #54FF8E; */
  }

  .section1 .box3 .wrapper .question-mark img.img1 {
    /* position: absolute; */
    height: 250px;
  }

  .section1 .box3 .wrapper .text h4 {
    /* position: absolute/; */
    /* background-color: red;  */
    font-family: "Monument Extended";
    font-style: normal;
    font-weight: 800;
    /* text-align: center; */
    font-size: 28px;
    line-height: 38px;
    padding: 30px 3px 3px 0px;

    color: #fcfcfc;
  }

  .section1 .box3 .wrapper .text p {
    /* position: absolute; */
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 29px;
    padding: 0px 20px 3px 0px;
    color: #fcfcfc;
  }

  .section1 .box3 .wrapper .rectangle-box {
    position: relative;
    margin: 0;
  }

  .section1 .box3 .wrapper .rectangle-box img {
    /* background-color: red; */

    position: absolute;
    top: 0px;
    right: 0px;
  }

  .section1 .box3 .wrapper .text h4 {
    padding: 35px 35px 0 40px;
    text-align: left;
    font-size: larger;
  }

  .section1 .box3 .wrapper .text p {
    /* position: relative; */
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: small;
    line-height: normal;
    padding: 0px 35px 35px 40px;
    text-align: left;
    color: #fcfcfc;
  }

  .section1 .box3 .wrapper .rectangle-box img {
    height: 20px;
  }
}
</style>