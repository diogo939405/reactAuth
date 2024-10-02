import './buttonAcao.css'
import 'react-toastify/dist/ReactToastify.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'

export default function ButtonAcao({ handleMessage }) {
        return (
            <>
                <div className='button-form'>
                    <button type="submit" onClick={handleMessage}>
                        Enviar formulário <FontAwesomeIcon icon={faArrowRight} />
                    </button>

                    <button onClick={() => window.location.href = 'https://aplicacao.castelobranco.br:8443/portalti/etapa1.html'}>
                        Voltar ao portal<FontAwesomeIcon icon={faUpRightFromSquare} style={{marginLeft: '5px'}} />
                    </button>
                </div>
            </>
        )
}

ButtonAcao.propTypes = {
        handleMessage: PropTypes.func.isRequired,
}

 
