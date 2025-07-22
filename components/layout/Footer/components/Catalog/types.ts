export interface ICatalogItem {
  name: string
  url: string
}

export type TCatalog = {
  title: string
  links: {
    href: string
    label: string
  }[]
}
