module.exports = {
  convertCsv: (data) => {
    const csv = data.split(/\n/);

    const rows = csv.map((_) => _.split(/,/));
    const header = rows[0];

    const values = [];

    for (let i = 1; i < rows.length; i++) {
      let item = {};
      for (let j = 0; j < header.length; j++) {
        var number = parseInt(rows[i][j]);
        if (isNaN(number)) {
          item[header[j]] = rows[i][j];
        } else {
          item[header[j]] = number;
        }
      }
      values.push(item);
    }

    return values;
  },
};
