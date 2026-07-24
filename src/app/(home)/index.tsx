import { Show, useUser } from '@clerk/expo'
import { useClerk } from '@clerk/expo'
import { UserButton, UserProfileView } from '@clerk/expo/native'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Page() {
  const { user } = useUser()
  const { signOut } = useClerk()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>


      <Show when="signed-in">
        <Text>Hello {user?.id}</Text>
        <Pressable style={styles.button} onPress={() => signOut()}>
          <Text style={styles.buttonText}>Sign out</Text>
        </Pressable>

        <View style={{ width: 36, height: 36, borderRadius: 18, overflow: "hidden"}}>
            <UserButton/>
        </View>
        <UserProfileView style={{ flex: 1}}/>
      </Show>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    color: '#0a7ea4',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
})