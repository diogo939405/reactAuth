import './Header.css'
import img from '../../assets/images-removebg-preview.png';
import './Header.css'

export default function Header() {

    return (
            <>
            <div className='dados'>
                            <img className='foto-logo' src={img} alt="" height='70px' width='75px' />
                            <h3>Seja bem vindo,(usuario logado)</h3>
                        </div>
            </>
    )
}

 
