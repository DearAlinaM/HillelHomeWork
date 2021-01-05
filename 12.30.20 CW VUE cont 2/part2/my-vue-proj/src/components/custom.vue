<template>
  <p class="custom">
    {{ namePage }}
    {{ cityNameFromChild }}
    <customInput :selectedCity="cityNameFromChild" />
    <customList :list="dataList" @cityNameFromList="emittedInfo" />
  </p>
</template>

//:selectedCity -- РЕБЕНОК ПРОПС="cityNameFromChild"--- РФЗВАНИЕ У РОДИТЕЛЯ

<script>
import customInput from './customInput';
import customList from './customList';

export default {
  name: 'custom',
  components: {
    customInput,
    customList,
  },
  data: () => {
    return {
      namePage: 'custom select',
      cityNameFromChild: '',
      dataList: [
        {
          city: 'Odessa',
          value: '5',
        },
        {
          city: 'Kyiv',
          value: '8',
        },
        {
          city: 'Kharkiv',
          value: '2',
        },
        {
          city: 'Lvov',
          value: '7',
        },
        {
          city: 'Lutsk',
          value: '4',
        },
      ],
    };
  },
  methods: {
    emittedInfo(infoCity) {
      console.log(infoCity, 'emmittedInfo');
      this.$set(this, 'cityNameFromChild', infoCity);
    },
  },
};
</script>

<style lang="scss">
.custom {
  border: 2px solid green;
  width: 200px;
  height: 200px;
  padding: 10px;
}
</style>
