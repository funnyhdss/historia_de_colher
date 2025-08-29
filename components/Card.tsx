import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type CardProps = {
  image: string;
  title: string;
  recipe: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ image, title, description, recipe }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.recipe}>{recipe}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    margin: 12,
    overflow: "hidden",
  },
  image: { width: "100%", height:220},
  content: { padding: 12 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 6, color: "#333" },
  description: { fontSize: 14, color: "#666", marginBottom: 8 },
  recipe: { fontSize: 14, color: "#444", fontStyle: "italic" },
});

export default Card;



