<template>
  <div class="generalParentBox">
    <ul class="parentBoxCl">
      <li v-for="(item, ind) in items" :key="ind">
        {{ item.boxName }}
        <graphBox1
          :backGrColor="item.styles"
          :heightFrPar="item.height"
          :indCheck="item.uniqueId"
          @emRangeBox="setNewH"
        />
      </li>
    </ul>
    <filterBut :itemsObj="this.items" @sortedInfo="catchSortedInfo" />
  </div>
</template>

<script>
import graphBox1 from './graphBox1.vue';
import filterBut from './filterBut.vue';

export default {
  name: 'parentBox',
  components: {
    graphBox1,
    filterBut,
  },

  data: () => {
    return {
      items: [
        {
          styles: 'red',
          boxName: 'Box_1',
          height: 10,
          uniqueId: 0,
        },
        {
          styles: 'green',
          boxName: 'Box_2',
          height: 20,
          uniqueId: 1,
        },
        {
          styles: 'blue',
          boxName: 'Box_3',
          height: 10,
          uniqueId: 2,
        },
        {
          styles: 'yellow',
          boxName: 'Box_4',
          height: 50,
          uniqueId: 3,
        },
        {
          styles: 'black',
          boxName: 'Box_5',
          height: 15,
          uniqueId: 4,
        },
        {
          styles: 'orange',
          boxName: 'Box_6',
          height: 10,
          uniqueId: 5,
        },
        {
          styles: 'grey',
          boxName: 'Box_7',
          height: 10,
          uniqueId: 6,
        },
      ],
      toSortedFromBiggestArray: [],
    };
  },
  methods: {
    setNewH({ hVal, indVal }) {
      this.$set(this.items[indVal], 'height', hVal);
      this.toLS(this.items[indVal].uniqueId, JSON.stringify(hVal));
    },
    toLS(keyLS, valueLS) {
      localStorage.setItem(keyLS, valueLS);
    },
    catchSortedInfo({ height, indexes }) {
      console.log(height, indexes, 'from Parent');
      this.toAddSortedHeight(height);
    },
    toAddSortedHeight(sortedArray) {
      for (let i = 0; i < sortedArray.length; i++) {
        this.$set(this.items[i], 'height', sortedArray[i]);
        this.toLS(i, JSON.stringify(sortedArray[i]));
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.generalParentBox {
  border: 1px solid green;
  padding: 10px;
}
.parentBoxCl {
  display: flex;
  border: 1px solid red;
  margin: 10px;
  padding: 20px;
}
li {
  border: 1px solid blue;
  margin: 5px;
  padding: 5px;
  list-style-type: none;
}
</style>
