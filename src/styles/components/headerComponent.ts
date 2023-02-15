import { styled } from '..'

export const Header = styled('header', {
  variants: {
    isSuccessPage: {
      true: {
        justifyContent: 'center',
      },
    },
    isNotFoundPage: {
      true: {
        display: 'none',
      },
    },
  },
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  img: {
    cursor: 'pointer',
  },
})

export const CartButton = styled('button', {
  variants: {
    isSuccessPage: {
      true: {
        display: 'none',
      },
      false: {},
    },
  },
  border: 'none',
  padding: '.75rem',
  cursor: 'pointer',
  borderRadius: 6,
  position: 'relative',
  backgroundColor: '$gray800',
  color: '$white',

  span: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$green500',
    width: 26,
    height: 26,
    borderRadius: '100%',
    boxSizing: 'content-box',
    transform: 'translate(35%, -35%)',
    border: '3px solid',
    borderColor: '$gray900',
    fontSize: 14,
    fontWeight: 'bold',
  },
})
