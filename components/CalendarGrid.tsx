import { Text, TouchableOpacity, View } from "react-native";

const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

export function CalendarGrid({ weekNumber }) {
  return (
    <View style={{ padding: 12 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {days.map(day => (
          <Text key={day} style={{ width: 50, textAlign: "center" }}>
            {day}
          </Text>
        ))}
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 12 }}>
        {days.map(day => (
          <TouchableOpacity key={day} style={{ width: 50, padding: 12, backgroundColor: "#eee", borderRadius: 6 }}>
            <Text style={{ textAlign: "center" }}>Session</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
