<template>
  <tr class="table__tr pa-10">
    <td class="table__td--name">
      <img class="table__img" :src="img" />
      <span class="table__span">{{ name }}</span>
    </td>
    <td class="table__td">10</td>
    <td class="table__td">500,000</td>
    <td class="table__td">14,000</td>
    <td class="table__td">40</td>
    <td class="table__td">33%</td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    id: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const results = reactive({
      totalScore: 0,
      matches: 0,
      escape: 0,
    })

    // const resultData = reactive<any>(props.resultsData)
    // const sortResultData = reactive<any>([])

    return {
      ...toRefs(results),
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/survivor-table.scss';
</style>
