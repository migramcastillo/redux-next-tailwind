import { connect } from "react-redux";
import { setCurrency } from "../store";

const SelectCurrency = (props) => {

    const { currency, setCurrency } = props;

    return (
        <select className="select-box" onChange={(e) => { setCurrency({ currency: e.target.value }) }} defaultValue={currency}>
            <option value="usd">USD</option>
            <option value="mxn">MXN</option>
            <option value="cad">CAD</option>
            <option value="eur">EUR</option>
        </select>
    );
}

function mapStateToProps (state) {
    const { currency } = state;
    return { currency }
}

const mapDispatchToProps = { setCurrency };

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrency);