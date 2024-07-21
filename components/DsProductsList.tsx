import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

import { fetchProducts } from "@/api/api";
import { ProductApiType } from "@/api/api.props";

import { DsCardProduct } from "./DsCardProduct";
import { DsText } from "./DsText";

export const DsProductsList = () => {
  const [products, setProducts] = useState<ProductApiType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <DsText>{error}</DsText>;
  }

  return (
    <View style={styles.list}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 40 }}
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <DsCardProduct
            name={item.name}
            price={item.price}
            category={item.category}
            discountValue={item.discountValue}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "blue",
  },
});
