import Card from "../Card/Card";

import { Main } from "./App.styled";
const App: React.FC = () => {
    return (
        <>
            <nav></nav>
            <Main>
                <Card />
            </Main>
            <footer></footer>
        </>
    );
};

export default App;
