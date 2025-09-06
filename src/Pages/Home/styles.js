import styled from 'styled-components'

export const Container = styled.div`
    background-color: #181f36;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    height: 100vh;
`


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;
`

export const Title = styled.h2`
    color: #fff;
    font-size: 38px;
    text-align: center;
    font-style: normal;
    font-weight: 600;
`

export const ContainerInputs = styled.div`
    display: flex;
    gap: 20px;

`

export const Input = styled.input`
    border-radius: 20px;
    border: 1px solid #d2dae2;
    background-color: #fff;
    padding: 12px 20px;
    outline: none;
    width: 100%;
`

export const InputLabel = styled.label`
    color: #fff;
    font-size: 18px;
    font-weight: 500;

    span{
      color: #ef4f45;
      font-weight: bold;

    }
`


export const MessageFeedback = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
  padding: 10px 20px;
  border-radius: 8px;
  color: ${props => (props.type === 'success' ? '#28a745' : '#dc3545')}; 
  background-color: ${props => (props.type === 'success' ? '#d4edda' : '#f8d7da')};
  border: 1px solid ${props => (props.type === 'success' ? '#28a745' : '#dc3545')};
`;
