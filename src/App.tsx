import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import BasketProvider from "./context/BasketProvider";

const App = () => {
  return (
    <BasketProvider>
      <Header />
      <Catalog />
    </BasketProvider>
  );
};

export default App;
