import Price from "./Price";

interface MedicinePriceProps {
  title: string;
  subTitle: string;
  description: string;
  originalPrice: number;
  currentPrice: number;
  loyaltyPrice: number;
  special?: boolean;
}

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function MedicinePrice({
  title,
  subTitle,
  description,
  originalPrice,
  currentPrice,
  loyaltyPrice,
  special,
}: MedicinePriceProps) {
  return (
    <article
      className={` px-2 pt-1 rounded-sm grid grid-cols-12 ${
        special ? "bg-yellow-100" : "bg-green-100"
      }`}
    >
      <h2 className="text-lg font-semibold col-span-12">{title}</h2>
      <p className="text-sm col-span-12">{subTitle}</p>
      <p className="text-xs font-thin col-span-12">{description}</p>
      <div className="col-span-4 relative flex items-end">
        <Price
          saying="from:"
          cross
          price={formatter.format(originalPrice / 100)}
        />
      </div>

      <div className="flex items-end justify-center col-span-4 relative">
        <Price saying="to:" price={formatter.format(currentPrice / 100)} />
      </div>

      <div className="col-span-4 relative flex justify-end">
        <Price
          saying="frequent"
          highlighted
          price={formatter.format(loyaltyPrice / 100)}
        />
      </div>
    </article>
  );
}
