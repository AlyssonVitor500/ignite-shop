import axios from 'axios'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ItemsContext } from '../context/itensContext'
import { useCartTotal } from '../hooks/useCartTotal'
import { formatCentsToReal } from '../lib/intlFormat'
import { showErrorMessage, showSuccessMessage } from '../lib/messagesToast'
import {
  CartContainer,
  CartPoupup,
  ImageCartContainer,
  ImageCartBackground,
  ImageContainer,
  CheckoutContainer,
} from '../styles/components/cartComponent'

interface CartComponentProps {
  isCartVisible: boolean
  onChangeCartVisibility: (cartState: boolean) => void
}
export function CartComponent({
  isCartVisible,
  onChangeCartVisibility,
}: CartComponentProps) {
  const { items, removeItemFromCart } = useContext(ItemsContext)
  const [isSubmiting, setIsSubmiting] = useState(false)
  const cartTotal = useCartTotal()

  function onHandleCartVisibility() {
    onChangeCartVisibility(!isCartVisible)
  }

  function onHandleRemoveItemFromCart(item: (typeof items)[0]) {
    removeItemFromCart(item)
    showSuccessMessage('Produto removido com sucesso!')
  }

  async function onHandleDoCheckout() {
    try {
      setIsSubmiting(true)
      const priceIds = items.map((item) => item.priceId)

      const response = await axios.post('/api/checkout', {
        priceIds,
      })

      showSuccessMessage(
        'Compra quase finalizada. Redirecionando para tela de checkout...',
      )

      await new Promise((resolve) => setTimeout(resolve, 1500))

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (err) {
      showErrorMessage('Houve um erro ao processar a solicitação!')
      setIsSubmiting(false)
    }
  }

  return (
    <CartContainer
      isCartVisible={isCartVisible}
      onClick={onHandleCartVisibility}
    >
      <CartPoupup
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <header>
          <X size={22} onClick={onHandleCartVisibility} />
        </header>

        <main>
          <span>Sacola de compras</span>

          <ImageContainer>
            {items.map((item) => (
              <ImageCartContainer key={item.priceId}>
                <ImageCartBackground>
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={96}
                    height={96}
                  />
                </ImageCartBackground>
                <aside>
                  <span>{item.name}</span>
                  <span>{formatCentsToReal(item.priceInCents)}</span>
                  <button
                    onClick={() => {
                      onHandleRemoveItemFromCart(item)
                    }}
                  >
                    Remover
                  </button>
                </aside>
              </ImageCartContainer>
            ))}
          </ImageContainer>

          <CheckoutContainer>
            <section>
              <div>
                <span>Quantidade</span>
                <span>{cartTotal.itemsAmount} item(s)</span>
              </div>
              <div>
                <span>Valor total</span>
                <span>{formatCentsToReal(cartTotal.totalAmountInCents)}</span>
              </div>
            </section>
            <button
              onClick={onHandleDoCheckout}
              disabled={isSubmiting || items.length === 0}
            >
              Finalizar compra
            </button>
          </CheckoutContainer>
        </main>
      </CartPoupup>
    </CartContainer>
  )
}
