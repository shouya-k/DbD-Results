<template>
  <tr class="table__tr pa-10">
    <td class="table__td--name">
      <img class="table__img" :src="img" />
      <span class="table__span">{{ name }}</span>
    </td>
    <td class="table__td">{{ matches }}</td>
    <td class="table__td">{{ totalScore.toLocaleString() }}</td>
    <td class="table__td">
      {{ Math.round(totalScore / matches).toLocaleString() }}
    </td>
    <td class="table__td">{{ escape }}</td>
    <td class="table__td">{{ Math.round((escape / matches) * 100) + '%' }}</td>
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
