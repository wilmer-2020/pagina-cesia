
const Map = ({URL}) => {
  return (
    <article className="map">
         <iframe
            src={URL}
            loading="lazy"
          ></iframe>
    </article>
  )
}

export default Map