import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  //   gap: '3rem',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('div', {
  background:
    'linear-gradient(180deg, rgb(24, 131, 105) 0%, rgb(50, 37, 132) 100%)',
  borderRadius: 8,
  //   padding: '0.5rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 696,

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.5rem',
    left: '0.5rem',
    right: '0.5rem',

    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: '1.5rem',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      fontSize: '$lg',
      fontWeight: 'bold',
      color: '$green300',
    },

    button: {
      padding: '.75rem',
      backgroundColor: '$green500',
      borderRadius: 6,
      color: '$white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
    },
  },

  '&:hover footer': {
    transform: 'translateY(0%)',
    opacity: 1,
  },
})
