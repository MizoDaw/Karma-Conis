import React from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

const onChange: PaginationProps['onChange'] = (pageNumber) => {
  console.log('Page: ', pageNumber);
};

const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
  console.log(current, pageSize,"onShowSizeChange");
};

const ProductPagination: React.FC = () => (
  <div className='ProductPagination'>
    <Pagination  
    pageSize={5} 
    pageSizeOptions={[5,10,15,20,25]}
    showQuickJumper 
    defaultCurrent={2}
     total={500} onChange={onChange}   
          onShowSizeChange={onShowSizeChange} />
  </div>
);

export default ProductPagination;