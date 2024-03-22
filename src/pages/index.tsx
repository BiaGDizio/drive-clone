import { NextPage } from 'next'

import { Home } from '@pages/Home'
import { withAuthentication } from '@hooks/withAuthentication'

const Homepage: NextPage = () => {
  return withAuthentication(<Home />)
}

export default Homepage
