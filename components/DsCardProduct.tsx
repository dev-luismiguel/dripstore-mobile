import { FC } from "react";
import { Image, StyleSheet, View } from "react-native";

import { DsText } from "./DsText";

type DsCardProductType = {
  name: string;
  price: number;
  urlImg?: string;
  category?: string;
  discountValue?: number;
};

export const DsCardProduct: FC<DsCardProductType> = ({
  name,
  price,
  category,
  discountValue,
  urlImg,
}) => {
  const formateValueToReal = (value: number) => {
    const formatedValue = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return formatedValue;
  };

  const valueView = () => {
    if (discountValue) {
      return (
        <View style={styles.value_view}>
          <DsText style={styles.valueView_off}>
            {formateValueToReal(price)}
          </DsText>
          <DsText style={styles.valueView_main}>
            {formateValueToReal(price - discountValue)}
          </DsText>
        </View>
      );
    }
    return (
      <DsText style={styles.valueView_main}>{formateValueToReal(price)}</DsText>
    );
  };

  const percentDiscount = (value: number, discount: number) => {
    if (discount) {
      const discountPercentage = Math.round((discount / value) * 100);
      return discountPercentage;
    }
    return value;
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: urlImg }} style={styles.image} />
      {discountValue ? (
        <DsText style={styles.discount_tag}>
          {percentDiscount(price, discountValue)}% OFF
        </DsText>
      ) : (
        ""
      )}
      <DsText>{category}</DsText>
      <DsText>{name}</DsText>
      {valueView()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "green",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    minHeight: 150,
    backgroundColor: "gray",
    margin: "auto",
  },
  text: {
    marginTop: 8,
  },
  value_view: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
    gap: 10,
  },
  valueView_main: {
    fontSize: 15,
    fontWeight: "bold",
  },
  valueView_off: {
    fontSize: 12,
    textDecorationLine: "line-through",
  },
  discount_tag: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#E7FF86",
    padding: 5,
    borderRadius: 100,
    fontSize: 12,
  },
});
