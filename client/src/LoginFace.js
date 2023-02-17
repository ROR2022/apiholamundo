import { useLogin } from 'react-facebook';

const LoginFace = () => {
  const { login, status, isLoading, error} = useLogin();

  async function handleLogin() {
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
      LoginFace
      <button onClick={handleLogin} disabled={isLoading}>
      Login via Facebook
    </button>
      </div>
  )
}

export default LoginFace