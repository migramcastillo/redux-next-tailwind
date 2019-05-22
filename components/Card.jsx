import BuyButton from "./BuyButton";
import Price from "./Price";

const Card = (props) => {

    const lang = "es";
    const currency = "mxn";

    const { image } = props;
    const { name, description } = props[lang];
    const { prices } = props;
    const priceQuantity = prices[currency];

    return (
        <div className="card my-3 flex">
            <div className="w-48 h-48 lg:h-auto bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${image})` }}>

            </div>
            <div className="flex-1 p-3">
                <Price quantity={priceQuantity} currency={currency} className="float-right" />
                <h2 className="text-gray-900 text-xl mb-2 font-semibold">{name}</h2>
                <p className="text-gray-700 mb-3 text-base">{description}</p>
                <BuyButton />
            </div>
        </div>
    );
};

export default Card;