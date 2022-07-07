import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const PDFSolicitudRiego = (user) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.subtitle}>
        Formulario Solicitud de Servicio de Riego
      </Text>
      <Text style={styles.text}>Fecha: _________________________</Text>
      <Text style={styles.text2}>Señores</Text>
      <Text style={styles.text2}>SENARA</Text>
      <Text style={styles.text2}>Cañas</Text>
      <Text style={styles.text}>
        Yo, _______{user}
        __________________________________________________________, Cédula:
        ___________________, Teléfonos __________________________________,
        Dirección exacta
        _______________________________________________________, dueño de la
        parcela Nº ________ del Proyecto ______________ del Subdistrito
        _______________, inscrito en el padrón de Usuarios del Distrito de Riego
        Arenal Tempisque, solicito brindarme el servicio de riego durante el
        presente semestre.
      </Text>
      <Text style={styles.text}>
        Datos de la parcela: Área __________ha, Cultivo __________________,
        Variedad _________________, Rendimiento anterior _____________________.
      </Text>
      <Text style={styles.text}>
        Me comprometo a preparar la infraestructura para recibir el riego el día
        _____ de __________________ del 20____, según lo estipulado en el
        Reglamento de Servicio de Riego del Distrito de Riego y a utilizar el
        servicio conforme a lo establecido en dicho reglamento.
      </Text>

      <Text style={styles.text}>Atentamente,</Text>
      <Text style={styles.text}>
        Firma: _______________________________________
      </Text>
      <Text style={styles.text}>
        Fax: ________________________________________
      </Text>
      <Text style={styles.text}>
        Correo electrónico: _____________________________
      </Text>
      <Text style={styles.text}>
        Dirección para notificaciones:
        ______________________________________________
        ____________________________________________________________________
      </Text>
      <Text style={styles.text}>
        Observaciones:______________________________________________________
      </Text>
    </Page>
  </Document>
)

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
})

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },

  subtitle: {
    fontSize: 14,
    margin: 12,
    fontFamily: 'Oswald',
    textAlign: 'center',
  },
  text: {
    margin: 12,
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },

  text2: {
    marginLeft: 12,
    marginRight: 12,
    fontSize: 12,
    textAlign: 'start',
    fontFamily: 'Times-Roman',
  },
})

ReactPDF.render(<PDFSolicitudRiego />, `${__dirname}/ejemplo.pdf`)
