<template>
  !-- section1 thats the box under the header -->
    <section class="section1">
        <div class="box3 ">
            <div class="wrapper"> 
                
                
                <div class="text">
                    <h4>{{heading}}</h4>
                    <p>
                    {{content}}</p>
                </div>
                <div class="rectangle-box">
                    <img src="assets/img/Rectangle 8.svg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
name: 'Upbox',

 props: {
    heading: {
      type: String,
    },
    subheading: {
      type: String,
    },
  },



}

</script>

<style scoped>

</style>