import { Product } from "./types";

export const products: Product[] = [
  {
    id: "wooden-fire-rated-door",
    name: "Wooden Fire Rated Door",
    category: "Fire Rated Doors",
    subCategory: "Wooden",
    subSubCategory: "Laminate",
    images: ["/products/Wooden-Fire-Rated-Door.webp"],
    brochure: "/brochures/fire-door-wooden.pdf",
    description: [
      { type: "title", content: "Wooden Fire Rated Door (60 min)" },
      {
        type: "subtitle",
        content: "Detail Description of Door (Frame & Shutter)",
      },
      {
        type: "list",
        items: [
          "Frame manufactured out of Hardwood Mirandi / Teakwood of nominal section 120mm x 70mm",
          "52 mm shutter",
          "Hardwood internal timber framework",
          "Calcium silicate board",
          "Intumescent seal both in frame and shutter",
          "Shutter infill insulation – Wool insulation infill treated with VIPER FRS 881 LH",
          "Both side 3mm Commercial Ply, Commercial ply with Laminate, teak veneer as per client requirement",
        ],
      },
      { type: "title", content: "Wooden Fire Rated Door (120 min)" },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Frame manufactured out of Hardwood Mirandi / Teakwood of nominal section 120mm x 70mm",
          "Hardwood internal timber framework",
          "Calcium silicate board",
          "Shutter infill insulation – Wool insulation infill treated with VIPER FRS 881 LH",
          "Intumescent Seal Size – 20mm x 4mm – 1 Nos for frame",
          "Intumescent Seal Size – 20mm x 4mm – 1 No for door shutter",
          "Both side 3mm Commercial Ply, Commercial ply with Laminate, teak veneer as per client requirement",
        ],
      },
      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "1. Frame" },
      {
        type: "list",
        items: [
          "Hardwood: VIPER Fire Retardant Primer FR 880 with VIPER Finishing Paint FRS 881",
          "Teakwood: VIPER Fire Retardant Clear Polish FR881 Clear",
        ],
      },
      { type: "boldParagraph", content: "2. Door Shutter" },
      {
        type: "list",
        items: [
          "Painting with VIPER Fire Retardant Primer FR 880 with VIPER Finishing Paint FRS 881 – both sides",
          "One side laminate / veneer and one side painting with VIPER Fire Retardant Primer FR 880 with VIPER Finishing Paint FRS 881",
          "Both sides Laminate / Veneer",
        ],
      },
      { type: "boldParagraph", content: "Testing Evidence" },
      {
        type: "paragraph",
        content:
          "Our wooden fire doors are tested repeatedly and certified by CBRI-CSIR, NABL accredited test houses, Government Test House, IPIRTI Lab Bangalore, and NTH-Kolkata as per IS and BS standards.",
      },
    ],
    specifications: {
      variants: [
        {
          name: "Wooden Fire Rated Door (60 mins)",
          specs: {
            "Door Type": "Wooden Fire Rated Door",
            Criteria: "3 Criteria : Fully Insulated",
            Rating: "60 mins",
            "Shutter Thickness": "52mm",
            "Testing Standards": "BS 476 Part 20 - 22, IS 3614 Part 2",
            "Test Laboratory":
              "CBRI, Roorkee, India (NABL approved test house)",
          },
        },
        {
          name: "Wooden Fire Rated Door (120 mins)",
          specs: {
            "Door Type": "Wooden Fire Rated Door",
            Criteria: "3 Criteria : Fully Insulated",
            Rating: "120 mins",
            "Shutter Thickness": "52mm (normal)",
            "Testing Standards": "BS 476 Part 20 - 22, IS 3614 Part 2",
            "Test Laboratory":
              "CBRI, Roorkee, India (NABL approved test house)",
          },
        },
      ],
    },
  },
  {
    id: "steel-fire-rated-door",
    name: "Steel Fire Rated Door",
    category: "Fire Rated Doors",
    subCategory: "Steel",
    subSubCategory: "Veneer",
    images: ["/products/Steel-Fire-Rated-Door.webp"],
    brochure: "/brochures/fire-door-wooden.pdf",
    description: [
      { type: "title", content: "Steel Fire Rated Door (49mm)" },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NDRF 154 x 77",
          "Frame manufactured with 1.5mm Galvanised Steel",
          "Shutter Thickness – 49mm",
          "Shutter Honey Comb / Wool Insulation Infill treated with VIPER FRS 881 LH",
          "Shutter manufactured with 1.0mm Galvanised Steel",
          "Tested with Vision Panel for 120 minutes rating",
          "Note: Navair is having steel door 2300 x 2800mm high test evidence",
        ],
      },

      { type: "title", content: "Steel Fire Rated Door (46mm)" },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NSRF 100 x 57mm",
          "Frame manufactured with 1.2mm Galvanised Steel",
          "Shutter Thickness – 46mm",
          "Shutter Honey Comb / Wool Insulation Infill treated with VIPER FRS 881 LH",
          "Shutter manufactured with 0.8mm Galvanised Steel",
          "Tested with Vision Panel for 120 minutes Fire Rated",
          "Note: Navair is having a test evidence of door & size 2400 x 3000 mm high in double leaf & 1200 x 3000 mm high in single leaf",
        ],
      },

      {
        type: "title",
        content:
          "Steel Fire Rated Door (46mm) – With minimum 20 minutes insulation as per NBC 2016 Guidelines",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NSRF 100 x 57mm",
          "Frame manufactured with 1.2mm Galvanised Steel",
          "Frame having intumescent fire & smoke seal size 10 x 4 mm in perimeter of frame",
          "Shutter Thickness – 46mm",
          "Shutter Honey Comb / Treated Wool Insulation material",
          "Shutter manufactured with 0.8mm Galvanised Steel",
          "Tested with Vision Panel for 120 minutes Fire Rated",
          "Note: Navair is having a test evidence of door & size 1200 x 3000 mm – Single leaf & 2400 x 3000 mm high in double leaf from NABL affiliated test house, Spectro Analytical Lab",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: [
          "Powder Coating in desired RAL Shade Code",
          "Selective Wood Grain Finishes available",
        ],
      },
      { type: "boldParagraph", content: "Testing Evidence" },
      {
        type: "paragraph",
        content:
          "Our steel fire doors are tested repeatedly and certified by CBRI-CSIR, Roorkee, NABL accredited test house SPECTRO G.Noida, Government Test House, IPIRTI Lab Bangalore as per IS & BS code, and TBW (Thomas Bell Wright) Dubai as per BS standards.",
      },
    ],
    specifications: {
      variants: [
        {
          name: "Steel Fire Rated Door (49 mm) - Un-insulated",
          specs: {
            "Door Type": "Steel Fire Rated Door",
            Criteria: "Stability & Integrity with Infill Insulation Material",
            Rating: "120 mins",
            "Shutter Thickness": "49 mm",
            "Testing Standards": "BS 476 Part 20 - 22, IS 3614 Part 2",
            "Test Laboratory": "CBRI Roorkee, India",
          },
        },
        {
          name: "Steel Fire Rated Door (46 mm) - Un-insulated",
          specs: {
            "Door Type": "Steel Fire Rated Door",
            Criteria: "Stability & Integrity with Infill Insulation Material",
            Rating: "120 mins",
            "Shutter Thickness": "46 mm",
            "Testing Standards": "BS 476 Part 20 - 22, IS 3614 Part 2",
            "Test Laboratory":
              "CBRI Roorkee, NABL accredited Spectro Test House",
          },
        },
        {
          name: "Steel Fire Rated Door (46 mm) - With minimum 20 minutes insulation as per NBC 2016 Guidelines",
          specs: {
            "Door Type": "Steel Fire Rated Door",
            Criteria: "Stability & Integrity with Infill Insulation Material",
            Rating: "120 mins",
            "Shutter Thickness": "46 mm",
            "Testing Standards": "BS 476 Part 20 - 22, IS 3614 Part 2",
            "Test Laboratory":
              "CBRI Roorkee, NABL accredited Spectro Test House",
          },
        },
      ],
    },
  },
  {
    id: "wooden-fire-rated-cum-acoustic-door",
    name: "Wooden Fire Rated Cum Acoustic Door",
    category: "Fire Rated Doors",
    subCategory: "Wooden",
    subSubCategory: "Paint Finish",
    images: ["/products/Wooden-Fire-Rated-Cum-Acoustic-Door.webp"],
    brochure: "/brochures/fire-door-wooden.pdf",
    description: [
      { type: "title", content: "Wooden Fire Rated Cum Acoustic Door" },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Frame manufactured out of Hardwood Mirandi / Teakwood of nominal section 140mm x 90mm",
          "Hardwood internal timber framework",
          "Calcium silicate board",
          "Shutter infill insulation – Wool insulation infill treated with VIPER FRS 881 LH",
          "Intumescent Seal Size – 20mm x 4mm – 1 Nos for frame",
          "Intumescent Seal Size – 20mm x 4mm – 1 No for door shutter",
          "Both side 3mm Commercial Ply, Commercial ply with Laminate, teak veneer as per client requirement",
          "Acoustic seal provided to achieve required sound insulation properties",
        ],
      },
      { type: "subtitle", content: "Acoustic Performance Details" },
      {
        type: "paragraph",
        content:
          "To achieve acoustic performance, the air gap of the door is minimized to create a barrier that reduces sound wave transmission. Acoustic seals are provided around the door perimeter and drop-down seals at the shutter bottom. For double leaf doors, an astragal seal is used between shutters. Using standard grade seals, 30–35 dB sound reduction can be achieved. Recommended acoustic seal brands include REVEN, LORIENT, and Enviroseal. Additional seals may be used to enhance higher dB performance. These doors are ideal for applications such as multiplexes, auditoriums, and studios.",
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "1. Frame" },
      {
        type: "list",
        items: [
          "Hardwood: VIPER Fire Retardant Primer FR 880 with VIPER Finishing Paint FRS 881",
          "Teakwood: VIPER Fire Retardant Clear Polish FR881 Clear",
        ],
      },
      { type: "boldParagraph", content: "2. Door Shutter" },
      {
        type: "list",
        items: [
          "Painting with VIPER Fire Retardant Primer FR 880 with VIPER Finishing Paint FRS 881 – both sides",
          "One side laminate / veneer and one side painting with VIPER Fire Retardant Primer FR 880 with VIPER Finishing Paint FRS 881",
          "Both sides Laminate / Veneer",
        ],
      },

      { type: "boldParagraph", content: "Testing Criteria" },
      {
        type: "paragraph",
        content:
          "Acoustic performance is verified by measuring sound reduction (in dB) using a decibel meter across the door surface.",
      },
      { type: "boldParagraph", content: "Fire Testing Certification" },
      {
        type: "paragraph",
        content:
          "Fire testing laboratories do not conduct acoustic property testing for fire doors since fire testing is a destructive process. Navair provides copies of prior fire test evidence for wooden fire doors along with manufacturer’s test certificates (MTC) to ensure compliance with fire rating standards.",
      },
    ],
    specifications: {
      variants: [
        {
          name: "Fire Rated Cum Acoustic Door",
          specs: {
            Criteria: "3 Criteria: Fully Insulated",
            "Fire Rating": "Up to 120 minutes",
            "Acoustic Rating":
              "30–40 dB approximately (can be achieved by acoustic seal area)",
            "Shutter Thickness": "77mm (Normal)",
            "Testing Standards": "BS 476 Part 20–22, IS 3614 Part 2",
            "Test Laboratory": "CBRI Roorkee, India (for wooden fire design)",
          },
        },
      ],
    },
  },
  {
    id: "steel-single-glazed-fire-door",
    name: "Steel Glazed Fire Door",
    category: "Fire Rated Doors",
    subCategory: "Steel",
    subSubCategory: "Single Glazed",
    images: ["/products/Steel-Glazed-Fire-Door.webp"],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content:
          "Steel Fire Rated Glazed Door (NAVAIR – SLIM SECTION DESIGN – AS PER DSR 2018 REQUIREMENT)",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NSF6070",
          "Frame manufactured with 1.6mm Galvanised Steel",
          "Shutter Thickness – 60mm",
          "Shutter infill insulation – Mineral wool infill treated with VIPER FRS 881 LH",
          "Shutter manufactured with 1.6mm Galvanised Steel",
          "Tested with fully glazed panel for 120 minutes rating with FR GLASS of Saint-Gobain make (11mm thick – Contraflam DoorLite & 14mm thick – Contraflam Lite), nationally & internationally",
          "Tested with top & side light panels for 120 minutes rating with fire-rated glass of Saint-Gobain make",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: ["Powder Coating in desired RAL Shade Code"],
      },

      // SECOND DESIGN
      {
        type: "title",
        content: "Steel Fire Rated Glazed Door (NAVAIR – REGULAR DESIGN)",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NDRF 143 x 57",
          "Frame manufactured with 1.6mm Galvanised Steel",
          "Shutter Thickness – 46mm",
          "Shutter infill insulation – Wool insulation infill treated with VIPER FRS 881 LH",
          "Shutter manufactured with 1.2mm Galvanised Steel",
          "Tested with fully glazed panel for 120 minutes rating with FR GLASS of Saint-Gobain make (11mm thick – Contraflam DoorLite & 14mm thick – Contraflam Lite) nationally at CBRI, Roorkee",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: ["Powder Coating in desired RAL Shade Code"],
      },

      // THIRD DESIGN
      {
        type: "title",
        content:
          "Steel Fire Rated Glazed Door (NAVAIR – REGULAR DESIGN FOR 60 MIN – AS PER DSR 2018 REQUIREMENT)",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NDRF 143 x 58",
          "Frame manufactured with 1.6mm Galvanised Steel",
          "Shutter Thickness – 50mm",
          "Shutter infill insulation – Wool insulation infill treated with VIPER FRS 881 LH",
          "Shutter manufactured with 1.6mm Galvanised Steel",
          "Tested with fully glazed panel for 120 minutes rating with FR GLASS of Saint-Gobain make (6mm thick – Pyroswiss E60) at International and Government test houses",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: ["Powder Coating in desired RAL Shade Code"],
      },
    ],
    specifications: {
      variants: [
        {
          name: "Steel Glazed Fire Door (As per DSR 2018 requirement)",
          specs: {
            "Door Type": "Steel Glazed Fire Door",
            Criteria:
              "Stability, Integrity with 20 min insulation properties and 120 minutes radiation control properties as per NBC Guideline NBC 2016",
            Rating: "120 mins",
            "Shutter Thickness": "60mm",
            "Testing Standards": "BS 476 Part 20–22, IS 3614 Part 2–1992",
            "Test Laboratory":
              "Certifire, Exova Warrington Fire Research Laboratory (United Kingdom), NABL Accredited Test House – SPECTRO Analytical Lab, Greater Noida",
          },
        },
        {
          name: "Steel Fire Rated Glazed Door (120 mins) – (As per DSR 2018 requirement)",
          specs: {
            "Door Type":
              "Steel Fire Rated Glazed Door tested with 11mm thick FR Glass of Saint-Gobain make",
            Criteria: "Stability & Integrity",
            Rating: "120 mins",
            "Shutter Thickness": "46mm",
            "Testing Standards": "BS 476 Part 20–22, IS 3614 Part 2",
            "Test Laboratory": "CBRI Roorkee, India",
          },
        },
        {
          name: "Steel Fire Rated Glazed Door (60 mins)",
          specs: {
            "Door Type":
              "Steel Fire Rated Glazed Door tested with 6mm thick single layered Fire Rated Toughened FR Glass PYROSWISS E60 of Saint-Gobain make",
            Criteria: "Stability & Integrity",
            Rating: "60 mins",
            "Shutter Thickness": "50mm",
            "Testing Standards": "BS 476 Part 20–22, IS 3614 Part 2–1992",
            "Test Laboratory":
              "Thomas Bell-Wright (Dubai), Government Test House",
          },
        },
      ],
    },
  },
  {
    id: "ul-fire-door",
    name: "UL Fire Door",
    category: "Fire Rated Doors",
    subCategory: "Steel",
    subSubCategory: "Veneer",
    images: ["/products/UL-Fire-Door.webp"],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content: "UL LISTED – 120 MINUTES FIRE RATED",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Frame manufactured with 1.6mm Galvanised Steel",
          "Door Leaf Thickness – 45 mm – 49 mm",
          "Door leaf Infill insulation – Wool insulation Infill treated",
          "Door leaf manufactured with 1.2 mm Galvanised Steel",
          "Tested with 5 mm thick UL Listed Keralite FR glass of Saint-Gobain make",
        ],
      },
      {
        type: "subtitle",
        content: "Tested sizes of doors",
      },
      {
        type: "list",
        items: [
          "DOUBLE LEAF – 2000X2400mm with Frame of Section 154x77mm – DOUBLE REBATED TYPE",
          "SINGLE LEAF – 1300X2500mm with Frame of Section 150x67mm – DOUBLE REBATED TYPE",
        ],
      },
      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame and Door Leaf" },
      {
        type: "list",
        items: [
          "Powder Coating in desired RAL Shade Code",
          "Selective Wood Grain Finishes available",
        ],
      },
      {
        type: "title",
        content: "FIRE DOOR STANDARDS BRIEF EXPLANATION (AMERICAN STANDARD)",
      },
      {
        type: "list",
        items: [
          "NFPA 80-1999, NFPA 252-1995, UL 10B, UL10C, UBC 7-2 and IBC 2000.",
          "A fire door must have a label attached indicating the fire test rating.",
          "Doors are rated for 3/4th of the rating of the surrounding wall.",
          "Every UL fire door must have a label.",
          "A fire door MUST be self-closing.",
          "SS ball bearing hinges must be used.",
          "Only UL listed/tested fire door hardware shall be used.",
          "A fire door with glass opening must be provided with a listed/tested glass, steel frame and glazing bead.",
          "As per UL 10B, UL10C at TBW DUBAI",
        ],
      },
    ],
    specifications: {
      variants: [
        {
          name: "Steel Fire Rated Door (UL LISTED)",
          specs: {
            "Door Type": "Steel Fire Rated Door tested for 120 minutes",
            Criteria: "Stability & Integrity",
            Rating: "120 mins",
            "Shutter Thickness": "45 mm - 49 mm",
            "Testing Standards": "UL 10B, UL 10C (Positive Pressure)",
            "Test Laboratory": "Underwriters Lab at TBW, Dubai",
          },
        },
      ],
    },
  },
  {
    id: "automatic-steel-fire-and-swing-door-paint-finish",
    name: "Automatic Steel Fire And Swing Door",
    category: "Fire Rated Doors",
    subCategory: "Steel",
    subSubCategory: "Paint Finish",
    images: ["/products/Automatic-Steel-Fire-And-Swing-Door.webp"],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content:
          "Steel Fire Rated Glazed Door (NAVAIR – SLIM SECTION DESIGN – AS PER DSR 2018 REQUIREMENT)",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NSF6070",
          "Frame manufactured with 1.6mm Galvanised Steel",
          "Shutter Thickness – 60mm",
          "Shutter infill insulation – Mineral wool infill treated with VIPER FRS 881 LH",
          "Shutter manufactured with 1.6mm Galvanised Steel",
          "Tested with fully glazed panel for 120 minutes rating with FR GLASS of Saint-Gobain make (11mm thick – Contraflam DoorLite & 14mm thick – Contraflam Lite) nationally & internationally",
          "Tested with top & side light panels for 120 minutes rating with fire-rated glass of Saint-Gobain make",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: ["Powder Coating in desired RAL Shade Code"],
      },

      // SECOND DESIGN
      {
        type: "title",
        content: "Steel Fire Rated Glazed Door (NAVAIR – REGULAR DESIGN)",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NDRF 143 x 57",
          "Frame manufactured with 1.6mm Galvanised Steel",
          "Shutter Thickness – 46mm",
          "Shutter infill insulation – Wool insulation infill treated with VIPER FRS 881 LH",
          "Shutter manufactured with 1.2mm Galvanised Steel",
          "Tested with fully glazed panel for 120 minutes rating with FR GLASS of Saint-Gobain make (11mm thick – Contraflam DoorLite & 14mm thick – Contraflam Lite) nationally at CBRI, Roorkee",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: ["Powder Coating in desired RAL Shade Code"],
      },

      // THIRD DESIGN
      {
        type: "title",
        content:
          "Steel Fire Rated Glazed Door (NAVAIR – REGULAR DESIGN FOR 60 MIN – AS PER DSR 2018 REQUIREMENT)",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NDRF 143 x 58",
          "Frame manufactured with 1.6mm Galvanised Steel",
          "Shutter Thickness – 50mm",
          "Shutter infill insulation – Wool insulation infill treated with VIPER FRS 881 LH",
          "Shutter manufactured with 1.6mm Galvanised Steel",
          "Tested with fully glazed panel for 120 minutes rating with FR GLASS of Saint-Gobain make (6mm thick – Pyroswiss E60) at international and government test houses",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: ["Powder Coating in desired RAL Shade Code"],
      },
    ],
    specifications: {
      variants: [
        {
          name: "Steel Glazed Fire Door (As per DSR 2018 requirement)",
          specs: {
            "Door Type": "Steel Glazed Fire Door",
            Criteria:
              "Stability, Integrity with 20 min insulation properties and 120 minutes radiation control properties as per NBC Guideline NBC 2016",
            Rating: "120 mins",
            "Shutter Thickness": "60mm",
            "Testing Standards": "BS 476 Part 20–22, IS 3614 Part 2–1992",
            "Test Laboratory":
              "Certifire, Exova Warrington Fire Research Laboratory (United Kingdom), NABL Accredited Test House – SPECTRO Analytical Lab, Greater Noida",
          },
        },
        {
          name: "Steel Fire Rated Glazed Door (120 mins) – (As per DSR 2018 requirement)",
          specs: {
            "Door Type":
              "Steel Fire Rated Glazed Door tested with 11mm thick FR Glass of Saint-Gobain make",
            Criteria: "Stability & Integrity",
            Rating: "120 mins",
            "Shutter Thickness": "46mm",
            "Testing Standards": "BS 476 Part 20–22, IS 3614 Part 2",
            "Test Laboratory": "CBRI Roorkee, India",
          },
        },
      ],
    },
  },
  {
    id: "wooden-lead-lined-door",
    name: "Wooden Lead Lined Door",
    category: "Fire Rated Doors",
    subCategory: "Wooden",
    subSubCategory: "Laminate",
    images: ["/products/Wooden-Lead-Lined-Door.webp"],
    brochure: "/brochures/fire-door-wooden.pdf",
    description: [
      {
        type: "title",
        content: "Wooden Lead Lined Door",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Frame manufactured out of Hardwood Mirandi / Teakwood of nominal section 120mm x 70mm with 2mm sandwiched lead sheet",
          "2mm (±1%) lead sheet with 99% purity",
          "Total door shutter thickness with commercial ply on both sides & board will have 43mm thickness (with additional laminate shutter thickness will be 45mm)",
          "Vision panel, if required, shall be of lead glass only",
        ],
      },

      { type: "title", content: "Recommended Hardware" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: [
          "Stainless steel ball bearing hinges – size 100 x 89 x 3mm",
          "Door closer – heavy duty only for 80 kg weight capacity",
          "Door coordinator recommended",
          "Exposed tower bolt",
          "Mortise sash lock with half cylinder, escutcheon, lever handle – complete set for push/pull operation",
          "Mortise dead lock set with half cylinder and escutcheon – complete set with D-shape pull handle (pull side) & push plate SS 304 grade (push side)",
        ],
      },

      { type: "title", content: "Optional Hardware" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: [
          "Automatic drop-down door bottom (non-mortised / surface mounted)",
          "Optional lead lined door sill to cover the gap between finished floor and door shutter",
          "Lead lined architrave to be used if required",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame" },
      {
        type: "list",
        items: ["Primer and paint finish", "Teakwood: Polish finish"],
      },
      { type: "boldParagraph", content: "Door Shutter" },
      {
        type: "list",
        items: ["One side laminate / veneer", "Both sides laminate / veneer"],
      },

      {
        type: "paragraph",
        content:
          "*NOTE: Due to continuous upgradation, specifications may vary from time to time as per consultation with the end user.",
      },
    ],
    specifications: {
      variants: [
        {
          name: "Wooden Lead Lined Door",
          specs: {
            "Door Type": "Wooden Lead Lined Door",
            Criteria: "Nuclear / Radiation Protected",
            Rating: "90% Blockage of Radiation",
            "Shutter Thickness": "43 mm to 45 mm",
            "Testing Standards": "AERB / DRS",
            Application: "Radiology & Nuclear Medicine",
          },
        },
      ],
    },
  },
  {
    id: "steel-lead-lined-door-steel",
    name: "Steel Lead Lined Door",
    category: "Fire Rated Doors",
    subCategory: "Steel",
    subSubCategory: "Paint Finish",
    images: ["/products/Steel-Lead-Lined-Door.webp"],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content: "Steel Lead Lined Door",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame profile design – NSL 100 x 50",
          "Frame manufactured with 1.2mm galvanised steel",
          "Shutter thickness – 44mm",
          "Shutter infill – honeycomb/mineral wool including 2mm lead sheet",
          "Shutter manufactured with 1mm galvanised steel",
          "Single glazed lead glass as per requirement of size 200mm x 300mm (6mm ±2mm)",
        ],
      },

      { type: "title", content: "Recommended Hardware" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: [
          "Stainless steel ball bearing hinges – SUS 304 of size 100mm x 75mm x 3mm",
          "Door closer – heavy duty for 80kg weight capacity",
          "Mortise dead lock set with half cylinder and escutcheon – complete set with D-shape pull handle for push plate operation",
          "Mortise sash lock with half cylinder, escutcheon, lever handle – complete set for push/pull operation",
        ],
      },

      { type: "title", content: "Optional Hardware" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: [
          "Door coordinator",
          "Concealed flush bolt",
          "Automatic drop-down door bottom",
          "Optional lead lined door sill to cover the gap between finished floor and door shutter",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      {
        type: "list",
        items: [
          "Primer and paint finish",
          "SS304 matt / glossy finish on demand",
        ],
      },
    ],
    specifications: {
      variants: [
        {
          name: "Steel Lead Lined Door",
          specs: {
            "Door Type": "Steel Lead Lined Door",
            Criteria: "Nuclear / Radiation Protected",
            Rating: "90% Blockage of Radiation",
            "Shutter Thickness": "44 mm",
            "Testing Standards": "AERB / DRS",
            Application: "Radiology & Nuclear Medicine",
          },
        },
      ],
    },
  },
  {
    id: "residential-flush-door",
    name: "Residential Flush Door",
    category: "Fire Rated Doors",
    subCategory: "Wooden",
    subSubCategory: "Veneer",
    images: ["/products/Residential-Flush-Door.webp"],
    brochure: "/brochures/fire-door-wooden.pdf",
    description: [],
    specifications: {
      variants: [],
    },
  },
  {
    id: "hollow-metal-press-steel-door-laminate",
    name: "Hollow Metal Press Steel Door",
    category: "Fire Rated Doors",
    subCategory: "Steel",
    subSubCategory: "Laminate",
    images: [
      "/products/Steel-Fire-Rated-Door.webp",
      "/products/Steel-Glazed-Fire-Door.webp",
    ],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content: "Hollow Metal Press Steel Door",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame profile design as per CPWD profile (A/B/C/D/E)",
          "Frame manufactured with 1.2mm or 1.6mm thick galvanised steel",
          "Shutter thickness – 46mm",
          "Shutter infill – honeycomb or mineral wool infill insulation",
          "Shutter manufactured with 0.8mm to 1.0mm galvanised steel",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      {
        type: "list",
        items: ["Powder coating in desired RAL shade code"],
      },
    ],
    specifications: {
      variants: [
        {
          name: "Hollow Metal Press Steel Door",
          specs: {
            Rating: "Non Fire Rated",
            "Shutter Thickness": "46mm",
            "Testing Standards": "NIL",
            "Test Laboratory": "Not Applicable",
          },
        },
      ],
    },
  },
  {
    id: "modular-cleanroom-partitions",
    name: "Modular Cleanroom Partitions",
    category: "Panels & Partitions",
    subCategory: "",
    subSubCategory: "Cleanroom Partitions",
    images: ["/products/Modular-Cleanroom-Partitions.jpeg"],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content: "Modular Cleanroom Partitions",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "GMP modular partitions are used in cleanrooms worldwide for applications ranging from API manufacturing to sterile manufacturing units.",
          "Adaptable to meet the requirements of all cleanroom classifications as per latest GMP guidelines.",
          "Complete range of partition walls and ceiling systems available (walkable and non-walkable types).",
          "Panels resistant to abrasion, chemicals, fumigation reagents, steam, water, artificial and UV light.",
          "Panels are non-combustible, non-shedding, water and fire retardant.",
          "Panels have good impact resistance and emit no particles.",
          "Surface balance provides appropriate hardness and flexibility.",
          "Manufactured with metal frames on the periphery and installed using interconnecting metal profiles.",
        ],
      },
      { type: "title", content: "Material of Construction" },
      {
        type: "list",
        items: [
          "Powder Coated GI (PCGI)",
          "Pre Painted GI (PPGI)",
          "Stainless Steel (SS-304)",
          "Glass Reinforced (GRP)",
        ],
      },
      { type: "title", content: "Insulation Options" },
      {
        type: "list",
        items: [
          "Poly Urethane Foam (PUF)",
          "Polyisocyanurate (PIR)",
          "Mineral Wool (Rockwool)",
          "Papercore Honeycomb",
        ],
      },
    ],
    specifications: {
      variants: [],
    },
  },
  {
    id: "lab-furniture",
    name: "Lab Furniture",
    category: "Panels & Partitions",
    subCategory: "",
    subSubCategory: "Lab Furniture",
    images: ["/products/Lab-Furniture.jpeg"],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content: "Lab Furniture",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "We at GMP offers Customer Single window Solutions for all their facility needs. An important component in setting up a Laboratory in Clean room industry is Modular Laboratory Furniture and Equipment’s.",
          "At GMP we manufacture at our facility Metal Laboratory furniture’s in various modules and combination, following best of industry practices and incorporating field experience to setup a modern laboratory.",
          "Our products are customised to suit customer requirements and available spaces to give a most optimum utilization of area.",
          "We specialize in setting up Laboratory for Quality control labs, Testing labs, R&D labs, Microbiological Labs, Instrumentation Labs, Sampling labs to name a few.",
        ],
      },
      { type: "title", content: "GMP Follows Standards" },
      {
        type: "list",
        items: [
          "Constantly raising our standards, GMP Technical Solutions follows Standards of ASHRAE-110 & SEFA 8 in creating humane, safe, and effective laboratory environments.",
          "By joining other industry leaders, we hope to further improve our world-class products and services to better serve our clients.",
        ],
      },
      { type: "title", content: "GMP Free Planning Design" },
      { type: "subtitle", content: "We Make It Easy" },
      {
        type: "list",
        items: [
          "GMP not only builds “the professional’s bench“, our planning and design team can develop a comprehensive furniture system for your entire work environment.",
          "GMP engineers can help you design the optimum layout for your specific needs whether it's a simple corner test bench or a sophisticated layout for an entire laboratory setup.",
          "Or if you have the design ready, reach us to get a quote.",
        ],
      },
    ],
    specifications: {
      variants: [],
    },
  },
  {
    id: "flooring",
    name: "Flooring",
    category: "Panels & Partitions",
    subCategory: "",
    subSubCategory: "Flooring",
    images: ["/products/Flooring.jpeg"],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content: "Pharmaceutical Flooring Solutions",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "GMP Technical Solutions develops bonding, sealing, damping and reinforcing solutions for the Pharmaceutical & related industries, for manufacturing, Packing & Stores.",
          "Epoxy flooring is a very critical application in any Pharmaceutical industry. Classification of the Cleanrooms and cleanliness is also based on flooring and cleanliness.",
          "GMP Technical provides different types of epoxy flooring for different applications, like for Stores, manufacturing areas, Corridors, Packing halls & Quality control.",
          "The skilled technicians and world class material is our strength, using ecofriendly material for epoxy application and a wide range, from standard coating to self levelers & very high chemical resistant antistatic floors to suit every production pattern.",
          "GMP Technical has excellent physical and human infrastructure in place to cater to the diverse needs of clients efficiently.",
          "Together with our best known manufacturers in the industry, we provide the best products in the market. Our logistics are foolproof and can take up every job on priority.",
          "Backed by a team of excellent engineers, supervisors, experienced quality controllers and workers, we ensure the best quality flooring is delivered in the given time frame to clients.",
          "We also use a wide range of Urethane floor coatings, self levelers & screeds with very high chemical resistance and thermal stability for very tough industrial environments, highly sustainable for wet process areas.",
        ],
      },
    ],
    specifications: {
      variants: [],
    },
  },
  {
    id: "cleanroom-wquipment",
    name: "Cleanroom Equipment",
    category: "Panels & Partitions",
    subCategory: "",
    subSubCategory: "Cleanroom Equipment",
    images: ["/products/Cleanroom-Equipment.png"],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content: "Cleanroom Equipment",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Cleanroom equipment is of utmost importance for its intended use in any cleanroom facility.",
          "All the equipment comes with a factory tested certificate and required documentation.",
          "All GMP products are manufactured under one roof and subsequently all metal finishes and assembly are completed in-house.",
          "As a result, specific requirements of clients can be incorporated into a proposed design.",
        ],
      },
    ],
    specifications: {
      variants: [],
    },
  },
  {
    id: "building-management-system",
    name: "Building Management System",
    category: "Panels & Partitions",
    subCategory: "",
    subSubCategory: "Building Management System",
    images: ["/products/Building-Management-System.jpg"],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content: "Building Management System",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "GMP is a complete solution provider for all types of Building Management Systems (BMS) on a turnkey basis or as per your requirement.",
          "A BMS, otherwise known as a building automation system (BAS), is a computer-based control system installed in buildings that controls and monitors mechanical and electrical equipment such as ventilation, lighting, power systems, fire systems, and security systems.",
          "Modern buildings require an effective and reliable management system to ensure safety, comfort, and efficient maintenance and optimization of resources.",
          "GMP can integrate, install, and maintain building management systems, providing life cycle support for facilities to enhance comfort, safety, and security for occupants.",
          "We offer a scalable range of building management and intelligent building solutions—from individual subsystems to fully integrated intelligent buildings—that reduce risk while improving operational and energy efficiency.",
        ],
      },
      { type: "title", content: "Specialist Integrations" },
      {
        type: "list",
        items: [
          "Lighting",
          "Heating, ventilation and air conditioning (HVAC)",
          "Fire, smoke detection and alarms",
          "Motion detectors, CCTV, security and access control",
          "ICT systems",
          "Lifts",
          "Industrial processes or equipment",
          "Shading devices",
          "Smart meters",
        ],
      },
      { type: "title", content: "BMS Benefits" },
      {
        type: "list",
        items: [
          "Provide better control of systems and conditions",
          "Gather data and generate reports",
          "Increase productivity",
          "Enable better informed response to complaints",
          "Allow allocation of operating costs within a business or to tenants",
          "Targeted use of resources for replacement and maintenance of equipment",
          "Early detection of issues",
          "Reduced operating costs and carbon emissions",
          "Improved equipment life",
          "Enhanced safety",
        ],
      },
    ],
    specifications: {
      variants: [],
    },
  },
  {
    id: "qualification-and-validations",
    name: "Qualification And Validations",
    category: "Panels & Partitions",
    subCategory: "",
    subSubCategory: "Qualification And Validations",
    images: ["/products/Qualification-And-Validations.jpg"],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content: "Qualification & Validations",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "GMP establishes a Commissioning and Qualification plan based on Risk Analysis to classify systems and components depending on their impact on final product quality.",
          "We have specially trained in-house professionals to perform demanding commissioning tasks and particle/classification measurements within the field of cleanroom technology.",
          "Our service portfolio includes Calibration Services, Clean Room Qualification, Compressed Air Validation, HVAC Validation, PLC Validation, and Temperature Mapping Studies & BMS Instruments.",
          "We are the sole service provider in India for Stage Mensuration of Anderson Cascade Impactor and NGI (Next Generation Impactor).",
          "We offer 'Total Compliance Solutions' under Turnkey Solutions, providing clients support from Concept to Commissioning and Validation under a single umbrella.",
          "Our services cater to Pharmaceuticals, API, Sterile Plants, Automotive Industries, Clinical Research, R&D, Quality Control laboratories, Hospitals, Beverages, and Aerospace industries in India.",
          "All services comply with USFDA, EUGMP, WHO, MHRA guidelines and GAMP 5 standards.",
          "QA Tech, an in-house subsidiary of GMP Technical Solutions Pvt. Ltd, is ISO 9001:2015 certified and NABL accredited, established in 2003, providing prompt, reliable, and economical Calibration, Validation, and Mensuration Services.",
          "We maintain a professional approach in compliance with national/international standards and continuously upgrade personnel skills through training.",
          "Our division has more than 200 highly skilled employees aiming to provide best-in-class calibration and validation services at competitive prices and on-time delivery.",
          "Currently, we operate NABL Accredited calibration labs in Mumbai and Goa, India, ISO 9001:2015 certified, and follow professional practices aligned with ISO/IEC 17025:2017 for continual improvement.",
        ],
      },
      { type: "title", content: "Services Offered" },
      {
        type: "list",
        items: [
          "Instruments Calibration",
          "HVAC Cleanroom Validation & Qualifications",
          "Isolator Validation",
          "Compressed Air / Breathing Air / Nitrogen / Oxygen Gas Validation",
          "Validation / Purity Measurement",
          "Process (Thermal) Validation",
          "Temperature – RH Monitoring Studies",
          "Cold Chain Mapping",
          "Mensuration Activities",
          "PLC / CSV Validation",
          "Steam Quality Test (Proposed)",
          "TSI Make Non-Viable Particle Counter Calibration",
          "Validation and Calibration services across Pharmaceutical, Hospitals, Chemical, Food, and Teaching Institutes.",
        ],
      },
    ],
    specifications: {
      variants: [],
    },
  },
  {
    id: "office-partitions",
    name: "Office Partitions",
    category: "Panels & Partitions",
    subCategory: "",
    subSubCategory: "Office Partitions",
    images: ["/products/Office-Partitions.jpg"],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content: "Office Partitions",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "GMP specializes in the supply and installation of office partitions that are fully re-locatable and demountable mono-block systems.",
          "Flexible solutions are offered to meet all client requirements with numerous design options.",
          "GMP provides two ranges of office partitions: Octa-P (Double Glazed Office Partitions) and Hexa-P (Single Glazed Office Partitions).",
          "The demountable office partition systems are suitable for all types of office applications and offer a diverse range of panel options.",
          "Panel options include solid, mid, half, and full height single glazed, as well as mid, half, and full height double glazed with integral venetian blinds.",
          "Various aesthetic formats can be achieved using standard details, alternative jointing methods, finishes, skirting, and head details.",
        ],
      },
    ],
    specifications: {
      variants: [],
    },
  },
  {
    id: "utilities-and-piping",
    name: "Utilities & Piping",
    category: "Panels & Partitions",
    subCategory: "",
    subSubCategory: "Utilities & Piping",
    images: ["/products/Utilities-And-Piping.jpg"],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content: "Utilities & Piping",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "GMP understands the stringent compliance requirements of cleanroom industries.",
          "Industrial utilities are a core component of any facility and must be designed and delivered according to international standards.",
          "GMP has extensive experience in over 700 projects globally, helping clients set up optimized utility systems as per national and international guidelines.",
          "We undertake utilities work from concept to commissioning, including URS, system design, procurement of equipment, installation, testing, commissioning, and validations.",
          "GMP analyzes client requirements and designs/selects the right system accordingly.",
          "The following industrial utilities are designed and executed by GMP:",
        ],
      },
      { type: "title", content: "Industrial Utilities Offered" },
      {
        type: "list",
        items: [
          "Compressed Air System",
          "Industrial Steam Generation and Distribution System",
          "Purified Water System",
          "WFI (Water for Injection) System",
          "Vacuum System",
          "Hydro-pneumatic System",
        ],
      },
    ],
    specifications: {
      variants: [],
    },
  },
  {
    id: "steel-rockwool-door",
    name: "Steel Rockwool Door",
    category: "Fire Rated Doors",
    subCategory: "Steel",
    subSubCategory: "Rockwool",
    images: ["/products/Rockwool-Door.jpg"],
    brochure: "/brochures/Rockwool-Door.pdf",
    description: [
      {
        type: "title",
        content: "Steel Rockwool Door",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "paragraph",
        content:
          "Fire doors can be provided with rockwool or honeycomb inflill as per customer specification. Fire rating of upto 120 mins can be provided along with the certificates from CBRI.",
      },
      {
        type: "list",
        items: [
          "Door size in single leaf- max W*H of 1200mm*2400mm",
          "Door size in double leaf- max W*H of 2400MM*2400mm",
        ],
      },
      {
        type: "paragraph",
        content:
          "Hardware and accessories options given here are only indicative and can be customised as per project requirement.",
      },
    ],
    specifications: {
      variants: [],
    },
  },
  {
    id: "hollow-metal-press-steel-door-honeycomb",
    name: "Hollow Metal Press Steel Door",
    category: "Fire Rated Doors",
    subCategory: "Steel",
    subSubCategory: "Honeycomb",
    images: [
      "/products/Steel-Fire-Rated-Door.webp",
      "/products/Steel-Glazed-Fire-Door.webp",
    ],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content: "Hollow Metal Press Steel Door",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame profile design as per CPWD profile (A/B/C/D/E)",
          "Frame manufactured with 1.2mm or 1.6mm thick galvanised steel",
          "Shutter thickness – 46mm",
          "Shutter infill – honeycomb or mineral wool infill insulation",
          "Shutter manufactured with 0.8mm to 1.0mm galvanised steel",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      {
        type: "list",
        items: ["Powder coating in desired RAL shade code"],
      },
    ],
    specifications: {
      variants: [
        {
          name: "Hollow Metal Press Steel Door",
          specs: {
            Rating: "Non Fire Rated",
            "Shutter Thickness": "46mm",
            "Testing Standards": "NIL",
            "Test Laboratory": "Not Applicable",
          },
        },
      ],
    },
  },
  {
    id: "steel-lead-lined-door-honeycomb",
    name: "Steel Lead Lined Door",
    category: "Fire Rated Doors",
    subCategory: "Steel",
    subSubCategory: "Honeycomb",
    images: ["/products/Steel-Lead-Lined-Door.webp"],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content: "Steel Lead Lined Door",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame profile design – NSL 100 x 50",
          "Frame manufactured with 1.2mm galvanised steel",
          "Shutter thickness – 44mm",
          "Shutter infill – honeycomb/mineral wool including 2mm lead sheet",
          "Shutter manufactured with 1mm galvanised steel",
          "Single glazed lead glass as per requirement of size 200mm x 300mm (6mm ±2mm)",
        ],
      },

      { type: "title", content: "Recommended Hardware" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: [
          "Stainless steel ball bearing hinges – SUS 304 of size 100mm x 75mm x 3mm",
          "Door closer – heavy duty for 80kg weight capacity",
          "Mortise dead lock set with half cylinder and escutcheon – complete set with D-shape pull handle for push plate operation",
          "Mortise sash lock with half cylinder, escutcheon, lever handle – complete set for push/pull operation",
        ],
      },

      { type: "title", content: "Optional Hardware" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: [
          "Door coordinator",
          "Concealed flush bolt",
          "Automatic drop-down door bottom",
          "Optional lead lined door sill to cover the gap between finished floor and door shutter",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      {
        type: "list",
        items: [
          "Primer and paint finish",
          "SS304 matt / glossy finish on demand",
        ],
      },
    ],
    specifications: {
      variants: [
        {
          name: "Steel Lead Lined Door",
          specs: {
            "Door Type": "Steel Lead Lined Door",
            Criteria: "Nuclear / Radiation Protected",
            Rating: "90% Blockage of Radiation",
            "Shutter Thickness": "44 mm",
            "Testing Standards": "AERB / DRS",
            Application: "Radiology & Nuclear Medicine",
          },
        },
      ],
    },
  },
  {
    id: "steel-double-glazed-fire-door",
    name: "Steel Glazed Fire Door",
    category: "Fire Rated Doors",
    subCategory: "Steel",
    subSubCategory: "Double Glazed",
    images: ["/products/Steel-Glazed-Fire-Door.webp"],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content:
          "Steel Fire Rated Glazed Door (NAVAIR – SLIM SECTION DESIGN – AS PER DSR 2018 REQUIREMENT)",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NSF6070",
          "Frame manufactured with 1.6mm Galvanised Steel",
          "Shutter Thickness – 60mm",
          "Shutter infill insulation – Mineral wool infill treated with VIPER FRS 881 LH",
          "Shutter manufactured with 1.6mm Galvanised Steel",
          "Tested with fully glazed panel for 120 minutes rating with FR GLASS of Saint-Gobain make (11mm thick – Contraflam DoorLite & 14mm thick – Contraflam Lite), nationally & internationally",
          "Tested with top & side light panels for 120 minutes rating with fire-rated glass of Saint-Gobain make",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: ["Powder Coating in desired RAL Shade Code"],
      },

      // SECOND DESIGN
      {
        type: "title",
        content: "Steel Fire Rated Glazed Door (NAVAIR – REGULAR DESIGN)",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NDRF 143 x 57",
          "Frame manufactured with 1.6mm Galvanised Steel",
          "Shutter Thickness – 46mm",
          "Shutter infill insulation – Wool insulation infill treated with VIPER FRS 881 LH",
          "Shutter manufactured with 1.2mm Galvanised Steel",
          "Tested with fully glazed panel for 120 minutes rating with FR GLASS of Saint-Gobain make (11mm thick – Contraflam DoorLite & 14mm thick – Contraflam Lite) nationally at CBRI, Roorkee",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: ["Powder Coating in desired RAL Shade Code"],
      },

      // THIRD DESIGN
      {
        type: "title",
        content:
          "Steel Fire Rated Glazed Door (NAVAIR – REGULAR DESIGN FOR 60 MIN – AS PER DSR 2018 REQUIREMENT)",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NDRF 143 x 58",
          "Frame manufactured with 1.6mm Galvanised Steel",
          "Shutter Thickness – 50mm",
          "Shutter infill insulation – Wool insulation infill treated with VIPER FRS 881 LH",
          "Shutter manufactured with 1.6mm Galvanised Steel",
          "Tested with fully glazed panel for 120 minutes rating with FR GLASS of Saint-Gobain make (6mm thick – Pyroswiss E60) at International and Government test houses",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: ["Powder Coating in desired RAL Shade Code"],
      },
    ],
    specifications: {
      variants: [
        {
          name: "Steel Glazed Fire Door (As per DSR 2018 requirement)",
          specs: {
            "Door Type": "Steel Glazed Fire Door",
            Criteria:
              "Stability, Integrity with 20 min insulation properties and 120 minutes radiation control properties as per NBC Guideline NBC 2016",
            Rating: "120 mins",
            "Shutter Thickness": "60mm",
            "Testing Standards": "BS 476 Part 20–22, IS 3614 Part 2–1992",
            "Test Laboratory":
              "Certifire, Exova Warrington Fire Research Laboratory (United Kingdom), NABL Accredited Test House – SPECTRO Analytical Lab, Greater Noida",
          },
        },
        {
          name: "Steel Fire Rated Glazed Door (120 mins) – (As per DSR 2018 requirement)",
          specs: {
            "Door Type":
              "Steel Fire Rated Glazed Door tested with 11mm thick FR Glass of Saint-Gobain make",
            Criteria: "Stability & Integrity",
            Rating: "120 mins",
            "Shutter Thickness": "46mm",
            "Testing Standards": "BS 476 Part 20–22, IS 3614 Part 2",
            "Test Laboratory": "CBRI Roorkee, India",
          },
        },
        {
          name: "Steel Fire Rated Glazed Door (60 mins)",
          specs: {
            "Door Type":
              "Steel Fire Rated Glazed Door tested with 6mm thick single layered Fire Rated Toughened FR Glass PYROSWISS E60 of Saint-Gobain make",
            Criteria: "Stability & Integrity",
            Rating: "60 mins",
            "Shutter Thickness": "50mm",
            "Testing Standards": "BS 476 Part 20–22, IS 3614 Part 2–1992",
            "Test Laboratory":
              "Thomas Bell-Wright (Dubai), Government Test House",
          },
        },
      ],
    },
  },
  {
    id: "automatic-steel-fire-and-swing-door-double-glazed",
    name: "Automatic Steel Fire And Swing Door",
    category: "Fire Rated Doors",
    subCategory: "Steel",
    subSubCategory: "Double Glazed",
    images: ["/products/Automatic-Steel-Fire-And-Swing-Door.webp"],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content:
          "Steel Fire Rated Glazed Door (NAVAIR – SLIM SECTION DESIGN – AS PER DSR 2018 REQUIREMENT)",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NSF6070",
          "Frame manufactured with 1.6mm Galvanised Steel",
          "Shutter Thickness – 60mm",
          "Shutter infill insulation – Mineral wool infill treated with VIPER FRS 881 LH",
          "Shutter manufactured with 1.6mm Galvanised Steel",
          "Tested with fully glazed panel for 120 minutes rating with FR GLASS of Saint-Gobain make (11mm thick – Contraflam DoorLite & 14mm thick – Contraflam Lite) nationally & internationally",
          "Tested with top & side light panels for 120 minutes rating with fire-rated glass of Saint-Gobain make",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: ["Powder Coating in desired RAL Shade Code"],
      },

      // SECOND DESIGN
      {
        type: "title",
        content: "Steel Fire Rated Glazed Door (NAVAIR – REGULAR DESIGN)",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NDRF 143 x 57",
          "Frame manufactured with 1.6mm Galvanised Steel",
          "Shutter Thickness – 46mm",
          "Shutter infill insulation – Wool insulation infill treated with VIPER FRS 881 LH",
          "Shutter manufactured with 1.2mm Galvanised Steel",
          "Tested with fully glazed panel for 120 minutes rating with FR GLASS of Saint-Gobain make (11mm thick – Contraflam DoorLite & 14mm thick – Contraflam Lite) nationally at CBRI, Roorkee",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: ["Powder Coating in desired RAL Shade Code"],
      },

      // THIRD DESIGN
      {
        type: "title",
        content:
          "Steel Fire Rated Glazed Door (NAVAIR – REGULAR DESIGN FOR 60 MIN – AS PER DSR 2018 REQUIREMENT)",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NDRF 143 x 58",
          "Frame manufactured with 1.6mm Galvanised Steel",
          "Shutter Thickness – 50mm",
          "Shutter infill insulation – Wool insulation infill treated with VIPER FRS 881 LH",
          "Shutter manufactured with 1.6mm Galvanised Steel",
          "Tested with fully glazed panel for 120 minutes rating with FR GLASS of Saint-Gobain make (6mm thick – Pyroswiss E60) at international and government test houses",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: ["Powder Coating in desired RAL Shade Code"],
      },
    ],
    specifications: {
      variants: [
        {
          name: "Steel Glazed Fire Door (As per DSR 2018 requirement)",
          specs: {
            "Door Type": "Steel Glazed Fire Door",
            Criteria:
              "Stability, Integrity with 20 min insulation properties and 120 minutes radiation control properties as per NBC Guideline NBC 2016",
            Rating: "120 mins",
            "Shutter Thickness": "60mm",
            "Testing Standards": "BS 476 Part 20–22, IS 3614 Part 2–1992",
            "Test Laboratory":
              "Certifire, Exova Warrington Fire Research Laboratory (United Kingdom), NABL Accredited Test House – SPECTRO Analytical Lab, Greater Noida",
          },
        },
        {
          name: "Steel Fire Rated Glazed Door (120 mins) – (As per DSR 2018 requirement)",
          specs: {
            "Door Type":
              "Steel Fire Rated Glazed Door tested with 11mm thick FR Glass of Saint-Gobain make",
            Criteria: "Stability & Integrity",
            Rating: "120 mins",
            "Shutter Thickness": "46mm",
            "Testing Standards": "BS 476 Part 20–22, IS 3614 Part 2",
            "Test Laboratory": "CBRI Roorkee, India",
          },
        },
      ],
    },
  },
  {
    id: "automatic-steel-fire-and-swing-door-single-glazed",
    name: "Automatic Steel Fire And Swing Door",
    category: "Fire Rated Doors",
    subCategory: "Steel",
    subSubCategory: "Single Glazed",
    images: ["/products/Automatic-Steel-Fire-And-Swing-Door.webp"],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content:
          "Steel Fire Rated Glazed Door (NAVAIR – SLIM SECTION DESIGN – AS PER DSR 2018 REQUIREMENT)",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NSF6070",
          "Frame manufactured with 1.6mm Galvanised Steel",
          "Shutter Thickness – 60mm",
          "Shutter infill insulation – Mineral wool infill treated with VIPER FRS 881 LH",
          "Shutter manufactured with 1.6mm Galvanised Steel",
          "Tested with fully glazed panel for 120 minutes rating with FR GLASS of Saint-Gobain make (11mm thick – Contraflam DoorLite & 14mm thick – Contraflam Lite) nationally & internationally",
          "Tested with top & side light panels for 120 minutes rating with fire-rated glass of Saint-Gobain make",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: ["Powder Coating in desired RAL Shade Code"],
      },

      // SECOND DESIGN
      {
        type: "title",
        content: "Steel Fire Rated Glazed Door (NAVAIR – REGULAR DESIGN)",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NDRF 143 x 57",
          "Frame manufactured with 1.6mm Galvanised Steel",
          "Shutter Thickness – 46mm",
          "Shutter infill insulation – Wool insulation infill treated with VIPER FRS 881 LH",
          "Shutter manufactured with 1.2mm Galvanised Steel",
          "Tested with fully glazed panel for 120 minutes rating with FR GLASS of Saint-Gobain make (11mm thick – Contraflam DoorLite & 14mm thick – Contraflam Lite) nationally at CBRI, Roorkee",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: ["Powder Coating in desired RAL Shade Code"],
      },

      // THIRD DESIGN
      {
        type: "title",
        content:
          "Steel Fire Rated Glazed Door (NAVAIR – REGULAR DESIGN FOR 60 MIN – AS PER DSR 2018 REQUIREMENT)",
      },
      { type: "subtitle", content: "Detail Description" },
      {
        type: "list",
        items: [
          "Steel frame Profile Design – NDRF 143 x 58",
          "Frame manufactured with 1.6mm Galvanised Steel",
          "Shutter Thickness – 50mm",
          "Shutter infill insulation – Wool insulation infill treated with VIPER FRS 881 LH",
          "Shutter manufactured with 1.6mm Galvanised Steel",
          "Tested with fully glazed panel for 120 minutes rating with FR GLASS of Saint-Gobain make (6mm thick – Pyroswiss E60) at international and government test houses",
        ],
      },

      { type: "title", content: "Recommended Finishes" },
      { type: "boldParagraph", content: "Frame & Shutter" },
      {
        type: "list",
        items: ["Powder Coating in desired RAL Shade Code"],
      },
    ],
    specifications: {
      variants: [
        {
          name: "Steel Glazed Fire Door (As per DSR 2018 requirement)",
          specs: {
            "Door Type": "Steel Glazed Fire Door",
            Criteria:
              "Stability, Integrity with 20 min insulation properties and 120 minutes radiation control properties as per NBC Guideline NBC 2016",
            Rating: "120 mins",
            "Shutter Thickness": "60mm",
            "Testing Standards": "BS 476 Part 20–22, IS 3614 Part 2–1992",
            "Test Laboratory":
              "Certifire, Exova Warrington Fire Research Laboratory (United Kingdom), NABL Accredited Test House – SPECTRO Analytical Lab, Greater Noida",
          },
        },
        {
          name: "Steel Fire Rated Glazed Door (120 mins) – (As per DSR 2018 requirement)",
          specs: {
            "Door Type":
              "Steel Fire Rated Glazed Door tested with 11mm thick FR Glass of Saint-Gobain make",
            Criteria: "Stability & Integrity",
            Rating: "120 mins",
            "Shutter Thickness": "46mm",
            "Testing Standards": "BS 476 Part 20–22, IS 3614 Part 2",
            "Test Laboratory": "CBRI Roorkee, India",
          },
        },
      ],
    },
  },
  {
    id: "fire-rated-puff-door",
    name: "Fire Rated Puff Door",
    category: "Fire Rated Doors",
    subCategory: "Steel",
    subSubCategory: "Puff",
    images: ["/products/Puff-Door.webp"],
    brochure: "/brochures/fire-door-steel.pdf",
    description: [
      {
        type: "title",
        content: "Fire rated Puff Door",
      },
      {
        type: "paragraph",
        content:
          "It is completely silicone sealed, and includes a micro-perforation profile with an integral silica gel moisture absorption system, designed to eliminate fogging. Right angled corners add to the strength of the clean room window unit and enhance their appearance",
      },
    ],
    specifications: {
      variants: [],
    },
  },
];
