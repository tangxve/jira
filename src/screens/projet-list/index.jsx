import React, { useEffect, useState } from 'react'
import { SearchPanel } from './search-panel'
import { List } from './list'
import axios from 'axios'

export const ProjectListScreen = () => {
  const [param, setParam] = useState({ name: '', personId: '', })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    async function fetchData() {
      console.log('param', { ...param })
      const res = await axios({
        url: '/projects',
        method: 'get',
        data: { ...param }
      })

      const { data, status } = res

      if (status === 200) {
        setList(data)
      }
    }

    fetchData()
  }, [param])

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('/users')

      const { data, status } = res

      if (status === 200) {
        setUsers(data)
      }
    }

    fetchData()
  }, [])
  return <div>
    <SearchPanel
      param={ param } setParam={ setParam }
      users={ users } setUsers={ setUsers }/>
    <List
      users={ users }
      list={ list } setList={ setList }/>
  </div>
}
