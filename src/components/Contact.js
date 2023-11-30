import React from 'react';
import discordCustom from '../static/discordCustom.png'
import discordBlue from '../static/discordBlue.png'
import Schwarz_Negger from '../static/portrait.jpeg'

export default () => {
    return (
        <>
            <div className="page_wrap" id='Contact'>
                <div>
                    <h2 className='unselectable'>Contact</h2>
                </div>
                <div id='divSplitContact'>
                    <div id='inner-div'>
                        <h3>Recruitment</h3>
                        <p>
                            We've got a really great community, if you're interested in seeing if we're the right fit.
                            <br/>
                            Contact in-game:
                        </p> 
                        <div id='divSplitRecruit'>
                            <div>
                                <img src={Schwarz_Negger} id='portrait' className='unselectable'/>
                                <br/>
                                <span id='in_game'>Schwarz Negger</span>
                                <p>
                                in-game
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id='inner-div'>
                        <h3>Diplomacy</h3>
                        <p>If you would like to reach us regarding a diplomacy issue, please follow this link to our discord <a href='https://discord.gg/3FRR6859kd'>Violent Vanguard Diplomacy</a> or join the channel in-game.</p>
                    </div>
                </div>
                <br/>
                <h3>OR</h3>
                <p>Join our discord channel</p>
                <a href ='https://discord.gg/3FRR6859kd' id='discordLogoNight'><img src={discordCustom}/><br/>Discord</a>
                <a href ='https://discord.gg/3FRR6859kd' id='discordLogoDay'><img src={discordBlue}/><br/><span id='royal_blue'>Discord</span></a>
            </div>
        </>
    )
}