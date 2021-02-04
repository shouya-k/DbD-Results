import { reactive } from '@nuxtjs/composition-api'

export const useParkModal = () => {
  const survivor = reactive({
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
    parkImage01: null,
    parkImage02: null,
    parkImage03: null,
    parkImage04: null,
  })

  const showParkModal01 = () => (survivor.parkModal01 = true)
  const showParkModal02 = () => (survivor.parkModal02 = true)
  const showParkModal03 = () => (survivor.parkModal03 = true)
  const showParkModal04 = () => (survivor.parkModal04 = true)

  const hiddenParkModal01 = () => (survivor.parkModal01 = false)
  const hiddenParkModal02 = () => (survivor.parkModal02 = false)
  const hiddenParkModal03 = () => (survivor.parkModal03 = false)
  const hiddenParkModal04 = () => (survivor.parkModal04 = false)

  const selectPark01 = (event: any): void => {
    survivor.parkModal01 = false
    survivor.parkId01 = event.id
    survivor.parkName01 = event.name
    survivor.parkImage01 = event.url
  }
  const selectPark02 = (event: any): void => {
    survivor.parkModal02 = false
    survivor.parkId02 = event.id
    survivor.parkName02 = event.name
    survivor.parkImage02 = event.url
  }
  const selectPark03 = (event: any): void => {
    survivor.parkModal03 = false
    survivor.parkId03 = event.id
    survivor.parkName03 = event.name
    survivor.parkImage03 = event.url
  }
  const selectPark04 = (event: any): void => {
    survivor.parkModal04 = false
    survivor.parkId04 = event.id
    survivor.parkName04 = event.name
    survivor.parkImage04 = event.url
  }

  return {
    survivor,
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
