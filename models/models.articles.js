const db = require("../db/connection");

exports.selectArticles = () => {
  const SQL = `
  SELECT articles.*, COUNT(comments.article_id) AS comment_count
FROM articles
LEFT JOIN comments ON comments.article_id = articles.article_id
GROUP BY articles.article_id
ORDER BY created_at desc`;
  return db.query(SQL).then((articles) => {
    return articles.rows;
  });
};
