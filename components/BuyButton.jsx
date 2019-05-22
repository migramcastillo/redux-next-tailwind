import { connect } from "react-redux";

const labels = {
    es: "Comprar",
    en: "Buy",
    br: "Macaco"
}

const BuyButton = (props) => {

    const { clicked, language } = props;

    const label = labels[language];

    return (
        <button onClick={clicked} className="buy-button">
            {label}
        </button>
    );
}

function mapStateToProps (state) {
    const { language } = state;
    return { language }
}

export default connect(mapStateToProps, null)(BuyButton);