<template>
  <div>
    <input class="rangeInputCl" type="range" v-model.number="rangeValue" />
    {{ rangeValue }}
  </div>
</template>

<script>
export default {
  name: 'rangeInput',
  data: () => {
    return {
      rangeValue: '0',
    };
  },
  methods: {
    emitValueToParent(v) {
      this.$emit('rangeValueFromInput', v);
    },
  },
  watch: {
    rangeValue() {
      this.emitValueToParent(this.rangeValue);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rangeInputCl {
  width: 50px;
  margin-top: 5px;
}
</style>
