import React from "react";
import SocialIcons from "./Socialicons";
import ProfilePic from "./circle-cropped.png";
import './App.css';
import styles from './App.css';

const Contact = () => {
  return (
    <div id="contact" className="container contact" style={{marginLeft:80}}>
        <h1 className="whoami_header"style={{marginLeft:350}}>My Curriculum Vitae</h1>
        <p className="contact_title" style={{marginLeft:430}}>
            MY INBOX IS OPEN FOR ALL.
        </p>
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
        <div className="image-content-profile">
        <div data-aos="slide-right" className="square"style ={{marginRight:100}}>
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                     
            <img className="profile-image" srcSet='https://raw.githubusercontent.com/AhsanBilal157/Portfolio/master/src/circle-cropped.png?token=AR5DA7GCNB3IPJLJUD6J6KC73DH6S' alt="Ahsan Bilal" height={330}width={350}/>
            
          </div>
          </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="right_contact">
            <div className="contact_aboutme">
              <br />
              <br />
              <br />
              <h2 className='whoami_header'>Ahsan Bilal</h2>
              Jr. Software developer | Aspiring Software Developer 👾 | Graphic Designer 🔥 | Speaker🎙 | Enthusiastic Learner ✍️
            </div>
            <br />
            <div className="contact_location"> 
              <span>
                <svg
                  viewBox="0 0 12 16"
                  version="1.1"
                  width="20"
                  height="18"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                  ></path>
                </svg>
                Faisalabad , Pakistan
              </span>
            </div>
            <br />
            <div className="contact_opp">Open for opportunities: Yes</div>
            <br />
            <br />
            <div className="socialicons">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>

      <footer >
          <div ><h2 style={{marginLeft:400}}>Feel free to contact</h2></div> 
      </footer>
    </div>
  );
};

export default Contact;