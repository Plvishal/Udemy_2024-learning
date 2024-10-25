import { useSelector } from 'react-redux';
import './App.css';
import MyCart from './components/Cart/MyCart';
import Header from './components/Header';

function App() {
  const uiIsVisible = useSelector((state) => state.ui.cartVisible);
  return (
    <>
      <header className="bg-slate-600 text-white fixed w-full z-10 h-[60px] flex  items-center">
        <Header />
      </header>
      <main className="w-full h-screen top-0 bg-black text-white ">
        <div className="relative top-20 flex justify-center items-center">
          {uiIsVisible && <MyCart />}
        </div>
      </main>
    </>
  );
}

export default App;
