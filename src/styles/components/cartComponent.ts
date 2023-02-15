import { styled } from '..'

export const CartContainer = styled('div', {
  variants: {
    isCartVisible: {
      true: {},
      false: {
        opacity: 0,
        visibility: 'hidden',

        '& > div': {
          opacity: 0,
          transform: 'translateX(101%)',
        },
      },
    },
  },

  position: 'absolute',
  overflow: 'hidden',
  width: '100%',
  height: '100vh',
  zIndex: 100,
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0, .2)',
  transition: '0.3s all ease-out',
})

export const CartPoupup = styled('div', {
  position: 'absolute',
  minWidth: 480,
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
  padding: 48,
  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  overflow: 'hidden',

  transition: '0.3s all ease-out',

  header: {
    color: '$gray400',

    textAlign: 'right',
    marginTop: -24,
    marginRight: -24,

    '& > svg': {
      cursor: 'pointer',
    },
  },

  main: {
    marginTop: 24,

    '& > span': {
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
  },
})

export const ImageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2rem',

  gap: 24,
  height: 'calc((96px * 5) + (24px * 4))',
  overflow: 'auto',
})

export const ImageCartContainer = styled('div', {
  display: 'flex',
  gap: 24,
  aside: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',

    '& span:nth-child(1)': {
      color: '$gray300',
      fontSize: '$md',
    },

    '& span:nth-child(2)': {
      color: '$gray100',
      fontSize: '$md',
      fontWeight: 'bold',
    },

    button: {
      border: 'none',
      textAlign: 'left',
      width: 'fit-content',
      background: 'transparent',
      cursor: 'pointer',

      fontSize: '$sm',

      fontWeight: 'bold',
      color: '$green500',

      transition: '.2s color',

      '&:hover': {
        color: '$green300',
      },
    },
  },
})

export const ImageCartBackground = styled('div', {
  background:
    'linear-gradient(180deg, rgb(24, 131, 105) 0%, rgb(50, 37, 132) 100%)',
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  maxHeight: 96,

  img: {
    objectFit: 'cover',
  },
})

export const CheckoutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 55,
  marginTop: 50,

  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,

    div: {
      display: 'flex',
      justifyContent: 'space-between',
    },

    '& div:nth-child(1)': {
      'span:nth-child(1)': {
        color: '$gray100',
        fontSize: '$sm',
      },
      'span:nth-child(2)': {
        color: '$gray300',
        fontSize: '$md',
      },
    },

    '& div:nth-child(2)': {
      fontWeight: 'bold',
      color: '$white',
      'span:nth-child(1)': {
        fontSize: '$md',
      },
      'span:nth-child(2)': {
        fontSize: '$xl',
      },
    },
  },

  button: {
    padding: '1.25rem',
    fontWeight: 'bold',
    fontSize: '$md',
    color: '$white',
    border: 'none',
    backgroundColor: '$green500',
    borderRadius: 8,
    cursor: 'pointer',
    transition: '.2s background-color',

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },

    '&:disabled': {
      opacity: '0.8',
      cursor: 'not-allowed',
    },
  },
})
