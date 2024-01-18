import React, { useState, useEffect } from 'react';
import { AutoComplete, Input } from 'antd';
import { useGetAllProductWithSearch } from '../../api/Product';
import { useNavigate } from 'react-router-dom';
import useSearchResults from '../../Hooks/useSearchResults'; // Assuming you place the hook in a separate file

const App: React.FC = () => {
  const { data } = useGetAllProductWithSearch();
  const navigate = useNavigate();

  const names = data?.data?.map((item: any) => item?.product_translations[0]?.name);

  const [query, setQuery] = useState<string | null>(null);
  const results = useSearchResults(names, query);

  const handleSearch = (value: string) => {
    setQuery(value || null);
  };

  const onSelect = (value: string) => {
    const selectedItem = data?.data?.find((item: any) => item?.product_translations[0]?.name === value);
    
    if (selectedItem) {
      navigate(`/product/${selectedItem.id}`);
    }
  };

  const onSearchSubmit = (value: string) => {
    // Prevent the default form submission
    if (value) {
      setQuery(value);
    }
  };

  const options = results.map((name: any) => ({
    value: name,
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>{name}</span>
      </div>
    ),
  }));

  useEffect(() => {
    if (query) {
      navigate(`/products?search=${query}`);
    }
  }, [query, navigate]);

  return (
    <AutoComplete
      className='InputAutoComplete'
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size='large' placeholder='input here' enterButton onSearch={onSearchSubmit} />
    </AutoComplete>
  );
};

export default App;
