import { memo } from "react";
import { useFetch } from "../../hooks/useFetch/useFetch";
import Card from "../Card/Card";
import { PageLoader } from "../PageLoader/PageLoader";
import Title from "../SectionTitle/Title";
import { BooksListWrapper } from "./BooksList.styled";
type BooksListProps = {
    url: string;
    title: string;
};

export const BooksList = memo(({ url, title }: BooksListProps) => {
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
});
