// ** Initial State
const initialState = {
  isRTL: null,
  menuCollapsed: null,
  menuHidden: null,
  contentWidth: null
}

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_CONTENT_WIDTH':
      return { ...state, contentWidth: action.value }
    case 'HANDLE_MENU_COLLAPSED':
      window.localStorage.setItem('menuCollapsed', action.value)
      return { ...state, menuCollapsed: action.value }
    case 'HANDLE_MENU_HIDDEN':
      return { ...state, menuHidden: action.value }
    case 'HANDLE_RTL':
      return { ...state, isRTL: action.value }
    default:
      return state
  }
}

export default layoutReducer
