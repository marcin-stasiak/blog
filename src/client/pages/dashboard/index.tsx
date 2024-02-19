import { NextPage } from 'next';
import { useState } from 'react';

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      Login
    </>
  );
};

export default LoginPage;