import { useEffect, type JSX } from 'react'

import { Row, Col } from 'antd'
import styles from './../../style/style.module.scss'

const Impressum = (): JSX.Element => {
  useEffect(() => {
    document.title = 'Aleksei Beliaev. Fullstack developer. Impressum'
  }, [])

  return (
<Row className={`${styles.pb40} ${styles.pt40}`} lang="de">
    <Col xs={1} md={1} lg={2}></Col>
    <Col xs={22} md={20}>
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
            Aleksei Beliaev<br />
            Mergelstraße 37<br />
            45473 Mülheim an der Ruhr<br />
            Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>
            E-Mail: <a href="mailto:aleksei@beliaeff.de">aleksei@beliaeff.de</a>
        </p>

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
            Aleksei Beliaev<br />
            Mergelstraße 37<br />
            45473 Mülheim an der Ruhr
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr.
        </p>

        <h2>Haftung für Links</h2>
        <p>
            Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte keine Gewähr übernehmen.
        </p>

        <h2>Urheberrecht</h2>
        <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht.
        </p>
    </Col>
</Row>
  )
}
export default Impressum
