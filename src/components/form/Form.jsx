import './form.css';
import { Container, Row } from 'react-bootstrap';
import {Spin} from 'antd'
import Header from '../header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import ButtonAcao from '../buttonActions/ButtonAcao'
import { useState, useRef } from 'react';
export default function Form() {
    const form = useRef();
    const [name, setName] = useState('');
    const [motivo, setMotivo] = useState('');
    const[matricula, setMatricula] = useState('');
    const [loading, setLoading] = useState(false);

    const handleMessage = (e) => {
        setLoading(true);
        e.preventDefault();    

        try {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
            toast.success('Mensagem enviada com sucesso!'); 
            console.log(name, matricula, motivo);
            form.current.reset();
        } catch (error) {
            console.log(error);
        }
    };

    const handleNumber = (e) => {
         const valorNovo = Number(e.target.value.replace(/[^0-9]/g, ''))
        setMatricula(valorNovo)
        console.log('objeto em input ', valorNovo)
        
    };
   
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000} 
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="light"
            />
            <Container>
                <Row>
                      <Spin size ='large' spinning={loading}>
                    <div className='form-container'>
                        <Header />
                        <div className='container'>
                            <form className='form' ref={form}>
                                <div className='titulo-form'>
                                    <h2> Ajuste de Ponto</h2>
                                </div>
                                <div className='form-group'>
                                    <div className='input-box'>
                                      <input 
                                          type="text" 
                                          placeholder='' 
                                           ref={form} 
                                          required 
                                          onChange={handleNumber} 
                                         value={matricula}
            />
                                        <label>Matricula</label>
                                    </div>

                                    <div className='input-box'>
                                        <input type="text" placeholder='' ref={form} required onChange={(e) => setName(e.target.value)} />
                                        <label>Nome</label>
                                    </div>

                                    <div className='input-box'>
                                        <input type="date" placeholder='' ref={form} required />
                                        <label>Data</label>
                                    </div>
                                    <div className='input-box'>
                                        <input type="text" placeholder="" ref={form} list="faixa" />
                                        <label>Setor</label> 
                                        <datalist id="faixa">
                                            <option value="">faixa etária:</option>
                                            <option value="-18">menor de idade</option>
                                            <option value="+18">maior de idade</option>
                                            <option value="+60">idoso</option>
                                        </datalist>
                                    </div>

                                    <div className='input-box textarea-box'>
                                        <textarea placeholder='' required rows="4" ref={form} onChange={(e)=>setMotivo(e.target.value)}></textarea>
                                        <label>Motivo</label>
                                    </div>
                                    <div className='input-box file-box'>
                                        <input type="file" id="file" ref={form} required />

                                    </div>
                                     
                                </div>
                                <ButtonAcao
                                    handleMessage={handleMessage}
                                />
                            </form>
                        </div>
                    </div>
                     </Spin>
                </Row>
            </Container>
           
        </>
    );
}
