import { Header } from './header';
import { Footer } from './footer';

interface PropsInterface {
  children: JSX.Element;
}

const Layout = ({ children }: PropsInterface) => {
  return (
    <>
      <Header/>
      <main className="flex flex-col grow items-center w-full">
        {children}
      </main>
      <Footer/>
    </>
  )
};

export default Layout;