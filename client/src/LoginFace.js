import React from 'react'
import { useLogin } from 'react-facebook';

const LoginFace = () => {

  const { login, status, isLoading, error} = useLogin();

  const handleLogin = async ()=>{
    try {
      const response = await login({
        scope: 'email',
      });

      console.log(response.status);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <h1>Pruebas con FaceLogin</h1>
      <button onClick={handleLogin} disabled={isLoading}>
      Login via Facebook
      </button>
    </div>
  )
}

export default LoginFace