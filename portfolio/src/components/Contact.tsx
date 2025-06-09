import ContactScene from "./Scenes/ContactScene";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {


  return (
    <div id="contactpage" className="h-[100vh] w-full flex flex-col items-start justify-center relative bgc1">
        <h1
                className="m-0 ml-[10%] p-0 txtc1 leading-none text-[clamp(5rem,10vw,10rem)]"
                style={{ fontFamily: "'Vina Sans', sans-serif" }}
                >
                Me Contacter
                </h1>
        <div className="w-full h-[70%] flex justify-between p-10">
          <div className="w-[70%] h-full">
            <ContactScene />
          </div>
          <div className='w-[40%] h-full flex txtc3 flex-wrap'>
            <div className='w-[80%] h-[30%] ml-[10%] bgc2 text-3xl m-5 rounded-lg flex flex-col justify-evenly shadow-[0_3px_10px_rgb(0,0,0,0.2)]' style={{ fontFamily: "'Outfit', sans-serif" }}>
              <div className="mx-auto text-center flex items-center justify-center">
                <FontAwesomeIcon icon={faPhone} className="mr-3 text-5xl" />
                <span className="text-xl">Appelez-moi</span>
              </div>
              <h2 className="text-2xl mx-auto">07 66 25 52 05</h2>
            </div>
            <div className='w-[80%] h-[30%] mr-[10%] bgc2  m-5 rounded-lg flex flex-col justify-evenly shadow-[0_3px_10px_rgb(0,0,0,0.2)]' style={{ fontFamily: "'Outfit', sans-serif" }}>
              <div className="mx-auto text-center flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-5xl"  />
                <span className="text-xl">Contactez moi par mail</span>
              </div>
              
              <h2 className="text-2xl mx-auto">loucasburellier@gmail.com</h2>
            </div>
            <a href="https://linkedin.com/in/loucas-burellier" className='w-[80%] h-[30%] ml-[10%]'>
              <div className='w-full h-full bgc2 text-3xl m-5 rounded-lg flex flex-col justify-evenly shadow-[0_3px_10px_rgb(0,0,0,0.2)]' style={{ fontFamily: "'Outfit', sans-serif" }}>
                <div className="mx-auto text-center flex items-center justify-center">
                  <FontAwesomeIcon icon={faLinkedin} className="mr-3 text-6xl leading-none m-0 p-0" />
                  <span className="text-xl">Linkedin</span>
                </div>
                <h2 className="text-2xl mx-auto">linkedin.com/in/loucas-burellier</h2>
              </div>
            </a>
          </div>
        </div>
        
    </div>
  );
}