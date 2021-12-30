import styled from "styled-components";

export const FeaturedBooksSection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    padding: 30px;
    grid-gap: 10px;

    * {
        border-radius: 33px;
    }
`;
