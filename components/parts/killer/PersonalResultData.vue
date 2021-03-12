<template>
  <tr class="table__tr pa-10">
    <td class="table__td--name">
      <img class="table__img" :src="img" />
      <span class="table__span">{{ name }}</span>
    </td>
    <td class="table__td">25</td>
    <td class="table__td">280,000</td>
    <td class="table__td">13,500</td>
    <td class="table__td">20</td>
    <td class="table__td">55%</td>
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
      matches: 0,
      totalScore: 0,
      escape: 0,
    })

    return {
      ...toRefs(results),
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/survivor-table.scss';
</style>
