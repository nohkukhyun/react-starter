import axios from 'axios'

export const getAPI = async (url: string) => {
	// const accessToken = localStorage.getItem('access_token')
	const res = await axios.get(`${url}`)
	const result = res.data
	return result
}

export const putAPI = async (url: string, datas: {}) => {
	let accessToken = localStorage.getItem('access_token')
	const res = await axios.put(
		`${url}`,
		{ ...datas },
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	)
	return res
}

export const postAPI = (url: string, datas: {}) => {
	// let accessToken = localStorage.getItem('access_token')
	const res = axios.post(
		`${url}`,
		{ ...datas },
		{
			// headers: {
			//   Authorization: `Bearer ${accessToken}`,
			// },
		}
	)
	return res
}
