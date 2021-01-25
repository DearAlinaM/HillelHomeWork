<template>
  <div class="generalParentBox">
    <ul class="parentBoxCl">
      <li v-for="(item, ind) in items" :key="ind">
        {{ item.boxName }}
        <graphBox1 :unItem="item" @emRangeBox="setNewH" />
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
          boxName: 'Box_0',
          height: 10,
          uniqueId: 0,
        },
        {
          styles: 'green',
          boxName: 'Box_1',
          height: 20,
          uniqueId: 1,
        },
        {
          styles: 'blue',
          boxName: 'Box_2',
          height: 10,
          uniqueId: 2,
        },
        {
          styles: 'yellow',
          boxName: 'Box_3',
          height: 50,
          uniqueId: 3,
        },
        {
          styles: 'black',
          boxName: 'Box_4',
          height: 15,
          uniqueId: 4,
        },
        {
          styles: 'orange',
          boxName: 'Box_5',
          height: 10,
          uniqueId: 5,
        },
        {
          styles: 'grey',
          boxName: 'Box_6',
          height: 10,
          uniqueId: 6,
        },
      ],
      cashArray: [],
      // toSortedFromBiggestArray: [],
    };
  },
  computed: {
    newColor: function(i) {
      return this.items[i].styles;
    },
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
      this.toAddSortedHeight(height);
      this.getNewStyles(indexes);
    },

    toAddSortedHeight(sortedArrayHeight) {
      for (let i = 0; i < sortedArrayHeight.length; i++) {
        this.$set(this.items[i], 'height', sortedArrayHeight[i]);
        this.toLS(i, JSON.stringify(sortedArrayHeight[i]));
      }
    },
    getNewStyles(oldIndex) {
      console.log(
        oldIndex,
        'массив кому какие цвета по СТАРОМУ массиву = cashItems'
      );
      let colors = [];
      for (let i = 0; i < oldIndex.length; i++) {
        colors.push(this.items[oldIndex[i]].styles);
      }
      // console.log(colors);

      let cash = colors.slice();

      for (let ii = 0; ii < cash.length; ii++) {
        // this.items[ii].styles = cash[oldIndex[ii]];

        console.log(oldIndex[ii], this.items[oldIndex[ii]].boxName, cash[ii]);

        this.items[ii].styles = 'brown';
      }
    },
  },
  created() {},
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
