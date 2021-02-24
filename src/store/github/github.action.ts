import { createAsyncAction, ActionType } from 'typesafe-actions'

export const requestGithub = createAsyncAction(
	'@github/REQUEST_GITHUB',
	'@github/REQUEST_GITHUB_SUCCESS',
	'@github/REQUEST_GITHUB_FAILURE'
)<string, any, any>()

export const actions = {
	requestGithub,
}

export type GithubActions = ActionType<typeof actions>
