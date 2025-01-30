import { NextResponse } from "next/server";



interface Food {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  description: string;
  tags: string[];
  image: string;
  available: boolean;
  rating: number;
  quantity: number;
}

// API DATA.....

const foods: Food[] = [
    {
        id: 1111,
        name: "Fresh Lime",
        category: "Drink",
        price: 38.0,
        originalPrice: 45.0,
        description: "Refreshing fresh lime drink made with natural ingredients.",
        tags: ["Healthy", "Popular"],
        image: "/images/drink.png",
        available: true,
        rating: 4.5,
        quantity: 35,
    },

    {
        id: 2222,
        name: "Chocolate Muffin",
        category: "Dessert",
        price:  28.0,
        originalPrice: 30.0,
        description: "Soft and rich chocolate muffin topped with chocolate chips.",
        tags: ["Sell", "Sweet"],
        image: "/images/mufin.png",
        available: true,
        rating: 5,
        quantity: 56,
    },

    {
        id: 3333,
        name: "Burger",
        category: "Sandwich",
        price: 21.0,
        originalPrice: 45.0,
        description: "Juicy beef burger with fresh lettuce, tomatoes, and cheese.",
        tags: ["Popular"],
        image: "/images/burger.png",
        available: true,
        rating: 3.5,
        quantity: 67,
    },

    {
        id: 4444,
        name: "Country Burger",
        category: "Sandwich",
        price: 45.0,
        originalPrice: 50.0,
        description: "Classic country-style burger served with fries.",
        tags: ["Recommended"],
        image: "/images/country.png",
        available: true,
        rating: 5,
        quantity: 80,
    },

    {
        id: 5555,
        name: "Pizza",
        category: "Main Course",
        price: 43.0,
        originalPrice: 50.0,
        description: "Delicious vegetarian pizza topped with fresh vegetables and cheese.",
        tags: ["Cheesy", "Vegetarian"],
        image: "/images/pizza.png",
        available: false,
        rating: 5,
        quantity: 90,
    },

    {
        id: 6666,
        name: "Chicken Chup",
        category: "Appetizer",
        price: 12.0,
        originalPrice: 15.0,
        description: "Crispy fried chicken bites served with dipping sauce.",
        tags: ["Sell", "Crispy"],
        image: "/images/chup.png",
        available: true,
        rating: 5,
        quantity: 19,
    },
];



// GET REQUEST HANDLER.

export async function GET() {
    return NextResponse.json(foods);
}