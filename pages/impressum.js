import Header from "@/components/Header/Header";
import styled from "styled-components";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

const StyledImpressum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem;
  padding-bottom: 250px;
`;

export default function Impressum() {
  return (
    <>
      <StyledImpressum>
        <Link href="/" style={{ color: "#0d1b2a" }}>
          <Header />
        </Link>
        <h3>Impressum </h3>
        <h4>Website</h4>
        <p>
          Dieses Impressum gilt für alle Angebote unter der Domain
          baumteam-peper.de inklusive aller Subdomains (Unterseiten).
        </p>
        <h4>Angaben gemäß § 5 TMG </h4>
        <p>
          Ana Pecic Woltmanstr. 10 <br />
          20097 Hamburg <br />
          E-Mail: ana.pecic97@gmail.com
          <br />
        </p>
        <h4> Vertretungsberechtigte Personen</h4> <p>Ana Pecic, Inhaberin</p>
        <h4>Gültigkeit</h4>
        <p>Dieses Impressum gilt ab dem 25.08.2024.</p>
      </StyledImpressum>
      <Footer />
    </>
  );
}
