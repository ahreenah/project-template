import React from 'react'
import { Link } from 'react-router-dom'

import ImageLight from '../assets/img/login-office.jpeg'
import ImageDark from '../assets/img/login-office-dark.jpeg'
import { GithubIcon, TwitterIcon } from '../icons'
import { Label, Input, Button } from '@windmill/react-ui'

function Login() {
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800 max-w-[400px]">
        {/* <div className="flex flex-col overflow-y-auto md:flex-row"> */}
          <main className="flex items-center justify-center p-6 sm:p-12">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Регистртация</h1>
              <Label>
                <span>Почта</span>
                <Input className="mt-1" type="email" placeholder="john@doe.com" />
              </Label>

              <Label className="mt-4">
                <span>Пароль</span>
                <Input className="mt-1" type="password" placeholder="***************" />
              </Label>

              
              <Label className="mt-4">
                <span>Повторите пароль</span>
                <Input className="mt-1" type="password" placeholder="***************" />
              </Label>

              <Button className="mt-4" block tag={Link} to="/app">
                Войти
              </Button>

              <hr className="my-8" />

              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/login"
                >
                  Уже зарегистрированы? Вход
                </Link>
              </p>
            </div>
          </main>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Login
