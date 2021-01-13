<template>
  <div class="diagrammaCl" v-bind:style="diagrHeight"></div>
</template>

<script>
export default {
  name: 'diagramma',
  props: ['diagrHeight'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.diagrammaCl {
  width: 100%;
}
</style>
