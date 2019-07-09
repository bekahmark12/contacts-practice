import micro, {json} from 'micro'
import { router, get, post, put, del } from 'microrouter'

import Datastore from 'nedb-promise' 
  const db = new Datastore({ filename: 'contacts.db', autoload: true })




const server = micro(
    router(
      get('/', async (req, res) => {
        console.log('Got')
        return await db.find({})
      }),
      get('/:id', async (req, res) => {
        console.log('Gender')
        return []
      }),
      post('/', async (req, res) => {
        console.log('Posted')
        const body = await json(req)
        return await db.insert(body)
      }),
      put('/:id', async (req, res) => {
        console.log('Posted')
        const body = await json(req)
        console.log(body)
        return body
      }),
      del('/:id', async (req, res) => {
        console.log('Posted')
        const body = await json(req)
        console.log(body)
        return body
      }),
    ),
  )
  
  server.listen(4000, () => console.log(`Server started!`))
  