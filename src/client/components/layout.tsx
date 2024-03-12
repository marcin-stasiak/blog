import { Header } from './header';
import { Footer } from './footer';

interface PropsInterface {
  children: JSX.Element;
}

const Layout = ({ children }: PropsInterface) => {
  return (
    <>
      <Header/>
        {children}
      <Footer/>
    </>
  )
};

export default Layout;