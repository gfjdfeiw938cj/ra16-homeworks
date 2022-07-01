import './App.css';
import NewsBlock from './components/NewsBlock/NewsBlock';
import RatesBlock from './components/RatesBlock/RatesBlock';
import SearchBlock from './components/SearchBlock/SearchBlock';
import PromoBlock from './components/PromoBlock/PromoBlock';
import WidgetsBlock from './components/WidgetsBlock/WidgetsBlock';

const newsTitles = [];
const newsItems = [];
const ratesItems = [];
const searchTitles = [];
const dayLink = {};
const promo = {};
const widgetsItems = [];

/** Отображает всю страницу */

function App() {
  const onSelectMore = () => {
    // функция, отображающая всплывающее окно при клике на кнопку "еще"
  };

  return (
    <div className="App">
      <NewsBlock titles={newsTitles} items={newsItems}/>
      <RatesBlock items={ratesItems} onSelectMore= {onSelectMore}/>
      <SearchBlock titles={searchTitles} dayLink={dayLink}/>
      <PromoBlock item={promo}/>
      <WidgetsBlock items={widgetsItems}/>
    </div>
  );
}

export default App;
