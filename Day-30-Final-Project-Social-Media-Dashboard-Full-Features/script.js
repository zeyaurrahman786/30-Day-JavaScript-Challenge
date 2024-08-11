document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const postForm = document.getElementById('post-form');
    const profileContainer = document.getElementById('profile-container');
    const postFormContainer = document.getElementById('post-form-container');
    const postsContainer = document.getElementById('posts-container');
    const notificationsContainer = document.getElementById('notifications-container');
    const postsFeed = document.getElementById('posts-feed');
    const notificationsFeed = document.getElementById('notifications-feed');
    
    // User Authentication
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser')) || null;

    function showDashboard() {
        document.getElementById('auth-container').classList.add('hidden');
        profileContainer.classList.remove('hidden');
        postFormContainer.classList.remove('hidden');
        postsContainer.classList.remove('hidden');
        notificationsContainer.classList.remove('hidden');

        displayProfile();
        displayPosts();
        displayNotifications();
    }

    function displayProfile() {
        document.getElementById('profile-username').textContent = `Username: ${loggedInUser.username}`;
        document.getElementById('profile-email').textContent = `Email: ${loggedInUser.email}`;
        document.getElementById('profile-picture').src = loggedInUser.profilePicture || 'images/default.png';
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            sessionStorage.setItem('loggedInUser', JSON.stringify(user));
            loggedInUser = user;
            showDashboard();
        } else {
            alert('Invalid username or password');
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        const userExists = users.some(u => u.username === username);
        if (!userExists) {
            const newUser = { username, email, password, profilePicture: null };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert('User registered successfully');
        } else {
            alert('Username already exists');
        }
    });

    // User Profile Update
    document.getElementById('edit-profile').addEventListener('click', () => {
        document.getElementById('edit-profile-form').classList.toggle('hidden');
    });

    document.getElementById('save-profile').addEventListener('click', () => {
        const newUsername = document.getElementById('edit-username').value || loggedInUser.username;
        const newEmail = document.getElementById('edit-email').value || loggedInUser.email;
        const newPicture = document.getElementById('edit-picture').files[0];

        if (newPicture) {
            const reader = new FileReader();
            reader.onloadend = () => {
                loggedInUser.profilePicture = reader.result;
                saveProfile(newUsername, newEmail);
            };
            reader.readAsDataURL(newPicture);
        } else {
            saveProfile(newUsername, newEmail);
        }
    });

    function saveProfile(username, email) {
        loggedInUser.username = username;
        loggedInUser.email = email;
        sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        users = users.map(u => u.username === loggedInUser.username ? loggedInUser : u);
        localStorage.setItem('users', JSON.stringify(users));
        displayProfile();
        document.getElementById('edit-profile-form').classList.add('hidden');
    }

    // Post Creation
    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const postText = document.getElementById('post-text').value;
        const postImage = document.getElementById('post-image').files[0];
        let imageSrc = null;

        if (postImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                imageSrc = reader.result;
                createPost(postText, imageSrc);
            };
            reader.readAsDataURL(postImage);
        } else {
            createPost(postText, imageSrc);
        }
    });

    function createPost(text, image) {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        const newPost = { text, image, username: loggedInUser.username, likes: 0, comments: [] };
        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
    }

    function displayPosts() {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        postsFeed.innerHTML = '';
        posts.forEach((post, index) => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `
                <h3>${post.username}</h3>
                <p>${post.text}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
                <div class="post-interactions">
                    <button onclick="likePost(${index})">Like (${post.likes})</button>
                    <button onclick="toggleComment(${index})">Comment (${post.comments.length})</button>
                    <div class="comments hidden" id="comments-${index}">
                        <textarea id="comment-text-${index}" placeholder="Add a comment..."></textarea>
                        <button onclick="addComment(${index})">Submit</button>
                        <div id="comments-list-${index}"></div>
                    </div>
                </div>
            `;
            postsFeed.appendChild(postDiv);
        });
    }

    window.likePost = function(index) {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts[index].likes++;
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
        addNotification(`Your post was liked by ${loggedInUser.username}`);
    };

    window.toggleComment = function(index) {
        document.getElementById(`comments-${index}`).classList.toggle('hidden');
    };

    window.addComment = function(index) {
        const commentText = document.getElementById(`comment-text-${index}`).value;
        if (commentText) {
            const posts = JSON.parse(localStorage.getItem('posts')) || [];
            posts[index].comments.push({ username: loggedInUser.username, text: commentText });
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts();
            addNotification(`Your post was commented on by ${loggedInUser.username}`);
        }
    };

    // Notifications
    function addNotification(message) {
        const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
        notifications.push({ message, time: new Date().toLocaleString() });
        localStorage.setItem('notifications', JSON.stringify(notifications));
        displayNotifications();
    }

    function displayNotifications() {
        const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
        notificationsFeed.innerHTML = '';
        notifications.forEach(notification => {
            const notificationDiv = document.createElement('div');
            notificationDiv.textContent = `${notification.message} - ${notification.time}`;
            notificationsFeed.appendChild(notificationDiv);
        });
    }

    if (loggedInUser) {
        showDashboard();
    }
});
