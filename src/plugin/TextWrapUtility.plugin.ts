import plugin from "tailwindcss/plugin";


const TextWrap = plugin(({ addUtilities }) => {
  addUtilities(
    {
      '.text-wrap-pretty': {
        'text-wrap': 'pretty'
      },
      '.text-wrap': {
        'text-wrap': 'wrap'
      },
      '.text-wrap-nowrap': {
        'text-wrap': 'nowrap'
      },
      '.text-wrap-balance': {
        'text-wrap': 'balance'
      },
      '.text-wrap-inherit': {
        'text-wrap': 'inherit'
      },
      '.text-wrap-initial': {
        'text-wrap': 'initial'
      },
      '.text-wrap-revert': {
        'text-wrap': 'revert'
      },
      '.text-wrap-revertLayer': {
        'text-wrap': 'revert-layer'
      },
      '.text-wrap-unset': {
        'text-wrap': 'unset'
      },
    }
  )
})

export default TextWrap;