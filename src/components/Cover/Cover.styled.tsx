import styled from "styled-components";

export const CoverWrapper = styled.img`
    margin: auto;
    width: 100%;
    src: ${({ url }: { [url: string]: string }) => url};

    @media (max-width: 768px) {
        width: 80%;
    }
`;
