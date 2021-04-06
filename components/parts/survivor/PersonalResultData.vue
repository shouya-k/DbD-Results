<template>
  <tr v-show="matches != 0" class="table__tr pa-10">
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
import { Auth } from 'aws-amplify'

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
      matches: 0,
      totalScore: 0,
      escape: 0,
    })

    const resultData = reactive<any>(props.resultsData)

    const sortResult = async () => {
      const user: any = await Auth.currentAuthenticatedUser()
      setTimeout(() => {
        for (const item of resultData) {
          if (
            item.uid === user.attributes.sub &&
            item.killerName === props.name &&
            item.survival === true
          ) {
            results.totalScore += Number(item.score)
            results.matches++
            results.escape++
          } else if (
            item.uid === user.attributes.sub &&
            item.killerName === props.name
          ) {
            results.totalScore += Number(item.score)
            results.matches++
          }
        }
      }, 1000)
    }

    sortResult()

    return {
      ...toRefs(results),
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/survivor-table.scss';
</style>
