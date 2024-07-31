import '../src/styles/main.sass'
import { redirecionar_cadastro } from './handlers/redirecionar_registro.js'
import { redirecionar_login } from './handlers/redirecionar_login.js'
import { btn_validar } from './handlers/enviar_cadastro.js'



//Redireciona usuário para tela de cadastro
redirecionar_cadastro()
//Redireciona usuário para tela de login
redirecionar_login()
//POST
btn_validar()