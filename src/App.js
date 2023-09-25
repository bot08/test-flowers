import './App.css';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';

function App() {
  return (
    <div className="">
      <div className='frame'>
        <ProductGallery/>
        <ProductInfo/>
      </div>
    </div>
  );
}

export default App;
