import { getAPI } from '../api'

// github 계정 정보 가져오기
export const getGithub = (payload: any) => {
	let path = `https://api.github.com/users/${payload}`
	return getAPI(path)
}
