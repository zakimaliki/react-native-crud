import { Link } from "expo-router";
import { Text, View } from "react-native";
// external
import styles from "./styles"

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        {/* inline */}
        <Text style={{fontSize: 36,color: "#38434D"}}>This is the first page of your app</Text>
        <Link href="/profile">Open Profile</Link>
        <Link href="/profile?name=Zaki&age=28">Zaki's Profile</Link>
        <Link href={{pathname:'profile',params:{name:'maliki',age:28}}}>Maliki's Profile</Link>
        <Link href="/User/Zaki">User Zaki</Link>
        <Link href="/LocalAPI">CRUD</Link>
      </View>
    </View>
  );
}

// style scoped
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });
