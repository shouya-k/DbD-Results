import { API } from 'aws-amplify'
import { createKillerResult } from '~/graphql/mutations'
import { KillerResult, Modal } from '~/types/resultForm'

export const useCreateResult = async (
  form: KillerResult,
  modal: Modal,
  uid: string
): Promise<void> => {
  try {
    await API.graphql({
      query: createKillerResult,
      variables: {
        input: {
          uid,
          killerId: modal.killerId,
          killerImage: modal.killerImage,
          killerName: modal.killerName,
          score: form.score,
          parkId01: modal.parkId01,
          parkId02: modal.parkId02,
          parkId03: modal.parkId03,
          parkId04: modal.parkId04,
          parkImage01: modal.parkImage01,
          parkImage02: modal.parkImage02,
          parkImage03: modal.parkImage03,
          parkImage04: modal.parkImage04,
          killed: form.killed,
          perfect: form.perfect,
        },
      },
    })
  } catch (error) {
    console.log(error)
  }
}
