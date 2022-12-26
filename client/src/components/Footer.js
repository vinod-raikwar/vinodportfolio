import React from 'react'
import Document from './Documents'

import './Footer.css'

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <>
      <div className='footer mt-5'>
        <div className='container footer_container d-flex justify-content-around flex-wrap'>
          <div className='first mt-5'>
            <h3>Vinod Raikwar</h3>
            <p>(Full Stack Developer)</p>
            <p className='d-flex mt-5'>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-facebook mx-3'></i>
              <i className='fa-brands fa-twitter'></i>
              <i className='fa-brands fa-linkedin mx-3'></i>
              <i className='fa-brands fa-youtube'></i>
            </p>
            <p>©{year} VinodRaikwar.All rights reserved</p>
          </div>
          <div className='second mt-5'>
            <h4>Get In Touch</h4>
            <p><i class="fa fa-home" aria-hidden="true"></i> A/532 Aishbagh Stadium, Housing Board Colony, In Front Of Junior MIG, Bhopal(M.P) </p>
            <p> <i class="fa fa-volume-control-phone" aria-hidden="true"></i> +91 8602678325</p>
            <p><i class="fa fa-envelope" aria-hidden="true"></i> vraikwar286@gmial.com</p>
          </div>
          <div className='third mt-5'>
            <h4>Documents</h4>

            <Document />

          </div>
        </div>
        <hr />
        <div className='container footer_container d-flex justify-content-center flex-wrap' >
        <p> <span>Designed by</span> &nbsp; VinodRaikwar</p>
        </div>
      </div>
    </>
  )
}

export default Footer