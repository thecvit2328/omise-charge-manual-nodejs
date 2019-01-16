import { omiseService } from './controllers/'
const { check } = require('express-validator/check')

export default router => {
  router.post('/api/omise/charge/', [check('amount').isLength({ min: 3 })], omiseService.charge)
}
