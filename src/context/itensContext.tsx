import produce from 'immer'
import { createContext, ReactNode, useState } from 'react'

interface ItemsAttr {
  imageUrl: string
  priceId: string
  priceInCents: number
  name: string
}

interface ItemsContextProps {
  items: ItemsAttr[]
  addNewItemToCart: (item: ItemsAttr) => boolean
  removeItemFromCart: (item: ItemsAttr) => void
}
export const ItemsContext = createContext({} as ItemsContextProps)

interface ItemsContextProviderProps {
  children: ReactNode
}

export function ItemsContextProvider({ children }: ItemsContextProviderProps) {
  const [items, setItems] = useState([] as ItemsAttr[])

  function addNewItemToCart(item: ItemsAttr) {
    if (items.findIndex((i) => i.priceId === item.priceId) > -1) {
      return false
    }

    setItems((state) => {
      return [...state, item]
    })

    return true
  }

  function removeItemFromCart(item: ItemsAttr) {
    return setItems((state) => {
      return produce(state, (draft) => {
        const index = draft.findIndex((i) => i.priceId === item.priceId)
        draft.splice(index, 1)
      })
    })
  }

  return (
    <ItemsContext.Provider
      value={{ items, addNewItemToCart, removeItemFromCart }}
    >
      {children}
    </ItemsContext.Provider>
  )
}
