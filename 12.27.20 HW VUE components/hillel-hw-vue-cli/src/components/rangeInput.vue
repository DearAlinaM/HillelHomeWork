<template>
  <div>
    <input class="rangeInputCl" type="range" v-model.Number="rangeR" />
    {{ this.inpHeightH }}
  </div>
</template>

<script>
export default {
  name: 'rangeInput',
  props: { inpHeightH: Number, indexH: Number },
  data() {
    return {
      rangeValueDefault: this.inpHeightH,
      rangeR: '',
      indD: this.indexH,
    };
  },
  methods: {
    emitValueToPar(val, defaultV, index) {
      if (!val) {
        val = defaultV;
      }
      let valueObj = { hVal: +val, indVal: index };
      // console.log(valueObj, index);
      this.$emit('emRange', valueObj);
    },
  },
  watch: {
    rangeR() {
      this.emitValueToPar(this.rangeR, this.rangeValueDefault, this.indD);
    },
  },

  mounted() {
    let LScheck = localStorage.getItem(this.indD);
    if (LScheck) {
      this.rangeR = LScheck;
    } else {
      this.rangeR = this.rangeValueDefault;
    }
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
