import Link from "next/link";

interface BreadcrumbsProps {
  productName: string;
}

export const Breadcrumbs = ({productName}: BreadcrumbsProps) => {
  return (
    <div className="flex items-center space-x-2 text-stone-600 mb-6 text-base font-inter">
      <Link href="/" className="hover:text-amber-700 transition-colors">
        Главная
      </Link>
      <span>/</span>
      <Link href="/catalog" className="hover:text-amber-700 transition-colors">
        Каталог
      </Link>
      <span>/</span>
      <span className="text-amber-700">{productName}</span>
    </div>
  );
}