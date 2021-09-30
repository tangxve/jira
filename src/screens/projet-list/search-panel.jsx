import React from 'react'

export const SearchPanel = ({ param, setParam, users, setUsers }) => {
  return <form>
    <div>
      <input type="text" value={ param.name } onChange={ event => setParam({
        ...param,
        name: event.target.value
      }) }/>
      <select value={ param.personId } onChange={ event => setParam({
        ...param,
        personId: event.target.value
      }) }>
        <option value={ '' }>负责人</option>
        {
          users.map(user => <option key={ user.id } value={ user.id }>{ user.name }</option>)
        }
      </select>
    </div>
  </form>
}
