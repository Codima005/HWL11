let amount = 100;
let monday = [
  ["Write a tutorial", 360],
  ["Some web development", 120],
];
let tuesday = [
  ["Keep writing that tutorial", 240],
  ["Some more web development", 360],
  ["A whole lot of nothing", 60],
];

let week = monday.concat(tuesday);

let PerfectWeek = week

  .map(function (item) {
    item[1] = item[1] / 60;
    return item;
  })
  .filter(function (item) {
    return item[1] <= 2;
  })
  .map(function (item) {
    item.push(item[1] * amount);
    return item;
  });

let vivod = PerfectWeek.map(function (item) {
  return `<tr>
            <td>${item[0]}</td>
            <td>${item[1]} hours</td>
            <td>${item[2]} $</td>
            </tr>`;
}).join(``);

let amountArr = PerfectWeek

    .reduce(function (sum, current, index) {
    sum += current[2];
    if (index !== PerfectWeek.length - 1) 
        return sum;
    else 
        return `<tr><td>Tasks amount: </td><td>${sum} $</td><tr>`;
}, 0);


document.write(`<table border = "1">
    <thead>
        <tr>
            <th>Work</th>
            <th>Time</th>
            <th>Price</th>
        </tr>
    </thead>
    <tfoot>
        ${amountArr}
    </tfoot>
    <tbody>
        ${vivod}
    </tbody>
</table>`);


