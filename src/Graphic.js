import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '@material-ui/core/Button';




export default function Graphics(){
    return(
        <div>
            <div className="row">
            <div className='col col-12 col-sm-12 col-md-12 col-lg-6'>
            <div data-aos="fade-right"
              data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="4000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
            style={{marginRight:20}}
            > 
              <h1 className='whoami_header'>Graphic Designer </h1>
              <p className='whoami_text'>Graphic Designer with alot of creative ideas and tech knowledge</p>
              <br />
              <div>
                <ul className='whoami_ul'>
                    <li><i className="fab fa-html5"></i>
                    <img srcSet='https://cdn.shopify.com/s/files/1/2169/0453/products/ai_600x600.png?v=1586953493' height={50} />
                    <p>Illustrator</p>
                    </li>
                    <li><i className="fab fa-css3-alt"></i>
                    <img srcSet='data:image/png;base64,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' height={50} />
                    <p>Photoshop</p>
                    </li>
                    <li><i className="fab fa-sass"></i>
                    <img srcSet='https://images.vexels.com/media/users/3/163292/isolated/preview/3087de3a36b76b94e9178fd791d7886e-premiere-pro-pr-colored-icon-by-vexels.png' height={50} />
                    <p>Premier Pro</p> 
                    </li>
                    <li><i className="fab fa-js-square"></i>
                    <img srcSet='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/4_Indesign_Adobe_logo_logos-512.png' height={50} />
                    <p>In design</p>
                    </li>
                    <li><i className="fab fa-bootstrap"></i>
                    <img srcSet='https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg' height={50} />
                    <p>UI/UX Design</p>
                    </li>
                    <li><i className="fab fa-react"></i>
                    <img srcSet='https://img.pngio.com/fileadobe-photoshop-lightroom-classic-cc-iconsvg-wikimedia-commons-adobe-lightroom-png-1051_1025.png' height={50} />
                    <p>Lightroom</p>
                    </li>
                </ul>
                <Button variant="contained" href='https://behance.com/AhsanBilal' style={{backgroundColor:'purple',color:'white',marginLeft:200}}>See Projects</Button>
            </div>         
           </div></div>
           <div className='col col-12 col-sm-12 col-md-12 col-lg-6'>
            <div data-aos="fade-left"
            data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="4000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
          style={{marginLeft:20}}
          >
            <img srcSet='https://global-uploads.webflow.com/5bcb5ee81fb2091a2ec550c7/5deecff50f2f522d597b4693_5c6612cab44ec50b2b648589_image-2.gif'alt='illustration'height={500}width={500}/>
            </div></div></div></div>
    )
    
  }
  AOS.init();