import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>Primeros pasos en la app</Text>
      </View>
      <View style={styles.card}>
        <Text>abajo</Text>
        <View style={styles.description}>
          <Text>descripcion de esta tarjeta</Text>
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#555",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  card: {
    backgroundColor: "#B8E0D2",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2D4A3E",
  },
  description: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});
