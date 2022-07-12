<template>
    <main>
     <div id="resto">
     
      <FormEmploye/>

      </div>
    </main>
</template>

<script>

import FormEmploye from '@/components/FormulaireEmploye.vue';


export default {
  name: 'ajoutEmploye',
  components: {
   FormEmploye
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
