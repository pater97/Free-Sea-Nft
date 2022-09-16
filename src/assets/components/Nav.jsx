// import il css
import '../style/nav.css'
// import state
import { useState } from "react";

function Nav(){

    const [nav,setNav] = useState('home')

    function home(){
        setNav('home')
        console.log(nav)
    }

    function rarity(){
        setNav('rarity')
        console.log(nav)
    }

    function chiarity(){
        setNav('chiarity')
        console.log(nav)
    }

    function contact(){
        setNav('contact')
        console.log(nav)
    }
    
    return(
        <div id="nav">
            <ul className="ligth-brand-color-bg container">
                <li>
                    <a className={`${nav === 'home' ? 'active' : ''}`} onClick={home} href="#home">HOME</a>
                </li>
                <li>
                    <a className={`${nav === 'rarity' ? 'active' : ''}`} onClick={rarity} href="#rarity">{'rarità'.toUpperCase()}</a>
                </li>
                <li>
                    <a className={`${nav === 'chiarity' ? 'active' : ''}`} onClick={chiarity} href="#charity">BENEFICENZA</a>
                </li>
                <li>
                    <a className={`${nav === 'contact' ? 'active' : ''}`} onClick={contact} href="#contact">CONTATTI</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav