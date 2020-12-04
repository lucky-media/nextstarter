import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function arrayHasKey(arr, key) {
  for (const obj of arr) {
    if (key in obj) {
      return true
    }
  }
  return false
}

function getCollection(folder, hasContent = false) {
  const files = fs.readdirSync(`${process.cwd()}/content/${folder}`)

  let items = files.map((filename) => {
    const markdownWithData = fs
      .readFileSync(path.join(`${process.cwd()}/content/${folder}/${filename}`))
      .toString()

    let { data, content } = matter(markdownWithData)

    if (hasContent) {
      return {
        ...data,
        content: {
          ...content,
        },
        slug: filename.replace('.md', ''),
      }
    }

    return {
      ...data,
      slug: filename.replace('.md', ''),
    }
  })

  if (arrayHasKey(items, 'date')) {
    // Sort by date
    items.sort((a, b) => b.date - a.date)

    items = items.map((item) => {
      return {
        ...item,
        date: item.date.toLocaleDateString(),
      }
    })
  }

  return items
}

module.exports = {
  getCollection,
}
