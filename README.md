<h1 id="sphere---mobile-application">Sphere - Mobile Application</h1>
<h2 id="overview">Overview</h2>
<p><strong>Sphere</strong> is a mobile application designed to enhance employee engagement and convenience by offering seamless access to office canteen services, a game hub, and a voucher redemption system. Employees can use tokens to purchase food, play games, and redeem exciting vouchers, all within a single app.</p>
<h2 id="features">Features</h2>
<ul>
<li><strong>Token Wallet</strong>: Manage and track your token balance with ease.</li>
<li><strong>Canteen Services</strong>: Browse the canteen menu, add items to your cart, and place orders directly from your phone.</li>
<li><strong>Game Hub</strong>: Explore a variety of games, book play slots, and compete on leaderboards.</li>
<li><strong>Voucher Redemption</strong>: Redeem tokens for vouchers across various categories such as food, entertainment, and wellness.</li>
<li><strong>Notifications</strong>: Receive real-time updates on your orders, bookings, and special offers.</li>
<li><strong>Settings</strong>: Customize your app experience with preferences for notifications, language, and more.</li>
</ul>
<h2 id="installation">Installation</h2>
<h3 id="prerequisites">Prerequisites</h3>
<ul>
<li>Node.js</li>
<li>React Native CLI or Expo CLI (for Android/iOS app development)</li>
<li>Express (for backend development)</li>
</ul>
<h3 id="clone-the-repository">Clone the Repository</h3>
<pre><code class="language-bash">git clone https://github.com/Hashara13/Sphere-MobileApplication.git
cd Sphere-MobileApplication

Frontend Setup (React Native)

bash

cd frontend
npm install
npm start

Backend Setup (Express)

bash

cd backend
npm install
npm start

Folder Structure

markdown

Sphere-MobileApplication/
│
├── Sphere-frontend/               # React Native frontend code
│   ├── src/
│   │   ├── screens/
│   │   ├── components/
│   │   ├── navigation/
│   │   └── assets/
│   └── App.js
│
├── Sphere-backend/                # Express backend code
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── middleware/
│   └── server.js
│
├── data/                   # Data for testing and development
├── docs/                   # Documentation and project reports
└── README.md

How to Run

    Start the Backend Server: Navigate to the backend directory and run the Express server using npm start.
    Run the Frontend App: In the frontend directory, start the React Native app using npm start (or expo start if using Expo).
    Navigate the App: Use the bottom navigation bar to switch between the Home, Canteen, Game Hub, Vouchers, and Settings screens.
</code></pre>
