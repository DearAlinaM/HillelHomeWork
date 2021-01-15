<template>
  <div class="diagrammaCl" v-bind:style="heightD">
    {{ heightD['backgroundColor'] }}
  </div>
</template>

<script>
export default {
  name: 'diagramma',
  props: { diagrH: Object },
  data() {
    return {
      heightD: this.diagrH,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.diagrammaCl {
  width: 100%;
}
</style>
