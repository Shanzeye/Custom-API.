import { NextResponse } from "next/server";


interface Chefs {
    id: number;
    name: string;
    position: string;
    yearsOfExperience: number;
    specialty: string;
    description: string;
    currentlyActive: boolean;
    image: string;
}


// API DATA...

const chefs: Chefs[] = [
    {
    id: 0,
    name: "Tahmina Rumi",
    position: "Head Chef",
    yearsOfExperience: 12,
    specialty: "Italian Cuisine",
    image: "/images/c1.png",
    description: "Expert in crafting authentic Italian dishes and pastries.",
    currentlyActive: true,
    },

    {
    id: 1,
    name: "Jorina Begum",
    position: "Sous Chef",
    yearsOfExperience: 8,
    specialty: "Pastry and Desserts",
    image: "/images/c2.png",
    description: "Specializes in creative pastries and dessert innovations.",
    currentlyActive: true,
    },

    {
    id: 2,
    name: "M. Mohammad",
    position: "Grill Master",
    yearsOfExperience: 10,
    specialty: "Grill Dishes",
    image: "/images/c3.png",
    description: "Renowned for creating perfectly grilled meats and vegetables.",
    currentlyActive: true,
    },

    {
    id: 3,
    name: "Munna Kathy",
    position: "Culinary Instructor",
    yearsOfExperience: 15,
    specialty: "Asian Fusion",
    image: "/images/c4.png",
    description: "Pioneer in Asian fusion dishes blending traditional flavors with modern techniques.",
    currentlyActive: true,
    },
     
    {
    id: 4,
    name: "Bisnu Devgon",
    position: "Executive Chef",
    yearsOfExperience: 20,
    specialty: "Global Cuisine",
    image: "/images/c6.png",
    description: "Expert in international cuisines and menu planning.",
    currentlyActive: true,
    },

    {
    id: 5,
    name: "William Rumi",
    position: "Chef de Cuisine",
    yearsOfExperience: 18,
    specialty: "Seafood Specialties",
    image: "/images/c8.png",
    description: "Master of crafting exquisite seafood dishes with unique flavors.",
    currentlyActive: true,
    },

    {
        id: 6,
        name: "Motin Molladsf",
        position: "FastFood Chef",
        yearsOfExperience: 12,
        specialty: "Fastfood Specialties",
        description: "Master of crafting exquisite fastfood dishes with unique flavors.",
        currentlyActive: true,
        image: "/images/c7.png"
    },

    {
        id: 7,
        name: "Tahmina Rumi",
        position: "Desert Master",
        yearsOfExperience: 20,
        specialty: "Sweet Dish Chef",
        description: "Master in making a unique and international sweet dishes.",
        currentlyActive: true,
        image: "/images/cc7.png"
    },

    {
        id: 8,
        name: "Kets william roy",
        position: "Chiness Chef",
        yearsOfExperience: 9,
        specialty: "Master in chiness dishes",
        description: "Master in making all types of chiness foods.",
        currentlyActive: true,
        image: "/images/c9.png"
    },

    {
        id: 9,
        name: "Mahmud kholil",
        position: "Senior Chef",
        yearsOfExperience: 7,
        specialty: "Master in healthy foods.",
        description: "Specializes in making salads and vegetables.",
        currentlyActive: true,
        image: "/images/c10.png"
    },

    {
        id: 10,
        name: "Ataur Rahman",
        position: "Recipe Master",
        yearsOfExperience: 20,
        specialty: "create international & Amazing recipe.",
        description: "Specializes in making recipe for meat & seafood.",
        currentlyActive: true,
        image: "/images/c11.png"
    },

    {
        id: 11,
        name: "Monalisa holly",
        position: "Chef Of Drinks",
        yearsOfExperience: 20,
        specialty: "Creates all types of drinks & juices",
        description: "Makes all types of drinks , healthy juices & Shakes.",
        currentlyActive: false,
        image: "/images/c12.png"
    },

];





// GET REQUEST HANDLER.

export async function GET() {
    return NextResponse.json(chefs);
}
