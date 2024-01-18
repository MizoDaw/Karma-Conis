import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
// import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import ContactImage from './ContactImage';
import Layout from '../../Layout/app/Layout';

const Contact: React.FC = () => {
  const form = useRef<any>(null);
  const { t } = useTranslation();


  return (
    <Layout className="Contact" >
      <div>
        <h1>{t('Contact Us')}</h1>
        <p>{t('Lorem Iposem please enter your text Lorem Iposem please enter your text Lorem Iposem please enter your text')}</p>
        <ContactImage />
      </div>
      <div>
        <Form ref={form} >
          <Form.Group controlId="formName">
            <Form.Label>{t('Your Name')}</Form.Label>
            <Form.Control type="text" name="to_name" placeholder={t('enter Your Name')} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>{t('Your Email')}</Form.Label>
            <Form.Control type="email" name="from_name" placeholder={t('enter Your Email')} />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>{t('Your Message')}</Form.Label>
            <Form.Control as="textarea" rows={4} name="message" placeholder={t('type Your Message')} />
          </Form.Group>
          <Button className='mt-4 w-100' type="submit">
            {t('Submit')}
          </Button>
        </Form>
      </div>
    </Layout>
  );
};

export default Contact;