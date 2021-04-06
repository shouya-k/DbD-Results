import { reactive } from '@nuxtjs/composition-api'

export const useFormModal = () => {
  const modal = reactive({
    killerModal: false,
    killerId: '',
    killerImage: require('@/assets/img/default-img.svg'),
    killerName: '',
    parkModal01: false,
    parkModal02: false,
    parkModal03: false,
    parkModal04: false,
    parkId01: '',
    parkId02: '',
    parkId03: '',
    parkId04: '',
    parkName01: '',
    parkName02: '',
    parkName03: '',
    parkName04: '',
    parkImage01: require('@/assets/img/default-img.svg'),
    parkImage02: require('@/assets/img/default-img.svg'),
    parkImage03: require('@/assets/img/default-img.svg'),
    parkImage04: require('@/assets/img/default-img.svg'),
  })

  const showKillerModal = () => (modal.killerModal = true)
  const hiddenKillerModal = () => (modal.killerModal = false)

  const selectKiller = (event: any): void => {
    modal.killerModal = false
    modal.killerImage = event.url
    modal.killerName = event.name
    modal.killerId = event.id
  }

  const showParkModal01 = () => (modal.parkModal01 = true)
  const showParkModal02 = () => (modal.parkModal02 = true)
  const showParkModal03 = () => (modal.parkModal03 = true)
  const showParkModal04 = () => (modal.parkModal04 = true)

  const hiddenParkModal01 = () => (modal.parkModal01 = false)
  const hiddenParkModal02 = () => (modal.parkModal02 = false)
  const hiddenParkModal03 = () => (modal.parkModal03 = false)
  const hiddenParkModal04 = () => (modal.parkModal04 = false)

  const selectPark01 = (event: any): void => {
    modal.parkModal01 = false
    modal.parkId01 = event.id
    modal.parkName01 = event.name
    modal.parkImage01 = event.url
  }
  const selectPark02 = (event: any): void => {
    modal.parkModal02 = false
    modal.parkId02 = event.id
    modal.parkName02 = event.name
    modal.parkImage02 = event.url
  }
  const selectPark03 = (event: any): void => {
    modal.parkModal03 = false
    modal.parkId03 = event.id
    modal.parkName03 = event.name
    modal.parkImage03 = event.url
  }
  const selectPark04 = (event: any): void => {
    modal.parkModal04 = false
    modal.parkId04 = event.id
    modal.parkName04 = event.name
    modal.parkImage04 = event.url
  }

  return {
    modal,
    showKillerModal,
    hiddenKillerModal,
    selectKiller,
    showParkModal01,
    showParkModal02,
    showParkModal03,
    showParkModal04,
    hiddenParkModal01,
    hiddenParkModal02,
    hiddenParkModal03,
    hiddenParkModal04,
    selectPark01,
    selectPark02,
    selectPark03,
    selectPark04,
  }
}
