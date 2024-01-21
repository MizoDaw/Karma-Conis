import React from 'react'

import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBProgress,
    MDBProgressBar,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
import Layout from '../../Layout/app/Layout';
import { useGetSingleOrder } from '../../api/cart';
import { useSelector } from 'react-redux';
import { Currency } from '../../Layout/app/Const';
import OrderStatus from '../../Components/Order/OrderStatus';
import { IProduct } from '../../types/IProduct';
import { BaseURL } from '../../api/config';
import NotFoundPage from '../../Layout/app/NotFoundPage';
import LoadingPage from '../Loading/LoadingPage';
  
  export default function SingleOrderPage() {
  
    const {data, isLoading , isError} = useGetSingleOrder({order_id:3})
    const  {user}= useSelector((state:any)  => state.auth)

    const order = data?.data 
    
    console.log(data?.data);
    

    if(isLoading){
      return <LoadingPage/>
    }
    if(isError){
      return <NotFoundPage/>
    }
    return (
      <Layout>
        <section
          className="h-100 gradient-custom"
          style={{ backgroundColor: "#eee" }}
        >
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="10" xl="8">
                <MDBCard style={{ borderRadius: "10px" }}>
                  <MDBCardHeader className="px-4 py-5">
                    <MDBTypography tag="h5" className="text-muted mb-0">
                      Thanks for your Order,{" "}
                      <span  className=''>{user?.name}</span>!
                    </MDBTypography>
                    <MDBTypography tag="h5" className="text-muted mt-4">
                   <OrderStatus  order_status={order?.order_status}/>
                    </MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p
                        className="lead fw-normal mb-0 "
                        // style={{ color: "#a8729a" }}
                      >
                        Receipt
                      </p>
                      <p className="small text-muted mb-0">
                        Order Code  : {order?.order_code}
                      </p>
                    </div>
  
                  {
                    order?.items?.map((item:IProduct)=>{
                      return (
                      
                    <MDBCard className="shadow-0 border mb-4">
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol md="2">
                            <MDBCardImage
                              src={BaseURL + item?.product_main_image}
                              fluid
                              alt="Product Image"
                            />
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0">{item?.product_translations?.at(0)?.name}</p>
                          </MDBCol>
                         
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">Qty: {item.product_quantity}</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">{item.product_price}</p>
                          </MDBCol>
                        </MDBRow>
                     
                      </MDBCardBody>
                    </MDBCard> 
  
                      )
                    })
                  }

                    <div className="d-flex justify-content-between pt-2">
                      <p className="fw-bold mb-0">Order Details</p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Total</span> {order?.order_total} {Currency}
                      </p>
                    </div>
  
                    <div className="d-flex justify-content-between pt-2">
                      <p className="text-muted mb-0">System Number : 0097466456660</p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Discount</span> 0 {Currency}
                      </p>
                    </div>
  
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        Invoice Date : {order?.created_at}
                      </p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Payment Method</span> {order?.payment_method}
                      </p>
                    </div>
  
                    <div className="d-flex justify-content-between mb-5">
                    
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Delivery Charges</span>{" "}
                        Free
                      </p>
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter
                    className="border-0 px-4 py-5  bg_primary"
                    style={{
                    //   backgroundColor: "#a8729a",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    <MDBTypography
                      tag="h5"
                      className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                    >
                      Total paid: <span className="h2 mb-0 ms-2">{order?.order_total}{Currency}</span>
                    </MDBTypography>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </Layout>
    );
  }