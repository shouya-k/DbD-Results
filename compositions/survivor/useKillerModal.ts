import { reactive } from '@nuxtjs/composition-api'

export const useKillerModal = () => {
  const killer = reactive({
    modal: false,
    id: '',
    image: require('@/assets/img/default-img.svg'),
    name: '',
  })

  const showKillerModal = () => (killer.modal = true)
  const hiddenKillerModal = () => (killer.modal = false)

  const selectKiller = (event: any): void => {
    killer.modal = false
    killer.image = event.url
    killer.name = event.name
    killer.id = event.id
  }

  return {
    killer,
    showKillerModal,
    hiddenKillerModal,
    selectKiller,
  }
}
