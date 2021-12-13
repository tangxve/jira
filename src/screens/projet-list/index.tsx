import React, { useEffect, useState } from 'react'
import { SearchPanel } from './search-panel'
import { List } from './list'
import { http } from '../../utils/http'
import { useMount, useDebounce } from '../../utils'

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  const [param, setParam] = useState({ name: '', personId: '' })

  const debounceParam = useDebounce(param, 500)

  useEffect(() => {
    async function fetchData() {
      const res = await http('/projects', 'get', { ...debounceParam })
      const { data, status } = res

      if (status === 200) {
        setList(data)
      }
    }

    fetchData()
  }, [debounceParam])

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
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List users={users} list={list} />
    </div>
  )
}
