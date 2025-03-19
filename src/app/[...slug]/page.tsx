'use client'
import { useParams } from "next/navigation"
import data from '@/data/data.json'
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

export default function Page() {
  const { slug } = useParams();

  const country = slug ? data.find((flag) => {
    return flag.alpha3Code.toLowerCase() === slug[0].toLowerCase();
  }) : null;

  return(
    <div className="w-full h-screen flex flex-col items-center justify-center relative">
      <div className="absolute container top-25">
        <button
          type="button"
          className="flex flex-row justify-center items-center gap-2 text-dark-blue dark:text-white border-1 border-dark-blue dark:border-white p-2 rounded-lg cursor-pointer"
          onClick={() => window.history.back()}
        >
          <ArrowLeftIcon className="w-6 h-6" /> Regresar
        </button>
      </div>
      <div className="container mx-auto flex flex-row items-center justify-between h-full mt-20 gap-8">
        <div className="w-full md:w-1/2 h-[25rem] relative">
          <Image
            src={country?.flags.svg || '/path/to/default/image.png'}
            alt={country?.name || 'Default Image'}
            fill={true} // Added fill
            style={{ objectFit: "cover" }} // Added objectFit
            sizes="100vw"
            priority
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 w-full h-full relative flex flex-col items-start justify-center">
          <h1 className="text-white dark:text-blue-dark text-2xl font-bold">{country?.name}</h1>
          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 justify-between w-full my-20">
            <div className="w-full flex flex-col gap-4 w-1/2">
              <p className="text-dark-blue dark:text-white"><strong>Native Name: </strong>{country?.nativeName}</p>
              <p className="text-dark-blue dark:text-white"><strong>Population: </strong>{country?.population}</p>
              <p className="text-dark-blue dark:text-white"><strong>Region: </strong>{country?.region}</p>
              <p className="text-dark-blue dark:text-white"><strong>Sub Region: </strong>{country?.subregion}</p>
              <p className="text-dark-blue dark:text-white"><strong>Capital: </strong>{country?.capital}</p>
            </div>
            <div className="w-full  flex flex-col gap-4 w-1/2">
              <p className="text-dark-blue dark:text-white"><strong>Top Level Domain: </strong>{country?.topLevelDomain}</p>
              <p className="text-dark-blue dark:text-white"><strong>Currencies: </strong>{country?.currencies?.map(currency => currency.code).join(', ')}</p>
              <p className="text-dark-blue dark:text-white"><strong>Languages: </strong>{country?.languages?.map(language => language.name).join(', ')}</p>
            </div>
          </div>

          <div className="flex flex-row gap-2 flex-wrap text-dark-blue dark:text-white text-sm font-bold items-center"><strong>Border Countries:</strong>{country?.borders?.map(border => <div key={border} className="border-1 border-dark-blue dark:border-white text-dark-blue dark:text-white p-2 rounded-lg">{border}</div>)}</div>
        </div>
      </div>
    </div>
  )
}