import { AddVideo } from "../AddVideo";
import { Video } from "../Video";
import { Container, VideoListWrapper } from "./style";

export function VideoList(){
    return(
       <Container>
           <VideoListWrapper>
                <Video
                    id={1}
                    title="title-test"
                    link="https://www.youtube.com/watch?v=ExNSl9CKcPQ&list=PL8YNlUoOZkkY8wjaI2t8DfvysoysmMLCv&index=4"
                    liked={false}
                />
                <AddVideo/>
           </VideoListWrapper>
       </Container>
    )
}