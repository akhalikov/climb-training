import macrocycle from "@/data/macrocycle.json";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function MacrocycleScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>2025 Training Plan</Text>

      {macrocycle.weeks.map((week, idx) => (
        <Link key={idx} href={`/week/${week.week}`}>
          <TouchableOpacity style={{ marginVertical: 8 }}>
            <Text>Week {week.week} — {week.phase}</Text>
          </TouchableOpacity>
        </Link>
      ))}
    </View>
  );
}
