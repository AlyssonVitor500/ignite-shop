export const formatToReal = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export const formatCentsToReal = (value: number): string => {
  return formatToReal(value / 100)
}
