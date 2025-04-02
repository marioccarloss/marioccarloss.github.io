export default function OpenGraph () {
  return(
    <>
      <meta property="og:locale" content="es_ES" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Mario Carlos Roca Peñafiel" />
      <meta property="og:description" content="Creative Frontend Designer" />
      <meta property="og:url" content={process.env.REACT_APP_URL} />
      <meta property="og:site_name" content="Mario Carlos Roca Peñafiel" />
      <meta property="article:modified_time" content="2021-11-04T03:52:56+00:00" />
      <meta property="og:image" content={`${process.env.REACT_APP_URL}/mario-roca.jpeg`} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="600" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:label1" content="Tiempo de lectura" />
      <meta name="twitter:data1" content="1 minuto" />
    </>
  )
}