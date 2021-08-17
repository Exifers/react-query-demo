import db from '../../../db'
import { sleep } from '../../../utils'

const deleteFailureRate = 0

export default async (req, res) => {
  await sleep(1000)

  try {
    if (req.method === 'GET') {
      return await GET(req, res)
    } else if (req.method === 'PATCH') {
      return await PATCH(req, res)
    } else if (req.method === 'DELETE') {
      return await DELETE(req, res)
    }
  } catch (err) {
    console.error(err)
    res.status(500)
    res.json({ message: 'An unknown error occurred!' })
  }
}

async function GET(req, res) {
  const {
    query: { episodeId },
  } = req

  const row = (await db.get()).episodes.find((d) => d.id == episodeId)

  if (!row) {
    res.status(404)
    return res.send('Not found')
  }

  res.json(row)
}

async function PATCH(req, res) {
  const {
    query: { episodeId },
    body,
  } = req

  if (body.synopsis.includes('fail')) {
    res.status(500)
    res.json({ message: 'An unknown error occurred!' })
    return
  }

  const row = (await db.get()).episodes.find((d) => d.id == episodeId)

  if (!row) {
    res.status(404)
    return res.send('Not found')
  }

  delete body.id

  const newRow = {
    ...row,
    ...body,
  }

  await db.set((old) => {
    return {
      ...old,
      episodes: old.episodes.map((d) => (d.id == episodeId ? newRow : d)),
    }
  })

  res.json(newRow)
}

async function DELETE(req, res) {
  const {
    query: { episodeId },
  } = req

  if (Math.random() < deleteFailureRate) {
    res.status(500)
    res.json({ message: 'An unknown error occurred!' })
    return
  }

  const row = (await db.get()).episodes.find((d) => d.id == episodeId)

  if (!row) {
    res.status(404)
    return res.send('Not found')
  }

  await db.set((old) => {
    return {
      ...old,
      episodes: old.episodes.filter((d) => d.id != episodeId),
    }
  })

  res.status(200)
  res.send('Resource Deleted')
}
