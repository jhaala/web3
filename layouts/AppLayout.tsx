import { ReactNode } from 'react';
import Header from 'components/header';
import Hero from 'components/hero';
import Carousel from 'components/carousel';

interface Props {
  pageTitle?: string | null;
  children: ReactNode;
}

const AppLayout = ({ children }: Props): JSX.Element => {
  return (
    <div id='app'>
      {/* <Header /> */}
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
