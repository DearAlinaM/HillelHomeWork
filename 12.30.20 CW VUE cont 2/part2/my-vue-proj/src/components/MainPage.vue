<template>
  <section class="MainPage">
    {{ pageName }}
    <custom></custom>
  </section>
</template>

<script>
import custom from './custom';
export default {
  name: 'MainPage',
  components: { custom },
  data: () => {
    return {
      pageName: 'MainPage',
    };
  },
};
</script>

<style lang="scss">
.MainPage {
  border: 2px solid red;
  width: 200px;
  height: 200px;
  padding: 10px;
}
</style>
