import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import {
  ImageContainer,
  ImageContainerGroup,
  SuccessContainer,
} from '../styles/pages/success'
import Head from 'next/head'

interface SuccessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <ImageContainerGroup>
          {products.map((prd) => (
            <ImageContainer key={prd.imageUrl}>
              <Image src={prd.imageUrl} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ImageContainerGroup>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.length}{' '}
          camiseta(s) já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const sessionResponse = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = sessionResponse.customer_details?.name
  const productsData = sessionResponse.line_items?.data

  const products = productsData!.map((pdt) => {
    const product = pdt.price?.product as Stripe.Product
    return {
      name: product.name,
      imageUrl: product.images[0],
    }
  })

  return {
    props: {
      customerName,
      products,
    },
  }
}
