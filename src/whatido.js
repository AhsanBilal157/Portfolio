import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Whatido(){
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
              <h1 className='whoami_header'>Full Stack Developer </h1>
              <p className='whoami_text'>CRAZY FRONT-END WEB DEVELOPER WHO WANT TO EXPLORE EVERY <br />TECH STACK AND A OFFLINE MANAGMENT SOFTWARE DEVELOPER</p>
              <div>
                <ul className='whoami_ul'>
                    <li><i className="fab fa-html5"></i>
                    <img srcSet='https://images.all-free-download.com/images/graphiclarge/html_5_vector_logo_148263.jpg' height={50} />
                    <p>html-5</p>
                    </li>
                    <li><i className="fab fa-css3-alt"></i>
                    <img srcSet='https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png' height={50} />
                    <p>css3</p>
                    </li>
                    <li><i className="fab fa-sass"></i>
                    <img srcSet='https://www.clipartmax.com/png/full/319-3195027_when-saas-is-provided-through-cloud-computing-it-becomes-software-as-a.png' height={50} />
                    <p>sass</p> 
                    </li>
                    <li><i className="fab fa-js-square"></i>
                    <img srcSet='https://www.clipartmax.com/png/full/470-4707396_javascript-icon-html-css-js-icons.png' height={50} />
                    <p>JavaScript</p>
                    </li>
                    <li><i className="fab fa-bootstrap"></i>
                    <img srcSet='https://seeklogo.com/images/B/bootstrap-5-logo-85A1F11F4F-seeklogo.com.png' height={50} />
                    <p>Bootstrap</p>
                    </li>
                    <li><i className="fab fa-react"></i>
                    <img srcSet='https://techythought.com/wp-content/uploads/2020/09/ReactNative.png' height={50} />
                    <p>reactjs</p>
                    </li>
                    <li><i className="fab fa-npm"></i>
                    <img srcSet='https://www.tomsquest.com/img/posts/2018-10-02-better-npm-ing/npm_logo.png' height={50} />
                    <p>npm</p>
                    </li>
                    <li><i className="fab fa-python"></i>
                    <img srcSet='https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png' height={50} />
                    <p>python</p>
                    </li>
                    <li><i className="fab fa-docker"></i>
                    <img srcSet='https://logodix.com/logo/773624.png' height={50} />
                    <p>C#</p>
                    </li>
                    <li><i className="fab fa-docker"></i>
                    <img srcSet='https://github.githubassets.com/images/modules/logos_page/Octocat.png' height={50} />
                    <p>Github</p>
                    </li>
                    <li><i className="fab fa-docker"></i>
                    <img srcSet='https://camo.githubusercontent.com/2abbfd01bddb6cf8b15612c8e890abb391cd0bf4ab0cadf9dfbadc007e2a3603/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3438302f3030303030302f747970657363726970742e706e67' height={50} />
                    <p>Typescript</p>
                    </li>
                </ul>
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
            <img srcSet='https://global-uploads.webflow.com/5bcb5ee81fb2091a2ec550c7/5dedd7b85049677d981db611_5c65f4ae2f71d67d0ee9f032_hero-image.png'alt='illustration'height={500}width={500}/>
            </div></div></div></div>
    )
    
}
AOS.init();
