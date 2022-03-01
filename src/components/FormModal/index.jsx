import { Overlay, Container, Header, FormContainer, FormMain, InputGroup, Footer, CloseIcon, CheckIcon  } from './style'
 

export function FormModal(){
    return(
        <Overlay>
            <Container>
                <Header>
                    <stong>Adicione um vídeo</stong>
                    <button>
                        <CloseIcon/>
                    </button>
                </Header>
                <FormContainer>
                    <FormMain>
                        <InputGroup>
                            <label htmlFor="title">Title</label>
                            <input id="title" type="text"/>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="link">Link</label>
                            <input id="link" type="text"/>
                        </InputGroup>
                    </FormMain>
                    <Footer>
                        <button type="submit">
                            <CheckIcon/>
                        </button>
                    </Footer>
                </FormContainer>
            </Container>
        </Overlay>
    )
}