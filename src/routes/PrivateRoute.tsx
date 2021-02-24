import React, { ComponentType } from 'react'
import { Redirect, Route } from 'react-router-dom'

interface PrivateRouteProps {
	component: any
	path: string
	exact: boolean
}

const PrivateRoute = (props: PrivateRouteProps) => {
	const { component: Component, ...rest } = props
	console.log('rest', rest)
	return (
		<Route
			{...rest}
			render={(props) =>
				// test 용
				localStorage.getItem('auth') ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	)
}

export default PrivateRoute
