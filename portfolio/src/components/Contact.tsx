import ContactScene from "./Scenes/ContactScene";
export default function Contact() {


  return (
    <div id="contactpage" className="h-[100vh] w-full flex flex-col items-start justify-center relative bg-white">
        <h1
                className="m-0 ml-[10%] p-0  leading-none text-[clamp(5rem,10vw,10rem)]"
                style={{ fontFamily: "'Vina Sans', sans-serif" }}
                >
                Me Contacter
                </h1>
        <div className="w-full h-[70%] flex justify-between p-10">
          <div className="w-[70%] h-full">
            <ContactScene />
          </div>
          <div className='w-[40%] h-full flex flex-wrap'>
            <div className='w-[80%] ml-[10%] bg-gray-300 text-3xl m-5 rounded-lg flex items-center justify-center' style={{ fontFamily: "'Outfit', sans-serif" }}>Tel : 07 66 25 52 05</div>
            <div className='w-[80%] mr-[10%] bg-gray-300 text-3xl m-5 rounded-lg flex items-center justify-center' style={{ fontFamily: "'Outfit', sans-serif" }}>Mail : loucasburellier@gmail.com</div>
            <div className='w-[80%] ml-[10%] bg-gray-300 text-3xl m-5 rounded-lg flex items-center justify-center' style={{ fontFamily: "'Outfit', sans-serif" }}><a href="">Linkedin</a></div>
          </div>
        </div>
        
    </div>
  );
}