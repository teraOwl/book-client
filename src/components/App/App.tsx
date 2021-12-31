import { useState } from "react";
import { BooksList } from "../BooksList/BooksList";
import Main from "../Main/Main";
import { Search } from "../SearchBar/Search";

import { AppWrapper } from "./App.styled";

const App: React.FC = () => {
    const URL_TOP_RATED = `${process.env.REACT_APP_API_URL}/api/getTopRatedBooks/`;
    const [bookName, setbookName] = useState("");
    const URL_SEARCH_BOOK = `${process.env.REACT_APP_API_URL}/api/getBooks/${bookName}`;

    return (
          <AppWrapper>
            <Search setBookName={setbookName} />
            <Main>
                {bookName ? (
                    <BooksList url={URL_SEARCH_BOOK} title="Books Found" />
                ) : (
                    <BooksList  url={URL_TOP_RATED} title="Featured Books" />
                )}
            </Main>
            <footer></footer>
        </AppWrapper>
    );
};

export default App;
