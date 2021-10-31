import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Nandu",
      email: "admin@example.com",
      password: bcrypt.hashSync("12345", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("12345", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image:
        "https://raw.githubusercontent.com/basir/amazona/8cb98e7e872ded2248ca423f0a2bb8436c59a9a4/frontend/public/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Adidas Fit Shirt",
      category: "Shirts",
      image:
        "https://raw.githubusercontent.com/basir/amazona/8cb98e7e872ded2248ca423f0a2bb8436c59a9a4/frontend/public/images/p2.jpg",
      price: 100,
      countInStock: 20,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Lacoste Free Shirt",
      category: "Shirts",
      image:
        "https://raw.githubusercontent.com/basir/amazona/8cb98e7e872ded2248ca423f0a2bb8436c59a9a4/frontend/public/images/p3.jpg",
      price: 220,
      countInStock: 0,
      brand: "Lacoste",
      rating: 4.8,
      numReviews: 17,
      description: "high quality product",
    },
    {
      name: "Nike Slim Pant",
      category: "Pants",
      image:
        "https://raw.githubusercontent.com/basir/amazona/8cb98e7e872ded2248ca423f0a2bb8436c59a9a4/frontend/public/images/p4.jpg",
      price: 78,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      name: "Puma Slim Pant",
      category: "Pants",
      image:
        "https://raw.githubusercontent.com/basir/amazona/8cb98e7e872ded2248ca423f0a2bb8436c59a9a4/frontend/public/images/p5.jpg",
      price: 65,
      countInStock: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Adidas Fit Pant",
      category: "Pants",
      image:
        "https://raw.githubusercontent.com/basir/amazona/8cb98e7e872ded2248ca423f0a2bb8436c59a9a4/frontend/public/images/p6.jpg",
      price: 139,
      countInStock: 12,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 15,
      description: "high quality product",
    },
  ],
};
export default data;
