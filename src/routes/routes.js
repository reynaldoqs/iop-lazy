import { routes as mainModule } from '@/app'
import { routes as moduleA } from '@/moduloCliente'
import { routes as moduleB } from '@/moduloUsuario'


export default [...mainModule, ...moduleA, ...moduleB]
