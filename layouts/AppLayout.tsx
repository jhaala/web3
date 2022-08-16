import { ReactNode, useEffect, useState } from 'react';
import Header from '../components/header'

interface Props {
  pageTitle?: string | null;
  children: ReactNode;
}

const AppLayout = ({pageTitle, children}: Props): JSX.Element => {

  return (
    <div id="app">
      <Header />
      {/* <main>{children}</main> */}
    </div>
  );
};

export default AppLayout;
