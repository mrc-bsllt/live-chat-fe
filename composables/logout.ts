export const logout = () => {
  useCookie('token').value = ''
  useCookie('user_id').value = ''
  navigateTo('/auth/login')
}