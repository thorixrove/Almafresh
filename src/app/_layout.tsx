import { ClerkProvider } from "@clerk/expo"
import { tokenCache } from "@clerk/expo/token-cache"

import { Stack } from "expo-router";

import * as Sentry from "@sentry/react-native"
import { KeyboardProvider } from "react-native-keyboard-controller";
import "../../global.css"

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  integrations: [Sentry.feedbackIntegration()]
})

export default Sentry.wrap(function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <KeyboardProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </KeyboardProvider>
    </ClerkProvider>
  );
});