<template>
    <main>
     <div id="resto">
     
      <FormResto />

      </div>
    </main>
</template>

<script>

import FormResto from '@/components/FormulaireRestaurant.vue';


export default {
  name: 'ajoutRestaurant',
  components: {
   FormResto
}
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
