import React, { useState } from 'react'
import { Button, Rate, Result,Space } from 'antd';
import { Link } from 'react-router-dom';

const ReviewBody = ({ setViewPage }: any) => {

   const [value, setValue] = useState(3);
const desc = ['very bad', 'bad', 'normal', 'good', 'perfect'];

  return (
    <div className="ReviewBody">
    <Result
    status="success"
    title="Successfully Purchased Order!"
    subTitle="Thank You for Try  and hope to make another one  "
    extra={[
      <Rate tooltips={desc}  className='Rate' onChange={setValue} value={value} />
      ,
      <Link to="/">
        <Button type="primary" key="console">
          Buy Again   
        </Button>
      </Link>
    ]}
  />
     
    </div>
  )
}

export default ReviewBody