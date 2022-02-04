// **  Initial State
const initialState = {
  method: 1,
  email: '',
  phone: '',
  verificationCode: '',
  fullname: '',
  accountId: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log(action.data)
      return {
        ...state,
        ...action.data
        // email: action.data.email,
        // phone: action.data.phone,
        // method: action.data.method,
        // fullname: action.data.fullname,
        // accountId: action.data.accountId,
        // verificationCode: action.data.verificationCode
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
