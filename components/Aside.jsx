import { connect } from "react-redux";

const Aside = (props) => {

    const { className, products } = props;

    return (
        <aside className={"p-4 bg-gray-800 shadow rounded text-white text-center " + className}>
            <h2 className="font-semibold text-xl">Elementos a comprar</h2>
            <p className="font-bold text-4xl">{products}</p>
        </aside>
    );
}

function mapStateToProps (state) {
    const { products } = state;
    return { products }
}

export default connect(mapStateToProps, null)(Aside);