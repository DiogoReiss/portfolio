import { NextPage } from 'next'
import Link from 'next/link'

const Modal: NextPage = ({children}) => {
  return (
    <div className="absolute w-2 left-0 inset-y-0 bg-pink-color"></div>
  )
}


export default Modal;