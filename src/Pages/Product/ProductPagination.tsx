import React from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';



const ProductPagination = ({data}:any) =>{
  console.log(data,"data");
  
  const navigate = useNavigate();
const location = useLocation();
const currentPage = parseInt(new URLSearchParams(location.search).get("page") || "1" || data?.current_page);
const pageSize = parseInt(new URLSearchParams(location.search).get("per_page") || data?.per_page);

const onChange = (page: number, pageSize?: number) => {
  navigate(`?page=${page}&per_page=${pageSize || data?.per_page}`, { replace: true });
};

const onShowSizeChange = (current: number, pageSize: number) => {
  navigate(`?page=${current}&per_page=${pageSize}`, { replace: true });
};
  return  (


    <div className='ProductPagination'>
      <Pagination  
     className='text-center mt-3 paginateStyle'
     total={data?.total}
     showTotal={(total: any) => `Total ${data?.total} items`}
     pageSize={pageSize}
     pageSizeOptions={[5 ,8, 24, 32, 40]}
     defaultCurrent={currentPage}
     current={currentPage}  
     onChange={onChange}
     onShowSizeChange={onShowSizeChange}
     showSizeChanger
     
     />
    </div>
  );
  
}
export default ProductPagination;