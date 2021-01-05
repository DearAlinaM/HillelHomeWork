<template>
  <div class="customInput">
    {{ namePage }}
    {{ selectedCity }}
    <input v-model="someText" />
  </div>
</template>

<script>
export default {
  name: 'customInput',
  // props: ['selectedCity'],
  props: {
    selectedCity: String,
  },
  data: () => {
    return {
      someText: '',
      namePage: 'customInput',
    };
  },
  watch: {
    selectedCity() {
      console.log('watching');
      this.someText = this.selectedCity;
    },
  },
};
</script>

<style lang="scss">
.customInput {
  background-color: violet;
  width: 200px;
  height: 50px;
  padding: 10px;
}
</style>
