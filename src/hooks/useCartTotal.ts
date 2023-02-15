import { useContext, useMemo } from 'react'
import { ItemsContext } from '../context/itensContext'

export function useCartTotal() {
  const { items } = useContext(ItemsContext)
  const returnValue = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        acc.itemsAmount += 1
        acc.totalAmountInCents += item.priceInCents

        return acc
      },
      {
        itemsAmount: 0,
        totalAmountInCents: 0,
      },
    )
  }, [items])

  return returnValue
}
