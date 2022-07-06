export const logout = () => {
  useCookie('token').value = ''
  useCookie('user_id').value = ''
  window.location.href = '/auth/login'
}