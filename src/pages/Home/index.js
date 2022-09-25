import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/balance";
import Movements from "../../components/Movements";
import Actions from "../../components/actions";

const list = [
  {
    id: 1,
    label: "Boleto internet",
    value: "109,99",
    date: "17/09/2022",
    type: 0, //despesas
  },
  {
    id: 2,
    label: "Pix do cliente X",
    value: "300,99",
    date: "24/05/2022",
    type: 1, //entradas
  },
  {
    id: 3,
    label: "Salario",
    value: "7.200,00",
    date: "30/05/2022",
    type: 1, //entradas
  },
];
export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Laura Lorrayne" />

      <Balance saldo="9.000.90" gastos="-252,00" />

      <Actions />

      <Text style={styles.title}>Ultimas Movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
