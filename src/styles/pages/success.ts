import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 560,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginTop: '4rem',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',

    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainerGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',

  '& > div + div': {
    marginLeft: '-10%',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 130,
  background:
    'linear-gradient(180deg, rgb(24, 131, 105) 0%, rgb(50, 37, 132) 100%)',
  borderRadius: '100%',
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '-4px 0px 30px #12121480',

  img: {
    objectFit: 'cover',
  },
})
