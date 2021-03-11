import { reactive } from '@nuxtjs/composition-api'

export const useSortResult = () => {
  const sortResultData01 = reactive({
    totalScore: 0,
    matches: 0,
    escape: 0,
  })

  const sortResult01 = (items: any): void => {
    for (const item of items) {
      if (item.killerName === 'トラッパー' && item.survival === true) {
        sortResultData01.totalScore += Number(item.score)
        sortResultData01.matches++
        sortResultData01.escape++
        console.log(item)
      } else if (item.killerName === 'トラッパー') {
        sortResultData01.totalScore += Number(item.score)
        sortResultData01.matches++
      }
    }
  }

  return {
    sortResultData01,
    sortResult01,
  }
}
