const SelectLanguage = (props) => {

    return (
        <select className="select-box" defaultValue="EN">
            <option value="EN">ENG</option>
            <option value="ES">ESP</option>
            <option value="BR">BRA</option>
        </select>
    );
}

export default SelectLanguage;