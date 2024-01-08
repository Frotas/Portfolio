import plugin from "tailwindcss/plugin";

const WordBreak = plugin(({ addUtilities }) => {
  addUtilities(
    {
      '.word-break-normal': {
        'word-break': 'normal'
      },
      '.word-break-all': {
        'word-break': 'break-all'
      },
      '.word-break-keep': {
        'word-break': 'keep-all'
      },
      '.word-break': {
        'word-break': 'break-word'
      }
    }
  )
});

export default WordBreak;