import React, { useEffect, useState } from 'react'
import { SearchPanel } from './search-panel'
import { List } from './list'
import { http } from '../../utils/http'

export const ProjectListScreen = () => {
  const [param, setParam] = useState({ name: '', personId: '' })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await http('/projects', 'get', { ...param })
      const { data, status } = res

      if (status === 200) {
        setList(data)
      }
    }

    fetchData()
  }, [param])

  useMount(() => {
    async function fetchData() {
      const res = await http('/users', 'get')

      const { data, status } = res

      if (status === 200) {
        setUsers(data)
      }
    }

    fetchData()
  })
  return <div>
    <SearchPanel
      param={param} setParam={setParam}
      users={users} setUsers={setUsers} />
    <List
      users={users}
      list={list} setList={setList} />
  </div>
}


export const useMount = cb => {
  useEffect(() => {
    cb()
  }, [])
}

export const useDebounce = (value, delay) => {
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


