'use strict';

class Posts {
    constructor(param) {
        super();
        this.tweets = param.post;
    }

    addPost(tweet) {
        const post = new Post(tweet);
        this.tweets.push(post);
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