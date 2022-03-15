import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Nav from "./components/nav/nav"
import ND from "./components/mode/ND"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import {FcPortraitMode} from 'react-icons/fc'
import {FcNightPortrait} from 'react-icons/fc'

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  const ml= {id :"day",
  icon:<FcPortraitMode/>};


  const[mode,setMode]=useState(ml);

  return (
    <div className= {"app"+(mode.id==="night" && "smb")}>
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <ND mode={mode} setMode={setMode} />
     <Nav/>
      <div className="sections">
       <Intro />
      <Portfolio/>
       <Works/>
       <Testimonials/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
