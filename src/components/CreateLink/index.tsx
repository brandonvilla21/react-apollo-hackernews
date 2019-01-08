import React, { useState } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      url
      description
    }
  }
`

const CreateLink = () => {
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')

  return (
    <React.Fragment>
      <input
        className="mb2"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="A description for the link"
      />

      <input
        className="mb2"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="The URL for the link"
      />

      <Mutation mutation={POST_MUTATION} variables={{ description, url }}>
        {
          postMutation => <button onClick={() => postMutation()}>Submit</button>
        }
      </Mutation>
    </React.Fragment>
  )
}

export default CreateLink