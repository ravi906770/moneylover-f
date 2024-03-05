import React from 'react'
import ErrorBoundary from './ErrorBoundry'
import Buggy from './Buggy'
import FallBackUI from './FallbackUI'


type Props = {}

const Error = (props: Props) => {
  return (
    <>
    <h1>Example</h1>
    <ErrorBoundary FallBackUI={<FallBackUI/>}>
        <Buggy/>
    </ErrorBoundary>
    </>
  )
}

export default Error