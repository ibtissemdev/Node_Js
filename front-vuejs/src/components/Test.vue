<template>
<div id="components-demo">
 <button-counter>oooh</button-counter>
</div>
</template>

<script>
// Charger la bibliothèque axios
import axios from "axios"

export default {
 name: 'Test',
data(){
  
 },
 mounted(){
 // Définition d'un nouveau composant appelé `button-counter`
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">Vous m\'avez cliqué {{ count }} fois.</button>'
})


}
}

</script>