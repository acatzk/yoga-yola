import { IconType } from 'react-icons/lib'

export interface IFact {
  startNumber: number
  endNumber: number
  unit: string
  title: string
  desc: string
}

export interface ICourse {
  image: string
  title: string
  desc: string
  link: string
  delay: number
}

export interface IPrice {
  title: string
  price: number
  buttonText: string
  ButtonIcon: IconType
  delay: number
  list: IList[]
}

export interface IList {
  Icon: IconType
  name: string
}
