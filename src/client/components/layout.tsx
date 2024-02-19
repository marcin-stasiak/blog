interface PropsInterface {
  children: JSX.Element;
}

const Layout = ({ children }: PropsInterface) => {
  return (
    <div>
      {children}
    </div>
  )
};

Layout;