import './App.css';
import {inventory} from "./constants/inventory.js";
import soldProducts from "./helpers/soldProducts.js";
import initialStock from "./helpers/initialStock.js";
import leftToSell from "./helpers/leftToSell.js";




function App() {

  return (

      <main>
    <h1>Tech it easy dashboard</h1>
          <section>
        <h2>Verkoopoverzicht</h2>

        <div className="outer-container">
        <article className="inner-container-green">
          <h3>Aantal verkochte producten</h3>
            <h2>{soldProducts(inventory)}</h2>
        </article>

        <article className="inner-container-blue">
          <h3>Aantal ingekochte producten</h3>
            <h2>{initialStock(inventory)}</h2>
        </article>

        <article className="inner-container-red">
          <h3>Aantal te verkopen producten</h3>
            <h2>{leftToSell(inventory)}</h2>
        </article>

        </div>
          </section>

        <h2>Best verkochte tv</h2>


      </main>



  )
}

export default App
