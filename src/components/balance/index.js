import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MotiView } from "moti";
export default function Balance({ saldo, gastos }) {
  return (
    <MotiView
      style={style.container}
      from={{
        rotateX: "-100deg",
        opacity: 0,
      }}
      animate={{
        rotateX: "0deg",
        opacity: 1,
      }}
      transition={{
        type: "timing",
        duration: 900,
        delay: 300,
      }}
    >
      <View style={style.item}>
        <Text style={style.itemTitle}>Saldo</Text>
        <View style={style.content}>
          <Text style={style.currencySymbol}>R$</Text>
          <Text style={style.balance}>{saldo}</Text>
        </View>
      </View>

      <View style={style.item}>
        <Text style={style.itemTitle}>Gastos</Text>
        <View style={style.content}>
          <Text style={style.currencySymbol}>R$</Text>
          <Text style={style.expenses}>{gastos}</Text>
        </View>
      </View>
    </MotiView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  item: {},
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 20,
    color: "#9370DB",
    marginRight: 0,
  },
  currencySymbol: {
    color: "#A9A9A9",
  },
  balance: {
    fontSize: 22,
    color: "#2ecc71",
  },
  expenses: {
    fontSize: 22,
    color: "#e74c3c",
  },
});
