import { checkLocalStorage,supabase} from "utils/supabase"
import { router,useNavigation} from 'expo-router';
import { Slot } from "expo-router";
import { useEffect } from "react";

// checkLocalStorage
export default function RootLayout() {
   
    
    // useEffect( () => {
    //     const checkSession = async () => {
    //         const session = await checkLocalStorage();
    //         if(session) {
    //             const { access_token } = JSON.parse(session);
    //             console.log('access_token:', access_token);
    //             const user = await supabase.auth.getUser(access_token);
    //             console.log('user:', user.data.user.user_metadata.avatar_url);
    //             // const {data} = JSON.parse(user.data.user);
    //             // console.log('test:', session.valueOf("access_token"));
    //             router.navigate('/');
    //         }
    //         else {
    //             router.navigate('login');
    //         }
    //     }
    //     checkSession();
    // }, []);
    // console.log('layout');
    useEffect(() => {
        router.navigate('reader');
    }, []);
    
    return (
        <>
           <Slot/>
        </>
    )
}