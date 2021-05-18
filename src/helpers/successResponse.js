export default (res, data) => {
  data = data ? prepare(data) : undefined
  return res.json(data)
}

function prepare(data) {
  if (Array.isArray(data) && data[0] && data[0]._id)
    return prepareArray(data)

  else if (data._id)
    return prepareOne(data)

  else
    return data
}

function prepareOne(item) {
  item = item.toJSON()
  delete item.createdAt
  delete item.updatedAt
  delete item.deletedAt
  delete item.deleted
  delete item.__v
  return item
}

function prepareArray(list) {
  return list.map(item => prepareOne(item))
}