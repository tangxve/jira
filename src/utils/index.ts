import { useEffect, useState } from 'react'

export const isVoid = (v: string | null | undefined) => {
  return v === undefined || v === null || v === ''
}

export const isFalsy = (v: number) => {
  return v === 0 ? false : !v
}

export const cleanObject = (obj: object) => {
  if (!obj) return {}

  // Object.assign({}, object)
  const result = { ...obj }

  Object.keys(obj).forEach((key) => {
    // @ts-ignore
    const value = result[key]
    if (isVoid(value)) {
      // @ts-ignore
      delete result[key]
    }
  })

  return result
}

// 默认挂载一次
export const useMount = (cb: () => void) => {
  useEffect(() => {
    cb()
  }, [])
}

export const useDebounce = (value: any, delay?: number) => {
  // 定义内部变量
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    // 每次在 value 或 delay 变化后，设置一个新的定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay)
    // 每次在上一个 useEffect 处理完后以后在运行
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debounceValue
}
