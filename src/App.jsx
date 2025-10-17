// // src/App.jsx

import QuestionFlow from "./components/QuestionFlow";
import Header from "./components/header";
import "./index.css";



export default function App() {
  return (
  <div className="min-h-screen text-lotrGold flex flex-col items-center justify-start pt-[15vh] bg-lotrBlack p-6 block">
    <Header />
    <QuestionFlow />
  </div>

  );
}