import imgRickMorty from '../imgs/rick-morty.png'
import eye from '../imgs/eye.jpg';
import '../index.css';

export default function RickAndMorty (){
    
    
    document.addEventListener('mousemove', e => {
        const anchor = document.getElementById('img-home')
        const rect = anchor.getBoundingClientRect();
        console.log('rect')
        const eyes = document.querySelectorAll('.eye')
    
        const imgHomeX = rect.left + rect.width /2;
        const imgHomeY = rect.top + rect.height /2;
        
        
        const mouseX = e.clientX
        const mouseY = e.clientY

        const angleDeg = getAngle(mouseX, mouseY, imgHomeX, imgHomeY )
         eyes.forEach(eye =>{
            eye.style.transform = `rotate(${90+ angleDeg}deg)`
         })
    })

    function getAngle(cx, cy, ex, ey){
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx)
        const deg = rad * 180 / Math.PI;
        return deg;
    }

    return(
        <>
        <img src={imgRickMorty} alt="Rick & Morty" id="img-home" />
            <div className='eyes'> 
                <img src={eye} alt='ojo' className='eye' style={{top:'44px', left:'-61px'}} />
                <img src={eye} alt='ojo' className='eye' style={{top:'36px', left:'-18px'}}/> 
                <img src={eye} alt='ojo' className='eye' style={{top:'-53px', left:'38px'}}/> 
                <img src={eye} alt='ojo' className='eye' style={{top:'-55px', left:'82px'}}/>
            </div>
        </>
    )
}