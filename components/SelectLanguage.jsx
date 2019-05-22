import { connect } from "react-redux";
import { setLanguage } from "../store";

const SelectLanguage = (props) => {

    const { language, setLanguage } = props;

    return (
        <select className="select-box" onChange={(e) => { setLanguage({ language: e.target.value }) }} defaultValue={language}>
            <option value="en">ENG</option>
            <option value="es">ESP</option>
            <option value="br">BRA</option>
        </select>
    );
}

function mapStateToProps (state) {
    const { language } = state;
    return { language }
}

const mapDispatchToProps = { setLanguage };

export default connect(mapStateToProps, mapDispatchToProps)(SelectLanguage);