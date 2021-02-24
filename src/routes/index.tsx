import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import githubPage from '@src/routes/pages/githubPage'
import Home from '@src/hooks/home'
import PrivateRoute from './PrivateRoute'
import testPage from './pages/testPage'
import NotFound from './NotFound'

const Root = () => (
	<Router>
		<Switch>
			<Route path="/" exact={true} component={Home} />
			<Route path="/git" exact={true} component={githubPage} />
			<PrivateRoute path="/test" exact={true} component={testPage} />
			<Route path="*" to="/error" component={NotFound} />
		</Switch>
	</Router>
)

export default Root as any
