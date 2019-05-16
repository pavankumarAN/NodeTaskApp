class Task {
    constructor(id, title, description, resourceUrl, completed, date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.resourceUrl = resourceUrl;
        this.completed = false;
        this.date = new Date();
    }
}

module.exports = Task;