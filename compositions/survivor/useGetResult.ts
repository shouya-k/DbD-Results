import { ref } from '@nuxtjs/composition-api'
import { API, Auth } from 'aws-amplify'
import { searchSurvivorResults } from '~/graphql/queries'

export const useGetResult = () => {
  const results = ref([])

  const getResult = async (): Promise<void> => {
    try {
      const user: any = await Auth.currentAuthenticatedUser()
      const result: any = await API.graphql({
        query: searchSurvivorResults,
        variables: {
          filter: {
            uid: {
              match: user.attributes.sub,
            },
          },
          sort: {
            field: 'createdAt',
            direction: 'desc',
          },
          limit: 30,
        },
      })
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
