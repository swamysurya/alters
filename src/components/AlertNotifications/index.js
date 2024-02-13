import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdInfo} from 'react-icons/md'
import {MdWarning} from 'react-icons/md'

import './index.css'
import Notification from '../Notification'

const AlertNotifications = () => {
  console.log('alert')

  return (
    <div className="alertNotificationContainer">
      <h1 className="alertNotificationHeading">Alert Notifications</h1>
      <Notification>
        <AiFillCheckCircle className="iconStyle" style={{color: '#2dca73'}} />
        <h1 className="headingStyle" style={{color: '#2dca73'}}>
          Success
        </h1>
        <p className="paraStyle">You can access all the files in the folder</p>
      </Notification>
      <Notification>
        <RiErrorWarningFill className="iconStyle" style={{color: '#ff0b37'}} />
        <h1 className="headingStyle" style={{color: '#ff0b37'}}>
          Error
        </h1>
        <p className="paraStyle">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </Notification>
      <Notification>
        <MdWarning className="iconStyle" style={{color: '#ffb800'}} />
        <h1 className="headingStyle" style={{color: '#ffb800'}}>
          Warning
        </h1>
        <p className="paraStyle">
          Viewers of this file can see comments and suggestions
        </p>
      </Notification>
      <Notification>
        <MdInfo className="iconStyle" style={{color: '#0f81e0'}} />
        <h1 className="headingStyle" style={{color: '#0f81e0'}}>
          Info
        </h1>
        <p className="paraStyle">Anyone on the internet can view these files</p>
      </Notification>
    </div>
  )
}

export default AlertNotifications
