import React from 'react'
import 'src/Components/Header/css/headerBanner.css'
import logo_thinkpro from "src/Assets/logo-thinkpro.jpg"
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function HeaderBanner() {
  return (
    <div className='container-fluid the-header'>
      <div className='container d-flex h-full align-items-center column-gap-3'>
        <a href=""><img style={{height: "2rem" , display: "block", verticalAlign: "middle"}} src={logo_thinkpro} alt="Anh Logo" /></a>
        <div className='ps-4 form-input-login'>
            <form action="/tim-kiem">
                <div className='d-flex align-items-center column-gap-2'>
                    <span><FontAwesomeIcon icon={faMagnifyingGlass}/></span>
                    <input type="text" className='pe-5 form-control shadow-none  inputHeader' placeholder=' Ten san pham, nhu cau, hang'/>
                </div>
            </form>
        </div>
        <div className='ms-4 d-flex gap-0 column-gap-3'>
            <a href="" className='item-header'><FontAwesomeIcon icon={faPhone} className='me-1'/>1900.63.3579</a>
            <a href="" className='item-header'><FontAwesomeIcon icon={faLocationDot} className='me-1'/>Dia Chi Cua Hang</a>
            <a href="" className='item-header'><FontAwesomeIcon icon={faHeadset} className='me-1'/> Khieu Nai</a>
            <a href="" className='item-header'><FontAwesomeIcon icon={faNewspaper} className='me-1'/>Tin Cong Nghe</a>
        </div>

        <div className='p-2'>
            <a href="/gio-hang"><FontAwesomeIcon icon={faCartShopping} className='text-dark '/></a>
        </div>

      </div>
    </div>
  )
}

export default HeaderBanner
