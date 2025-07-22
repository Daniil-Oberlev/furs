export interface IServiceItem {
  name: string
  url: string
}

export type TServices = {
  title: string
  links: {
    href: string
    label: string
  }[]
}
