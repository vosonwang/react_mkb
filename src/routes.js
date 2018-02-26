import Admin from 'admin/views/index'
import Doc from 'doc/views'

const routes = [
  {
    path: '/doc',
    component: Doc
  },
  {
    path: '/admin',
    component: Admin
  }
]

export default routes
