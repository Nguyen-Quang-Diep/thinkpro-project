 import React from 'react'
 import 'src/Pages/css/HomePage.css'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
 import bannerwebbtsthinkpro from 'src/Assets/banner-web-bts-thinkpro.jpg'

function HomePage() {
  return (
    <div className='page-home bg-base-100'>
       <div className='container py-8'>
        <section className='section-banner'>
            <div className='d-flex '>
              <div className='w-1/2 py-8 px-6'>
                <h1>Back To School 2024</h1>
                <p>Đón mùa tựu trường mới,
                   ThinkPro áp dụng CTKM 
                   khủng nhằm giúp cho các 
                   bạn HS-SV có cơ hội được
                    sở hữu những sản phẩm công nghệ mơ ước
                    cùng với những ưu đãi vô cùng hấp dẫn!
                </p>
                <button><a href="/uu-dai">Nhan uu dai <FontAwesomeIcon icon={faArrowRight}/></a></button>
              </div>
              <div className='w-1/2 '>
                <a href="/img-header">
                  <img src={bannerwebbtsthinkpro} style={{width: "648px", height: "300px"}} alt="Banner" />
                </a>
              </div>
            </div>
        </section>

        <section className='feature-list pt-4'>
          <h1>Danh Muc Noi Bat</h1>
          <div className='container p-4'>
               <ul className='list-unstyled p-2 d-flex flex-wrap'>
                <li><a href="">Laptop</a></li>
                <li><a href="">May Choi Game & Console</a></li>
                <li><a href="">Kinh Thuc Te Ao VR/AR</a></li>
                <li><a href="">Ban Phim</a></li>
                <li><a href="">Ghe Cong Thai Hoc</a></li>
                <li><a href="">Ban Nang Cao</a></li>
                <li><a href="">Hoc Tu</a></li>
                <li><a href="">May Chieu</a></li>
                <li><a href="">Am Thanh</a></li>
                <li><a href="">Chuot</a></li>
                <li><a href="">Balo, Tui</a></li>
                <li><a href="">Gia Do, Laptop/Tablet</a></li>
                <li><a href="">Phan Mem</a></li>
                <li><a href="">ARM Man Hinh</a></li>
                <li><a href="">Phu Kien Setup</a></li>
                <li><a href="">Cong Chuyen</a></li>
               </ul>
          </div>
        </section>
        <div></div>
        <section></section>
        <section></section>
        <section></section>
       </div>
    </div>
  )
}

export default HomePage
