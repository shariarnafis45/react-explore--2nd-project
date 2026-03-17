import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyUiNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingContainer from "./components/PricingContainer/PricingContainer";

// pricing data promise
const pricingDataPromise = fetch("/public/PricingCardAPI.json").then((res) =>
  res.json(),
);

function App() {
  return (
    <>
      <header className="border-blue-400/20 border-b-[0.5px] pb-4">
        <NavBar></NavBar>
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <PricingContainer pricingDataPromise={pricingDataPromise}></PricingContainer>
        </Suspense>
      </main>
    </>
  );
}

export default App;
