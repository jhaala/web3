import type { AppProps } from 'next/app';
import AppLayout from 'layouts/AppLayout';

import 'styles/app.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout pageTitle={`Web3 App`}>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default App;
