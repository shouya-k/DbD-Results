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

  const getKillerParkDataFromLocalStorege = () => {
    if (localStorage.parkId01) {
      modal.parkId01 = localStorage.killerParkId01
      modal.parkName01 = localStorage.killerParkName01
      modal.parkImage01 = localStorage.killerParkImage01
    }
    if (localStorage.parkId02) {
      modal.parkId02 = localStorage.killerParkId02
      modal.parkName02 = localStorage.killerParkName02
      modal.parkImage02 = localStorage.killerParkImage02
    }
    if (localStorage.parkId03) {
      modal.parkId03 = localStorage.killerParkId03
      modal.parkName03 = localStorage.killerParkName03
      modal.parkImage03 = localStorage.killerParkImage03
    }
    if (localStorage.parkId04) {
      modal.parkId04 = localStorage.killerParkId04
      modal.parkName04 = localStorage.killerParkName04
      modal.parkImage04 = localStorage.killerParkImage04
    }
  }
  const getSurvivorParkDataFromLocalStorege = () => {
    if (localStorage.parkId01) {
      modal.parkId01 = localStorage.survivorParkId01
      modal.parkName01 = localStorage.survivorParkName01
      modal.parkImage01 = localStorage.survivorParkImage01
    }
    if (localStorage.parkId02) {
      modal.parkId02 = localStorage.survivorParkId02
      modal.parkName02 = localStorage.survivorParkName02
      modal.parkImage02 = localStorage.survivorParkImage02
    }
    if (localStorage.parkId03) {
      modal.parkId03 = localStorage.survivorParkId03
      modal.parkName03 = localStorage.survivorParkName03
      modal.parkImage03 = localStorage.survivorParkImage03
    }
    if (localStorage.parkId04) {
      modal.parkId04 = localStorage.survivorParkId04
      modal.parkName04 = localStorage.survivorParkName04
      modal.parkImage04 = localStorage.survivorParkImage04
    }
  }

  const showParkModal01 = () => (modal.parkModal01 = true)
  const showParkModal02 = () => (modal.parkModal02 = true)
  const showParkModal03 = () => (modal.parkModal03 = true)
  const showParkModal04 = () => (modal.parkModal04 = true)

  const hiddenParkModal01 = () => (modal.parkModal01 = false)
  const hiddenParkModal02 = () => (modal.parkModal02 = false)
  const hiddenParkModal03 = () => (modal.parkModal03 = false)
  const hiddenParkModal04 = () => (modal.parkModal04 = false)

  const selectKillerPark01 = (event: {
    id: string
    name: string
    url: string
  }): void => {
    modal.parkModal01 = false
    modal.parkId01 = event.id
    modal.parkName01 = event.name
    modal.parkImage01 = event.url
    localStorage.killerParkId01 = event.id
    localStorage.killerParkName01 = event.name
    localStorage.killerParkImage01 = event.url
  }
  const selectKillerPark02 = (event: {
    id: string
    name: string
    url: string
  }): void => {
    modal.parkModal02 = false
    modal.parkId02 = event.id
    modal.parkName02 = event.name
    modal.parkImage02 = event.url
    localStorage.killerParkId02 = event.id
    localStorage.killerParkName02 = event.name
    localStorage.killerParkImage02 = event.url
  }
  const selectKillerPark03 = (event: {
    id: string
    name: string
    url: string
  }): void => {
    modal.parkModal03 = false
    modal.parkId03 = event.id
    modal.parkName03 = event.name
    modal.parkImage03 = event.url
    localStorage.killerParkId03 = event.id
    localStorage.killerParkName03 = event.name
    localStorage.killerParkImage03 = event.url
  }
  const selectKillerPark04 = (event: {
    id: string
    name: string
    url: string
  }): void => {
    modal.parkModal04 = false
    modal.parkId04 = event.id
    modal.parkName04 = event.name
    modal.parkImage04 = event.url
    localStorage.killerParkId04 = event.id
    localStorage.killerParkName04 = event.name
    localStorage.killerParkImage04 = event.url
  }
  const selectSurvivorPark01 = (event: {
    id: string
    name: string
    url: string
  }): void => {
    modal.parkModal01 = false
    modal.parkId01 = event.id
    modal.parkName01 = event.name
    modal.parkImage01 = event.url
    localStorage.survivorParkId01 = event.id
    localStorage.survivorParkName01 = event.name
    localStorage.survivorParkImage01 = event.url
  }
  const selectSurvivorPark02 = (event: {
    id: string
    name: string
    url: string
  }): void => {
    modal.parkModal02 = false
    modal.parkId02 = event.id
    modal.parkName02 = event.name
    modal.parkImage02 = event.url
    localStorage.survivorParkId02 = event.id
    localStorage.survivorParkName02 = event.name
    localStorage.survivorParkImage02 = event.url
  }
  const selectSurvivorPark03 = (event: {
    id: string
    name: string
    url: string
  }): void => {
    modal.parkModal03 = false
    modal.parkId03 = event.id
    modal.parkName03 = event.name
    modal.parkImage03 = event.url
    localStorage.survivorParkId03 = event.id
    localStorage.survivorParkName03 = event.name
    localStorage.survivorParkImage03 = event.url
  }
  const selectSurvivorPark04 = (event: {
    id: string
    name: string
    url: string
  }): void => {
    modal.parkModal04 = false
    modal.parkId04 = event.id
    modal.parkName04 = event.name
    modal.parkImage04 = event.url
    localStorage.survivorParkId04 = event.id
    localStorage.survivorParkName04 = event.name
    localStorage.survivorParkImage04 = event.url
  }

  return {
    modal,
    showKillerModal,
    hiddenKillerModal,
    selectKiller,
    getKillerParkDataFromLocalStorege,
    getSurvivorParkDataFromLocalStorege,
    showParkModal01,
    showParkModal02,
    showParkModal03,
    showParkModal04,
    hiddenParkModal01,
    hiddenParkModal02,
    hiddenParkModal03,
    hiddenParkModal04,
    selectKillerPark01,
    selectKillerPark02,
    selectKillerPark03,
    selectKillerPark04,
    selectSurvivorPark01,
    selectSurvivorPark02,
    selectSurvivorPark03,
    selectSurvivorPark04,
  }
}
