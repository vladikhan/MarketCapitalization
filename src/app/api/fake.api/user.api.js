import { professionsObject as professions } from './professions.api'
const qualities = {
  Leader: {
    _id: '67rdca3eeb7f6fgeed471198',
    name: 'Leadership',
    color: 'primary',
  },
  Risky: {
    _id: '67rdca3eeb7f6fgeed471100',
    name: 'Risk-taker',
    color: 'warning',
  },
  Imagination: {
    _id: '67rdca3eeb7f6fgeed4711012',
    name: 'Imagination',
    color: 'success',
  },
  Perfectionist: {
    _id: '67rdca3eeb7f6fgeed471101',
    name: 'Perfectionist  ',
    color: 'danger',
  },
  Performance: {
    _id: '67rdca3eeb7f6fgeed471102',
    name: 'Perfomance',
    color: 'info',
  },
  Creative: {
    _id: '67rdca3eeb7f6fgeed471103',
    name: 'Creativity',
    color: 'secondary',
  },
  Humble: {
    _id: '67rdca3eeb7f6fgeed471104',
    name: 'Humble',
    color: 'dark',
  },
}

const users = [
  {
    _id: '67rdca3eeb7f6fgeed471815',
    name: 'Steve Jobs',
    comp: (
      <a href="https://companiesmarketcap.com/apple/marketcap/" target="_blank">
        Apple
      </a>
    ),
    profession: professions.it,
    qualities: [
      qualities.Leader,
      qualities.Creative,
      qualities.Risky,
      qualities.Perfectionist,
      qualities.Imagination,
      qualities.Performance,
    ],
    capacity: '$2.984 T',
    rate: 1,
    bookmark: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471816',
    name: 'Bill Gates',
    comp: (
      <a
        href="https://companiesmarketcap.com/microsoft/marketcap/"
        target="_blank"
      >
        Microsoft
      </a>
    ),
    profession: professions.it,
    qualities: [
      qualities.Leader,
      qualities.Creative,
      qualities.Risky,
      qualities.Perfectionist,
    ],
    capacity: '$2.512 T',
    rate: 2,
    bookmark: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471817',
    name: 'Marc Zuckerberg',
    comp: (
      <a
        href="https://companiesmarketcap.com/meta-platforms/marketcap/"
        target="_blank"
      >
        Facebook
      </a>
    ),
    profession: professions.it,
    qualities: [
      qualities.Performance,
      qualities.Perfectionist,
      qualities.Leader,
    ],
    capacity: '$562.19 B',
    rate: 9,
    bookmark: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471827',
    name: 'Larry Page & Sergey Brin',
    comp: (
      <a
        href="https://companiesmarketcap.com/alphabet-google/marketcap/"
        target="_blank"
      >
        Google
      </a>
    ),
    profession: professions.it,
    qualities: [
      qualities.Imagination,
      qualities.Creative,
      qualities.Performance,
      qualities.Leader,
    ],
    capacity: '$1.525 T',
    rate: 4,
    bookmark: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471818',
    name: 'Bill Bowerman & Phil Knight',
    comp: (
      <a href="https://companiesmarketcap.com/nike/marketcap/" target="_blank">
        Nike
      </a>
    ),
    profession: professions.brands,
    qualities: [
      qualities.Creative,
      qualities.Performance,
      qualities.Imagination,
    ],
    capacity: '$165.11 B',
    rate: 68,
    bookmark: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471819',
    name: 'Joanne Rowling',
    comp: (
      <a href="https://en.wikipedia.org/wiki/Harry_Potter" target="_blank">
        Books of "Harry Potter
      </a>
    ),
    profession: professions.writer,
    qualities: [qualities.Humble, qualities.Creative, qualities.Imagination],
    capacity: '$1 B',
    rate: '~~',
    bookmark: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471820',
    name: 'Kiichiro Toyoda',
    comp: (
      <a
        href="https://companiesmarketcap.com/toyota/marketcap/"
        target="_blank"
      >
        Toyota
      </a>
    ),
    profession: professions.cars,
    qualities: [
      qualities.Risky,
      qualities.Creative,
      qualities.Performance,
      qualities.Leader,
      qualities.Humble,
      qualities.Perfectionist,
      qualities.Imagination,
    ],
    capacity: '$215.86 B',
    rate: 47,
    bookmark: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471821',
    name: 'Ed Sheeran',
    comp: (
      <a href="https://en.wikipedia.org/wiki/Ed_Sheeran" target="_blank">
        English singer-songwriter
      </a>
    ),

    profession: professions.singer,
    qualities: [qualities.Creative, qualities.Humble, qualities.Imagination],
    capacity: '$200 M',
    rate: '~~',
    bookmark: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471822',
    name: 'Soichiro Honda',
    comp: (
      <a href="https://companiesmarketcap.com/honda/marketcap/" target="_blank">
        Honda
      </a>
    ),
    profession: professions.cars,
    qualities: [
      qualities.Performance,
      qualities.Creative,
      qualities.Humble,
      qualities.Risky,
      qualities.Imagination,
    ],
    capacity: '$50.10 B',
    rate: 335,
    bookmark: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471823',
    name: 'David Beckham',
    comp: (
      <>
        <a href="https://en.wikipedia.org/wiki/Inter_Miami_CF" target="_blank">
          Inter Miami CF
        </a>
        , &nbsp;
        <a
          href="https://en.wikipedia.org/wiki/Salford_City_F.C."
          target="_blank"
        >
          Salford City
        </a>
      </>
    ),

    profession: professions.sportmen,
    qualities: [
      qualities.Risky,
      qualities.Creative,
      qualities.Humble,
      qualities.Performance,
    ],
    capacity: '$40.9 M',
    rate: '~~',
    bookmark: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471824',
    name: 'Michael Jordan',
    comp: (
      <>
        <a
          href="https://en.wikipedia.org/wiki/Charlotte_Hornets"
          target="_blank"
        >
          Charlotte Hornets
        </a>
        , &nbsp;
        <a href="https://en.wikipedia.org/wiki/23XI_Racing" target="_blank">
          23XI Racing
        </a>
      </>
    ),
    profession: professions.sportmen,
    qualities: [
      qualities.Performance,
      qualities.Creative,
      qualities.Humble,
      qualities.Risky,
    ],
    capacity: '$2.1 B',
    rate: '~~',
    bookmark: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed47181f',
    name: 'Elon Mask',
    comp: (
      <>
        <a
          href="https://companiesmarketcap.com/tesla/marketcap/"
          target="_blank"
        >
          Tesla
        </a>
        , &nbsp;
        <a href="https://en.wikipedia.org/wiki/SpaceX" target="_blank">
          SpaceX
        </a>
      </>
    ),
    profession: professions.technology,
    qualities: [
      qualities.Creative,
      qualities.Risky,
      qualities.Leader,
      qualities.Imagination,
    ],
    capacity: ' $862.07 B',
    rate: 7,
    bookmark: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed47181r',
    name: 'Jeff Bezos',
    comp: (
      <a
        href="https://companiesmarketcap.com/amazon/marketcap/"
        target="_blank"
      >
        Amazon
      </a>
    ),
    profession: professions.technology,
    qualities: [qualities.Risky, qualities.Performance, qualities.Leader],
    capacity: '$1.359 T',
    rate: 5,
    bookmark: false,
  },
]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(users)
    }, 2000)
  })

export default {
  fetchAll,
}
