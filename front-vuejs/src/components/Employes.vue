<template>
 <div class="hello">
  <h1>Employes</h1>
   <div :key="index" v-for="(employe, index) in employes">
    
		{{employe.first_name}} {{index}}
  
   
   </div>
   
 </div>
</template>

<script>
// Charger la bibliothèque axios
import axios from "axios"

export default {
 name: 'Employes',
 data(){
  return{
  employes: null
  }
 },
 mounted(){
  
                    axios.get("http://127.0.0.1:5000/restaurants")

                        .then(res => this.restaurants = res.data)
                        .catch(error => this.restaurants = [{ "name": "Erreur de chargement" }])

                    axios.get("http://127.0.0.1:5000/employes")

                        .then(res => this.employes = res.data)
                        .catch(error => this.employes = [{ "name": "Erreur de chargement" }])
                },

                supprimerResto(id) {
                    console.log(id)
                    axios.delete("http://127.0.0.1:5000/restaurants/"+id)    
                },
                supprimerEmploye(id_employe) {
                    console.log(id_employe)
                    axios.delete("http://127.0.0.1:5000/employe/"+id_employe)  
                   
                },



}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
