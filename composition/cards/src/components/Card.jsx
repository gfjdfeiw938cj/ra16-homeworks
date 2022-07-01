import PropTypes from 'prop-types'

export default function Card({title, text, link, ...props}) {
  return (
    <div className="col-3">
      <div className="card">
        {props.children}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a href={link} className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
