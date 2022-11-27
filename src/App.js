
import Product from "./components/Product";

function App() {

  const products = [
    { title: 'Soap', price: "5$", image: "soap.jpg" },
    { title: 'Shampoo', price: "10$", image: "shampoo.jpg" },
    { title: 'Conditioner', price: "10$", image: "conditioner.jpg" },
    { title: 'Body Lotion', price: "15$", image: "lotion.jpg" },
    { title: 'Peeling Cream', price: "20$", image: "peeling.jpg" }
  ];
  return (
    <div>
      <h2> Products </h2>
      <Product
        title={products[0].title}
        price={products[0].price}
        image={products[0].image}
      ></Product>
      <Product
        title={products[1].title}
        price={products[1].price}
        image={products[1].image}
      ></Product>
      <Product
        title={products[2].title}
        price={products[2].price}
        image={products[2].image}
      ></Product>
      <Product
        title={products[3].title}
        price={products[3].price}
        image={products[3].image}
      ></Product>
      <Product
        title={products[4].title}
        price={products[4].price}
        image={products[4].image}
      ></Product>
    </div>
  );
}

export default App;
