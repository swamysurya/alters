import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children)
  return (
    <div className="notificationContainer">
      <div className="iconAnddiscriptionContainer">
        <div className="iconContainer">{children[0]}</div>
        <div>
          {children[1]}
          {children[2]}
        </div>
      </div>
      <GrFormClose className="closeIcon" />
    </div>
  )
}

export default Notification
