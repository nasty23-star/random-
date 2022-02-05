<template>
<div id="main" v-bind:class="{darker: isActive}" >
  <div id="nav">
    <router-link to="/">Home</router-link> |
    
    <router-link to="/private">Private</router-link>
  </div>
  <router-view/>
  
 <button class="change" @click="isActive = !isActive"><span>dark</span> / <span>light</span ></button>
 </div>
</template>
<script>


export default {
 
 data() {
   return {
isActive: true

   }
 },
 computed: {



 },
methods: {
 
      

 
}
}
</script>

<style>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #030303;
}

#nav a.router-link-exact-active {
  color: white;
}



#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
  text-align: center;
  
    background-size: 400% 400%;
    animation: gradient 20s ease infinite;
  width: 60%;
  margin: 0 auto;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.darker {
 color: white;
   background: linear-gradient(-45deg, #266785, #2029aa, #0c97ca, #000000);
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.signUP {
  border: solid 2px black;
}
.capitalize {
  font-size: 30px;
  font-family: "Courier New", Courier, monospace;
}
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

button {
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.change {
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 10px;
}
.change span {
  color: rgb(27, 27, 95);
}
.change span+span{
  color: white;
}
@media screen and (max-width: 1200px) {
  #main {
    width: 100%;
  }
}
</style>
