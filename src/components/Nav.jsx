import { useEffect, useState } from "react";
import googlelogo from "../assets/google-logo.png";
import iconSearch from "../assets/icn_search.png";
import {auth, googleProvider} from "../firebase/setup";
import { signInWithPopup, signOut } from "firebase/auth";

const Nav = () => {
    const [User, setUser] = useState(null);

    useEffect(() => {
        const unsubs = auth.onAuthStateChanged((currUser) => {
            console.log('user is: ', User);
            setUser(currUser);
        });

        return () => unsubs();
    }, []); // akan dirun sekali

    const signIn = async () => {
        try {
            if (User){
                await signOut(auth);
            } else {
                await signInWithPopup(auth, googleProvider);
            }
        } catch (err) {
            console.error(err);
        }
    }
    
    return (
        <div className="bg-white flex items-center justify-center p-6 w-screen sticky">
            <div className="flex items-center ml-5">
                <img src={googlelogo} alt="" className="w-20"/>
                <h1 className="text-gray-500 text-2xl font-medium ml-3">Berita</h1>
            </div>
            <div className="ml-32 bg-zinc-100 flex items-center border border-spacing-1 p-3 w-6/12 rounded-lg">
                <img src={iconSearch} alt="" className="w-5 h-5" />
                <input type="text" placeholder="Cari Berita" className="ml-4 bg-zinc-100" />
            </div>
            <button className="butt ml-44 bg-blue-600 text-white p-2 w-28 rounded-md" onClick={signIn}>{User ? "Keluar Sini" : "Masuk Sini"}</button>
        </div>
    )
}

export default Nav;