import { NextPage } from 'next';
import { Head } from '../../components/head';
import { Tabs, Tab, Card, CardBody} from '@nextui-org/react';
import { Register } from '../../components/register';
import { Login } from '../../components/login';

const LoginPage: NextPage = () => {

  return (
    <>
      <Head />

      <div className="w-full md:w-2/3 lg:w-1/3 xl:w-1/4 max-w-screen-2xl">
        <Tabs fullWidth>
          <Tab key="login" title="Login">
            <Card>
              <CardBody>
                <Login/>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="register" title="Register">
            <Card>
              <CardBody>
                <Register/>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default LoginPage;