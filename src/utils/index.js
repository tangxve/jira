export const isVoid = (v) => {
  return v === undefined || v === null || v === ''
}

export const cleanObject = (obj) => {
  if (!obj) return {}

  // Object.assign({}, object)
  const result = { ...obj }

  Object.keys(obj).forEach((key) => {
    const value = result[key]
    if (isVoid(value)) {
      delete result[key]
    }
  })

  return result
}
