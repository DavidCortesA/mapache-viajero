interface FilterProps {
  region: string;
  setRegion: (region: string) => void;
}

export default function Filter({ region, setRegion }: FilterProps) {
  return (
    <div className="w-full md:w-1/4 flex flex-col items-center justify-center">
      <select
         value={region}
         onChange={(e) => setRegion(e.target.value)}
         className="p-2 border rounded shadow mt-2 md:mt-0 w-full bg-white dark:bg-dark-blue text-dark-blue dark:text-white dark:border-none"
      >
          <option value="">Todas las regiones</option>
          <option value="Africa">África</option>
          <option value="Americas">América</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceanía</option>
      </select>
    </div>
  )
}