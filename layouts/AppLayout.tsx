import { ReactNode } from 'react';
import Hero from 'components/hero';
import Header from 'components/header';
import Carousel from 'components/carousel';

interface Props {
  pageTitle?: string | null;
  children: ReactNode;
}

const AppLayout = ({ children }: Props): JSX.Element => {
  return (
    <div id='app'>
      <Header />
      <Hero />
      <Carousel />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
