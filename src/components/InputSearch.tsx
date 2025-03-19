import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface InputSearchProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function InputSearch({ search, setSearch }: InputSearchProps) {
  return (
    <div className="relative w-full md:w-1/2">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <MagnifyingGlassIcon className="w-4 h-4" />
      </div>
      <input
        type="text"
        placeholder="Search for a country..."
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
      />
    </div>
  )
}