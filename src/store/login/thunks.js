import axios from "axios";
import { login_error, login_init, login_success } from "./actions";

export const loginThunk = ({ username, password }, cb) => {
  return (dispatch, getState) => {
    dispatch(login_init);
    try {
      axios({
          url:"http://localhost:4000/login",
          method: 'post',
          headers: {
            "Content-Type": "application/json",
          },
          data: { email: username, password: password },
        })
        .then((response) => {   
            debugger
          if (accessToken) {
            localStorage.accessToken = accessToken;
            dispatch(
              login_success({
                accessToken,
                id: user.id,
              })
            );
          }
        });
    } catch (error) {
      dispatch(login_error(error));
    }
  };
};
