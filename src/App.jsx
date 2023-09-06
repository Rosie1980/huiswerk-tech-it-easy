import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import soldProducts from "./helpers/soldProducts.js";
import initialStock from "./helpers/initialStock.js";
import leftToSell from "./helpers/leftToSell.js";
import bestSellingTvName from "./helpers/bestSellingTvName.js";
import bestSellingTvPrice from "./helpers/bestSellingTvPrice.js";
import bestSellingTvScreenSizes from "./helpers/bestSellingTvScreenSizes.js";
import minus from './assets/minus.png';
import check from './assets/check.png';

function App() {

    function sortBestSellerTvs() {
        inventory.sort((a,b) => {
            return b.sold - a.sold;
        });
        console.log(inventory);
    }

    function sortBestPrice() {
        inventory.sort((a,b) => {
            return a.price - b.price;
        });
        console.log(inventory);
    }

    function sortBestRefreshRate() {
        inventory.sort((a,b) => {
            return b.refreshRate - a.refreshRate;
        });
        console.log(inventory);
    }

  return (

      <main className="page-container">
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

          <section>

        <h2>Best verkochte tv</h2>

              <article className="tv-container-bestseller">
                  <span className="product-image">
                      <img src={bestSellingTv.sourceImg} alt="tv afbeelding"/>
                  </span>
                  <div className="tv-details">
                  <h3>{bestSellingTvName(bestSellingTv)}</h3>
                  <p>{bestSellingTvPrice(bestSellingTv.price)}</p>
                  <p>{bestSellingTvScreenSizes(bestSellingTv.availableSizes)}</p>
                      <ul className="options">
                          <li><img src={check} alt="check" className="icon"/>wifi</li>
                          <li><img src={minus} alt="minus" className="icon"/>speech</li>
                          <li><img src={check} alt="minus" className="icon"/>hdr</li>
                          <li><img src={check} alt="minus" className="icon"/>bluetooth</li>
                          <li><img src={minus} alt="minus" className="icon"/>ambilight</li>
                      </ul>
                  </div>
              </article>
          </section>

          <h2>Alle tvs</h2>
          <div className="buttons">
          <button type="button" onClick={sortBestSellerTvs}>Meest verkocht eerst</button>
          <button type="button" onClick={sortBestPrice}>Goedkoopst eerst</button>
          <button type="button" onClick={sortBestRefreshRate}>Meest geschikt voor sport eerst</button>
          </div>

          {inventory.map((tv) => {
              return (
                  <article className="tv-container" key={tv.type}>
                      <span className="product-image">
                      <img src={tv.sourceImg} alt="tv afbeelding"/>
                      </span>
                      <div className="tv-details">
                      <h3>{bestSellingTvName(tv)}</h3>
                      <p>{bestSellingTvPrice(tv.price)}</p>
                      <p>{bestSellingTvScreenSizes(tv.availableSizes)}</p>
                      </div>
                  </article>)
          })}

      </main>



  )
}

export default App
