import { FaSquareGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
// import { TbBrandLinkedinFilled } from 'react-icons/tb';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <div className="container-social-media">
      <a href="">
        <FaSquareGithub />
      </a>
      <a href="">
        <FaLinkedin />
        {/* <TbBrandLinkedinFilled /> */}
      </a>
    </div>
  );
};

export default SocialMedia;
