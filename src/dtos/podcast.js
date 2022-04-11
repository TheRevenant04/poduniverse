/* eslint-disable comma-dangle */
class Podcast {
  constructor(
    id,
    title,
    author,
    description,
    owner,
    link,
    imageUrl,
    categories
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.owner = owner;
    this.link = link;
    this.imageUrl = imageUrl;
    this.categories = categories;
  }

  setId(id) {
    this.id = id;
  }

  setTitle(title) {
    this.title = title;
  }

  setLink(link) {
    this.link = link;
  }

  setDescription(description) {
    this.description = description;
  }

  setAuthor(author) {
    this.author = author;
  }

  setOwner(owner) {
    this.owner = owner;
  }

  setImageUrl(url) {
    this.imageUrl = url;
  }

  setCategories(categories) {
    this.categories = categories;
  }
}
export default Podcast;
