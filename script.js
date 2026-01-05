fetch(data.json)
  .then(res = res.json())
  .then(data = {
    const list = document.getElementById(chart);
    const type = list.dataset.type;

    let items = data[type];
    items.sort((a, b) = b.sales - a.sales);

    items.forEach((item, index) = {
      const pos = index + 1;

      if (pos  item.peak) item.peak = pos;
      if (pos === 1) item.weeksAt1++;

      const row = document.createElement(tr);
      row.innerHTML = `
        td${pos}td
        td${item.artist}td
        td${item.title}td
        td${item.sales.toLocaleString()}td
        td${item.weeks}td
        td${item.peak}td
        td${item.weeksAt1}td
      `;
      list.appendChild(row);
    });
  });
