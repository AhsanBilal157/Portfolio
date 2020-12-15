  
import React from "react";
import './App.css'
const SocialIcons = () => {
  return (
    <div className="SocialMediaIcons">
      <a
        
        href="https://github.com/AhsanBilal157"
        className="icon-button github"
        rel="noopener noreferrer"
        target="_blank"
      ><img srcSet="https://image.freepik.com/free-icon/github-circled_318-10752.jpg"height={45}/>
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.behance.net/mahsanbilalkhan"
        className="icon-button linkeden"
        rel="noopener noreferrer"
        target="_blank"
      ><img srcSet="https://www.flaticon.com/svg/static/icons/svg/145/145799.svg"height={30}/>
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a
        href="mailto:Khanbilal6172@gmail.com"
        className="icon-button google"
        rel="noopener noreferrer"
        target="_blank"
      ><img srcSet='https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png'height={30}/>
        <i className="fab fa-google"></i>
      </a>
      <a
        href="https://www.instagram.com/ahsan_bilal_a_khan/"
        className="icon-button gitlab"
        rel="noopener noreferrer"
        target="_blank"
      ><img srcSet='https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png'height={30}/>
        <i className="fab fa-gitlab"></i>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100008547673607"
        className="icon-button facebook"
        rel="noopener noreferrer"
        target="_blank"
      ><img srcSet='https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/facebook-512.png'height={40}/>
        <i className="fab fa-facebook-f"></i>
      </a>
      <a
        href="https://stackoverflow.com/l"
        className="icon-button stackoverflow"
        rel="noopener noreferrer"
        target="_blank"
      ><img srcSet=' https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/stackoverflow-512.png'height={40}/>
        <i className="fab fa-stack-overflow"></i>
      </a>
    </div>
  );
};

export default SocialIcons;