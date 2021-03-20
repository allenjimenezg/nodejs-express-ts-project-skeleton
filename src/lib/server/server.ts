// GLOBAL IMPORTS
import http from 'http'
import https from 'https'
import EventEmitter from 'events'

// LOCAL IMPORTS
import { App } from '../app/app'
import { ServerProtocol } from './server.types'
import { InvalidPortError } from './../error'

export class Port {
  static normalize(port:any): number {
    // IS NUMBER
    if (typeof port === 'number') {
      return port
    }
    // IS STRING
    if (typeof port === 'string') {
      const normalizedPort = parseInt(port)
      if (normalizedPort !== NaN) {
        return normalizedPort
      }
    }
    throw new InvalidPortError('Port is not valid')
  }
}

export class Server extends EventEmitter {
  
  constructor(private application: App, private port: any, private protocol?: string) {
    super()
  }

  start() {
    const serverManager = this.protocol === ServerProtocol.HTTPS ? https : http 
    const server = serverManager.createServer(this.application.app)
    
    try { 
      const serverPort = Port.normalize(this.port)
      server.listen(serverPort, () => {
        this.emit('running')
      })
    } catch (error) {
      if (error instanceof InvalidPortError) {
        this.emit('error', error)
      }
    }
    
  }

}
