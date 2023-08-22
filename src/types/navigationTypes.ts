export type RootStackParamList = {
  Home: undefined;
  Detail: {character_id: string};
  Search: undefined;
  Profile: undefined;
};

export type Nav = {
  navigate: (value: string, params: object) => void;
};
