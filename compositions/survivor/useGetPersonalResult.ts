import { ref } from '@nuxtjs/composition-api'
import { API, Auth } from 'aws-amplify'
import { searchSurvivorResults } from '~/graphql/queries'

export const useGetPersonalResult = () => {
  const results = ref([])

  const getPersonalResult = async () => {
    const user: any = await Auth.currentAuthenticatedUser()
    const result = await API.graphql({
      query: searchSurvivorResults,
      variables: {
        filter: {
          uid: {
            match: user.attributes.sub,
          },
        },
      },
    })
    console.log(result)
  }

  return {
    results,
    getPersonalResult,
  }
}
