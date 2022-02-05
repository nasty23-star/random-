<template>
<div class="app">
<div class="logoUser">
        
    <span>{{$store.getters.firstLetters}}</span>
  </div>
  <h1>{{$store.state.first_name}} {{ $store.state.last_name }}</h1>
  </div>
</template>

<script>
export default {

data() {
    return {
 
     
    }
    },
    computed: {
     
    }
    }
</script>

