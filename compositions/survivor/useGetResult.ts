import { reactive } from '@nuxtjs/composition-api'
import { API } from 'aws-amplify'
import { searchSurvivorResults } from '~/graphql/queries'

export const useGetResult = () => {
  const results = reactive<any>([])

  const getResult = async () => {
    try {
      const result: any = await API.graphql({
        query: searchSurvivorResults,
        variables: {
          sort: {
            field: 'createdAt',
            direction: 'desc',
          },
        },
      })
      results.push(...result.data.searchSurvivorResults.items)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    results,
    getResult,
  }
}
