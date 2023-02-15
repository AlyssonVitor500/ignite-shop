import Image from 'next/image'
import { FourOhFourContainer } from '../styles/pages/404'

import FourOhFourImage from '../assets/404.png'
import Link from 'next/link'
import Head from 'next/head'

export default function FourOhFour() {
  return (
    <FourOhFourContainer>
      <Head>
        <title>Página não encontrada | Ignite Shop</title>
      </Head>

      <div>
        <h1>Opss...</h1>
        <span>A página que você está procurando não existe!</span>
        <span>
          (Ao menos que você esteja procurando por uma página que tenha um homem
          sendo perseguido por um polvo. Se esse for o caso, isso
          definitivamente existe e você achou.)
        </span>

        <Link href="/">
          <button>Retornar à página principal</button>
        </Link>
      </div>
      <Image
        src={FourOhFourImage}
        alt="404 image page"
        width={500}
        quality={100}
      />
    </FourOhFourContainer>
  )
}
