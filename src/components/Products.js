// import Item from "./Item";
import Nav from "./Nav";
import { v4 as uuidv4 } from "uuid";
import "../styles/products.css";

function Products(props) {
  const products = [
    {
      id: "5R5HgLyHMVQ",
      name: "Red Beanie",
      price: 9.99,
      pic: "https://source.unsplash.com/5R5HgLyHMVQ/400x500",
    },
    {
      id: "7-ToFEHzMNw",
      name: "Superman Costume",
      price: 29.99,
      pic: "https://source.unsplash.com/7-ToFEHzMNw/400x500",
    },
    {
      id: "2rHw1I_IoT4",
      name: "Green Jacket",
      price: 24.99,
      pic: "https://source.unsplash.com/2rHw1I_IoT4/400x500",
    },
    {
      id: "NEigHitVXbk",
      name: "Black Pajamas",
      price: 21.99,
      pic: "https://source.unsplash.com/NEigHitVXbk/400x500",
    },
    {
      id: "xfLHmmDpqNk",
      name: "White Hoodie",
      price: 24.99,
      pic: "https://source.unsplash.com/xfLHmmDpqNk/400x500",
    },
    {
      id: "KZv7w34tluA",
      name: "Sunglasses",
      price: 5.99,
      pic: "https://source.unsplash.com/KZv7w34tluA/400x500",
    },
    {
      id: "jCM48W7y6Y8",
      name: "Christmas Hat",
      price: 7.99,
      pic: "https://source.unsplash.com/jCM48W7y6Y8/400x500",
    },
    {
      id: "8qq_QbZDSxg",
      name: "Orange Shirt",
      price: 14.99,
      pic: "https://source.unsplash.com/8qq_QbZDSxg/400x500",
    },
    {
      id: "K4mSJ7kc0As",
      name: "Pilot Jacket",
      price: 24.99,
      pic: "https://source.unsplash.com/K4mSJ7kc0As/400x500",
    },
    {
      id: "uyovIw3w2O8",
      name: "Banana Plush Onesie",
      price: 19.99,
      pic: "https://source.unsplash.com/uyovIw3w2O8/400x500",
    },
    {
      id: "HQYQGoV-e74",
      name: "Grey Sweater",
      price: 21.99,
      pic: "https://source.unsplash.com/HQYQGoV-e74/400x500",
    },
  ];

  function handleAddItem(e) {
    const product = products[e.target.value];
    const cartCopy = [...props.cart];
    const itemInCart = props.cart.find((item, index) => {
      if (product.id === item.product.id) {
        cartCopy[index].num += 1;

        return true;
      }
    });

    if (!itemInCart) {
      cartCopy.push({ num: 1, product });
    }
    localStorage.setItem("cart", JSON.stringify(cartCopy));
    // console.log(cartCopy);
    props.setCart(cartCopy);
  }
  return (
    <div>
      <Nav cart={props.cart}></Nav>
      <div className="products">
        {products.map((product, index) => {
          return (
            <div key={index} className="product">
              <img src={product.pic} alt={`pic ${product.name}`} />
              <div className="product-below-pic">
                <div className="product-info">
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">${product.price}</div>
                </div>
                <button value={index} onClick={handleAddItem}>
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
