import { useFetch } from "../../hooks/useFetch/useFetch";
import Card from "../Card/Card";
import Main from "../Main/Main";

import { FeaturedBooksSection } from "./App.styled";

const App: React.FC = () => {
    const URL = `${process.env.REACT_APP_API_URL}/api/getTopRatedBooks/`;
    const { data, loading } = useFetch(URL);
    console.log(data);
    console.log(loading);
    return (
        <>
            <nav></nav>
            <Main>
                <h1>Featured Books</h1>
                <FeaturedBooksSection>
                    {data?.map(({ bookCover = "", bookName = "", bookUrl = "" }) => (
                        <Card
                            key={bookUrl}
                            bookCover={bookCover}
                            bookName={bookName}
                            bookUrl={bookUrl}
                        />
                    ))}
                </FeaturedBooksSection>
            </Main>
            <footer></footer>
        </>
    );
};

export default App;
