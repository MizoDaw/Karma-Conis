import React from 'react'


type TCategories = {
    item : string
    index : number
}
const Categories:React.FC<TCategories> = ({item,index}) => {

  return (
    <div className='Categories'>
      
                <div key={index} className='Categories_Item'>
                    <img   alt=''  src={`../Coins/Coins${index+1}.jpg`} />
                    <button  > {item} </button>
                </div>
    </div>
  )
}

export default Categories