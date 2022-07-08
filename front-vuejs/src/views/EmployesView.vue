<template>
    <main>
      <h1>Liste des employes</h1>
      <Employes />

      
    </main>
</template>

<script>

import Employes from '../components/Employes.vue';

export default {
  name: 'EmployesView',
  components: {
   Employes
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
