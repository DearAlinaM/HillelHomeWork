<template>
  <div class="graphBoxCl">
    <diagramma v-bind:style="backGrStyles" :diagrHeight="rangeValueToDiagr" />
    <rangeInput
      @rangeValueFromInput="fromRangeInput"
      :newValueFromLS="vaueToInpFromLS"
    />
  </div>
</template>

<script>
import diagramma from './diagramma';
import rangeInput from './rangeInput';
export default {
  name: 'graphBox',
  components: {
    diagramma,
    rangeInput,
  },
  props: { backGrStyles: Object, boxNameForLS: String },
  data: () => {
    return {
      rangeValueToDiagr: { height: '' },
      keyForLS: '',
      vaueToInpFromLS: '',
    };
  },
  methods: {
    fromRangeInput(valueFromInp) {
      this.toLS(valueFromInp);
      this.$set(this.rangeValueToDiagr, 'height', `${valueFromInp}px`);
    },
    toLS(valueToLs) {
      let key = this.boxNameForLS;
      localStorage.setItem(key, valueToLs);
    },
    getFromLS() {
      let key = this.boxNameForLS;
      let valueFromLS = localStorage.getItem(key);
      this.toLS(valueFromLS);
      this.$set(this.rangeValueToDiagr, 'height', `${valueFromLS}px`);
      this.$set(this, 'vaueToInpFromLS', +valueFromLS);
    },
  },
  beforeMount() {
    this.getFromLS();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.graphBoxCl {
  width: 50px;
  height: 200px;
  border: 1px solid black;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
