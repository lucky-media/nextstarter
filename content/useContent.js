import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getCollection(folder) {
  const files = fs.readdirSync(`${process.cwd()}/content/${folder}`);

  const items = files.map((filename) => {
    const markdownWithData = fs
      .readFileSync(path.join(`${process.cwd()}/content/${folder}/${filename}`))
      .toString();

    let { data } = matter(markdownWithData);

    return {
      data: {
        ...data,
      },
      slug: filename.replace(".md", ""),
    };
  });

  return items;
}

module.exports = {
  getCollection,
};
