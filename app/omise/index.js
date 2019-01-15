import omiseService from 'omise'

const omise = omiseService({
  secretKey: 'skey_test_50d0myooub7ic3vh9v8',
  omiseVersion: '2015-09-10'
})

export const charge = (req, res) => {
  const { omiseCustomerId, amount } = req.body
  console.log(req.body)
  omise.charges.create(
    {
      amount,
      currency: 'thb',
      customer: omiseCustomerId
    },
    function(error, response) {
      console.log({ response })
      /* Response. */
      try {
        const { id, status } = response
        res.json({ id, status })
      } catch (error) {
        res.json(error)
      }
    }
  )
}
