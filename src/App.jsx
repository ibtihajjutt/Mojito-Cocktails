import { ScrollTrigger , SplitText} from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);  

const App = () => {
  return (
    <div className='flex-center' > <h1 className='text-3xl text-lime-500 font-bold'> Hellow world</h1></div>
  )
}

export default App