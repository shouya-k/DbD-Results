import { ref } from '@nuxtjs/composition-api'
import { API } from 'aws-amplify'
import { searchSurvivorResults } from '~/graphql/queries'

export const useGetResult = () => {
  const results = ref([])

  const getResult = async (): Promise<void> => {
    try {
      const result: any = await API.graphql({
        query: searchSurvivorResults,
        variables: {
          sort: {
            field: 'createdAt',
            direction: 'desc',
          },
          limit: 30,
        },
      })
      console.log(result)
      results.value = result.data.searchSurvivorResults.items
    } catch (error) {
      console.log(error)
    }
  }

  const serchResult = async (killers: any): Promise<void> => {
    try {
      const result: any = await API.graphql({
        query: searchSurvivorResults,
        variables: {
          filter: {
            killerId: {
              match: killers.id,
            },
          },
        },
      })
      results.value = result.data.searchSurvivorResults.items
    } catch (error) {
      console.log(error)
    }
  }

  return {
    results,
    getResult,
    serchResult,
  }
}
