import Admin from 'admin/route'
import Doc from 'doc/route'

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
