import '../src/styles/main.sass'
import { redirecionar_cadastro } from './handlers/redirecionar_registro.js'
import { redirecionar_login } from './handlers/redirecionar_login.js'

//Redireciona usuário para tela de cadastro
redirecionar_cadastro()
//Redireciona usuário para tela de login
redirecionar_login()