import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
//@ts-ignore
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import ContactImage from './ContactImage';

const Contact: React.FC = () => {
  const form = useRef<any>(null);
  const { t } = useTranslation();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_49y5tqk', 'template_w4976q5', form.current, 'ivQFaIMbNe3DbNhA0')
        .then((result:any) => {
          console.log(result.text);
          form.current.reset();
          toast.success(t('contact.emailSentSuccess'));
        })
        .catch((error:any) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="Contact" id="ContactMe">
      <div>
        <h1>{t('contactUs.title')}</h1>
        <p>{t('contactUs.sendYourMessage')}</p>
        <ContactImage />
      </div>
      <div>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group controlId="formName">
            <Form.Label>{t('contactUs.name')}</Form.Label>
            <Form.Control type="text" name="to_name" placeholder={t('contactUs.enterYourName')} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>{t('contactUs.email')}</Form.Label>
            <Form.Control type="email" name="from_name" placeholder={t('contactUs.enterYourEmail')} />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>{t('contactUs.message')}</Form.Label>
            <Form.Control as="textarea" rows={4} name="message" placeholder={t('contactUs.typeYourMessage')} />
          </Form.Group>
          <Button className='mt-4 w-100' type="submit">
            {t('contactUs.submit')}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;