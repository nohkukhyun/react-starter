import { RootState } from '@src/store/rootReducer'
import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './modal.styles'

const Modal = () => {
	const { show, component } = useSelector((state: RootState) => state.modal)

	return (
		show && (
			<S.ModalWrapper>
				<S.ModalWrapperContent>{...component}</S.ModalWrapperContent>
			</S.ModalWrapper>
		)
	)
}

export default Modal
