import CardsContainer from "./CardsContainer";
import Aside from "./Aside";

const Main = (props) => {
    return (
        <main className="bg-gray-100 min-h-screen">
            <section className="container mx-auto py-2 flex justify-between">
                <CardsContainer />
                <Aside className="w-1/4" />
            </section>
        </main>
    )
}

export default Main;