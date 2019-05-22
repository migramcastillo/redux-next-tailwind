const BuyButton = (props) => {

    const { clicked } = props;

    return (
        <button onClick={clicked} className="buy-button">
            Comprar
        </button>
    );
}

export default BuyButton;