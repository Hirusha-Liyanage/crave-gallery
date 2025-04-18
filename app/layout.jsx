import "@/style/style.css";

export const metadata = {
  title: "Crave Gallery",
  description: "Created by Hirusha-Liyanage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Signika+Negative:wght@300..700&display=swap');
        </style>
      </head> 
      <body className="select-none">{children}</body>
    </html>
  );
}
