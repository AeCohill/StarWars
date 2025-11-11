import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      {/* Welcome message */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          Hi, welcome to my Star Wars app!
        </ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Click the buttons below to navigate through the app and explore Planets, Films, and Spaceships!
        </ThemedText>
      </ThemedView>

      {/* Links to main screens */}
      <ThemedView style={styles.stepContainer}>
        <Link href="/planets">
          <ThemedText type="subtitle" style={styles.linkButton}>
            Planets 🌍
          </ThemedText>
        </Link>

        <Link href="/films">
          <ThemedText type="subtitle" style={styles.linkButton}>
            Films 🎬
          </ThemedText>
        </Link>

        <Link href="/spaceships">
          <ThemedText type="subtitle" style={styles.linkButton}>
            Spaceships 🚀
          </ThemedText>
        </Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  stepContainer: {
    gap: 12,
    marginBottom: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  linkButton: {
    backgroundColor: '#FFE81F',
    color: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
    textAlign: 'center',
  },
});
