import './index.css'

const regStatus = {
  unregistered: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationStatus = props => {
  const {registrationStatus} = props

  const initialView = () => (
    <div className="no-active-events-container">
      <p className="no-active-events">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const unregisteredView = () => (
    <div className="event-status-container">
      <img
        className="unregistered-image"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="unregistered-para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in with this beautiful
        art form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  const registeredView = () => (
    <div className="event-status-container">
      <img
        className="tick-img"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="registered-para">
        You have already registered for the event
      </h1>
    </div>
  )

  const closedView = () => (
    <div className="event-status-container">
      <img
        className="closed-img"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="closed-para">Registrations Are Closed Now!</h1>
      <p className="closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  switch (registrationStatus) {
    case regStatus.unregistered:
      return unregisteredView()
    case regStatus.registered:
      return registeredView()
    case regStatus.closed:
      return closedView()
    default:
      return initialView()
  }
}

export default ActiveEventRegistrationStatus
