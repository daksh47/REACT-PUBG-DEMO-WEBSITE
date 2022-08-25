import React ,{ useState } from 'react'
import About from '../components/about';
import Hero from '../components/hero';
import How from '../components/howToPlay';
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Sign from '../components/signin';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <Hero/>
    <How/>
    <About/>
    <Sign/>
    </>
  )
}

export default Home