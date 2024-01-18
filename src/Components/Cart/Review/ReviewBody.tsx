import React, { useState } from 'react'
import { Button, Rate, Result,Space } from 'antd';
import { Link } from 'react-router-dom';

const ReviewBody = ({ setViewPage }: any) => {

   const [value, setValue] = useState(3);
const desc = ['ولا حمار زبط', 'bad', 'normal', 'good', 'عراسي'];

  return (
    <div className="ReviewBody">
    <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
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