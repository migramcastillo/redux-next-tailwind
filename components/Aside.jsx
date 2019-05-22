const Aside = (props) => {

    const { className } = props;

    return (
        <aside className={"p-4 bg-gray-800 shadow rounded text-white text-center " + className}>
            <h2 className="font-semibold text-xl">Elementos a comprar</h2>
            <p className="font-bold text-4xl">0</p>
        </aside>
    );
}

export default Aside;