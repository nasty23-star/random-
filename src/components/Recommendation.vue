<template >
<div class="container" >
   
   <button @click="getRandom()">GET RANDOM BEER</button>
  <div class="characterize">
   <div class="characterize_row">
    <span>brand</span> {{ brand }}
   <span>name </span>{{ name }}
  <span>style </span>{{ style }}
   </div>

   <div class="characterize_row">
   hop: {{ hop }}
   yeast: {{ yeast }}
   malts: {{ malts }}
   </div>

   <div class="characterize_row">
   ibu: {{ ibu }}
   alcohol: {{ alcohol }}
   blg: {{ blg }}
   </div>
  </div> 
  </div>
</template>

<script>
export default {
  data() {
      return {
      malts: "x",
brand: "x",
alcohol: "x",
hop: "x",
blg: "x",
name: "x",
style: "x",
yeast: "x",
ibu: "x",
show: false
  }
  },
  methods: {
      async  getRandom() {
   const res = await fetch('https://random-data-api.com/api/beer/random_beer')
    const  results  = await res.json()
    this.brand = results.brand.toUpperCase()
    
this.name = results.name.toUpperCase()
  this.blg = results.blg.toUpperCase()
     
     this.ibu = results.ibu.toUpperCase()
     
      this.alcohol = results.alcohol.toUpperCase()
     
     this.style = results.style.toUpperCase()
     
      this.malts = results.malts.toUpperCase()
      
      this.hop = results.hop.toUpperCase()
      
this.yeast = results.yeast.toUpperCase()
  },
  }    
    }
</script>
<style scoped>
.container {
  padding-top: 10px;
  margin: 0 auto;
}
.characterize_row {
  padding-top: 10px;
  padding-bottom: 10px;
}
.characterize_row span {
 font-size: 15px;
  
}
button {
    font-weight:bolder;
}
@media screen and (max-width: 1000px) {
  .characterize {
    font-size: 15px;
  }
}
</style>