export default function () {
  return (
    <div className="container mx-auto max-w-prose p-10 prose">
      <h1>free farcaster hub</h1>
      <p>gm folks, this is a free farcaster hub with no fuss</p>
      <p>you can connect with the following credentials:</p>
      <pre>
        <code>
          {`url: hub.freefarcasterhub.com
httpapi_port: 2281
gossipsub_port: 2282
grpc_port: 2283`}
        </code>
      </pre>
      <p>
        also see{' '}
        <a href="https://hub.freefarcasterhub.com" target="_blank">
          the graphana dashboard
        </a>{' '}
        to check the status
      </p>
      <p>
        built by{' '}
        <a href="https://warpcast.com/borodutch" target="_blank">
          @borodutch
        </a>{' '}
        with love, consider following, tipjar:{' '}
        <a href="https://app.ens.domains/borodutch.eth" target="_blank">
          borodutch.eth
        </a>
      </p>
    </div>
  )
}
