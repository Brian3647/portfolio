const argv = process.argv.slice(2);
const now = new Date();

const config = {
  title: argv[0],
  description: argv[1],
  tags: argv[2],
  categories: argv[3],
  date: `${now.getFullYear()}-${
    now.getMonth().toString().length > 1
      ? now.getMonth() + 1
      : "0" + (now.getMonth() + 1)
  }-${now.getDate()}`,
};

const res = `
+++
title = "${config.title}"
date = ${config.date}

[taxonomies]
tags = ${config.tags}
categories = ${config.categories}
+++
`.trim();

require("fs").writeFileSync("./content/" + config.title + ".md", res);
