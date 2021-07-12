import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({

    isAuthenticated,
    component: Component,
    ...rest // el resto de datos indefinidos.

}) => {

    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route
            component={ (props) => (
                (isAuthenticated)
                    ? (<Component {...props} />)
                    :(<Redirect to="/login" />)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}