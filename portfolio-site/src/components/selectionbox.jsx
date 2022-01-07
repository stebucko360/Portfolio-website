import { Link } from "react-router-dom";

export const Selectionbox = () => {
    
    return (
        <div className='sboxcontainer'>
            <div1></div1>
            <section/>
            <div2>
                <nav className='selectionbox'>
                    <Link to="/portfolio"><button id='portfoliobutton' >Portfolio</button></Link>
                    <Link to="/about"><button id='aboutbutton'>About</button></Link>
                    <Link to="/contact"><button id='contactbutton'>Contact</button></Link>
                    <Link to="/skills"><button id='skillsbutton'>Skills<br></br>Experience</button></Link>
                </nav>
            </div2>
            <div3></div3>
        </div>
    );
};
