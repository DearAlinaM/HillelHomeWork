<template>
  <div id="app">
    <parentBox />
  </div>
</template>

<script>
import parentBox from './components/parentBox.vue';

export default {
  name: 'App',

  components: {
    parentBox,
  },
};
</script>

<style>
#app {
}
</style>
