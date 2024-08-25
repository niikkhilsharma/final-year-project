import localFont from "next/font/local";

export const mackinac = localFont({
  variable: "--font-mackinac",
  display: "swap",
  src: [
    {
      path: "../public/assets/font/P22-Mackinac/P22MackinacPro-Book_25.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/font/P22-Mackinac/P22MackinacPro-Medium_26.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/font/P22-Mackinac/P22MackinacPro-MedItalic_18.otf",
      weight: "500",
      style: "italic",
    },
  ],
});

export const sophiaPro = localFont({
  variable: "--font-sophiaPro",
  display: "swap",
  src: [
    {
      path: "../public/assets/font/sofia-pro-cufonfonts/Sofia-Pro-UltraLight-Az.otf",
      weight: "200",
      style: "medium",
    },
    {
      path: "../public/assets/font/sofia-pro-cufonfonts/Sofia-Pro-Regular-Az.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/font/sofia-pro-cufonfonts/Sofia-Pro-Medium-Az.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/assets/font/sofia-pro-cufonfonts/Sofia-Pro-Semi-Bold-Az.otf",
      weight: "600",
      style: "medium",
    },
    {
      path: "../public/assets/font/sofia-pro-cufonfonts/Sofia-Pro-Bold-Az.otf",
      weight: "700",
      style: "medium",
    },
  ],
});
