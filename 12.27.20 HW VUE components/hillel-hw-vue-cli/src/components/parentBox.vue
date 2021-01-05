<template>
  <div class="generalParentBox">
    <ul class="parentBoxCl">
      <li v-for="item in items" :key="item.boxName">
        {{ item.boxName }}
        <graphBox :backGrStyles="item.styles" :boxNameForLS="item.boxName" />
      </li>
    </ul>
    <filterBut />
  </div>
</template>

<script>
import graphBox from './graphBox.vue';
import filterBut from './filterBut.vue';

export default {
  name: 'parentBox',
  components: {
    graphBox,
    filterBut,
  },

  data: () => {
    return {
      items: [
        {
          styles: { backgroundColor: 'red' },
          boxName: 'Box_1',
        },
        {
          styles: { backgroundColor: 'green' },
          boxName: 'Box_2',
        },
        {
          styles: { backgroundColor: 'blue' },
          boxName: 'Box_3',
        },
        {
          styles: { backgroundColor: 'yellow' },
          boxName: 'Box_4',
        },
        {
          styles: { backgroundColor: 'black' },
          boxName: 'Box_5',
        },
        {
          styles: { backgroundColor: 'orange' },
          boxName: 'Box_6',
        },
        {
          styles: { backgroundColor: 'grey' },
          boxName: 'Box_7',
        },
      ],
    };
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
