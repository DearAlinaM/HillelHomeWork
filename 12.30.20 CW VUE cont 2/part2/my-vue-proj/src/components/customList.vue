<template>
  <div class="customList">
    {{ namePage }}
    <ul>
      <li
        class="listItem"
        v-for="(item, index) in list"
        :key="index"
        @click="clickCity(item.city)"
      >
        {{ item.city }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'customList',
  props: {
    list: Array,
  },
  data: () => {
    return {
      namePage: 'customList',
    };
  },
  methods: {
    clickCity(itemValue) {
      console.log(itemValue, 'click on city');
      this.$emit('cityNameFromList', itemValue);
    },
  },
};
</script>

<style lang="scss">
.customList {
  background-color: blue;
  width: 200px;
  height: 100px;
  padding: 10px;
}
.listItem {
  border-bottom: 2px solid red;
  background-color: grey;
  color: white;
}
</style>
