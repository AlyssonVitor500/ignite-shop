import { styled } from '..'

export const FourOhFourContainer = styled('div', {
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',

  padding: '4rem',

  gap: '8rem',

  div: {
    maxWidth: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '3rem',

    h1: {
      fontSize: '$3xl',
      color: '$gray300',
    },

    span: {
      fontSize: '$lg',
      color: '$gray100',
    },

    a: {
      width: 'fit-content',
      alignSelf: 'center',

      button: {
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$sm',
        borderRadius: 8,

        transition: '.2s background-color',

        '&:not(:disabled):hover': {
          backgroundColor: '$green300',
        },

        width: '450px',
      },
    },
  },
})
