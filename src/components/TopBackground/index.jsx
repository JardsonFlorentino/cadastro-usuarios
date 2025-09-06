import UserImg from '../../assets/users.png'
import { Background } from './styles'
function TopBackground() {
    return (
        <Background>
            <img src={UserImg} alt="Imagem de Usuários" />
        </Background>
    );
}

export default TopBackground;