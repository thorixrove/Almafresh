import { useSSO } from "@clerk/expo";
import { useState } from "react";
import { Alert } from "react-native";

const useSocialAuth = () => {
    const [loadingStrategy, setLoadingStrategy] = useState<string | null>(null)
    const { startSSOFlow} = useSSO()

    const handleSocialAuth = async (strategy: "oauth_google" |"oauth_github" | "oauth_apple") => {
        if (loadingStrategy) return

        setLoadingStrategy(strategy)

        try {
            const {createdSessionId, setActive} = await startSSOFlow({ strategy})

            if (!createdSessionId || !setActive) {
                Alert.alert("Sign-in incomplete", "Sign-in tidak berhasil. Mohon coba kembali")
                return
            }

            await setActive({ session: createdSessionId})
        } catch (error) {
            console.log("Error berada di social auth", error)
            Alert.alert("Error", "Gagal untuk sign in. Mohon coba lagi")
        } finally {
            setLoadingStrategy(null)
        }
    }

    return { handleSocialAuth, loadingStrategy}
}
 
export default useSocialAuth