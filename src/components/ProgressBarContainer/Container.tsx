import { ContainerWrapper } from "./Container.styled";

const Container: React.FC<{
    isSubmitting: boolean;
}> = ({ children, isSubmitting }) => (
    <ContainerWrapper isSubmitting={isSubmitting}>{children}</ContainerWrapper>
);

export default Container;
