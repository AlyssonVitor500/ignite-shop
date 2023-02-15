import { globalCss } from '.'

export const globalStyles = globalCss({
  ':root': {
    '--toastify-color-progress-error': 'var(--colors-red500) !important',
    '--toastify-icon-color-error': 'var(--colors-red500) !important',

    '--toastify-color-progress-success': 'var(--colors-green500) !important',
    '--toastify-icon-color-success': 'var(--colors-green500) !important',

    '--toastify-font-family': 'Roboto !important',
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialised',
    fontSmooth: 'always',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: '400',
  },

  '::-webkit-scrollbar': {
    width: 2,
  },

  '::-webkit-scrollbar-track': {
    background: 'transparent',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$green500',
    borderRadius: 3,
    transition: 'background-color .1s',
  },

  '::-webkit-scrollbar-thumb:hover': {
    background: '$green300',
  },

  '.Toastify__toast-icon svg': {
    background:
      'radial-gradient(circle, white 0%, white 45%, transparent 100%) !important',
    borderRadius: '200%',
  },
})
