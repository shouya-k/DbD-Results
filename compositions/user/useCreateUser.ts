import { API } from 'aws-amplify'
import { createUser } from '~/graphql/mutations'
import { User } from '~/types/user'

export const useCreateUser = (user: User): void => {
  API.graphql({
    query: createUser,
    variables: {
      input: {
        uid: user.attributes.sub,
        name: user.attributes.nickname,
        img: user.attributes.picture,
      },
    },
  })
}
