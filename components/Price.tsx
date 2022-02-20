import { useMemo } from "react";

export default function Price({
  price,
  cross,
  highlighted,
  saying,
}: {
  price: string;
  cross?: boolean;
  saying?: string;
  highlighted?: boolean;
}) {
  const [sign, value, cents] = useMemo(() => {
    const split = price.split(",");
    const nonDigits = split[0].replace(/(\d|\s)/g, "");
    const value = split[0].replace(/\D/g, "");
    return [nonDigits, value, split[1]];
  }, [price]);

  return (
    <div
      className={`flex relative ${
        highlighted ? "bg-red-800 pt-2 p-1 text-white rounded-md mb-1 px-3" : ""
      } ${cross ? "pb-1 pr-5 overflow-clip" : ""} ${
        !cross && !highlighted ? "pb-1" : ""
      }`}
    >
      {cross ? (
        <span className="absolute top-1/2 -right-3 -rotate-[20deg] w-full border-t-2 border-red-700" />
      ) : null}

      <span
        className={`capitalize text-xs ${
          highlighted
            ? "absolute px-1 leading-normal -top-2 left-2 rounded-[4px] bg-white p-[1px] text-[calc(1rem-0.5rem)] text-red-800"
            : ""
        }`}
      >
        {saying} <span className="text-[calc(1rem-0.3rem)]">{sign}</span>
      </span>

      <span className="text-3xl">{value}</span>
      <span>
        <span className="text-xl block">,{cents}</span>
        <span className="block text-[calc(1rem-0.5rem)] -mt-2 text-right">
          each
        </span>
      </span>
    </div>
  );
}
