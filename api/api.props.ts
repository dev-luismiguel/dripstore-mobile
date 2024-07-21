export type ProductApiType = {
  id: number;
  urlImg: string;
  listUrlImg: string[];
  name: string;
  department: string;
  price: number;
  assessment: number;
  discountValue: number;
  trending: boolean;
  brand: string;
  listOfSize: [];
  category: string;
  gender: string;
  state: string;
  description: string;
};

export type SalesResultType = {
  title: string;
  subtitle: string;
  description: string;
};
