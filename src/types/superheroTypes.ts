// superheroTypes.ts

interface Powerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

interface Biography {
  'full-name': string;
  'alter-egos': string;
  aliases: string[];
  'place-of-birth': string;
  'first-appearance': string;
  publisher: string;
  alignment: string;
}

interface Appearance {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  'eye-color': string;
  'hair-color': string;
}

interface Work {
  occupation: string;
  base: string;
}

interface Connections {
  'group-affiliation': string;
  relatives: string;
}

interface Image {
  url: string;
}

interface SuperheroResponse {
  response: string;
  id: string;
  name: string;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  work: Work;
  connections: Connections;
  image: Image;
}

export default SuperheroResponse;
