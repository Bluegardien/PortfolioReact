import BookScene from './Scenes/BookScene'
import SittedScene from './Scenes/SittedScene'
function ProjectPage() {
  return (
    <>
      <div className='h-[100vh] w-full flex flex-col items-center justify-center relative'>
        <div className='relative'>
            <img src="/testbgportfolio.png" alt="" />
            <div className='absolute left-[67%] top-[-30%] w-[30%] h-[100%]'>
                <SittedScene/>
            </div>
            <div className='absolute left-[36%] top-[-10%] w-[30%] h-[100%]'>
                <BookScene/>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default ProjectPage