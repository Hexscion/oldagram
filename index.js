let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        caption: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        caption: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        caption: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsEL = document.getElementById("posts")

function renderPosts() {
    postsEL.innerHTML=""
    for (i=0; i<posts.length; i++) {
        let idValue = i
        nameValue = posts[i].name
        usernameValue = posts[i].username
        locationValue = posts[i].location
        avatarValue = posts[i].avatar
        postValue = posts[i].post
        captionValue = posts[i].caption
        likesValue = posts[i].likes
        let newDiv1 = document.createElement("div")
        newDiv1.classList.add("post-container")
        let newDiv2 = document.createElement("div")
        newDiv2.classList.add("post-header")
        let newDiv3 = document.createElement("div")
        newDiv3.classList.add("post-sub-header")
        let newDiv4 = document.createElement("div")
        newDiv4.classList.add("post-footer")
        let newAvatar = document.createElement("img")
        newAvatar.classList.add("post-avatar")
        newAvatar.src = avatarValue
        let newName = document.createElement("h1")
        newName.textContent = nameValue
        let newLocation = document.createElement("h2")
        newLocation.textContent = locationValue
        let newPost = document.createElement("img")
        newPost.classList.add("post-image")
        newPost.src = postValue
        let newHeart = document.createElement("img")
        newHeart.classList.add("post-icon")
        newHeart.src = "images/icon-heart.png"
        newHeart.addEventListener("dblclick", function() {
            posts[idValue].likes += 1
            renderPosts()
        })
        let newComment = document.createElement("img")
        newComment.classList.add("post-icon")
        newComment.src = "images/icon-comment.png"
        let newShare = document.createElement("img")
        newShare.classList.add("post-icon")
        newShare.src = "images/icon-share.png"
        let newLikes = document.createElement("h1")
        newLikes.textContent = likesValue + " likes"
        let newUsername = document.createElement("h3")
        newUsername.textContent = usernameValue
        let newCaption = document.createElement("p")
        newCaption.textContent = captionValue
        newDiv4.append(newHeart, newComment, newShare, newLikes, newUsername, newCaption)
        newDiv3.append(newName, newLocation)
        newDiv2.append(newAvatar, newDiv3)
        newDiv1.append(newDiv2, newPost, newDiv4)
        postsEL.append(newDiv1)
    }
}

renderPosts()