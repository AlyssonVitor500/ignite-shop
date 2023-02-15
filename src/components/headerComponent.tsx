import Image from 'next/image'
import Link from 'next/link'

import { useContext, useState } from 'react'

import { Handbag } from 'phosphor-react'

import { ItemsContext } from '../context/itensContext'
import { CartButton, Header } from '../styles/components/headerComponent'

import logoSVG from '../assets/igniteLogo.svg'
import { CartComponent } from './cartComponent'
import { useRouter } from 'next/router'

export function HeaderComponent() {
  const { items } = useContext(ItemsContext)
  const [isCartVisible, setIsCartVisible] = useState(false)

  const { pathname } = useRouter()
  const isSuccessPage = pathname.includes('/success')
  const isNotFoundPage = pathname.includes('/404')

  function changeCartVisibility(newCartVisibleValue: boolean) {
    setIsCartVisible(newCartVisibleValue)
  }

  return (
    <>
      <CartComponent
        isCartVisible={isCartVisible}
        onChangeCartVisibility={changeCartVisibility}
      />
      <Header isSuccessPage={isSuccessPage} isNotFoundPage={isNotFoundPage}>
        <Link href="/" prefetch={false}>
          <Image src={logoSVG} alt="" />
        </Link>

        <CartButton
          onClick={() => {
            changeCartVisibility(true)
          }}
          isSuccessPage={isSuccessPage}
        >
          <Handbag size={22} weight="bold" />
          {items.length > 0 && <span>{items.length}</span>}
        </CartButton>
      </Header>
    </>
  )
}
