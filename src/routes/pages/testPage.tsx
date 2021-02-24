import React from 'react'
import { openModal } from '@src/store/modal/modal.action'
import { useSelector, useDispatch } from 'react-redux'
import ModalTest from '@src/components/modalTest'

const testPage = () => {
	const dispatch = useDispatch()

	const handlePopup = () => {
		const renderComponent = <ModalTest></ModalTest>
		dispatch(openModal(renderComponent))
	}

	return (
		<div>
			<button onClick={handlePopup}>modal open</button>
		</div>
	)
}

export default testPage
