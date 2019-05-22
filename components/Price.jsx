const Price = (props) => {

    const { quantity, currency, className } = props;

    const stringPrice = `$ ${quantity} ${currency.toUpperCase()}`;

    let classes = ["text-xl", "font-bold", "text-green-800"];
    classes.push(className);

    return <span className={classes.join(" ")}>{stringPrice}</span>;
}



export default Price;