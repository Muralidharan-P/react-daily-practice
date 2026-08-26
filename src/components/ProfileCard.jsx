import { useState } from "react";
function ProfileCard({name, role}){
    const [following, setFollowing]= useState(false);
    return(
<div>
    <h2>{name}</h2>
    <p>{role}</p>
    <button onClick={() => setFollowing(!following)}>
        {following ? "Following" : "Follow"}
    </button>
</div>
    )
}

export default ProfileCard;


