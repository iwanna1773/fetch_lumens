import { IonContent, IonPage } from "@ionic/react";

import Header from "./components/header";
import Content from "./components/content";
import CoinBalance from "./components/coinbalance";

import { HomeStyle } from "./home.style";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <HomeStyle className="relative">
          <Header />
          <CoinBalance />
          <Content />
        </HomeStyle>
      </IonContent>
    </IonPage>
  );
};

export default Home;
