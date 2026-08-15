// Elements Selection
const backendHealthText = document.getElementById("backend-health-text");
const backendHealthIndicator = document.getElementById("backend-health-indicator");
const apiStatusVal = document.getElementById("api-status-val");
const messageContainer = document.getElementById("message-container");
const messageElement = document.getElementById("message");

// Perform backend Express API health check fetch
async function checkBackendHealth() {
    backendHealthText.textContent = "Connecting...";
    backendHealthIndicator.className = "live-indicator";
    apiStatusVal.textContent = "Checking...";
    apiStatusVal.className = "stat-value";
    
    try {
        const response = await fetch("http://50.19.45.123:5000/api/message");
        
        if (response.ok) {
            const data = await response.json();
            
            // Health Card Info
            backendHealthText.textContent = "Healthy";
            backendHealthIndicator.className = "live-indicator";
            
            // API Status Row
            apiStatusVal.textContent = "200 OK";
            apiStatusVal.className = "stat-value success";
            
            // Render styled raw JSON body
            messageContainer.className = "terminal-block";
            messageElement.innerHTML = `HTTP/1.1 200 OK<br>Content-Type: application/json<br><br>${JSON.stringify(data, null, 2)}`;
        } else {
            throw new Error(`HTTP Error ${response.status}`);
        }
    } catch (err) {
        // Fallback for offline backend connection
        backendHealthText.textContent = "Offline";
        backendHealthIndicator.className = "live-indicator error";
        
        apiStatusVal.textContent = "Failed / Refused";
        apiStatusVal.className = "stat-value error";
        
        messageContainer.className = "terminal-block error-text";
        messageElement.innerHTML = `CONNECTION ERROR<br>Host: localhost:5000<br>Status: Refused<br><br>Backend Not Reachable ❌`;
    }
}

// Automatically fetch backend status when the page loads
window.addEventListener("DOMContentLoaded", checkBackendHealth);
