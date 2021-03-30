import { reactive } from '@vue/composition-api'
import { API } from 'aws-amplify'
import { searchKillerResults } from '~/graphql/queries'

export const useGetResult = () => {
  const results = reactive<any>([])

  const getResult = async () => {
    try {
      const result: any = await API.graphql({
        query: searchKillerResults,
        variables: {
          sort: {
            field: 'createdAt',
            direction: 'desc',
          },
        },
      })
      results.push(...result.data.searchKillerResults.items)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    results,
    getResult,
  }
}
