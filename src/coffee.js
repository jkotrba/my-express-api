import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const kind = req.query.kind;
  if(kind === 'tea') {
    return res.status(400).send('I\'m a coffee pot');
  }
  const coffee = getCoffee();
  res.send(coffee);
});


export function getCoffee() {
  return 'French Roast';
}

export default router;
