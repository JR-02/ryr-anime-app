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
      {
        title: 'Solo Leveling (Ore dake Level Up na Ken)',
        rating: 7.2,
        poster:
          'https://image.tmdb.org/t/p/original/451lpwzbSKClDUHmKxOcBboBf7E.jpg',
      },
      {
        title: 'Saihate no Paladin',
        rating: 7.3,
        poster:
          'https://image.tmdb.org/t/p/original/np72JmV9kjx3I9b5sHyoMcHT33H.jpg',
      },
      {
        title: 'Hametsu no Oukoku',
        rating: 6.9,
        poster:
          'https://image.tmdb.org/t/p/original/kdZXiaF5EYASkCYEyKrqrz8036.jpg',
      },
      {
        title: 'Kage no Jitsuryokusha ni Naritakute!',
        rating: 7.4,
        poster:
          'https://image.tmdb.org/t/p/original/vP9AbL4wHz0eKlg6gu1nKMZA1Jc.jpg',
      },
      {
        title: 'Bleach',
        rating: 7.8,
        poster:
          'https://image.tmdb.org/t/p/original/mB6h4mlZXufkWtt58Bh1DiVvNgv.jpg',
      },
      {
        title: 'NieR:Automata Ver1.1a',
        rating: 8.9,
        poster:
          'https://image.tmdb.org/t/p/original/qHSCYOXHV3EKXKkMxUvC9rGx4Av.jpg',
      },
      {
        title: 'Shuumatsu no Walküre',
        rating: 7.6,
        poster:
          'https://image.tmdb.org/t/p/original/ygE1AEV6pXFuCzbjS9ts59LxDm5.jpg',
      },
      {
        title: 'Chainsaw Man',
        rating: 7.4,
        poster:
          'https://image.tmdb.org/t/p/original/mIz0eKhzHuSPeRSePCyoCt9bKVp.jpg',
      },
      {
        title: 'Sword Art Online',
        rating: 7.6,
        poster:
          'https://image.tmdb.org/t/p/original/mK9zGGk90VmHLOnK79sqlGFjZjW.jpg',
      },
      {
        title: 'Overlord',
        rating: 8.0,
        poster:
          'https://image.tmdb.org/t/p/original/6l6yukaVkE3r2fH4PcFEApKlpYi.jpg',
      },
      {
        title: 'Engage Kiss',
        rating: 6.2,
        poster:
          'https://image.tmdb.org/t/p/original/6Kicbd8AmHtqHOULNUw312V22bZ.jpg',
      },
      {
        title: 'Shingeki no Kyojin',
        rating: 8.2,
        poster:
          'https://image.tmdb.org/t/p/original/5AKw0SflWQxfZjFZSKN4WArp9Mz.jpg',
      },
      {
        title: 'Koroshi Ai',
        rating: 6.4,
        poster:
          'https://image.tmdb.org/t/p/original/xSn1VQ8nvf7vH4qMh0k2FiJMrrv.jpg',
      },
      {
        title: 'Takt Op. Destiny',
        rating: 6.1,
        poster:
          'https://image.tmdb.org/t/p/original/m1sJZonLyL0EG25qNc99Ml5DLlu.jpg',
      },
      {
        title: 'Enen no Shouboutai',
        rating: 7.6,
        poster:
          'https://image.tmdb.org/t/p/original/qDNgM4STqdzl4IBMyqCVMIr6uUV.jpg',
      },
      {
        title: 'Nanatsu no Taizai',
        rating: 7.6,
        poster:
          'https://image.tmdb.org/t/p/original/sKT25tkNMSpLbqfBr4lnhsIdvec.jpg',
      },
      {
        title: 'Tokyo Revengers',
        rating: 8.1,
        poster:
          'https://image.tmdb.org/t/p/original/bDNlXl8Ola3vatbq1OiSWV5UXBO.jpg',
      },
      {
        title: '86: Eighty-Six',
        rating: 8.4,
        poster:
          'https://image.tmdb.org/t/p/original/60gOfVZC0OPgnwUmuhbyAJ31p3O.jpg',
      },
      {
        title: 'Akame ga Kill!',
        rating: 7.6,
        poster:
          'https://image.tmdb.org/t/p/original/hDzm2VXxdeK5kztUN3RWTkBsBZg.jpg',
      },
      {
        title: 'Deca-Dence',
        rating: 7.8,
        poster:
          'https://image.tmdb.org/t/p/original/xVGDTssXz5KBIqU1R16toTV1Gfu.jpg',
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
        title: 'Naruto',
        rating: 6.9,
        poster:
          'https://image.tmdb.org/t/p/original/Asv6ornwVeMxKUdA5ySLMrgENwy.jpg',
      },
      {
        title: 'Naruto Shippuden',
        rating: 7.9,
        poster:
          'https://image.tmdb.org/t/p/original/zAYRe2bJxpWTVrwwmBc00VFkAf4.jpg',
      },
      {
        title: 'Dragon Ball',
        rating: 7.9,
        poster:
          'https://image.tmdb.org/t/p/original/onCLyCOgszTIyyVs2XKYSkKPOPG.jpg',
      },
      {
        title: 'Dragon Ball Z',
        rating: 9.1,
        poster:
          'https://image.tmdb.org/t/p/original/jB9l4mp0bzBgzE5y4tvBH6AMeMk.jpg',
      },
      {
        title: 'Dragon Ball Z Kai',
        rating: 8.1,
        poster:
          'https://image.tmdb.org/t/p/original/yh11eNQyZOgZLMEW7llKYQ0oGcJ.jpg',
      },
      {
        title: 'Dragon Ball Super',
        rating: 9.1,
        poster:
          'https://image.tmdb.org/t/p/original/98tMo9NWnecRVRL1VR5sYLsYrsu.jpg',
      },
      {
        title: 'Dragon Ball Heroes',
        rating: 9.2,
        poster:
          'https://image.tmdb.org/t/p/original/8jq6xv5c1WK7KAPOXCsodm8eUxp.jpg',
      },
      {
        title: 'Dragon Ball GT',
        rating: 6.0,
        poster:
          'https://image.tmdb.org/t/p/original/rLHhDpv6rrhuzBjNzaMRNv2fng.jpg',
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
      {
        title: 'Ben-To',
        rating: 8.0,
        poster:
          'https://image.tmdb.org/t/p/original/tilQgKy9zLo4nSVAaphRMhC0Tbu.jpg',
      },
      {
        title: 'Ken En Ken: Aoki Kagayaki',
        rating: 6.0,
        poster:
          'https://image.tmdb.org/t/p/original/7lVvblfZr6hpMON58V7hKbdHGJ0.jpg',
      },
      {
        title: 'Kenichi',
        rating: 8.0,
        poster:
          'https://image.tmdb.org/t/p/original/yxvPU6QzRjhy58HFkFoXn60z7n9.jpg',
      },
      {
        title: 'Fullmetal Alchemist: Brotherhood',
        rating: 6.9,
        poster:
          'https://image.tmdb.org/t/p/original/iAld03IP69UEpqQbVWoRBvjqkqX.jpg',
      },
      {
        title: 'Tenjo Tenge',
        rating: 6.9,
        poster:
          'https://image.tmdb.org/t/p/original/mTkTqRFusTa5rZW8S9YxPhOwIcw.jpg',
      },
      {
        title: 'Kurozuka',
        rating: 5.8,
        poster:
          'https://image.tmdb.org/t/p/original/hez6h5LZxedDfzHHPu3iqj2Gm82.jpg',
      },
      {
        title: 'Samurai Champloo',
        rating: 7.3,
        poster:
          'https://image.tmdb.org/t/p/original/cPrskObKWlhJHEXMDej5Q5jrqc8.jpg',
      },
      {
        title: 'Shigurui: Death Frenzy',
        rating: 8.3,
        poster:
          'https://image.tmdb.org/t/p/original/me1yCtPZAC6kEW1IGWW7XxJASCt.jpg',
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
  {
    category: 'Ciencia Ficción',
    animes: [
      {
        title: 'Metallic Rouge',
        rating: 6.7,
        poster:
          'https://image.tmdb.org/t/p/original/oLMLxZBmIFE6tWg5s8UwuYOWTVI.jpg',
      },
      {
        title: 'Dr. Stone',
        rating: 7.5,
        poster:
          'https://image.tmdb.org/t/p/original/xbZQ3fDl0y5mt0ARwfeyrgQ4JTw.jpg',
      },
      {
        title: 'NieR:Automata Ver1.1a',
        rating: 8.7,
        poster:
          'https://image.tmdb.org/t/p/original/qHSCYOXHV3EKXKkMxUvC9rGx4Av.jpg',
      },
      {
        title: '86: Eighty-Six',
        rating: 8.5,
        poster:
          'https://image.tmdb.org/t/p/original/60gOfVZC0OPgnwUmuhbyAJ31p3O.jpg',
      },
      {
        title: 'Dolls’ Frontline',
        rating: 5.5,
        poster:
          'https://image.tmdb.org/t/p/original/c5GOXlm4kfRdK4w6XXwDGabW6A0.jpg',
      },
      {
        title: 'Scarlet Nexus',
        rating: 6.5,
        poster:
          'https://image.tmdb.org/t/p/original/oiuyTyGKrim6iUIP37WHV3uGmv3.jpg',
      },
      {
        title: 'Azur',
        rating: 8.9,
        poster:
          'https://image.tmdb.org/t/p/original/3qlYMlrRJCQvlht71fWrP5Zc4Pc.jpg',
      },
      {
        title: 'Yakusoku no Neverland',
        rating: 7.6,
        poster:
          'https://image.tmdb.org/t/p/original/4ojYZGjs1wlXu4gMAVGxKkNvOGj.jpg',
      },
      {
        title: 'Deca-Dence',
        rating: 7.8,
        poster:
          'https://image.tmdb.org/t/p/original/xVGDTssXz5KBIqU1R16toTV1Gfu.jpg',
      },
      {
        title: 'Btooom',
        rating: 8.0,
        poster:
          'https://image.tmdb.org/t/p/original/u6rusfe5xiwHRFf5XtuZa8KmKjP.jpg',
      },
    ],
  },
];
