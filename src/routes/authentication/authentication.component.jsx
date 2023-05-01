import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase.util";

const Authentication = ()=>{

  const logGoogleUser = async()=>{
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user)
  }
    return(
        <div>
            <button onClick={logGoogleUser}>Google popup</button>
        </div>
    )
}

export default Authentication;