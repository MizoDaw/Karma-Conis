import { Divider, InputNumber, Radio, Select, Space } from 'antd';
import React, { useState, useEffect, useRef } from 'react';
import type { RadioChangeEvent } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  selectedOption: string;
}

const ProductsFilter = () => {
  const navigate = useNavigate();
  const { category: paramCategory, minPrice: paramMinPrice, maxPrice: paramMaxPrice, selectedOption: paramSelectedOption } = useParams();

  const [filter, setFilter] = useState<FilterState>({
    category: paramCategory || 'jack',
    minPrice: paramMinPrice ? parseInt(paramMinPrice, 10) : 0,
    maxPrice: paramMaxPrice ? parseInt(paramMaxPrice, 10) : 250,
    selectedOption: paramSelectedOption || 'all',
  });

  useEffect(() => {
    if (!isInitialRender.current) {
      navigate(`/Products?${filter.category}&${filter.minPrice}&${filter.maxPrice}&${filter.selectedOption}`);
    } else {
      isInitialRender.current = false;
    }
  }, [filter, navigate]);
  
  // ...
  
  const isInitialRender = useRef<any>(true);
  
  const handleChange = (value: string) => {
    setFilter((prevFilter) => ({ ...prevFilter, category: value }));
  };

  const onChangeInput = (min: number, max: number) => {
    setFilter((prevFilter) => ({ ...prevFilter, minPrice: min, maxPrice: max }));
  };

  const handleRadioChange = (e: RadioChangeEvent) => {
    setFilter((prevFilter) => ({ ...prevFilter, selectedOption: e.target.value }));
  };

  return (
    <div className='ProductsFilter'>
      <span className='ProductsFilter_header'>ProductsFilter </span>
      <Divider />
      <div className='ProductsFilter_Text'> Categories </div>

      <div>
        <Select
          value={filter.category}
          style={{ width: '100%' }}
          onChange={handleChange}
          options={[{ value: 'jack', label: 'Jack' }]}
        />
      </div>
      <div className='ProductsFilter_Text'>Price Range</div>
      <div>
        <InputNumber
          min={0}
          max={1000}
          defaultValue={filter.minPrice}
          onChange={(value) => onChangeInput(value as number, filter.maxPrice)}
        />
        {' > '}
        <InputNumber
          min={0}
          max={1000}
          defaultValue={filter.maxPrice}
          onChange={(value) => onChangeInput(filter.minPrice, value as number)}
        />
      </div>
      <Divider />

      <Space direction='vertical'>
        <Radio
          value='all'
          checked={filter.selectedOption === 'all'}
          className='ProductsFilter_options'
          onChange={handleRadioChange}
        >
          All
        </Radio>
        <Radio
          value='highlight'
          checked={filter.selectedOption === 'highlight'}
          className='ProductsFilter_options'
          onChange={handleRadioChange}
        >
          Highlight
        </Radio>
        <Radio
          value='mostPurchased'
          checked={filter.selectedOption === 'mostPurchased'}
          className='ProductsFilter_options'
          onChange={handleRadioChange}
        >
          Most Purchased
        </Radio>
        <Radio
          value='favourite'
          checked={filter.selectedOption === 'favourite'}
          className='ProductsFilter_options'
          onChange={handleRadioChange}
        >
          Favourite
        </Radio>
      </Space>
      <div></div>
    </div>
  );
};

export default ProductsFilter;
