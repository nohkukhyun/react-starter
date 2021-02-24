import * as github from '@store/github/github.action'
import { createReducer, getType } from 'typesafe-actions'

interface GithubTypes {
	githubData: {}
	error: string
}

const initialState: GithubTypes = {
	githubData: {},
	error: '',
}

const githubReducer = (
	state: GithubTypes = initialState,
	action: github.GithubActions
) => {
	switch (action.type) {
		case getType(github.requestGithub.success):
			return {
				...state,
				githubData: action.payload,
			}

		case getType(github.requestGithub.failure):
			return {
				...state,
				error: action.payload,
			}

		default:
			return state
	}
}

export default githubReducer
