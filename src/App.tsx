import { Fade } from 'react-awesome-reveal';
import {FaWhatsapp} from 'react-icons/fa'
import { LiaFacebook } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import './index.css'
import logo from './assets/logo.png'


function App() {
  return (
    <div className='containerMain'>
      <Fade triggerOnce={true} cascade damping={0.5}>

      <Fade direction='down'>
       <header className='header'>
        <img className='logo' src={logo} alt="" />
       </header>
      </Fade>

       <main className='main'>

        <Fade direction='left' triggerOnce={true}>
            <Fade >
              <a className='link' href="https://wa.me/message/EJU26V66Y3TWK1">
                  <h1>Fale conosco</h1>
              </a>     
            </Fade>     
            <a className='link' href="https://www.behance.net/agencia-elevart">
              <h1>Portfólio</h1>
            </a>
            <a className='link' href="mailto:agenciaelevartbusiness@gmail.com">
              <h1>E-mail</h1>
            </a>
            <a className='link' href="https://www.instagram.com/reel/CyLn-3sLDnJ/">
              <h1>Vamos elevar!</h1>
            </a>
        </Fade >
       
         <Fade direction='up' triggerOnce={true}>
           <section className='linkCircle'>
            <Fade direction='left' triggerOnce={true} cascade damping={0.4}>
              <li className='circle'><a href="https://wa.me/message/EJU26V66Y3TWK1"><FaWhatsapp className='iconsBottom' size={30}/></a></li>
            </Fade>
            <Fade direction='right' triggerOnce={true} cascade damping={0.7}> 
              <li className='circle'><a href="https://www.facebook.com/profile.php?id=100093454430720"><LiaFacebook className='iconsBottom' size={40}/></a></li>
            </Fade>
            <Fade direction='down' triggerOnce={true} cascade damping={1}>
              <li className='circle'><a href="https://www.instagram.com/agenciaelevart/"><FaInstagram className='iconsBottom' size={30}/></a></li>
            </Fade>
              
           </section>
         </Fade>
       </main>
       </Fade >
    </div>
  )
}

export default App
