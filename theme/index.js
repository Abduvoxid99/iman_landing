import { createMuiTheme } from '@material-ui/core'
import typography from './typography'
import overrides from './overrides'

const theme = createMuiTheme({
  overrides,
  typography,
})

export default theme
