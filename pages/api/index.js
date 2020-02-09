const fauna = require('faunadb');

const { query: q } = fauna;
const secret = process.env.faunakey;

const client = new fauna.Client({ secret });

module.exports = async (req, res) => {
  try {
    const dbs = await client.query(
      q.Map(
        q.Paginate(
          q.Match(q.Index('all_users')),
        ),
        (ref) => q.Get(ref),
      ),
    );

    res.status(200).json(dbs.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
