import React, {  useState } from 'react';
import { AutoComplete, Input } from 'antd';
import { useGetDynamic } from '../../api/Route/Get';
import useSearchResults from '../../Hooks/useSearchResults'; // Assuming you place the hook in a separate file
import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const { data } = useGetDynamic("users");
    const navigate = useNavigate();
  const names = data?.map((item: any) => item?.name);

  const [query, setQuery] = useState<string | null>(null);
  const results = useSearchResults(names, query);
  const handleSearch = (value: string) => {
    setQuery(value || null);
       

  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
    navigate(`/products?productName=${query}`)

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
        <span>
         
            {name}
        </span>
      </div>
    ),
  }));

  return (
    <AutoComplete
      className='InputAutoComplete'
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large"  placeholder="input here" enterButton />
    </AutoComplete>
  );
};

export default App;

