/* eslint-disable comma-dangle */

class Episode {
  constructor(id, title, description, datePublishedPretty, duration, link, imageUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.datePublished = datePublishedPretty;
    this.duration = duration;
    this.link = link;
    this.imageUrl = imageUrl;
  }
}

export default Episode;
