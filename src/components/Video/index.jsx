
import { Container, ButtonArea, Button } from "./style";
import { IoTrashBin, IoThumbsUp, IoPencil} from 'react-icons/io5'



export function Video({id, title, link, liked }){

    return(
        <li>
            <Container>
                <h2>{title}</h2>
                <a href={link} >{link}</a>
                <ButtonArea>
                    <Button liked={liked}>
                       <IoTrashBin/>
                    </Button>
                    <Button>
                        <IoThumbsUp/>
                    </Button>
                    <Button>
                        <IoPencil/>
                    </Button>
                </ButtonArea>
            </Container>
        </li>
    )
}