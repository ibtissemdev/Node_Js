<template>
    <main>
      <h1>Je fais un test avec la page test</h1>
      <Test />

      
    </main>
</template>

<script>

import Test from '../components/Test.vue';

export default {
  name: 'AboutView',
  components: {
    Test
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
