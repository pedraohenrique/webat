exports.getPagingData = (data, page, limit) => {
  const { count: totalDocs, rows: docs } = data;
  const currentPage = page ? +page : 1;
  const totalPages = Math.ceil(totalDocs / limit);

  return { totalDocs, docs, totalPages, currentPage };
};
