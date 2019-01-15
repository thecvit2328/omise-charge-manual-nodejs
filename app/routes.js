import { charge } from './omise/'

export default router => {
  router.post('/api/omise/charge/', charge)
}
