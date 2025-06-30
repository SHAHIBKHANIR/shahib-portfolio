import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Contact from "./Contact";
import myPhoto from "./assets/shahib.jpg"; // ✅ Import your photo
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function App() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center text-white px-4 py-8">
        {/* ✅ Display your image */}
        <img
          src={myPhoto}
          alt="Shahib Khan IR"
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-4 object-cover"
        />

        <h1 className="text-5xl font-bold mb-4 text-center">Hi, I’m Shahib Khan IR</h1>
        <h2 className="text-xl text-gray-300 mb-8 text-center">
          Software Developer | Android UI/UX Designer | MERN Stack Enthusiast
        </h2>

        <div className="flex space-x-6 mb-6 text-2xl">
          <a href="https://github.com/SHAHIBKHANIR" target="_blank" className="hover:text-blue-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shahibkhan/" target="_blank" className="hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/khan_shahibkhan/" target="_blank" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://x.com/IrShahib" target="_blank" className="hover:text-sky-400">
            <FaTwitter />
          </a>
        </div>
        <a
          // href="https://your-resume-link.com"
          href="https://drive.google.com/file/d/1F9ucbgHvCUgkdsO3eMGYS16vZqFm4eSd/view?usp=sharing"
          target="_blank"
          className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Download Resume
        </a>
      </div>

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <footer className="bg-gray-900 text-white py-6 text-center mt-12">
        <p className="text-lg font-semibold">Shahib Khan IR</p>
        <p className="text-sm mb-2">
          {/* <a href="mailto:shahibkhanir@gmail.com" className="hover:underline text-blue-400">
            ir.shahibkhan@gmail.com
          </a> */}
        </p>
        <div className="flex justify-center space-x-6 text-2xl mb-3">
          <a href="https://github.com/SHAHIBKHANIR" target="_blank" rel="noreferrer" className="hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shahibkhan/" target="_blank" rel="noreferrer" className="hover:text-gray-300">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/khan_shahibkhan/" target="_blank" rel="noreferrer" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="https://x.com/IrShahib" target="_blank" rel="noreferrer" className="hover:text-gray-300">
            <FaTwitter />
          </a>
        </div>
        <p className="text-xs text-gray-400"><b>© Copyright {new Date().getFullYear()-1}. Made by <u>Shahib Khan IR</u>.</b></p>
      </footer>
    </div>
  );
}

export default App;
