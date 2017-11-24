export const getHeader = function () {
  const tokenData = JSON.parse(window.sessionStorage.getItem('token'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer' + tokenData.access_token
  }
  return headers
}
