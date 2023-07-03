import "../styles/ProductWrapper.css";
function ProductWrapper(props) {
  return (
    <div className="ProductWrapper">
        {props.children}
    </div>
  );
}

export default ProductWrapper;
