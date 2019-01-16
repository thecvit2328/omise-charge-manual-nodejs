import config from '../../config'
import omiseService from 'omise'

export default omiseService({
  secretKey: config.omiseSecretKey,
  omiseVersion: '2015-09-10'
})
