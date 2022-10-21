import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import ImageLight from '../assets/img/login-office.jpeg'
import ImageDark from '../assets/img/login-office-dark.jpeg'
import { GithubIcon, TwitterIcon } from '../icons'
import { Label, Input, Button } from '@windmill/react-ui'

function Login() {
  let [mode, setMode] = useState('login')
  return (
    <div className="flex flex-col sm:block items-center min-h-screen p-0 sm:p-6 bg-gray-50 dark:bg-gray-900 fixed top-0 left-0 w-full z-50  bg-grey-900 bg-opacity-75">
      <div className="flex-1 h-full w-full sm:max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        {/* <div className="flex flex-col overflow-y-auto md:flex-row"> */}
          <main className="flex items-center justify-center p-6 sm:p-12">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                {mode=='login'?'Вход':(mode=='register'?'Регистрацияя':'Восстановление пароля')}
              </h1>
              <Label>
                <span>Почта</span>
                <Input className="mt-1" type="email" placeholder="john@doe.com" />
              </Label>
              {mode!='recover' && <>
                <Label className="mt-4">
                  <span>Пароль</span>
                  <Input className="mt-1" type="password" placeholder="***************" />
                </Label>
              </>}
              

              {mode=='register' && <><Label className="mt-4">
                <span>Повторите пароль</span>
                <Input className="mt-1" type="password" placeholder="***************" />
              </Label></>}

              {mode=='login' && <Button className="mt-4" block tag={Link} to="/app">
                Войти
              </Button>}

              
              {mode=='register' && <Button className="mt-4" block tag={Link} to="/app">
                Зарегистрироваться
              </Button>}

              
              {mode=='recover' && <Button className="mt-4" block tag={Link} to="/app">
                Далее
              </Button>}

              <hr className="my-8" />


              {mode=='login' && 
              <>
                <p className="mt-4">
                  <Link
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    onClick={()=>setMode('recover')}
                  >
                    Забыли пароль?
                  </Link>
                </p>
                <p className="mt-1">
                  <Link
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    onClick={()=>setMode('register')}
                  >
                    Регистртация
                  </Link>
                </p>
              </>
              }
              {(mode=='register' || mode=='recover') && 
              <>
                <p className="mt-4">
                  <Link
                    onClick={()=>setMode('login')}
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    Вход
                  </Link>
                </p>
              </>
              }
            </div>
          </main>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Login
