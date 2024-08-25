import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styled from "styled-components";
import Link from "next/link";

const StyledDatenschutz = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem;
`;

export default function Datenschutz() {
  return (
    <>
      <StyledDatenschutz>
        <Link href="/" style={{ color: "#0d1b2a" }}>
          <Header />
        </Link>
        <h2 style={{ color: "#0d1b2a" }}>Datenschutzerklärung</h2>
        <h4 style={{ color: "#0d1b2a" }}>Allgemeine Hinweise</h4>
        <p>
          Diese Datenschutzerklärung enthält ausführliche Informationen darüber,
          was mit Ihren persönlichen Daten passiert, wenn Sie unsere Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie sich
          persönlich identifizieren können. Wir halten uns bei der Verarbeitung
          Ihrer Daten streng an die gesetzlichen Bestimmungen, insbesondere die
          Datenschutzgrundverordnung („DSGVO“), und legen großen Wert darauf,
          dass Ihr Besuch auf unserer Website absolut sicher ist.
        </p>

        <h4 style={{ color: "#0d1b2a" }}>Verantwortliche Stelle</h4>
        <p>
          Datenschutzrechtlich verantwortlich für die Erhebung und Verarbeitung
          von personenbezogenen Daten auf dieser Website ist:
          <br />
          <br />
          Vorname, Name: Ana Pecic
          <br />
          Straße, Hausnummer: Woltmanstr. 10
          <br />
          Postleitzahl, Ort: 20097 Hamburg
          <br />
          Land: Deutschland
          <br />
          E-Mail:{" "}
          <a href="mailto:ana.pecic97@gmail.com" style={{ color: "#0d1b2a" }}>
            ana.pecic97@gmail.com
          </a>
        </p>

        <h4 style={{ color: "#0d1b2a" }}>Zugriffsdaten (Server-Logfiles)</h4>
        <div>
          Beim Aufruf unserer Website erheben wir und speichern automatisch in
          sogenannten Server-Logfiles Zugriffsdaten, die Ihr Browser automatisch
          an uns übermittelt. Dies sind:
          <ul>
            <li>Browsertyp und Browserversion Ihres PC</li>
            <li>von Ihrem PC verwendetes Betriebssystem</li>
            <li>Datum und Uhrzeit der Serveranfrage</li>
            <li>
              die aktuell von Ihrem PC verwendete IP-Adresse (ggf. in
              anonymisierter Form)
            </li>
          </ul>
          Ein Personenbezug ist uns im Regelfall nicht möglich und auch nicht
          beabsichtigt. Die Verarbeitung solcher Daten erfolgt gemäß Art. 6 Abs.
          1 lit. f DSGVO zur Wahrung unseres berechtigten Interesses an der
          Verbesserung der Stabilität und Funktionalität unserer Website.
        </div>

        <h4 style={{ color: "#0d1b2a" }}>Kontaktaufnahme</h4>
        <p>
          Sofern Sie mit uns Kontakt, darunter auch per E-Mail, aufnehmen,
          werden übermittelte Daten einschließlich Ihrer Kontaktdaten
          gespeichert, um Ihre Anfrage bearbeiten zu können oder um für
          Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet
          ohne Ihre Einwilligung nicht statt.
        </p>
        <p>
          Die Verarbeitung Ihrer Daten erfolgt ausschließlich auf Grundlage
          Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer
          bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf
          genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis
          zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf
          unberührt.
        </p>
        <p>
          Übermittelte Daten verbleiben bei uns, bis Sie uns zur Löschung
          auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine
          Notwendigkeit der Datenspeicherung mehr besteht. Zwingende gesetzliche
          Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
        </p>

        <h4 style={{ color: "#0d1b2a" }}>Datenverwendung und -weitergabe</h4>
        <p>
          Die personenbezogenen Daten, die Sie uns z.B. per E-Mail mitteilen
          (z.B. Ihr Name und Ihre Adresse oder Ihre E-Mail-Adresse), werden wir
          weder an Dritte verkaufen noch anderweitig vermarkten. Ihre
          personenbezogenen Daten werden nur zur Korrespondenz mit Ihnen und nur
          für den Zweck verarbeitet, zu dem Sie uns die Daten zur Verfügung
          gestellt haben. Zur Abwicklung von Zahlungen geben wir Ihre
          Zahlungsdaten an das mit der Zahlung beauftragte Kreditinstitut
          weiter.
        </p>
        <p>
          Die Verwendung von Daten, die bei Ihrem Besuch unserer Website
          automatisch erhoben werden, erfolgt nur zu den vorstehend genannten
          Zwecken. Eine anderweitige Verwendung der Daten findet nicht statt.
        </p>
        <p>
          Wir versichern, dass wir Ihre personenbezogenen Daten im Übrigen nicht
          an Dritte weitergeben, es sei denn, dass wir dazu gesetzlich
          verpflichtet wären oder Sie uns vorher Ihre Zustimmung gegeben haben.
        </p>

        <h4 style={{ color: "#0d1b2a" }}>SSL- bzw. TLS-Verschlüsselung</h4>
        <p>
          Unsere Website benutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie
          an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung.
          Eine verschlüsselte Verbindung erkennen Sie daran, dass die
          Adresszeile des Browsers von „http://” auf „https://” wechselt und an
          dem Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p>
          Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
          Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
          werden.
        </p>

        <h4 style={{ color: "#0d1b2a" }}>Speicherdauer</h4>
        <p>
          Personenbezogene Daten, die uns über unsere Website mitgeteilt worden
          sind, werden nur so lange gespeichert, bis der Zweck erfüllt ist, zu
          dem sie uns anvertraut wurden. Soweit handels- und steuerrechtliche
          Aufbewahrungsfristen zu beachten sind, kann die Speicherdauer zu
          bestimmten Daten bis zu 10 Jahre betragen.
        </p>

        <h4>Betroffenenrechte</h4>
        <p>
          Hinsichtlich der Sie betreffenden personenbezogenen Daten haben als
          Betroffener der Datenverarbeitung nach Maßgabe der gesetzlichen
          Bestimmungen folgende Rechte gegenüber dem Verantwortlichen:
        </p>

        <h4 style={{ color: "#0d1b2a" }}>Widerrufsrecht</h4>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sofern die Verarbeitung Ihrer Daten auf Ihrer
          Einwilligung beruht, haben Sie das Recht, eine einmal erteilte
          Einwilligung in die Verarbeitung von Daten gemäß Art. 7 Abs. 3 DSGVO
          jederzeit mit Wirkung für die Zukunft zu widerrufen. Durch den
          Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der
          Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
          Speicherung der Daten für Abrechnungs- und buchhalterische Zwecke
          bleibt von einem Widerruf nicht berührt.
        </p>

        <h4 style={{ color: "#0d1b2a" }}>Social Media</h4>

        <h4 style={{ color: "#0d1b2a" }}>
          Verlinkung und Einbindung von Social-Media-Plattformen
        </h4>
        <p>
          Unsere Website enthält Links und Plugins zu verschiedenen
          Social-Media-Diensten wie Facebook, Instagram, Twitter und YouTube.
          Wenn Sie auf diese Links oder Plugins klicken oder sie verwenden,
          können Daten an den jeweiligen Social-Media-Dienst übertragen werden.
          Dies betrifft insbesondere folgende Daten:
        </p>
        <ul>
          <li>IP-Adresse</li>
          <li>Zeitpunkt des Besuchs unserer Website</li>
          <li>Informationen über den Browser und das Betriebssystem</li>
          <li>
            Weitere Informationen, die Sie auf den jeweiligen
            Social-Media-Seiten teilen oder zur Verfügung stellen.
          </li>
        </ul>
        <p>
          Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß
          Art. 6 Abs. 1 lit. a DSGVO oder zur Wahrung unserer berechtigten
          Interessen an einer möglichst umfassenden Sichtbarkeit im Internet
          (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <p>
          Beachten Sie, dass wir keinen Einfluss darauf haben, wie die Betreiber
          der Social-Media-Plattformen die erhobenen Daten verarbeiten. Weitere
          Informationen über den Zweck und den Umfang der Datenerhebung und die
          weitere Verarbeitung und Nutzung Ihrer Daten durch den jeweiligen
          Social-Media-Anbieter sowie Ihre diesbezüglichen Rechte und
          Einstellungsmöglichkeiten zum Schutz Ihrer Privatsphäre finden Sie in
          den jeweiligen Datenschutzerklärungen der Anbieter:
        </p>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/privacy/explanation"
              target="_blank"
              style={{ color: "#0d1b2a" }}
            >
              Facebook Datenschutzerklärung
            </a>
          </li>
          <li>
            <a
              href="https://help.instagram.com/519522125107875"
              target="_blank"
              style={{ color: "#0d1b2a" }}
            >
              Instagram Datenschutzerklärung
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/privacy"
              target="_blank"
              style={{ color: "#0d1b2a" }}
            >
              Twitter Datenschutzerklärung
            </a>
          </li>
          <li>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              style={{ color: "#0d1b2a" }}
            >
              YouTube Datenschutzerklärung
            </a>
          </li>
        </ul>

        <h4 style={{ color: "#0d1b2a" }}>Social Media Plugins</h4>
        <p>
          Auf unserer Website nutzen wir möglicherweise Social-Media-Plugins wie
          den „Gefällt mir“-Button von Facebook oder den „Share“-Button von
          Twitter. Wenn Sie eine Seite unserer Website besuchen, die ein solches
          Plugin enthält, wird eine direkte Verbindung zwischen Ihrem Browser
          und dem Server des sozialen Netzwerks hergestellt. Dabei wird das
          soziale Netzwerk darüber informiert, dass Sie mit Ihrer IP-Adresse
          unsere Seite besucht haben. Wenn Sie währenddessen in Ihrem
          Social-Media-Account eingeloggt sind, kann das soziale Netzwerk den
          Besuch unserer Seiten Ihrem Benutzerkonto zuordnen.
        </p>
        <p>
          Wenn Sie dies nicht wünschen, loggen Sie sich bitte vor dem Besuch
          unserer Website aus Ihrem Social-Media-Konto aus.
        </p>
      </StyledDatenschutz>
      <Footer />
    </>
  );
}
