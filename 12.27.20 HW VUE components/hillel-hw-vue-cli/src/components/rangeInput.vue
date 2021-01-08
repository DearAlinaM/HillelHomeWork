<template>
  <div>
    <input class="rangeInputCl" type="range" v-model.number="rangeValue" />
    {{ rangeValue }}
  </div>
</template>

<script>
export default {
  name: 'rangeInput',
  props: { newValueFromLS: Number },
  data: () => {
    return {
      rangeValue: '0',
      // newValueFromLS: '',
    };
  },
  methods: {
    emitValueToParent(v) {
      this.$emit('rangeValueFromInput', v);
    },
    getFromLSInp() {
      this.rangeValue = this.newValueFromLS;
    },
  },
  watch: {
    rangeValue() {
      this.emitValueToParent(this.rangeValue);
    },
  },
  beforeMount() {
    this.getFromLSInp();
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
