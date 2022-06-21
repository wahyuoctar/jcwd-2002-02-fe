import axiosInstance from "config/api"
import jsCookie from "js-cookie"

const loginDispatch = (values, setSubmitting) => {
    return async (dispatch) => {
        try {
            const res = await axiosInstance.post("/auth/login", {
                credential: values.credential,
                password: values.password
            })

            const userResponse = res.data.result
            jsCookie.set("user_auth_token", userResponse.token)

            dispatch({
                type: "auth/login",
                payload: userResponse.user
            })

            setSubmitting(false)
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);

        }
    }
}

export default loginDispatch