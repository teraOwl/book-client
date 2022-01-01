import { useFetch } from "../../hooks/useFetch/useFetch";
import { PageLoader } from "../PageLoader/PageLoader";
import { BooksListWrapper } from "./BooksList.styled";
import Title from "../SectionTitle/Title";
import Card from "../Card/Card";
type BooksListProps = {
    url: string;
    title: string;
};

export const BooksList = ({ url, title }: BooksListProps) => {
    const { data: bookData, loading } = useFetch(url);
    return (
        <>
            <Title>{title}</Title>

            {loading ? (
                <PageLoader />
            ) : (
                <BooksListWrapper>
                    {bookData?.map(({ bookCover = "", bookName = "", bookUrl = "" }) => (
                        <Card
                            key={bookUrl}
                            bookCover={bookCover}
                            bookName={bookName}
                            bookUrl={bookUrl}
                        />
                    ))}
                </BooksListWrapper>
            )}
        </>
    );
};
