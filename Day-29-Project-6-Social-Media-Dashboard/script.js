// Array to store posts
let posts = [];
let currentUser = null;

// DOM Elements
const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');
const postForm = document.getElementById('post-form');
const postFeed = document.getElementById('post-feed');
const postModal = document.getElementById('post-modal');
const closeModal = document.getElementById('close-modal');
const logoutButton = document.getElementById('logout-button'); // Logout Button

// Event Listeners
loginForm.addEventListener('submit', handleLogin);
registrationForm.addEventListener('submit', handleRegistration);
postForm.addEventListener('submit', createPost);
closeModal.addEventListener('click', closePostModal);
logoutButton.addEventListener('click', handleLogout); // Handle Logout

// Initialize
window.onload = () => {
    currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        loginForm.style.display = 'none';
        registrationForm.style.display = 'none';
        postForm.style.display = 'block';
        logoutButton.style.display = 'block';
        displayPosts();
    } else {
        loginForm.style.display = 'block';
        registrationForm.style.display = 'block';
        postForm.style.display = 'none';
        logoutButton.style.display = 'none';
    }
};

// Handle user login
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            currentUser = username;
            localStorage.setItem('currentUser', username);
            loginForm.style.display = 'none';
            registrationForm.style.display = 'none';
            postForm.style.display = 'block';
            logoutButton.style.display = 'block';
            displayPosts();
        } else {
            alert('Invalid username or password.');
        }
    } else {
        alert('Please enter username and password.');
    }
}

// Handle user registration
function handleRegistration(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (username && password) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.username === username);

        if (existingUser) {
            alert('Username already exists.');
        } else {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful! You can now log in.');
            loginForm.style.display = 'block';
            registrationForm.style.display = 'none';
        }
    } else {
        alert('Please enter username and password.');
    }
}

// Handle user logout
function handleLogout() {
    localStorage.removeItem('currentUser'); // Remove currentUser from localStorage
    currentUser = null;
    loginForm.style.display = 'block';
    registrationForm.style.display = 'block';
    postForm.style.display = 'none';
    logoutButton.style.display = 'none';
    alert('You have successfully logged out.');
}

// Create a new post
function createPost(event) {
    event.preventDefault();
    const postText = document.getElementById('post-text').value;
    const postImage = document.getElementById('post-image').value;

    if (postText) {
        const newPost = {
            username: currentUser,
            text: postText,
            image: postImage,
            likes: 0,
            comments: [],
            timestamp: new Date().toLocaleString()
        };
        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));
        document.getElementById('post-text').value = '';
        document.getElementById('post-image').value = '';
        displayPosts();
    } else {
        alert('Please enter post text.');
    }
}

// Display posts
function displayPosts() {
    postFeed.innerHTML = '';
    posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>${post.username} <small>${post.timestamp}</small></h3>
            <p>${post.text}</p>
            ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
            <button class="like-btn" onclick="likePost(${index})">Like (${post.likes})</button>
            <button class="comment-btn" onclick="commentPost(${index})">Comment (${post.comments.length})</button>
            <button class="view-details-btn" onclick="showPostDetails(${index})">View Details</button>
        `;
        postFeed.appendChild(postDiv);
    });
}

// Like a post
function likePost(postIndex) {
    posts[postIndex].likes += 1;
    localStorage.setItem('posts', JSON.stringify(posts));
    displayPosts();
}

// Comment on a post
function commentPost(postIndex) {
    const comment = prompt('Enter your comment:');
    if (comment) {
        posts[postIndex].comments.push(comment);
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
    }
}

// Show post details in a modal
function showPostDetails(postIndex) {
    const post = posts[postIndex];
    document.getElementById('modal-username').innerText = post.username;
    document.getElementById('modal-text').innerText = post.text;
    if (post.image) {
        document.getElementById('modal-image').src = post.image;
        document.getElementById('modal-image').style.display = 'block';
    } else {
        document.getElementById('modal-image').style.display = 'none';
    }
    document.getElementById('modal-comments').innerHTML = post.comments.map(comment => `<li>${comment}</li>`).join('');
    postModal.style.display = 'block';
}

// Close post details modal
function closePostModal() {
    postModal.style.display = 'none';
}