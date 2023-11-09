import './Body.css'
import './ResponsiveBody.css'
import demoImg from '../images/demoImg2.png'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

import comic from '../images/comic.png'
import comic1 from '../images/comic (1).png'
import comic2 from '../images/comic (2).png'
import comic3 from '../images/comic (3).png'
import comic4 from '../images/comic (4).png'
import comic5 from '../images/comic (5).png'
import comic6 from '../images/comic (6).png'
import comic7 from '../images/comic (7).png'
import comic8 from '../images/comic (8).png'
import comic9 from '../images/comic (9).png'
import comic10 from '../images/comic (10).png'
import comic11 from '../images/comic (11).png'
import comic12 from '../images/comic (12).png'



const Body = () => {
    return (
        <div className="body">
            <nav>
                <img src={logo} alt='logo' />
                <a href='/'>Comic-Verse</a>
            </nav>
            <section className="topSection">
                <div className="topLeftSection">
                    <div className="heading1">Welcome to Comic-Verse</div>
                    <div className="heading2">Comic verse AI, a creative mastermind,</div>
                    <div className="heading2">Generates 10-panel strips of any kind,</div>
                    <div className="heading2">Bringing humor and art in each frame it designs.</div>
                    <Link to='/comics'>Generate Some Art</Link>
                </div>
                <div className="topRightSection">
                    <img src={demoImg} alt="demoImg" />
                </div>
                <a className='preview' href='#bottomSection'>
                    <div>Down</div>
                    <span className="material-symbols-outlined">
                        expand_more
                    </span>
                </a>
            </section>
            <section className='bottomSection' id='bottomSection'>
                <div className='heading3'>Some Examples</div>
                <div className='exampleImages'>
                    <a>
                        <img src={comic10} alt='' />
                        <a href={comic10} download="comic.png">
                            <span className="material-symbols-outlined donwloadBtn">
                                download
                            </span>
                        </a>
                    </a>
                    <a >
                        <img src={comic11} alt='' />
                        <a href={comic11} download="comic.png">
                            <span className="material-symbols-outlined donwloadBtn">
                                download
                            </span>
                        </a>
                    </a>
                    <a >
                        <img src={comic12} alt='' />
                        <a href={comic12} download="comic.png">
                            <span className="material-symbols-outlined donwloadBtn">
                                download
                            </span>
                        </a>
                    </a>
                    <a>
                        <img src={comic} alt='' />
                        <a href={comic} download="comic.png">
                            <span className="material-symbols-outlined donwloadBtn">
                                download
                            </span>
                        </a>
                    </a>
                    <a>
                        <img src={comic1} alt='' />
                        <a href={comic1} download="comic.png">
                            <span className="material-symbols-outlined donwloadBtn">
                                download
                            </span>
                        </a>
                    </a>
                    <a>
                        <img src={comic2} alt='' />
                        <a href={comic2} download="comic.png">
                            <span className="material-symbols-outlined donwloadBtn">
                                download
                            </span>
                        </a>
                    </a>
                    <a>
                        <img src={comic3} alt='' />
                        <a href={comic3} download="comic.png">
                            <span className="material-symbols-outlined donwloadBtn">
                                download
                            </span>
                        </a>
                    </a>
                    <a>
                        <img src={comic4} alt='' />
                        <a href={comic4} download="comic.png">
                            <span className="material-symbols-outlined donwloadBtn">
                                download
                            </span>
                        </a>
                    </a>
                    <a>
                        <img src={comic5} alt='' />
                        <a href={comic5} download="comic.png">
                            <span className="material-symbols-outlined donwloadBtn">
                                download
                            </span>
                        </a>
                    </a>
                    <a>
                        <img src={comic6} alt='' />
                        <a href={comic6} download="comic.png">
                            <span className="material-symbols-outlined donwloadBtn">
                                download
                            </span>
                        </a>
                    </a>
                    <a>
                        <img src={comic7} alt='' />
                        <a href={comic7} download="comic.png">
                            <span className="material-symbols-outlined donwloadBtn">
                                download
                            </span>
                        </a>
                    </a>
                    <a>
                        <img src={comic8} alt='' />
                        <a href={comic8} download="comic.png">
                            <span className="material-symbols-outlined donwloadBtn">
                                download
                            </span>
                        </a>
                    </a>
                    <a>
                        <img src={comic9} alt='' />
                        <a href={comic9} download="comic.png">
                            <span className="material-symbols-outlined donwloadBtn">
                                download
                            </span>
                        </a>
                    </a>
                </div>

            </section>
        </div>
    )
}
export default Body;