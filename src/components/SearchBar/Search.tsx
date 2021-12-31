import { memo, useCallback } from "react";
import { SearchForm } from "./Search.styled";
import { useForm } from "../../hooks/useForm/useForm/useForm";

export const Search = memo(({ setBookName }:{setBookName: React.Dispatch<React.SetStateAction<string>>}) => {
    
    const [bookInputValue, handleBookNameInputChange] = useForm({
        bookSearchInput: "",
    });

    const { bookSearchInput = "" } = bookInputValue;
    
    const submitForm = useCallback(
        (e) => {
            e.preventDefault();
            setBookName(bookSearchInput);
        },
        [bookSearchInput, setBookName]
    );

    return (
        <SearchForm onSubmit={submitForm}>
            <input
                name="bookSearchInput"
                value={bookSearchInput}
                placeholder="Search a book!"
                onChange={handleBookNameInputChange}
                autoComplete="off"
            />
            <button>Search</button>
        </SearchForm>
    );
});
