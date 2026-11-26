// Server-only integration scaffold. Intentionally disabled until validation,
// rate limiting, privacy notice and consent are implemented.
module.exports = async function handler(req,res) {
  if(req.method!=='POST') return res.status(405).json({error:'Method not allowed'});
  return res.status(503).json({error:'Demo mode: Make integration is not enabled'});
};
