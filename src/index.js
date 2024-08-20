import '../src/styles/main.sass'
import { redirecionar_cadastro } from './handlers/redirecionar_registro.js'
import { redirecionar_login } from './handlers/redirecionar_login.js'
import { entrar_sistema } from './handlers/entrar_sistema.js'
import { btn_validar } from './handlers/enviar_cadastro.js'
import { usuario_localstorage_recuperar } from './handlers/usuario_salvo_login.js'
import { recuperar_senha } from './handlers/recuperar_senha_form.js'
import { alterar_senha } from './handlers/recuperar_senha_api.js'



//Redireciona usuário para tela de cadastro
redirecionar_cadastro()
//Redireciona usuário para tela de login
redirecionar_login()
//Redireciona usuário para tela de recuperar senha
recuperar_senha()
//POST
btn_validar()
//Entrar sistema e salvar login
entrar_sistema()
//Recuperado usuário marcado para lembrar
usuario_localstorage_recuperar()

alterar_senha()