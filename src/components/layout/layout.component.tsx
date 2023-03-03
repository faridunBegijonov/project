import React from "react";
import { Navbar } from "../navbar/navbar.component";
import { Footer } from "../footer/footer.component";

// interface ILayout {
//   children: ReactNode;
// }
export const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>Layout</main>
      <Footer />
    </>
  );
};
