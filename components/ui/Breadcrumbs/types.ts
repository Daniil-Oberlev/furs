interface IBreadcrumbItem {
  text: string
  href?: string
}

export interface IBreadcrumbs {
  items: IBreadcrumbItem[]
}
