import Image from "next/image";
import Link from "next/link";

interface CountryData {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
  alpha3Code: string;
}

interface CardProps {
  data: CountryData;
}

export default function Card({ data }: CardProps) {
  return (
    <Link href={`/${data.alpha3Code.toLocaleLowerCase()}/${data.name.split(" ").join("-").toLowerCase()}`}>
      <div className="w-full h-full flex flex-col bg-white dark:bg-dark-blue shadow-lg">
        <div className="w-full h-48 relative"> {/* Added h-48 and relative */}
          <Image
            src={data.flag}
            alt={data.name}
            fill={true} // Added fill
            style={{ objectFit: "cover" }} // Added objectFit
            sizes="100vw"
            priority
          />
        </div>
        <div className="px-8 py-6">
          <h2 className="text-2xl font-bold text-dark-blue dark:text-white">{data.name}</h2>
          <p className="text-md font-bold text-dark-blue dark:text-white">
            Population: <span className="font-light">{data.population}</span>
          </p>
          <p className="text-md font-bold text-dark-blue dark:text-white">
            Region: <span className="font-light">{data.region}</span>
          </p>
          <p className="text-md font-bold text-dark-blue dark:text-white">
            Capital: <span className="font-light">{data.capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
