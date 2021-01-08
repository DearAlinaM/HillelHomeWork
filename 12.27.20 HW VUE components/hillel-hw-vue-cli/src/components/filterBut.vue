<template>
  <button @click="getInfotoFilter">toFilterButton</button>
</template>

<script>
export default {
  name: 'filterBut',
  props: { key1: Array },
  data() {
    return {};
  },
  methods: {
    getInfotoFilter() {
      console.log(this.key1, 'getInfotoFilter');
      // this.getkey(this.key1, 'boxName');
    },
    getkey(arrA, keyName) {
      console.log(arrA.length, keyName);
      let keys = [];
      for (let i = 0; i < arrA.length; i++) {
        keys.push(arrA[i][keyName]);
      }
      console.log(keys);
      this.getFromLS(keys);
    },
    getFromLS(keysLS) {
      let arLS = [];
      for (let i = 0; i < keysLS.length; i++) {
        arLS.push(localStorage.getItem(keysLS.i));
      }
      console.log(arLS);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
