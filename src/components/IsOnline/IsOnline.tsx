import { useState, useEffect } from "react";
const useOnline = ()=> {
    const[isOnline, setIsOnline] = useState(true);
    //want to code run only once
    useEffect(()=>{
        //for online
        const handleOnline = ()=>{
            setIsOnline(true);
        };
        window.addEventListener("online", handleOnline);
        //for offline
        const handleOffline =()=>{
            setIsOnline(false);
          };
        window.addEventListener("offline",handleOffline)
      return ()=>{
        window.removeEventListener("online",handleOnline );
        window.removeEventListener("offline",handleOffline );
      }
    },[]);
    return isOnline;   //it return either true or false
}
export default useOnline;
//every time online or offline occurs new evenrtlistener didn't
//created because dependency array is empty
// cleared or unmount whenerver yp shift the page b