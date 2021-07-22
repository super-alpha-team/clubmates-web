import React, { FC } from "react";
import { AppProps } from "next/app";
import "../global.css";
import { store } from "redux/store";
import { Provider } from "react-redux";
import MegaLayout from "components/layout/MegaLayout";
// import { useRouter } from 'next/dist/client/router';
// import * as gtag from '../lib/gtag';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // const router = useRouter();
  // useEffect(() => {
  //     const handleRouteChange = (url) => {
  //         gtag.pageview(url);
  //     };
  //     router.events.on('routeChangeComplete', handleRouteChange);
  //     return () => {
  //         router.events.off('routeChangeComplete', handleRouteChange);
  //     };
  // }, [router.events]);

  return (
    <Provider store={store}>
      <MegaLayout
        title="Clubmates - Nền tảng quản lý và hoạt động Câu lạc bộ"
        desc="Clubmates - Nền tảng quản lý và hoạt động Câu lạc bộ - Alpha team with hearts"
        icon="/icons/club-logo.png"
      >
        <Component {...pageProps} />
      </MegaLayout>
    </Provider>
  );
};
export default App;
