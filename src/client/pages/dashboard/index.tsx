import { NextPage } from 'next';
import { useState } from 'react';
import {Head} from '../../components/head';

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Head />

      Login
    </>
  );
};

export default LoginPage;