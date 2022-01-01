import Container from "../ProgressBarContainer/Container";
import Bar from "../progressBar/Bar";

const Loader = ({ progress = 0 }) =>  {

    return (
        <Container isSubmitting={progress > 0}>
            <Bar progress={progress} />
        </Container>
    );
};

export default Loader;
