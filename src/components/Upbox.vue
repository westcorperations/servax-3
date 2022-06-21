<template>
  <section class="section1">
        <div class="box3 ">
            <div class="wrapper"> 
                
                <div class="question-mark d-none d-lg-block">
                    <img src="../assets/img/question-mark1.svg" alt="" class="img1">
                    <!-- <img src="assets/img/question-mark1.svg" alt="" class="img2">      -->
                </div>
                <div class="text">
                    <h4>What Is <span style="color: #54FF8E;">ServaX ?</span> </h4>
                    <p>ServaX is an all-in-one ecosystem, allowing you to communicate with your family, friends and
                        loved ones, transact, learn, and do so much more. The only Jack of all trades that masters them
                        all.
                        At ServaX, we realize that it is pretty impossible to seperate communication, financial
                        transactions and learning from our day to day lives. Think about how many times you talk, pay
                        and get paid, and learn in one day.
                        Imagine doing all that in one place with the security that the blockchain offers. That’s ServaX.
                    </p>
                </div>
                <div class="rectangle-box">
                    <img src="../assets/img/Rectangle8.svg" alt="">
                </div>
            </div>
        </div>
    </section> 
</template>

<script>
export default {
name: 'Upbox',

}

</script>

<style scoped>
.section1 .box3 {

    z-index: 9;
    background: #0E0E0E;
    position:relative;
    width: 900px;
    height: 300px;
    /* border-radius: 20px; */
    
    /* padding: 20px; */
    margin: -180px auto 0px auto;

    ;

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
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 800;
    /* text-align: center; */
    font-size: 28px;
    line-height: 38px;
    padding: 30px 3px 3px 0px;

    color: #FCFCFC;
}

.section1 .box3 .wrapper .text p {
    /* position: absolute; */
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 29px;
    padding: 0px 20px 3px 0px;
    color: #FCFCFC;

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







/* mobile */

@media only screen and  (max-width: 991px) {
.section1 .box3 {
        /* position:relative; */
        width: 100%;
        height: fit-content;
        border-radius: 0px;
        margin: 0px  auto ; 
        max-width: 100vw;
        
        /* box-shadow: #54FF8E 0px 20px 200px -10px; */
    } 
    .section1 .box3 .wrapper .text h4 {
        padding: 35px 35px 0 40px;
        text-align: left;
        font-size: larger;
    }

    .section1 .box3 .wrapper .text p {
        /* position: relative; */
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: small;
        line-height: normal;
        padding: 0px 35px 35px 40px;
        text-align: left;
        color: #FCFCFC;

    }

    .section1 .box3 .wrapper .rectangle-box img {
        height: 20px;

    }

}

</style>