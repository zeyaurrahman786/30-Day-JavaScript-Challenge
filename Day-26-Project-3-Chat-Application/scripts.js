const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    console.log('Connected to the server');
};

ws.onmessage = (event) => {
    console.log(`Received: ${event.data}`);
};

ws.onclose = () => {
    console.log('Disconnected from the server');
};

document.getElementById('send-button').addEventListener('click', () => {
    const input = document.getElementById('chat-input');
    const message = input.value;
    ws.send(message);
    input.value = '';
});

ws.onmessage = (event) => {
    console.log(`Received: ${event.data}`);
    displayMessage(event.data);
};

function displayMessage(message) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
}

document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value;
    if (message.trim() !== '') {
        ws.send(message);
        input.value = '';
    }
}

function displayMessage(message) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

let username;

document.getElementById('join-button').addEventListener('click', () => {
    username = document.getElementById('username-input').value.trim();
    if (username) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('chat-container').style.display = 'block';
    }
});

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value;
    if (message.trim() !== '') {
        const messageObject = { username, message };
        ws.send(JSON.stringify(messageObject));
        input.value = '';
    }
}

ws.onmessage = (event) => {
    const messageObject = JSON.parse(event.data);
    const formattedMessage = `${messageObject.username}: ${messageObject.message}`;
    displayMessage(formattedMessage);
};

function displayMessage(message, isMine = false) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message');
    if (isMine) {
        messageElement.classList.add('mine');
    } else {
        messageElement.classList.add('theirs');
    }
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

