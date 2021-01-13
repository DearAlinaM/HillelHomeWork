<template>
  <div class="generalParentBox">
    <ul class="parentBoxCl">
      <li v-for="(item, ind) in items" :key="ind">
        {{ item.boxName }} <br />
        H: {{ item.height }} <br />
        ind: {{ ind }}

        <graphBox1
          :backGrStyles="item.styles"
          :boxNameForLS="item.boxName"
          :heightP="item.height"
          @newInpValue="setNewinpValue"
        />
      </li>
    </ul>
    <filterBut :key1="items" />
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
          styles: { backgroundColor: 'red' },
          boxName: 'Box_1',
          height: 10,
          uniqueId: 0,
        },
        {
          styles: { backgroundColor: 'green' },
          boxName: 'Box_2',
          height: 10,
          uniqueId: 1,
        },
        {
          styles: { backgroundColor: 'blue' },
          boxName: 'Box_3',
          height: 10,
          uniqueId: 2,
        },
        {
          styles: { backgroundColor: 'yellow' },
          boxName: 'Box_4',
          height: 10,
          uniqueId: 3,
        },
        {
          styles: { backgroundColor: 'black' },
          boxName: 'Box_5',
          height: 15,
          uniqueId: 4,
        },
        {
          styles: { backgroundColor: 'orange' },
          boxName: 'Box_6',
          height: 10,
          uniqueId: 5,
        },
        {
          styles: { backgroundColor: 'grey' },
          boxName: 'Box_7',
          height: 10,
          uniqueId: 6,
        },
      ],
    };
  },
  methods: {
    setNewinpValue(a) {
      console.log(a);
      this.$set(this.items, '1', { height: `${a}` });
      // this.items['height'] = `${a}px`;
      // console.log(a, this.items, 'from Parent');
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
