import { stripe } from '../../lib/stripe'
import {
  FallbackContainer,
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'

import Stripe from 'stripe'

import Head from 'next/head'
import { useRouter } from 'next/router'
import loadingGif from '../../assets/loadingGif.gif'
import { showErrorMessage, showSuccessMessage } from '../../lib/messagesToast'
import { formatCentsToReal } from '../../lib/intlFormat'
import { useContext } from 'react'
import { ItemsContext } from '../../context/itensContext'

interface ItemsCart {
  imageUrl: string
  priceId: string
  priceInCents: number
  name: string
}

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  const { addNewItemToCart } = useContext(ItemsContext)

  async function handleBuyAddProductToCart() {
    const itemProduct: ItemsCart = {
      imageUrl: product.imageUrl,
      name: product.name,
      priceId: product.defaultPriceId,
      priceInCents: product.price,
    }

    if (addNewItemToCart(itemProduct)) {
      showSuccessMessage('Produto adicionado com sucesso!')
    } else {
      showErrorMessage('Produto já adicionado ao seu carrinho!')
    }
  }

  function productPageTitle() {
    return (
      <Head>
        <title>
          {product?.name ? `${product.name} | Ignite Shop` : 'Carregando...'}
        </title>
      </Head>
    )
  }

  if (isFallback) {
    return (
      <>
        {productPageTitle()}
        <FallbackContainer>
          <Image src={loadingGif} alt="" />
        </FallbackContainer>
      </>
    )
  }

  return (
    <>
      {productPageTitle()}
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{formatCentsToReal(product.price)}</span>

          <p>{product.description}</p>

          <button onClick={handleBuyAddProductToCart}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // In paths atrribute we put routes what are constantly accessed (it isn't required)

  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
