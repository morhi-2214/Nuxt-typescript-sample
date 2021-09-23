import { Middleware, Context } from '@nuxt/types'

const test: Middleware = ({ isHMR }: Context) => {
  console.log(isHMR)
}

export default test
