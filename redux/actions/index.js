// make a call to fetch, save the user, to save posts ...
import * as firebase from 'firebase'
import { USER_STATE_CHANGE } from '../constants/index'

//we make a call to our firestore , we get the dispatch 
// then when we see the snapshot exists and we are able to get data from db, 
// we'll send the dispatch type and the  current user 
// that will call the reduscer to update the state of the current user variable
export function fetchUser() {
    return((dispatch) =>{
        firebase.firestore()
        .collection("user")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists){
                dispatch({
                    type: USER_STATE_CHANGE, currentUser: snapshot.data() })
            }else{
                console.log('does not exist')
            }

        })
    })
}