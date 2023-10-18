import axios from 'axios'
axios.defaults.baseURL = 'https://652ec9c10b8d8ddac0b1e3ab.mockapi.io/'

export const getContacts = async () => {
	const { data } = await axios('/contacts')
	return data
}
export const addNewContact = async (newContact) => {
	const { data } =await axios.post('/contacts', newContact)
	return data
}
export const delContact = async (contactId) => {
	const { data } =await axios.delete(`/contacts/${contactId}`)
	return data
}