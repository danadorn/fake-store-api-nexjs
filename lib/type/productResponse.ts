export type ProductResponse = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: ["https://i.pinimg.com/736x/57/24/4c/57244c40c50cc9d9b51857f90b2266c5.jpg"];
};

export type ProductRequest = {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

export type Category = {
  id: number;
  name: string;
};