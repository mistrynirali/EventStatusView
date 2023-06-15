import './index.css'

const EventItem = props => {
  const {eventItem, viewEventStatus, isEventActive} = props
  const {id, imageUrl, name, location, registrationStatus} = eventItem

  const viewRegDetails = () => viewEventStatus(id, registrationStatus)

  const activeClass = isEventActive ? 'green-border' : ''

  return (
    <li className="event-item">
      <button type="button" className="event-btn" onClick={viewRegDetails}>
        <img
          src={imageUrl}
          alt="event"
          className={`event-img ${activeClass}`}
        />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
