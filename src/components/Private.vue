<template>
<div>
<p>username: {{$store.state.username}}</p>

  <p>gender: {{$store.state.gender}}</p>

<p>email:{{ $store.state.email }}</p>

  <p>country:{{ $store.state.country }}</p>

  <p>city: {{ $store.state.city}}</p>
 
  <p>date birth: {{ $store.state.dateBirth }}</p>

  <p>employment: {{$store.state. employment }}</p>

  <p>SIN: {{ $store.state.SIN }}</p>

</div>


 

 
  
</template>



<script>
export default {
 
data() {
   
 return {

    
 }
 },
 methods: {

 }
 }
 
</script>

<style scoped>
div {
    margin-top: -20px;
    padding-bottom: 10px;
}
p {
    font-size: 22px;
}

</style>
