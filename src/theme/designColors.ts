interface ModeColors {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    button: string;
  };
}

const lightModeColors = {
  dark: false,
  colors: {
    primary: '#BF0812',
    background: '#f2f3fa',
    card: '#F5D7DB',
    text: '#333333',
    border: '#E0E0E0',
    notification: '#FF9900',
    button: '#1B3358',
  },
};

const darkModeColors = {
  dark: true,
  colors: {
    primary: '#BF0812',
    background: '#000',
    card: '#333333',
    text: '#FFFFFF',
    border: '#D9D9D9',
    notification: '#F5D7DB',
    button: '#1B3358',
  },
};

export {lightModeColors, darkModeColors};
export type {ModeColors};
