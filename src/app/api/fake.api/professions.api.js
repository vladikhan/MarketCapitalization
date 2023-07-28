export const professionsObject = {
  it: { _id: '67rdca3eeb7f6fgeed471818', name: 'IT' },
  brands: { _id: '67rdca3eeb7f6fgeed471820', name: 'Brands' },
  cars: { _id: '67rdca3eeb7f6fgeed471814', name: 'Cars' },
  singer: { _id: '67rdca3eeb7f6fgeed471822', name: 'Singer' },
  technology: { _id: '67rdca3eeb7f6fgeed471824', name: 'Techology' },
  sportmen: { _id: '67rdca3eeb7f6fgeed471829', name: 'Sportmen' },
  writer: { _id: '67rdca3eeb7f6fgeed471819', name: 'Writer' },
}
export const professions = [
  { _id: '67rdca3eeb7f6fgeed471818', name: 'IT' },
  { _id: '67rdca3eeb7f6fgeed471820', name: 'Brands' },
  { _id: '67rdca3eeb7f6fgeed471814', name: 'Cars' },
  { _id: '67rdca3eeb7f6fgeed471822', name: 'Singer' },
  { _id: '67rdca3eeb7f6fgeed471824', name: 'Techology' },
  { _id: '67rdca3eeb7f6fgeed471829', name: 'Sportmen' },
  { _id: '67rdca3eeb7f6fgeed471819', name: 'Writer' },
]
const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(professions)
    }, 2000)
  })

export default {
  fetchAll,
}
