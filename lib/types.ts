export interface Query {
  id: string;
  name: string;
  email: string;
  mobile: string;
  location: string;
  message: string;
  source: string;
  createdAt: string;
}

export interface GetAllQueriesResponse {
  success: boolean;
  data: Query[];
}

export interface Banner {
  id: string;
  screen: "desktop" | "mobile";
  order: number;
  image?: { url: string; alt?: string | null } | null;
}

export interface Product {
  id: string;
  // slug: string;
  name: string;

  // Category hierarchy
  category: string; // e.g. "Fire Rated Doors"
  subCategory: string; // e.g. "Wooden" or "Steel"
  subSubCategory?: string; // e.g. "Laminate", "Veneer", "Paint Finish"

  // Media
  images: string[]; // Array of image slugs or URLs
  brochure?: string; // Link or slug to brochure file (PDF, etc.)

  // Description (flexible structure)
  description?: Array<
    | { type: "title"; content: string }
    | { type: "subtitle"; content: string }
    | { type: "paragraph"; content: string }
    | { type: "boldParagraph"; content: string }
    | { type: "list"; items: string[] }
  >;

  // Specifications (key-value structure under variants)
  specifications?: {
    variants: Array<{
      name: string; // e.g. "Laminate Finish", "Veneer Finish"
      specs: Record<string, string>; // e.g. { "Fire Rating": "2 Hours", "Core": "Solid Wood" }
    }>;
  };
}
