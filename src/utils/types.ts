export interface MetaData {
  title: string
}

export interface Category {
  id: string
  name: string
  children?: Subcategory[]
}

export interface Subcategory {
  id: string
  name: string
  properties?: Property[]
}

export interface Property {
  id: string
  name: string
  isParent?: boolean
  children?: Property[]
}

export interface Product {
  image: string
  title: string
  price: string
  status: string
  timeLeft: { days: number; hours: number; mins: number }
  isFav: boolean
}
