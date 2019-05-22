const SelectCurrency = (props) => {

    return (
        <select className="select-box" defaultValue="USD">
            <option value="USD">USD</option>
            <option value="MXN">MXN</option>
            <option value="CAN">CAN</option>
            <option value="EUR">EUR</option>
        </select>
    );
}

export default SelectCurrency;