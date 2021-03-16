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
    resultsData: {},
  },
  setup(props, context) {
    const results = reactive({
      totalScore: 0,
      matches: 0,
      escape: 0,
    })

    const resultData = reactive<any>(props.resultsData)
    // const sortResultData = reactive<any>([])

    const sortResult = () => {
      setTimeout(() => {
        for (const item of resultData) {
          if (item.killerName === props.name && item.survival === true) {
            results.totalScore += Number(item.score)
            results.matches++
            results.escape++
          } else if (item.killerName === props.name) {
            results.totalScore += Number(item.score)
            results.matches++
          }
        }
      }, 1000)
    }

    sortResult()

    return {
      ...toRefs(results),
      resultData,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/survivor-table.scss';
</style>
