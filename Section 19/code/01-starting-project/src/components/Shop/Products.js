import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 9,
    title: "My first book",
    description: "the book",
  },
  {
    id: "p2",
    price: 10,
    title: "Second first book",
    description: "the book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item, i) => 
          <ProductItem
            key={i}
            title={item.title}
            price={item.price}
            description={item.price}
            id={item.id}
          />
        )}
      </ul>
    </section>
  );
};

export default Products;
