<template>
  <div class="graphBoxCl">
    <diagramma v-bind:style="backGrStyles" :diagrHeight="rangeValueToDiagr" />
    {{ rangeValueToDiagr.height }}
    <rangeInput
      @rangeValueToParentEmitted="rangeValueToParent"
      :inpHeight="heightPI"
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
  // props: {
  //   backGrStyles: Object,
  //   boxNameForLS: String,
  //   heightP: Number,
  //   // heightP: String,
  // },
  props: ['backGrStyles', 'boxNameForLS', 'heightP'],
  data: () => {
    return {
      rangeValueToDiagr: { height: '' },
      heightPI: '',
    };
  },
  methods: {
    setHeightToDiagr() {
      this.$set(this.rangeValueToDiagr, 'height', `${this.heightP}px`);
      console.log('diagr');
    },

    setHeightToInp() {
      this.$set(this.heightPI, this.heightP);
      console.log('inp');
    },
    rangeValueToParent(v) {
      // this.$set(this.rangeValueToDiagr, 'height', `${v}px`);
      // console.log(this, v);
      this.$emit('newInpValue', v);
    },
  },
  beforeMount() {
    this.setHeightToDiagr();
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
