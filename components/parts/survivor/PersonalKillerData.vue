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
import { API, Auth } from 'aws-amplify'
import { searchSurvivorResults } from '~/graphql/queries'

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

    const serchResult = async (): Promise<void> => {
      try {
        const user: any = await Auth.currentAuthenticatedUser()
        const result: any = await API.graphql({
          query: searchSurvivorResults,
          variables: {
            filter: {
              uid: {
                match: user.attributes.sub,
              },
              killerId: {
                match: props.id,
              },
            },
          },
        })
        getResult(result.data.searchSurvivorResults.items)
      } catch (error) {
        console.log(error)
      }
    }

    const getResult = (items: any) => {
      for (const item of items) {
        results.totalScore += Number(item.score)
        results.matches++
        if (item.survival === true) {
          results.escape++
        }
      }
    }

    serchResult()

    return {
      ...toRefs(results),
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/survivor-table.scss';
</style>
