import React from 'react';
import styled from 'styled-components';
import { Auth0Provider } from '@auth0/auth0-react';
import ImgLogin from '../../assets/images/login-img.svg'

const LoginPage = () => {
    return <Wrapper>
        <div className='container'>
           <img src={ImgLogin} alt={'github user'}/>
            <h1>github user</h1>
            <button className='btn'>Login</button>
        </div>

    </Wrapper>;
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default LoginPage;