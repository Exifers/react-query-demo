import React from 'react'
import { Link } from 'react-router-dom'

import EpisodeForm from '../../components/EpisodeForm'
import { Loader } from '../../components/styled'

import useEpisodes from '../../hooks/useEpisodes'
import useCreateEpisode from '../../hooks/useCreateEpisode'

export default function Episodes() {
  const episodesQuery = useEpisodes()
  const [createEpisode, createEpisodeInfo] = useCreateEpisode()

  const onSubmit = async (values) => {
    await createEpisode(values)
    episodesQuery.fetch()
  }

  return (
    <section>
      <div>
        <div>
          {episodesQuery.isLoading ? (
            <span>
              <Loader /> Loading
            </span>
          ) : (
            <>
              <h3>Episodes</h3>
              <ul>
                {episodesQuery.data.map((post) => (
                  <li key={post.id}>
                    <Link to={`./${post.id}`}>{post.title}</Link>
                  </li>
                ))}
              </ul>
              <br />
            </>
          )}
        </div>
      </div>
      <hr />
      <div>
        <h3>Create New Episode</h3>
        <div>
          <EpisodeForm
            onSubmit={onSubmit}
            clearOnSubmit
            submitText={
              createEpisodeInfo.isLoading
                ? 'Saving...'
                : createEpisodeInfo.isError
                ? 'Error!'
                : createEpisodeInfo.isSuccess
                ? 'Saved!'
                : 'Create Episode'
            }
          />
        </div>
      </div>
    </section>
  )
}
