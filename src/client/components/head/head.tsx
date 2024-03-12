import CommonHead from 'next/head';

const Head = () => {
  return (
    <CommonHead>
      <title>My page title</title>
      <meta name="description" content="" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#ffffff" />

    </CommonHead>
  )
};

export default Head;