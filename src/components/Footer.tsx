import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Copyright ©2024 Muhammed Abdella </p>
    </footer>
  );
}

export default Footer;
