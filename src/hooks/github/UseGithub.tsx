import { requestGithub } from '@src/store/github/github.action'
import { RootState } from '@src/store/rootReducer'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UseGithub: React.FC = () => {
	const dispatch = useDispatch()
	const { githubData } = useSelector((state: RootState) => state.github)

	useEffect(() => {
		dispatch(requestGithub.request('nohkukhyun'))
	}, [])

	return <div>{githubData.type}</div>
}

export default UseGithub
