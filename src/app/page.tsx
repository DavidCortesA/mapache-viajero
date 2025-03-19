'use client';
import { useEffect, useMemo, useState } from 'react';
import Card from '@/components/Card';
import data from '@/data/data.json'
import InputSearch from '@/components/InputSearch';
import Filter from '@/components/Filter';

export default function Home() {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const [visibleItems, setVisibleItems] = useState(16);
  
  // Filtrar por nombre y región
  const filteredData = useMemo(() => {
    return data
    .filter((flag) =>
      flag.name.toLowerCase().includes(search.toLowerCase())
  )
  .filter((flag) => (region ? flag.region === region : true));
}, [search, region]);

  // Detectar scroll para lazy loading
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        setVisibleItems((prev) => Math.min(prev + 8, filteredData.length));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredData]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className='mt-20 mb-6 w-full flex flex-row container mx-auto justify-between gap-4'>
        <InputSearch search={search} setSearch={setSearch} />
        <Filter region={region} setRegion={setRegion} />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5 w-full h-full container mx-auto'>
        {filteredData.slice(0, visibleItems).map((flag) => (
          <Card data={{ ...flag, capital: flag.capital || 'N/A' }} key={flag.name} />
        ))}
      </div>
    </div>
  );
}
