import { useEffect, useState } from 'react';
import api from '../../services/api';

import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground';
import Trash from '../../assets/trash.svg'

import { Container, Title, ContainerUsers, CardUsers, TrashIcon, AvatarUser } from './stylex'

function ListUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {



    async function getUsers() {
      const { data } = await api.get('/usuarios');

      setUsers(data);
    }

    getUsers();
  }, [])
  
  async function deleteUser(id) {
    await api.delete(`/usuarios/${id}`)

    const upadatedUsers = users.filter(user => user.id !== id)

    setUsers(upadatedUsers)

  }

  return (
    <Container>
      <TopBackground />

      <Title>Usuários Cadastrados</Title>

      <ContainerUsers>
        {users.map((user) => (

          <CardUsers key={user.id}>
            <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} alt="Lixeira" onClick={() => deleteUser(user.id)} />
          </CardUsers>
        ))}

      </ContainerUsers>
      <Button type="button" onClick={() => window.history.back()} theme="primary">Voltar</Button>
    </Container>
  );
}

export default ListUsers;