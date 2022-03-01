
import { Footer } from "../Footer";
import { Header } from "../Header";
import { VideoList } from "../VideoList";
import { Container } from "./style";

export function Layout(){
    return(
        <Container>
            <Header />
                <VideoList/>
            <Footer/>
        </Container>
    )
}


