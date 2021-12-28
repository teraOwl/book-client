import styled from 'styled-components';

type TabsWrapperProps = {
    focused: boolean;
};

export const TabsWrapper = styled.div<TabsWrapperProps>`
    display: flex;
    flex-direction: column;
`;

export const TabsContentWrapper = styled.div`
    position: relative;
`;

type TabsTitleWrapperProps = {
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
};

export const TabsTitleWrapper = styled.div<TabsTitleWrapperProps>`
    display: flex;
    height: 67px;
    justify-content: ${({ justifyContent }) => justifyContent};
`;

type TabTitleProps = {
    focused: boolean;
    backgroundUrl?: string;
    focusedColor: string;
    defaultColor?: string;
    width?: number;
    height?: number;
    titleTextSize?: number;
    bgColor?: string;
    bgColorActive?: string;
};

export const TabTitle = styled.div<TabTitleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ backgroundUrl }) => `url(${backgroundUrl}) `};
    background-repeat: no-repeat;
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    font-size: ${({ titleTextSize }) => `${titleTextSize}px`};
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-transform: uppercase;
    color: ${({ defaultColor }) => `${defaultColor}`};

    &.navigable-focused {
        color: ${({ focusedColor }) => `${focusedColor}`};
        background-color: ${({ bgColorActive }) => `${bgColorActive ? `${bgColorActive} !important` : ``}`};
    }
`;

type TabContentProps = {
    focused: boolean;
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
};

export const TabContentWrapper = styled.div<TabContentProps>`
    display: ${({ focused }) => (focused ? 'flex' : 'none')};
    flex-direction: row;
    max-width: 1920px;
    overflow: hidden;
    justify-content: ${({ justifyContent }) => justifyContent};
`;

export const TabDetail = styled.div`
    display: flex;
    flex-direction: column;
`;
