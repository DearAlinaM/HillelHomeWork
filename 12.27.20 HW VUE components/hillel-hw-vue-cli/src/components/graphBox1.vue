<template>
  <div class="graphBoxCl">
    <diagramma :diagrH="hFromDBox" />
    {{ heightFrPar }}
    <rangeInput
      :inpHeightH="inpHeight"
      :indexH="indCheckX"
      @emRange="emRangeVal"
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
  props: {
    backGrColor: String,
    heightFrPar: Number,
    indCheck: Number,
  },

  data() {
    return {
      hFromDBox: {
        height: `${this.heightFrPar}px`,
        backgroundColor: `${this.backGrColor}`,
      },
      inpHeight: this.heightFrPar,
      indCheckX: this.indCheck,
    };
  },
  computed: {
    newH: function() {
      return this.heightFrPar;
    },
  },
  methods: {
    emRangeVal(v) {
      this.$emit('emRangeBox', v);
    },
    setValue(v) {
      this.inpHeight = v;
      this.hFromDBox.height = `${v}px`;
    },
  },

  beforeUpdate() {
    let y = this.newH;
    this.setValue(y);
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
  font-size: 12px;
}
</style>
