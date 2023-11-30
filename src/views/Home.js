import React, { useEffect, useRef } from "react";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import NavBar from '../components/Navbar';
import Header from '../components/Head';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import About from '../components/About';
import '../Main.css'
import '../App.css'

export default () => {
    const SectionStyle ={
        height: '100vh',
        width: '100%',
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
    };
    return (
        <div id="background">
            <NavBar />
            <Header />
            <div id='showSmall'>
                <About />
                <Contact />
                <Footer />
            </div>
            <div className='showBig'>
                <Fullpage>
                    <FullpageNavigation/>
                    <FullPageSections>
                        <FullpageSection style={{SectionStyle}} className='fullpage1'>
                            <About />
                            <h2 className='pgNum' id='homePgOne'><span className='firstNum'>0<FullpageSection.Number/></span> / 02</h2>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}} className='fullpage2'>
                            <Contact />
                            <h2 className='pgNum' id='homePgTwo'><span className='firstNum'>0<FullpageSection.Number/></span> / 02</h2>
                            <Footer />
                        </FullpageSection>
                    </FullPageSections>
                </Fullpage>
            </div>
        </div>
    )
}
