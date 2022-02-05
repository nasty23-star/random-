<template>
<div>
  <Logo />
   <Recommendation />
   </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Recommendation from '@/components/Recommendation'
export default {
  name: 'Home',
  components: {
   Logo,
     Recommendation,
  },
data() {
    return {
 
  
    }
},

}



</script>




// @ is an alias to /src

<style>
.logoUser {
  width: 100px;
  height: 100px;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 50%;
}
.logoUser span {
  color: black;
  font-size: 50px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>

