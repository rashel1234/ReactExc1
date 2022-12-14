import './Product.css'

function Product(props) {

    return (
        <div className='product'>
            <div className='product__details'>
            <div className='product__title'> {props.title}</div>
            <div className='product__title'> {props.price}</div></div>
            <div className="product__price"> <img src={props.image} alt={props.image} className='product__image'/></div>
        </div>
    );
}

export default Product;