import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
// import ContactImage from './ContactImage';
import Layout from '../../Layout/app/Layout';
import { useSendMessage } from '../../api/contact_us';
import File from './File';
import { useAddProduct } from '../../api/customer_product';
import { buildFormData } from "../../api/helper/buildFormData";

const BecomePartner: React.FC = () => {

  const [Name , setName] = useState('') 
  const [Description , setDescription] = useState('') 
  const [Price , setPrice] = useState('') 

  const [Email , setEmail] = useState('') 
  const [Message , setMessage] = useState('') 

  const {mutate , isSuccess} = useAddProduct()
  const form = useRef<any>(null);
  const { t } = useTranslation();
  const handelSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(form.current);

    if(!Name || !Description || !Message || !Price || !ClearIMageCoins || !ClearIMageCoins2 ){
      toast.error(t("please_fill_all_input"))
    }
console.log(getDataToSend({
  name:Name,
  description:Description,
  note:Message,
  price:Price,
  image:ClearIMageCoins,
  image2:ClearIMageCoins2,

}));

    mutate(getDataToSend({
      name:Name,
      description:Description,
      note:Message,
      price:Price,
      image:ClearIMageCoins,
      image2:ClearIMageCoins2,

    }))
  }
   const getDataToSend = (values: any): FormData => {
    const data = { ...values };
    
  
    const formData = new FormData();
    buildFormData(formData, data);
    return formData;
  };
  
  
  
  useEffect(()=>{

    if(isSuccess){
      toast.success(t('message_send_successfully'))
      setMessage('')
      setName('')
      setEmail('')
      setPrice('')
      setClearIMageCoins("")
setClearIMageCoins2("")
    }
  },[isSuccess])
  const [ClearIMageCoins, setClearIMageCoins] = useState('')
  const [ClearIMageCoins2, setClearIMageCoins2] = useState('')

  return (
    <Layout className="Contact" >
      <div className='BecomePartner'>
        <h1>{t('Become Partner')}</h1>
        <p>{t('Send your Coins and it will be automatically sent to my Gmail')}</p>
        <File label={"ClearIMageCoins"} set={setClearIMageCoins} />
        <File label={"ClearIMageCoins2"} set={setClearIMageCoins2} />


      </div>
      <div>
        <Form ref={form} onSubmit={handelSubmit}>

          <Form.Group controlId="formName">
            <Form.Label>{t('Coin Name')}</Form.Label>
            <Form.Control type="text" name="to_name" placeholder={t('enter Coin Name')} value={Name} onChange={(e)=>setName(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId="formDesc">
            <Form.Label>{t('Coin Description')}</Form.Label>
            <Form.Control type="text" name="description" placeholder={t('enter Coin description')} value={Description} onChange={(e)=>setDescription(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>{t('Coin Price')}</Form.Label>
            <Form.Control type="number" name="price" placeholder={t('enter coin price')} value={Price} onChange={(e)=>setPrice(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>{t('Your Message')}</Form.Label>
            <Form.Control as="textarea" rows={4} name="note" placeholder={t('type Your Message')} value={Message} onChange={(e)=>setMessage(e.target.value)}/>
          </Form.Group>

          <Button className='mt-4 w-100' type="submit">
            {t('Submit')}
          </Button>
        </Form>
      </div>
    </Layout>
  );
};

export default BecomePartner;