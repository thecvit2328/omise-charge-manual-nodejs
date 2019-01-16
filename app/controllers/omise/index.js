import { omise } from '../../libs'

const omiseService = {
  charge: (req, res) => {
    const { omiseCustomerId, omiseCardId, amount } = req.body
    omise.charges.create(
      {
        amount,
        currency: 'thb',
        customer: omiseCustomerId,
        card: omiseCardId
      },
      function(error, response) {
        if (error) res.send(error)
        /* Response. */
        try {
          const { id, status, amount } = response
          res.status(200).json({ id, status, amount })
        } catch (error) {
          res.json(error)
        }
      }
    )
  }
}

export default omiseService
