const fauna = require('faunadb');

const { query } = fauna;
const secret = process.env.FAUNA_KEY;

const client = new fauna.Client({ secret });

export default async (req, res) => {
};
