import { API } from 'aws-amplify'
import { createSurvivorResult } from '~/graphql/mutations'
import { Result, Killer, Survivor } from '~/types/SurvivorResult'

export const useCreateResult = async (
  form: Result,
  killer: Killer,
  survivor: Survivor
): Promise<void> => {
  try {
    await API.graphql({
      query: createSurvivorResult,
      variables: {
        input: {
          killerId: killer.id,
          killerImage: killer.image,
          killerName: killer.name,
          score: form.score,
          parkId01: survivor.parkId01,
          parkId02: survivor.parkId02,
          parkId03: survivor.parkId03,
          parkId04: survivor.parkId04,
          parkImage01: survivor.parkImage01,
          parkImage02: survivor.parkImage02,
          parkImage03: survivor.parkImage03,
          parkImage04: survivor.parkImage04,
          status: form.status,
          survival: form.survival,
        },
      },
    })
  } catch (error) {
    console.log(error)
  }
}
