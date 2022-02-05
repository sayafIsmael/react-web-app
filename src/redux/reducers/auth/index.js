// **  Initial State
const initialState = {
  method: 1,
  email: '',
  phone: '',
  verificationCode: '',
  fullname: '',
  accountId: '',
  password: '',
  confirmPassword: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        ...action.data
      }
    case 'LOGOUT':
      const obj = { ...action }
      delete obj.type
      return { ...state, ...obj }
    default:
      return state
  }
}

export default authReducer
