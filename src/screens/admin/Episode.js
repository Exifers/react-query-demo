import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

//

import useEpisode from '../../hooks/useEpisode'
import useSaveEpisode from '../../hooks/useSaveEpisode'
import useDeleteEpisode from '../../hooks/useDeleteEpisode'

import EpisodeForm from '../../components/EpisodeForm'
import { Loader } from '../../components/styled'

export default function Episode() {
  const { episodeId } = useParams()
  const navigate = useNavigate()

  const episodeQuery = useEpisode(episodeId)
  const [savePost, saveEpisodeInfo] = useSaveEpisode()
  const [deleteEpisode, deleteEpisodeInfo] = useDeleteEpisode()

  const onSubmit = async (values) => {
    await savePost(values)
    episodeQuery.fetch()
  }

  const onDelete = async () => {
    await deleteEpisode(episodeId)
    navigate('/admin')
  }

  return (
    <>
      {episodeQuery.isLoading ? (
        <span>
          <Loader /> Loading...
        </span>
      ) : (
        <div>
          <h3>{episodeQuery.data.title}</h3>
          <p>
            <Link to={`/episodes/${episodeQuery.data.id}`}>View Episode</Link>
          </p>
          <EpisodeForm
            initialValues={episodeQuery.data}
            onSubmit={onSubmit}
            submitText={
              saveEpisodeInfo.isLoading
                ? 'Saving...'
                : saveEpisodeInfo.isError
                ? 'Error!'
                : saveEpisodeInfo.isSuccess
                ? 'Saved!'
                : 'Save Episode'
            }
          />

          <p>
            <button onClick={onDelete}>
              {deleteEpisodeInfo.isLoading
                ? 'Deleting...'
                : deleteEpisodeInfo.isError
                ? 'Error!'
                : deleteEpisodeInfo.isSuccess
                ? 'Deleted!'
                : 'Delete Episode'}
            </button>
          </p>
        </div>
      )}
    </>
  )
}
