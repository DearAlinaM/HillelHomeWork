<template>
  <button @click="applyActions">toFilterButton</button>
</template>

<script>
export default {
  name: 'filterBut',
  props: ['itemsObj'],
  data() {
    return {
      startA: [],
      finalA: '',
    };
  },
  methods: {
    applyActions() {
      this.getInfotoFilter();
      this.indexCheck();
    },
    getInfotoFilter() {
      let arr = [];
      for (let i = 0; i < this.itemsObj.length; i++) {
        arr.push(this.itemsObj[i].height);
      }

      let cashStartA = arr.slice();
      this.startA = cashStartA;

      let sortedBigSmallArray = this.toSortFromBiggest(arr);
      let sortedIndexBigSmallArray = this.indexCheck();

      let sortedHeightAndIndex = {
        height: sortedBigSmallArray,
        indexes: sortedIndexBigSmallArray,
      };
      this.emitToParentIndexSortedArray(sortedHeightAndIndex);
      this.changeColor();
    },
    toSortFromBiggest(startArray, finalArray = [], indexArray = []) {
      if (startArray.length === 0) {
        return;
      }

      let j = startArray.length;
      let max = startArray[0];
      let maxI;
      for (let i = 0; i < j; i++) {
        if (startArray[i] > max) {
          max = startArray[i];
          maxI = i;
        }
      }

      startArray.splice(maxI, 1);
      finalArray.push(max);
      this.toSortFromBiggest(startArray, finalArray, indexArray);

      let cashFinalA = finalArray.slice();

      this.finalA = cashFinalA;
      return finalArray;
    },

    indexCheck() {
      let startArrayCheck = this.startA;
      let finalArrayCheck = this.finalA;
      let indexArrayCheck = [];

      finalArrayCheck.map((i) => {
        startArrayCheck.map((startItem, index) => {
          if (startItem === i) {
            indexArrayCheck.push(index);
            startArrayCheck[index] = undefined;
          }
        });
      });
      return indexArrayCheck;
    },
    emitToParentIndexSortedArray(objToEmit) {
      this.$emit('sortedInfo', objToEmit);
    },
    changeColor() {
      // console.log('change');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
