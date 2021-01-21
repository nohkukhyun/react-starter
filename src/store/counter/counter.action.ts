import { ActionType, createAction } from "typesafe-actions";

export const increaseCount = createAction(
	'@counter/INCREASE_COUNT',
)<undefined>()

export const decreaseCount = createAction(
	'@counter/DECREASE_COUNT',
)<undefined>()


export const actions = {
	increaseCount,
	decreaseCount
}
export type countActions = ActionType<typeof actions>