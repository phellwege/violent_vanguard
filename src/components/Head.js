import '../Main.css'
import logo from '../static/corp_logo.png'



const Head = () => {

    return (
        <div id='headspace'>
            <div className='unselectable'>
                <img src={logo} id='Logo' style={{borderRadius:"50%", paddingTop:"4%"}}/>
                <br/>
                <h1>Violent Vanguard</h1>
            </div>
        </div>
    )
}
export default Head;