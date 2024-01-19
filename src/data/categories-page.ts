interface CategoriesPage {
  category: string;
  animes: Anime[];
}

interface Anime {
  title: string;
  rating: number;
  poster: string;
}

export const categoriesPage: CategoriesPage[] = [
  {
    category: 'Acción',
    animes: [
      {
        title: 'Tate no Yuusha no Nariagari',
        rating: 7.4,
        poster:
          'https://image.tmdb.org/t/p/original/idjccqjILRhGn5FmjMcARJQLoMe.jpg',
      },
      {
        title: 'Jujutsu Kaisen',
        rating: 8.3,
        poster:
          'https://image.tmdb.org/t/p/original/eNWo1SAzHVnXNBYagafAm9yjMgJ.jpg',
      },
      {
        title: 'Zom 100: Zombie ni Naru made ni Shitai 100 no Koto',
        rating: 7.7,
        poster:
          'https://image.tmdb.org/t/p/original/nWX0UcQMj3kJyqBFBE65dd7y3Px.jpg',
      },
      {
        title: 'Goblin Slayer',
        rating: 7.0,
        poster:
          'https://image.tmdb.org/t/p/original/nUiT0whRDuUJKkk74L1pn8xUE2z.jpg',
      },
      {
        title: 'Vinland Saga',
        rating: 7.3,
        poster:
          'https://image.tmdb.org/t/p/original/ySPYLN1sHmgRdqdfLOE092JlNTp.jpg',
      },
      {
        title: 'Mashle: Magic and muscles',
        rating: 9.6,
        poster:
          'https://image.tmdb.org/t/p/original/9rvbqwoEis7SZjbfiIYjzE2uWz3.jpg',
      },
      {
        title: 'Dead Mount Death Play',
        rating: 7.8,
        poster:
          'https://image.tmdb.org/t/p/original/gkSK9eU1PvsXVkH6M6ym8D3yxFr.jpg',
      },
      {
        title: 'Kimetsu no Yaiba',
        rating: 8.0,
        poster:
          'https://image.tmdb.org/t/p/original/7Uj6vqmznWQ3w3hpQ1eIY9mMyMw.jpg',
      },
      {
        title: 'Spy Kyoushitsu',
        rating: 7.9,
        poster:
          'https://image.tmdb.org/t/p/original/rvZTXbTcD3gIm3pWSQIbN89oqbu.jpg',
      },
      {
        title: 'Boku no Hero Academia',
        rating: 7.6,
        poster:
          'https://image.tmdb.org/t/p/original/dmUuNVWAJumRkDNuauFaLSvga00.jpg',
      },
    ],
  },
  {
    category: 'Artes marciales',
    animes: [
      {
        title: 'Rurouni Kenshin: Meiji Kenkaku Romantan (2023)',
        rating: 8.3,
        poster:
          'https://image.tmdb.org/t/p/original/AiXvvZfkjxbcNPyBvrttW15cac6.jpg',
      },
      {
        title: 'The God of High School',
        rating: 6.4,
        poster:
          'https://image.tmdb.org/t/p/original/gfMBnUVzWTlal8Hr0RfgnVe6kHW.jpg',
      },
      {
        title: 'Majutsushi Orphen Hagure Tabi',
        rating: 5.4,
        poster:
          'https://image.tmdb.org/t/p/original/gpKkTtVMoneNPBdsQv3E77kgT8e.jpg',
      },
      {
        title: 'Dragon Ball Z',
        rating: 9.1,
        poster:
          'https://image.tmdb.org/t/p/original/jB9l4mp0bzBgzE5y4tvBH6AMeMk.jpg',
      },
      {
        title: 'Baki',
        rating: 9.4,
        poster:
          'https://image.tmdb.org/t/p/original/j4bL0G8h8k49MuXKYfZqhXqk2rI.jpg',
      },
      {
        title: 'Megalo Box',
        rating: 7.9,
        poster:
          'https://image.tmdb.org/t/p/original/jJNt35kX7Ovxm3zZqt0eaSzwFxO.jpg',
      },
      {
        title: 'Hajime no Ippo',
        rating: 9.5,
        poster:
          'https://image.tmdb.org/t/p/original/umMYjHm7FjsyllUnC8lWDy9rrZQ.jpg',
      },
      {
        title: 'Kengan Ashura',
        rating: 7.5,
        poster:
          'https://image.tmdb.org/t/p/original/kXXHvqKNEA8YGPPfACzQIwpLlGw.jpg',
      },
      {
        title: 'Samurai Champloo',
        rating: 7.2,
        poster:
          'https://image.tmdb.org/t/p/original/t6x0fNlD89oOKDJDfgjYDNGLp5R.jpg',
      },
      {
        title: 'Hokuto no Ken',
        rating: 7.5,
        poster:
          'https://image.tmdb.org/t/p/original/lokIbr6KuBGQKwAlUGTs8eY0u3D.jpg',
      },
    ],
  },
  {
    category: 'Aventura',
    animes: [
      {
        title: 'Ishura',
        rating: 7.0,
        poster:
          'https://image.tmdb.org/t/p/original/Q0nbxeYiFQJxzJ8nTTOwWNij2z.jpg',
      },
      {
        title: 'Sousou no Frieren',
        rating: 8.0,
        poster:
          'https://image.tmdb.org/t/p/original/dDRiOkCBCkd7w6ysMFr39G16opQ.jpg',
      },
      {
        title: 'Solo Leveling',
        rating: 8.8,
        poster:
          'https://image.tmdb.org/t/p/original/451lpwzbSKClDUHmKxOcBboBf7E.jpg',
      },
      {
        title: 'Nozomanu Fushi no Boukensha',
        rating: 7.9,
        poster:
          'https://image.tmdb.org/t/p/original/krnR0ANlwtlNEX7jgO8NJtj7QiB.jpg',
      },
      {
        title: 'Jitsu wa Ore, Saikyou deshita?',
        rating: 7.0,
        poster:
          'https://image.tmdb.org/t/p/original/kG5Y53kksNy3f8BjOvhVBILUmNl.jpg',
      },
      {
        title: 'Arifureta Shokugyou de Sekai Saikyou',
        rating: 7.5,
        poster:
          'https://image.tmdb.org/t/p/original/3vwcB2MtQA1VZMCljCRSrDzNzdj.jpg',
      },
      {
        title: 'Isekai wa Smartphone to Tomo ni.',
        rating: 8.5,
        poster:
          'https://image.tmdb.org/t/p/original/nYhXZGaYzicdOoV4eyKCdLuyttw.jpg',
      },
      {
        title:
          'Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru: Level Up wa Jinsei wo Kaeta',
        rating: 6.8,
        poster:
          'https://image.tmdb.org/t/p/original/50OsbGp6AWw4za2aAM82vKburcg.jpg',
      },
      {
        title: 'Isekai Shoukan wa Nidome desu',
        rating: 6.5,
        poster:
          'https://image.tmdb.org/t/p/original/60stn7Elxf9VHnkaUjTU5FJJwAz.jpg',
      },
      {
        title: 'Kuma Kuma Kuma Bear Punch!',
        rating: 8.1,
        poster:
          'https://image.tmdb.org/t/p/original/urR32sOXF7w0a2h8u572fxvJILy.jpg',
      },
    ],
  },
];
