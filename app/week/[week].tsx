import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { CalendarGrid } from "../../components/CalendarGrid";
import macrocycle from "../../data/macrocycle.json";

export default function WeekView() {
  const { week } = useLocalSearchParams();
  const weekData = macrocycle.weeks.find(w => w.week == Number(week));

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 22, padding: 16 }}>
        Week {week} — {weekData?.phase}
      </Text>

      <CalendarGrid weekNumber={Number(week)} />
    </View>
  );
}
