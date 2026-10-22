import { useEffect, type JSX } from 'react'

import { Row, Col } from 'antd'
import styles from './../../style/style.module.scss'

const Datenschutz = (): JSX.Element => {
  useEffect(() => {
    document.title = 'Aleksei Beliaev. Fullstack developer. Datenschutzerklärung'
  }, [])

  return (
<Row className={`${styles.pb40} ${styles.pt40}`} lang="de">
    <Col xs={1} md={1} lg={2}></Col>
    <Col xs={22} md={20}>
        <h1>Datenschutzerklärung</h1>

        <h2>1. Verantwortlicher</h2>
        <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
        </p>
        <p>
            Aleksei Beliaev<br />
            Mergelstraße 37<br />
            45473 Mülheim an der Ruhr<br />
            Deutschland<br />
            E-Mail: <a href="mailto:beliaeff@gmail.com">beliaeff@gmail.com</a>
        </p>

        <h2>2. Allgemeines</h2>
        <p>
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
        </p>
        <p>
            Diese Website verwendet keine Cookies, keine Analyse- oder Tracking-Dienste und bindet keine Inhalte von Drittanbietern (z. B. Schriftarten, Videos, Karten) ein.
        </p>

        <h2>3. Hosting und Server-Logfiles</h2>
        <p>
            Beim Aufruf dieser Website werden durch den Webserver automatisch Informationen erfasst, die Ihr Browser übermittelt (Server-Logfiles):
        </p>
        <ul>
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>aufgerufene Seite bzw. Datei</li>
            <li>Referrer-URL (zuvor besuchte Seite)</li>
            <li>verwendeter Browser und Betriebssystem</li>
        </ul>
        <p>
            Diese Daten werden zur Gewährleistung eines störungsfreien Betriebs und der Sicherheit der Website verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in der technisch fehlerfreien und sicheren Bereitstellung der Website. Die Logfiles werden nach kurzer Zeit automatisch gelöscht, sofern keine längere Aufbewahrung zu Beweiszwecken erforderlich ist.
        </p>

        <h2>4. SSL-/TLS-Verschlüsselung</h2>
        <p>
            Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres Browsers.
        </p>

        <h2>5. Kontaktaufnahme</h2>
        <p>
            Wenn Sie uns per E-Mail oder über das Kontaktformular kontaktieren, werden Ihre Angaben (Name, E-Mail-Adresse, Betreff und Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit einem Vertrag zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist, im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>

        <h2>6. Registrierung und Login</h2>
        <p>
            Sie können sich auf dieser Website registrieren. Dabei werden Ihr Name, Ihre E-Mail-Adresse und Ihr Passwort (ausschließlich in verschlüsselter Form) gespeichert. Die Daten werden verwendet, um Ihnen den Zugang zu geschützten Bereichen der Website zu ermöglichen.
        </p>
        <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden gespeichert, solange Ihr Benutzerkonto besteht. Sie können die Löschung Ihres Kontos jederzeit per E-Mail verlangen.
        </p>

        <h2>7. Lokale Speicherung im Browser (Local Storage)</h2>
        <p>
            Diese Website speichert im Local Storage Ihres Browsers die von Ihnen gewählte Sprache sowie – nach einem Login – ein Anmelde-Token. Diese Speicherung ist für die von Ihnen ausdrücklich gewünschte Funktion technisch erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Die Daten werden nicht an uns oder Dritte übermittelt, solange Sie nicht eingeloggt sind, und können jederzeit über die Einstellungen Ihres Browsers gelöscht werden.
        </p>

        <h2>8. Links zu anderen Websites</h2>
        <p>
            Diese Website enthält Links zu externen Websites (z. B. LinkedIn, GitHub, GitLab). Erst wenn Sie einen solchen Link anklicken, werden Daten an den jeweiligen Anbieter übertragen. Für die Datenverarbeitung auf diesen Websites ist der jeweilige Anbieter verantwortlich.
        </p>

        <h2>9. Ihre Rechte</h2>
        <p>
            Sie haben im Rahmen der gesetzlichen Bestimmungen jederzeit das Recht auf:
        </p>
        <ul>
            <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO)</li>
        </ul>
        <p>
            Wenden Sie sich hierzu bitte an die oben genannte E-Mail-Adresse.
        </p>

        <h2>10. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig für uns ist:
        </p>
        <p>
            Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen<br />
            Kavalleriestraße 2–4<br />
            40213 Düsseldorf<br />
            <a href="https://www.ldi.nrw.de">www.ldi.nrw.de</a>
        </p>

        <p>Stand: Oktober 2026</p>
    </Col>
</Row>
  )
}
export default Datenschutz
