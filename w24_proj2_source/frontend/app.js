// Assuming MessengerClient is available globally after including messenger.js
let alice, bob;

async function initializeChat() {
    const caKeyPair = await generateECDSA(); // Generate CA key pair
    const govKeyPair = await generateEG(); // Generate government key pair

    // Create MessengerClient instances for Alice and Bob
    alice = new MessengerClient(caKeyPair.pub, govKeyPair.pub);
    bob = new MessengerClient(caKeyPair.pub, govKeyPair.pub);

    // Generate certificates for Alice and Bob
    const aliceCertificate = await alice.generateCertificate('alice');
    const bobCertificate = await bob.generateCertificate('bob');

    // Sign and receive certificates
    const aliceCertSignature = await signWithECDSA(caKeyPair.sec, JSON.stringify(aliceCertificate));
    const bobCertSignature = await signWithECDSA(caKeyPair.sec, JSON.stringify(bobCertificate));

    await alice.receiveCertificate(bobCertificate, bobCertSignature);
    await bob.receiveCertificate(aliceCertificate, aliceCertSignature);
}

document.getElementById('sendButton').addEventListener('click', async function() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message) {
        // Send message from Alice to Bob
        const [header, ciphertext] = await alice.sendMessage('bob', message);
        displayMessage(`You: ${message}`);
        messageInput.value = ''; // Clear the input field

        // Simulate Bob receiving the message
        const receivedMessage = await bob.receiveMessage('alice', [header, ciphertext]);
        displayMessage(`Bob: ${receivedMessage}`);
    }
});

function displayMessage(message) {
    const chatWindow = document.getElementById('chatWindow');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

// Initialize the chat when the page loads
window.onload = initializeChat;