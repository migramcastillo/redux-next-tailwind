import Card from "./Card";
import actividades from "../actividades";

const CardsContainer = (props) => {

    const cards = actividades.map((act, index) => <Card key={index} {...act} />);

    return (<div className="flex-1 pr-3">
        <h1 className="text-2xl font-bold text-gray-800 my-2">Productos disponibles</h1>
        {cards}
    </div>);
}

export default CardsContainer;