import React, { CSSProperties, useState } from 'react';

import {
    TabContentWrapper,
    TabDetail,
    TabsContentWrapper,
    TabsTitleWrapper,
    TabsWrapper,
    TabTitle,
} from './Tabs.styled';

type TitleProps = {
    title: string;
    backgroundCss?: CSSProperties;
    backgroundUrl?: string;
    activeBgColor?: string;
};
type TabsProps = {
    titles: TitleProps[];
    focusedTitleColor?: string;
    children: JSX.Element[];
    focused: boolean;
    tabIndex: number;
    makeFocused?: boolean;
    justifyTitle?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
    titleWidth?: number;
    titleHeight?: number;
    titleTextSize?: number;
    defaultTitleColor?: string;
};

const Tabs: React.FC<TabsProps> = ({
    children,
    focusedTitleColor = 'blue',
    focused,
    titles = [],
    makeFocused,
    justifyTitle = 'flex-start',
    justifyContent = 'flex-start',
    titleWidth = 370,
    titleHeight = 67,
    titleTextSize = 28,
    defaultTitleColor = '#ffffff',
}: TabsProps) => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <TabsWrapper focused={focused}>
            <TabsTitleWrapper justifyContent={justifyTitle}>
                {titles.map((title, index) => (
                    <>
                        makeFocused={makeFocused && index === 0}
                        key={`tab-${index}`}
                        id={`tab-${index}`}
                        onFocus={() => setTabIndex(index)}
                        <TabTitle
                            focusedColor={focusedTitleColor}
                            defaultColor={defaultTitleColor}
                            backgroundUrl={title.backgroundUrl}
                            style={title.backgroundCss}
                            focused={focused && tabIndex === index}
                            width={titleWidth}
                            height={titleHeight}
                            titleTextSize={titleTextSize}
                            bgColor={title.backgroundCss?.backgroundColor}
                            bgColorActive={title.activeBgColor}
                        >
                            {title.title}
                        </TabTitle>
                    </>
                ))}
            </TabsTitleWrapper>
            <TabsContentWrapper>
                {children.map((child, index) => (
                    <TabContentWrapper
                        justifyContent={justifyContent}
                        key={`tab-content-${index}`}
                        focused={tabIndex === index}
                    >
                        <TabDetail>{child}</TabDetail>
                    </TabContentWrapper>
                ))}
            </TabsContentWrapper>
        </TabsWrapper>
    );
};

export default Tabs;
