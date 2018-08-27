
import msgApi from '@/config/httpMessages'
import { Notification } from 'element-ui';
export default {
  verify(data) {
    if (typeof data !== 'undefined' || data !== null) {
      let status = data.status
      let statusMessage = msgApi.statusCode(status).hasMsg ? msgApi.statusCode(status).message : -1

      if (status >= 200 && status < 300) {
        statusMessage !== -1 ? Notification.success({
          title: 'Todo Bien',
          message: statusMessage
        }) : '';
        return true
      } else {
        let errorMsg = data.data.error ? data.data.error : `Error sin mensaje del servidor, status: ${status}`
        let errorTitle = `Error: status ${status}`
        Notification.error({
          title: errorTitle,
          message: errorMsg
        })
        return false
      }
    } else {
      return false
    }
  }
}
