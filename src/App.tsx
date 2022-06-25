import { NavBar, Banner, Category, NewRecipe, Footer } from './components';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Category />
      <NewRecipe />
      <Footer />
    </div>
  );
}

export default App;
