<template>
  <button @click="getInfotoFilter">toFilterButton</button>
</template>

<script>
export default {
  name: 'filterBut',
  props: ['itemsObj'],
  methods: {
    getInfotoFilter() {
      let arr = [];
      for (let i = 0; i < this.itemsObj.length; i++) {
        arr.push(this.itemsObj[i].height);
      }
      this.toSortFromBiggest(arr);
    },
    toSortFromBiggest(startArray, finalArray = []) {
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
      this.toSortFromBiggest(startArray, finalArray);
      this.$emit('sortedBiggest', finalArray);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
