import { BarWrapper } from "./Bar.styled";

const Bar: React.FC<{ progress: number }> = ({ progress }) => <BarWrapper progress={progress} />;

export default Bar;
