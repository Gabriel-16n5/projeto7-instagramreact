import infoStory from "../data/infoStory"
import StoryProps from "./StoryProps";

function Story(){
    return(
        <>
        {infoStory.map((info) => (<StoryProps
            url={info.url}
            user={info.user}
            userSub={info.user} />))}
        </>
    )
}

export default Story;