<template>
  <div id="app">
    {{ name }}

    <MainPage />
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue';

export default {
  name: 'App',
  components: {
    MainPage,
  },
  data: () => {
    return {
      name: 'PARENT',
    };
  },
};
</script>

<style lang="scss">
#app {
  border: 2px solid yellow;
  padding: 10px;
}
</style>
