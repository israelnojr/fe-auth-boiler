/**
 * an array of publicly accissible routes
 * These routes do not require Authentication
 * @type {string[]}
 */

export const publicRoutes = [
    "/"
]

export const authRoutes = [
    "/login",
    "/register"
]

export const apiPrefix = "/api/auth"


export const DEFAULT_LOGIN_REDIRECT = '/settings'