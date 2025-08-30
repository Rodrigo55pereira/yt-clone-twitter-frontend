import Link from "next/link";

type TrendingItemProps = {
  label: string;
  count: number;
};

export const TrendingItem = ({
  label,
  count,
}: TrendingItemProps) => {
  return (
    <div>
      <Link
        href={`/search?q=${encodeURIComponent(label)}`}
        // A classe "group/item" define um escopo de grupo para os elementos filhos, permitindo que eles reajam a eventos de hover do elemento pai.
        className="group/item cursor-pointer"
      >
        {/* 
          A classe "group-hover/item:underline" faz com que este elemento <div> receba sublinhado
          quando o elemento pai com a classe "group/item" estiver em hover.
          Isso permite estilizar o texto do label ao passar o mouse sobre o Link inteiro.
        */}
        <div className="group-hover/item:underline font-bold">
          {label}
        </div>
        <div className="text-sm text-gray-400">
          {count} posts
        </div>
      </Link>
    </div>
  );
};

export const TredingItemSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col gap-1">
      <div className="bg-gray-600 w-3/4 h-4"></div>
      <div className="bg-gray-600 w-1/4 h-4"></div>
    </div>
  );
};
