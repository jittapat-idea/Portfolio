
import './App.css'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'



function App() {

  return (
   <div className='mt-15 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]'>
    <LeftSection />
    <RightSection />
   </div>
  )
}

export default App
