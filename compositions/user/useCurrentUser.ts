import { Auth } from 'aws-amplify'

export const useCurrentUser = (context: any) => {
  const router = context.root.$router

  const getCurrentUser = async (): Promise<void> => {
    try {
      await Auth.currentAuthenticatedUser()
    } catch (error) {
      console.log(error)
      router.push('/signup')
    }
  }

  return { router, getCurrentUser }
}
