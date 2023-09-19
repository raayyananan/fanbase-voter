// place files you want to import through the `$lib` alias in this folder.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvfmwSkKpiBEC-H0ZlkIv8m43Bg4zOGjk",
  authDomain: "fanbase-voter.firebaseapp.com",
  projectId: "fanbase-voter",
  storageBucket: "fanbase-voter.appspot.com",
  messagingSenderId: "442591407052",
  appId: "1:442591407052:web:2a061d2f911bb900de4b69",
  measurementId: "G-2NZX276N15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();

// export const artists = await getDocs(collection(db, 'artists'));
export const getArtists = async () => {
    const artists = await getDocs(collection(db, 'artists'));
    return artists.docs.map(artist => ({
        id: artist.data().id,
        first: artist.data().first,
        fullName: artist.data().first + ' ' + artist.data().last,
        votes: artist.data().votes,
        backgroundImage: artist.data().backgroundImage,
        profilePicture: artist.data().profilePicture
    }))
}

export const addArtist = async (artist) => {
    try {
        const docRef = await addDoc(collection(db, "artists"), artist);
        console.log(`Successfully added artist with ID: ${docRef.id}`)
    } catch (e) {
        console.log(`Error adding to collection artists: ${e}`)
    }
}




import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
 
// const provider = new GoogleAuthProvider();

// signInWithPopup(auth, provider)
// .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult();
//     const token = credential.accessToken;

//     // the signed in user info
//     // IdP data available using getAdditionalUserInfo(result)
//     const user = result.user;
//     console.log(user)
// })
// .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;

//     const email = error.customData.email;
//     const credential = GoogleAuthProvider.credentialFromError(error);

//     console.log(`Error ${errorCode}: ${errorMessage}`);
// })

// createUserWithEmailAndPassword(auth, 'thelonerdude92@gmail.com', 'password1234')
// .then((userCredential) => {
//     const user = userCredential.user;
//     // console.log(userCredential)
// })
// .catch((error) => {
//     console.log(`Error ${error.code}: ${error.message}`);
// });


// const r = getAuth();