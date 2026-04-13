// src/types/index.ts
export interface NewsItem {
    id: number;
    date: string;
    title: string;
    excerpt: string;
    image: string;
}
export interface SchoolEvent {
    id: number;
    day: string;
    month: string;
    monthAr?: string;
    title: string;
    titleAr?: string;
    excerpt: string;    // Add this line
    excerptAr?: string;  // Add this line for the Arabic version
    time: string;
    location: string;
    locationAr?: string;
    fullDateRange: string;
    image: string;
}

export interface NewsArticle {
    id: number;
    image: string;
    title: string;
    titleAr?: string;
    excerpt: string;
    excerptAr?: string;
    date: string;
    dateAr?: string;
    categories: string[];
    categoriesAr?: string[];
    comments: string;
}