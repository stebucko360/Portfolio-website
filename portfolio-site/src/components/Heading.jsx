import githublogo from "../images/whitegit.png"
import instagramlogo from "../images/instagramwhite.png"
import linkedinlogo from "../images/linkedinwhite.png"

export const Heading = () => {
    return (
        <div className='heading'>
            <div className='namecontainer'>
            <h1 className='mainbartitle'> Stephen Buckley</h1>
            <h2 className='mainportfolio'>Portfolio</h2>
            </div>
            <div className='logo'><span className='constlogo'>const</span>
            <span className='equals'>=</span>
            <span className='arrow'>&lt;</span> SB Development <span className='arrow'>/&gt;</span> 
            </div>
            <div className='medialinks'>
                <img className='githublogo' src={githublogo} alt='github'></img>
                <img className='instalogo' src={instagramlogo} alt='instagram'></img>
                <img className='linkedinlogo' src={linkedinlogo} alt='linkedin'></img>
            </div>
        </div>
    )
}
