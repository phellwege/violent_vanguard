import React, { useEffect, useRef } from "react";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Lazy} from "swiper";
import Harbinger from '../static/harbinger.gif';
import Abaddon from '../static/abaddon.gif';
import Drake from '../static/drake.gif';
import Hurricane from '../static/hurricane.gif';
import Typhoon from '../static/typhoon.gif';
import "swiper/css/bundle";


export default () => {
    const SectionStyle ={
        height: '100vh',
        width: '100%',
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <>
            <Fullpage>
                <FullpageNavigation />
                <FullPageSections>
                    <FullpageSection style={{SectionStyle}} className='fullpage1'>
                        <div className="page_wrap">
                            <div id='container-div' className="shipImg">
                                    <h2 className='unselectable'>zKillBoard</h2>
                                    <Swiper
                                        pagination={{
                                            dynamicBullets: true,
                                            }}
                                            modules={[Pagination, Lazy]}
                                            className=".sliderShipImg"
                                        >
                                        <SwiperSlide>
                                            <a href='https://zkillboard.com/corporation/98504902/'>
                                                <img src={Abaddon} alt='abaddon'/>
                                            </a>   
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a href='https://zkillboard.com/corporation/98504902/'>
                                                <img src={Drake} alt='drake'/>
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a href='https://zkillboard.com/corporation/98504902/'>
                                                <img src={Hurricane} alt='hurricane'/>
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a href='https://zkillboard.com/corporation/98504902/'>
                                                <img src={Typhoon} alt='typhoon'/>
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a href='https://zkillboard.com/corporation/98504902/'>
                                                <img src={Harbinger} alt='harbinger'/>
                                            </a>
                                        </SwiperSlide>
                                        ...
                                    </Swiper>
                                    <a href='https://zkillboard.com/corporation/98504902/'>
                                        <br/>
                                        ZkillBoard
                                    </a>
                            </div>
                        </div>
                        <h2 className='pgNum'><span className='firstNum'><FullpageSection.Number/></span>/4</h2>
                    </FullpageSection>
                    <FullpageSection style={{SectionStyle}} className='fullpage2'>
                        <div className="page_wrap">
                            <h2 className='unselectable'>Industry</h2>
                                <ul id='whatWeOffer'>
                                    <li><a href='https://www.evecookbook.com' target="_blank">EVE Cook Book</a></li>
                                    <li><a href='https://evepraisal.com/' target="_blank">EvePraisal</a></li>
                                    <li><a href='https://wiki.eveuniversity.org/Gas_cloud_harvesting' target="_blank">Gas Cloud Harvesting</a></li>
                                    <li><a href='https://ore.cerlestes.de/ore#site:ore' target="_blank">ORE Tables</a></li>
                                    <li><a href='https://wiki.eveuniversity.org/Reactions' target="_blank">Reactions</a></li>
                                    <li><a href='https://www.youtube.com/watch?v=qNzvrDrPtcg' target="_blank">Reaction Tutorial</a></li>
                                </ul>
                        </div>
                        <h2 className='pgNum'><span className='firstNum'><FullpageSection.Number/></span>/4</h2>
                    </FullpageSection>
                    <FullpageSection style={{SectionStyle}} className='fullpage1'>
                        <div className="page_wrap">
                            <h2 className='unselectable'>Wormhole Life</h2>
                                <ul id='whatWeOffer'>
                                    <li><a href='https://docs.google.com/document/d/18Izmfii3oWAoBwu87xjiq-ayNKa5fyReX5wHp-T8KDw/edit' target="_blank">Bookmarking Guide</a></li>
                                    <li><a href='https://www.ellatha.com/eve/wormholelist.asp' target="_blank">WH List</a></li>
                                    <li><a href='https://wiki.eveuniversity.org/Implants' target="_blank">Implants</a></li>
                                </ul>
                        </div>
                        <h2 className='pgNum'><span className='firstNum'><FullpageSection.Number/></span> /4</h2>
                    </FullpageSection>
                    <FullpageSection style={{SectionStyle}} className='fullpage2'>
                        <div className="page_wrap">
                            <h2 className='unselectable'>PVE Survival Guides</h2>
                                <ul id='whatWeOffer'>
                                    <li><a href='https://eve-survival.org/wikka.php?wakka=HomePage' target="_blank">EVE Survival</a></li>
                                    <li><a href='https://eve-survival.org/wikka.php?wakka=WormholeSpaceClass3' target="_blank">C3</a></li>
                                    <li><a href='https://eve-survival.org/wikka.php?wakka=WormholeSpaceClass4' target="_blank">C4</a></li>
                                    <li><a href='https://eve-survival.org/wikka.php?wakka=WormholeSpaceClass5' target="_blank">C5</a></li>
                                </ul>
                        </div>
                        <h2 className='pgNum'><span className='firstNum'><FullpageSection.Number/></span> /4</h2>
                    </FullpageSection>
                </FullPageSections>
            </Fullpage>      
        </>
    )
}