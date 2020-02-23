import { query, Client } from 'faunadb';

const secret = process.env.FAUNA_KEY;
const client = new Client({ secret });

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const dbs = await client.query(
        query.Map(
          query.Paginate(
            query.Match(
              query.Index('find_user_by_name'), req.query.username,
            ),
          ),
          (ref) => query.Get(ref),
        ),
      );
      res.status(200).json(dbs.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { currentPosition } = JSON.parse(req.body);
      const response = await client.query(
        query.Update(
          query.Select('ref',
            query.Get(
              query.Match(
                query.Index('find_user_by_name'), req.query.username,
              ),
            )),
          {
            data: {
              currentPosition,
            },
          },
        ),
      );
      res.status(200);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
