import React, { FormEvent } from 'react'
import { http } from '../../utils/http'

interface P {
  username: string
  password: string
}

export const LoginScreen = () => {
  const login = async (p: P): Promise<void> => {
    const res = await http('/login', 'POST', p)
    const { data, status } = res

    if (status === 200) {
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // 强制指定类型，我知道我在干嘛
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value

    login({ username, password })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名称</label>
        <input type="text" id={'username'} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={'password'} />
      </div>
      <button type={'submit'}>登陆</button>
    </form>
  )
}
