import { ref } from '@nuxtjs/composition-api'
import { API, Auth } from 'aws-amplify'
import { searchUsers } from '~/graphql/queries'

export const useGetUser = () => {
  const userId = ref('')

  const getUser = async (): Promise<void> => {
    try {
      const currentUserData: any = await Auth.currentAuthenticatedUser()
      const user: any = await API.graphql({
        query: searchUsers,
        variables: {
          filters: {
            uid: {
              match: currentUserData.attributes.sub,
            },
          },
        },
      })
      userId.value = user.data.searchUsers.items[0].id
    } catch (error) {
      console.log(error)
    }
  }

  return {
    userId,
    getUser,
  }
}
