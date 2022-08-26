module.exports = (err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "internal" });
};
// minor wording
// TODO clean this
// revisit later
// left a note for myself
// left a note for myself
// check perf here
// check perf here
