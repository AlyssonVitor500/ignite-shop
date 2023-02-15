import { toast } from 'react-toastify'

export const showErrorMessage = (message: string) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    theme: 'dark',
    closeOnClick: true,
    hideProgressBar: false,
    autoClose: 1000,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
  })
}

export const showSuccessMessage = (message: string) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    theme: 'dark',
    closeOnClick: true,
    hideProgressBar: false,
    autoClose: 1000,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
  })
}
