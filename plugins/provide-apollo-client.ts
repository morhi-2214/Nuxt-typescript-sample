import { provide } from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'
import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app/',
})

export default function ({ app }: { app: any }) {
  app.setup = () => {
    provide(DefaultApolloClient, apolloClient)
  }
}
