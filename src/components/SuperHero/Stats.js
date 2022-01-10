import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { map } from "lodash";

export default function Stats(props) {
  const { stats } = props;

  const barStyles = (num) => {
    const color = num > 49 ? "#00ac17" : "#ff3e3e";
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Power Stats</Text>

        <View key={0} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>Intelligence</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{stats.intelligence}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(stats.intelligence)]} />
            </View>
          </View>
        </View>
        <View key={1} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>Strength</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{stats.strength}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(stats.strength)]} />
            </View>
          </View>
        </View>
        <View key={2} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>Speed</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{stats.speed}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(stats.speed)]} />
            </View>
          </View>
        </View>
        <View key={3} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>Durability</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{stats.durability}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(stats.durability)]} />
            </View>
          </View>
        </View>
        <View key={4} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>Power</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{stats.power}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(stats.power)]} />
            </View>
          </View>
        </View>
        <View key={5} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>Combat</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{stats.combat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(stats.combat)]} />
            </View>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 12,
    color: "#6b6b6b",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    // backgroundColor: "red",
    // width: "40%",
    height: 5,
    borderRadius: 20,
  },
});
