import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <form className="flex flex-col gap-3">
      <Input type="email" label="Email" isRequired/>
      <Input type={isPasswordVisible ? 'text' : 'password'} label="Password" isRequired/>
      <Button color="primary">Login</Button>
    </form>
  );
};

export default Login;