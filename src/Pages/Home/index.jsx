import { useRef, useState,} from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

import {
  Container,
  Form,
  Title,
  ContainerInputs,
  Input,
  InputLabel,
  MessageFeedback
} from '../Home/styles'


import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'


function Home() {
  const [message, setMessage] = useState('')
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const navigate = useNavigate()

  async function registerNewUser() {
  try {    
 
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value
    });

    setMessage('✅ Usuário cadastrado com sucesso!');
  } catch (error) {
    if (error.response && error.response.status === 409) {
      setMessage('⚠️ Usuário já cadastrado.');
    } else {
      setMessage('❌ Erro ao cadastrar usuário.');
      console.error(error);
    }
  }
   }

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>

          <div>
            <InputLabel>Nome<span>*</span></InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>Idade<span>*</span></InputLabel>
            <Input type="text" placeholder="Idade do usuário" ref={inputAge} />
          </div>

        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>Email<span>*</span></InputLabel>
          <Input type='email' placeholder="Email do usuário" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">
          Cadastrar
        </Button>
      </Form>

     {message && (
          <MessageFeedback type={message.startsWith('✅') ? 'success' : 'error'}>
            {message}
          </MessageFeedback>
        )}

      <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>
        Lista de Usuários
      </Button>

    </Container>
  )
}
export default Home
