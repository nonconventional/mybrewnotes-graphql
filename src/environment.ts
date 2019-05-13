const defaultPort = 4000;

interface Environment {
  apollo: {
    introspection: boolean,
    playground: boolean,
    trace: boolean,
  },
  port: number|string,
}

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true',
    trace: process.env.APOLLO_TRACE === 'true',
  },
  port: process.env.PORT || defaultPort
};