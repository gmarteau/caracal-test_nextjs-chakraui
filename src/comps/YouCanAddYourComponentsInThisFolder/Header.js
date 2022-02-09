import Navbar from "./Navbar";
import Logo from "./elements/Logo";
import Container from "_comps/Layout/Container";

const Header = () => {
    return (
        <Container as='header' bg='primary.50' h={['72px', null, '80px']} alignItems='center'>
            <Logo />
            <Navbar />
        </Container>
    );
}

export default Header;