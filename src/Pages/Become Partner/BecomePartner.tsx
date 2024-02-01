import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
// import ContactImage from './ContactImage';
import Layout from '../../Layout/app/Layout';
import { useSendMessage } from '../../api/contact_us';

const BecomePartner: React.FC = () => {

  const [Name , setName] = useState('') 
  const [Price , setPrice] = useState('') 

  const [Email , setEmail] = useState('') 
  const [Message , setMessage] = useState('') 

  const {mutate , isSuccess} = useSendMessage()
  const form = useRef<any>(null);
  const { t } = useTranslation();

  const handelSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(form.current);

    if(!Name || !Email || !Message  ){
      toast.error(t("please_fill_all_input"))
    }


    mutate({
      name:Name,
      email:Email ,
      message:Message,
      price:Price,
    })
  }

  useEffect(()=>{

    if(isSuccess){
      toast.success(t('message_send_successfully'))
      setMessage('')
      setName('')
      setEmail('')
      setPrice('')
    }
  },[isSuccess])
  return (
    <Layout className="Contact" >
      <div>
        <h1>{t('Become Partner')}</h1>
        <p>{t('Send your Coins and it will be automatically sent to my Gmail')}</p>
        {/* <ContactImage /> */}
      </div>
      <div>
        <Form ref={form} onSubmit={handelSubmit}>

          <Form.Group controlId="formName">
            <Form.Label>{t('Coin Name')}</Form.Label>
            <Form.Control type="text" name="to_name" placeholder={t('enter Coin Name')} value={Name} onChange={(e)=>setName(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>{t('Coin Description')}</Form.Label>
            <Form.Control type="text" name="to_name" placeholder={t('enter Coin description')} value={Name} onChange={(e)=>setName(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>{t('Coin Price')}</Form.Label>
            <Form.Control type="number" name="from_name" placeholder={t('enter coin price')} value={Price} onChange={(e)=>setPrice(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>{t('Your Message')}</Form.Label>
            <Form.Control as="textarea" rows={4} name="message" placeholder={t('type Your Message')} value={Message} onChange={(e)=>setMessage(e.target.value)}/>
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