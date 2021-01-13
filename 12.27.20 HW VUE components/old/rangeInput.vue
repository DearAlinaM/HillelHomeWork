<template>
  <div>
    <input
      class="rangeInputCl"
      type="range"
      v-model.Number="rangeValueFromInp"
    />
    {{ rangeValueFromInp }}
  </div>
</template>

<script>
export default {
  name: 'rangeInput',
  props: ['inpHeight'],
  data: () => {
    return {
      rangeValueFromInp: '',
      // heightPP
    };
  },
  methods: {
    emitValueToParent(v) {
      this.$emit('rangeValueToParentEmitted', v); // поднятие к родителю rangeValue
      // console.log(v);
    },
    setHeight() {
      this.$set(this.rangeValueFromInp, this.inpHeight);
    },
    // getFromLSInp() {
    //   this.rangeValue = this.newValueFromLS;
    // },
  },
  watch: {
    rangeValueFromInp() {
      this.emitValueToParent(this.rangeValueFromInp);
    },
  },
  // beforeMount() {
  //   this.getFromLSInp();
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rangeInputCl {
  width: 50px;
  margin-top: 5px;
}
</style>
