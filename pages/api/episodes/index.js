import shortid from 'shortid'
import db from '../../../db'
import { sleep } from '../../../utils'

//
const failureRate = 0

export default async (req, res) => {
  await sleep(1000)

  try {
    if (req.method === 'GET') {
      return await GET(req, res)
    } else if (req.method === 'POST') {
      return await POST(req, res)
    }
  } catch (err) {
    console.error(err)
    res.status(500)
    res.json({ message: 'An unknown error occurred!' })
  }
}

async function GET(req, res) {
  const {
    query: { pageOffset, pageSize, season },
  } = req

  const episodes = (await db.get()).episodes.map((d) => ({
    ...d,
    body: d.body.substring(0, 50) + (d.body.length > 50 ? '...' : ''), // Don't return full body in list calls
  })).filter(episode => episode.season.toString() === season || season === 'all')

  if (Number(pageSize)) {
    const start = Number(pageSize) * Number(pageOffset)
    const end = start + Number(pageSize)
    const page = episodes.slice(start, end)

    return res.json({
      items: page,
      nextPageOffset: episodes.length > end ? Number(pageOffset) + 1 : undefined,
    })
  }

  res.json(episodes)
}

async function POST(req, res) {
  if (Math.random() < failureRate) {
    res.status(500)
    res.json({ message: 'An unknown error occurred!' })
    return
  }

  const row = {
    id: shortid.generate(),
    ...req.body,
  }

  await db.set((old) => {
    return {
      ...old,
      episodes: [...old.episodes, row],
    }
  })

  res.json(row)
}
