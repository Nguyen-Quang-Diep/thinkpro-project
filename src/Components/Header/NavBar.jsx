import React from 'react'
import 'src/Components/Header/css/navBar.css'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  return (
      <div className='navbar shadow-sm'>
        <div className='container'>
            <nav className='the-navigation'>
                <div className='the-menu'>
                  <a href=""> <FontAwesomeIcon icon={faList} className='pe-2'/> Danh Muc</a>
                </div>
                <div className='the-menu-item'>
                   <ul className='d-flex align-items-center column-gap-3'>
                      <li><a href="">Ghe Cong Thai Hoc</a></li>
                      <li><a href="">Ghe Ban Tre Em</a></li>
                      <li><a href="">Ghe Nang</a></li>
                      <li><a href="">Thuc Te Ao & Console</a></li>
                      <li><a href="">Arm & Man Hinh</a></li>
                      <li className='multi-item'>
                        <a href="">
                        Balo & Tui <FontAwesomeIcon icon={faAngleDown} className='ms-2'/>
                        </a>   
                        <div className='sub-menu'>
                              <a href="" className='d-block'>Tui</a>
                              <a href="" className='d-block'>Balo</a>
                        </div> 
                      </li>
                      <li><a href="">Chuot</a></li>
                      <li><a href="">Cap sac ...</a></li>
                   </ul>
                </div>
            </nav>
      </div>
    </div>
  )
}

export default NavBar
