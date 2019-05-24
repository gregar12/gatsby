const palette = {
  purple: {
    90: `#362066`,
    80: `#452475`,
    70: `#542C85`,
    60: `#663399`,
    50: `#8a4baf`,
    40: `#B17ACC`,
    30: `#D9BAE8`,
    20: `#F1DEFA`,
    10: `#F6EDFA`,
    5: `#FCFAFF`,
  },
  orange: {
    90: `#db3a00`,
    80: `#e65800`,
    70: `#F67300`,
    60: `#FB8400`,
    50: `#FFB238`,
    40: `#FFD280`,
    30: `#FFE4A1`,
    20: `#FFEDBF`,
    10: `#FFF4DB`,
    5: `#FFFCF7`,
  },
  yellow: {
    90: `#8A6534`,
    80: `#BF9141`,
    70: `#E3A617`,
    60: `#FEC21E`,
    50: `#FED038`,
    40: `#FFDF37`,
    30: `#FFEB99`,
    20: `#FFF2A8`,
    10: `#FFF5BF`,
    5: `#FFFDF7`,
  },
  red: {
    90: `#B80000`,
    80: `#CE0009`,
    70: `#DA0013`,
    60: `#EC1818`,
    50: `#FA2915`,
    40: `#FF5A54`,
    30: `#FF8885`,
    20: `#FFBAB8`,
    10: `#FDE7E7`,
    5: `#FFFAFA`,
  },
  magenta: {
    90: `#690147`,
    80: `#7D0E59`,
    70: `#940159`,
    60: `#A6026A`,
    50: `#BC027F`,
    40: `#D459AB`,
    30: `#E899CE`,
    20: `#F2C4E3`,
    10: `#FFE6F6`,
    5: `#FFFAFD`,
  },
  blue: {
    90: `#004CA3`,
    80: `#006AC1`,
    70: `#047BD3`,
    60: `#0E8DE6`,
    50: `#0d96f2`,
    40: `#3FA9F5`,
    30: `#63B8F6`,
    20: `#90CDF9`,
    10: `#DBF0FF`,
    5: `#F5FCFF`,
  },
  teal: {
    90: `#008577`,
    80: `#10A39E`,
    70: `#00BDB6`,
    60: `#2DE3DA`,
    50: `#05F7F4`,
    40: `#73FFF7`,
    30: `#A6FFFA`,
    20: `#CCFFFC`,
    10: `#DCFFFD`,
    5: `#F7FFFF`,
  },
  green: {
    90: `#006500`,
    80: `#088413`,
    70: `#1D9520`,
    60: `#2CA72C`,
    50: `#37B635`,
    40: `#59C156`,
    30: `#79CD75`,
    20: `#A1DA9E`,
    10: `#DEF5DC`,
    5: `#F7FDF7`,
  },
  grey: {
    90: `#232129`,
    80: `#36313D`,
    70: `#48434F`,
    60: `#635E69`,
    50: `#78757A`,
    40: `#B7B5BD`,
    30: `#D9D7E0`,
    20: `#F0F0F2`,
    10: `#F5F5F5`,
    5: `#FBFBFB`,
  },
  white: `#ffffff`,
  black: `#000000`,
}

export default {
  ...palette,
  gatsby: palette.purple[60],
  // legacy shortcuts
  // most of these should be refactored to role-based tokens as we flesh those out
  lilac: palette.purple[50],
  lavender: palette.purple[20],
  accent: palette.orange[50],
  warning: palette.red[700],
  // role-based tokens
  // this is merely a humble start, lots to do here
  ui: {
    background: palette.grey[50],
    hover: palette.purple[5],
    border: {
      subtle: palette.grey[200],
    },
  },
  link: {
    color: palette.purple[50],
    border: palette.purple[30],
    hoverBorder: palette.purple[50],
  },
  text: {
    header: palette.black,
    primary: palette.grey[800],
    secondary: palette.grey[500],
    placeholder: palette.grey[400],
  },
  input: {
    border: palette.grey[300],
    focusBorder: palette.orange[40],
    focusBoxShadow: palette.orange[20],
  },
  code: {
    bgInline: `#fbf2e9`,
    bg: `#fdfaf6`,
    border: `#faede5`,
    text: `#866c5b`,
    remove: `#e45c5c`,
    add: `#4a9c59`,
    selector: `#b3568b`,
    tag: `#4084a1`,
    keyword: `#538eb6`,
    comment: `#6f8f39`,
    punctuation: `#53450e`,
    regex: `#d88489`,
    cssString: `#a2466c`,
    invisibles: `#e0d7d1`,
    scrollbarThumb: `#f4d1c6`,
    lineHighlightBorder: `#f1beb6`,
  },
}
