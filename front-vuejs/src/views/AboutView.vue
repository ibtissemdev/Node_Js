<template>
    <main>
      <h1>This is an about page</h1>
      <Test />
    </main>
</template>

<script>
import { onMounted } from 'vue';
import Test from '../components/Test.vue';

export default {
  name: 'AboutView',
  components: {
    Test
  },

  mounted(){
new Vue({ el: '#components-demo' })
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
