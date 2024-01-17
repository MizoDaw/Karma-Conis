import React from 'react'
type TMovesAds={
LeftText : string;
RightText : string;
Link : string;
}
const MovesAds:React.FC<TMovesAds> = ({LeftText,RightText,Link}) => {
  return (
  
    <div className='Moves_Ads'>
    <div className='Moves_Ads_Left'>
      {LeftText}
    </div>
    <div className='Moves_Ads_Right'>
      <span className="Moves_Ads_Right_Text" data-text={RightText} >
      Shop Now
      </span>
    </div>

   </div>  )
}

export default MovesAds