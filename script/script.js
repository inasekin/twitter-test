'use strict';

class Twitter {
    constructor(listElem) {
        super();
        this.tweets = new Posts({});
        this.elements = {
            listElem: document.querySelector(listElem)
        }
    }

    renderPosts() {

    }

    changeSort() {

    }

    showUserPost() {

    }

    showLikePost() {

    }

    showAllPost() {

    }

    openMpdal() {

    }
}

class Posts {
    constructor({
        posts = []
    }) {
        super();
        this.posts = posts;
    }

    addPost(tweet) {
        const post = new Post(post);
        this.posts.push(post);
    }

    deletePost(id) {

    }

    likePost(id) {

    }
}

class Post {
    constructor(param) {
        super();
        this.id = param.id;
        this.userName = param.userName;
        this.nickName = param.nickName;
        this.postData = param.postData;
        this.label = param.label;
        this.image = param.image;
        this.likes = param.likes;
        this.liked = false;
    }

    changeLike() {
        this.liked = !this.liked;
        if (this.liked) {
            this.liked++;
        } else {
            this.liked--;
        }
    }
}

new Twitter({
    listElem: '.tweet-list'
})