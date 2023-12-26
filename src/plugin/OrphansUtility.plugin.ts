import plugin from 'tailwindcss/plugin';

const OrphansUtility = plugin(
  ({ addUtilities, matchUtilities, theme }) => {
    addUtilities(
      {
        '.text-orphan-inherit': {
          'orphans': 'inherit'
        },
        '.text-orphan-initial': {
          'orphans': 'initial'
        },
        '.text-orphan-revert': {
          'orphans': 'revert'
        },
        '.text-orphan-revertLayer': {
          'orphans': 'revert-layer'
        },
        '.text-orphan-unset': {
          'orphans': 'unset'
        },
      }
    );
    matchUtilities(
      {
        'text-orphans': (value) => { return { orphans: value } }
      },
      {
        values: theme('orphan')
      }
    );
  },
  {
    theme: {
      orphan: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10'
      }
    }
  }
)

export default OrphansUtility;