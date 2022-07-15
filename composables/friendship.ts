import { API_HOST } from '@/utils/config'

export const sendRequest = async (friend_id: string, toggle_refresh_user: () => void) => {
  const token = useCookie('token').value
  
  await $fetch(`${API_HOST}/api/send-request`, {
    headers: {
      Authorization: 'Bearer ' + token
    },
    method: 'POST',
    body: { friend_id },
    async onResponse({ response }) {
      if(response.status === 201) {
        toggle_refresh_user()
      }
    }
  })
}

export const accept_request = async (friend_id: string, toggle_refresh_user: () => void) => {
  const token = useCookie('token').value
  
  await $fetch(`${API_HOST}/api/accept-friendship`, {
    headers: {
      Authorization: 'Bearer ' + token
    },
    method: 'PUT',
    body: { friend_id },
    async onResponse({ response }) {
      if(response.status === 201) {
        toggle_refresh_user()
      }
    }
  })
}

export const remove_friend = async (friend_id: string, toggle_refresh_user: () => void) => {
  const token = useCookie('token').value
  
  await $fetch(`${API_HOST}/api/remove-friendship`, {
    headers: {
      Authorization: 'Bearer ' + token
    },
    method: 'PUT',
    body: { friend_id },
    async onResponse({ response }) {
      if(response.status === 201) {
        toggle_refresh_user()
      }
    }
  })
} 

export const reject_request = async (friend_id: string, toggle_refresh_user: () => void) => {
  const token = useCookie('token').value
  
  await $fetch(`${API_HOST}/api/reject-request`, {
    headers: {
      Authorization: 'Bearer ' + token
    },
    method: 'PUT',
    body: { friend_id },
    async onResponse({ response }) {
      if(response.status === 201) {
        toggle_refresh_user()
      }
    }
  })
}