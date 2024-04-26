import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="lg:px-16 lg:flex justify-between space-y-4 p-10 bg-base-200 text-base-content">
        <aside className="flex flex-col lg:items-start">
          <p className="font-bold text-4xl bg-gradient-to-r from-[#56b2bb] via-[#8CB9BD] to-indigo-400 inline-block text-transparent bg-clip-text">
          Artistry Atelier
          </p>
          <p className="mt-3">Providing reliable tech since 1992</p>
          <div className="mt-4 flex flex-col lg:items-start">
            <p className="font-bold">Helpline : <span className="hover:underline cursor-pointer font-medium"> 01322810867</span>,<span className="hover:underline font-medium cursor-pointer"> 01322876409</span> </p>
            <p className="font-bold">Suport : <a className="hover:underline cursor-pointer font-medium">lonelinessismycompanion09@gmail.com</a></p>
          </div>
        </aside>

        <nav className="flex flex-col lg:items-start">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav> 

        <nav className="flex lg:items-start flex-col">
          <h6 className="footer-title">Social Link</h6> 
          <div className="flex items-center  gap-3">
            <a className="text-3xl hover:text-[#0E46A3]" href="https://www.facebook.com/profile.php?id=100085467096858&mibextid=ZbWKwL" target="blank"><IoLogoFacebook /></a>
            <a className="text-3xl hover:text-[#0E46A3]" href="https://web.whatsapp.com/" target="blank"><FaWhatsappSquare /></a>
            <a className="text-3xl hover:text-[#0E46A3]" href="https://github.com/shahadat-siam" target="blank"><FaGithubSquare /></a>
            <a className="text-3xl hover:text-[#0E46A3]" href="https://www.linkedin.com/in/shahadat-siam-41a582233/" target="blank"><FaLinkedin /></a>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-2 mt-2 gap-2">
            <img className="w-[120px]" src="https://web.programming-hero.com/static/media/google-play.b670281a.webp" alt="" />
            <img className="w-[120px]" src="https://web.programming-hero.com/static/media/app-store-apple.b35643c5.webp" alt="" />
            <img className="w-[120px]" src="https://get.microsoft.com/images/en-GB%20dark.svg" alt="" />
          </div>
        </nav>
      </footer>
      <div className="bg-base-200">
        <p className="p-7">© Artistry Atelier 2024</p>
      </div>
    </div>
  );
};

export default Footer;
