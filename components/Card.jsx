import { connect } from "react-redux";
import BuyButton from "./BuyButton";
import Price from "./Price";
import { incrementProduct } from "../store";

const Card = (props) => {

    const { image, currency, language, incrementProduct, prices } = props;
    const { name, description } = props[language];
    const priceQuantity = prices[currency];

    return (
        <div className="card my-3 flex">
            <div className="w-48 h-48 lg:h-auto bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="flex-1 p-3">
                <Price quantity={priceQuantity} currency={currency} className="float-right" />
                <h2 className="text-gray-900 text-xl mb-2 font-semibold">{name}</h2>
                <p className="text-gray-700 mb-3 text-base">{description}</p>
                <BuyButton clicked={incrementProduct} />
            </div>
        </div>
    );
};

function mapStateToProps (state) {
    const { currency, language } = state;
    return { currency, language }
}

const mapDispatchToProps = { incrementProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Card);