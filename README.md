
# Netflix Clone

This is a Netflix Clone web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application allows users to browse a catalog of movies, view detailed movie information, and manage their personal watchlist. Firebase is used for user authentication, and movie data is fetched from the TMDB API. 

## Features

This Netflix Clone replicates many core functionalities of the real Netflix platform, providing an engaging user experience. The app includes:

- **User Authentication**:
  - Secure user registration and login functionality using **Firebase Authentication**.
  - Users can create accounts, log in, and manage their sessions with persistent login states.
  - Password recovery via Firebase’s built-in services.

- **Comprehensive CRUD Functionality**:
  - **Create**: Users can create new accounts and add movies to their personal watchlist.
  - **Read**: Users can browse movies, view detailed information such as ratings, synopsis, genres, and trailers. They can also search for specific movies using the search feature.
  - **Update**: Users can manage their watchlist by adding or removing movies. Changes are saved in the MongoDB database and persist across sessions.
  - **Delete**: Users can remove unwanted movies from their watchlist, providing full control over their personal movie library.

- **Movie Data from TMDB API**:
  - The movie data (titles, genres, ratings, release dates, synopses) is fetched from the **TMDB API**. This ensures the catalog is up-to-date with the latest movie releases.
  - Users can browse movies by categories such as **Trending**, **Top Rated**, and **Popular**.

- **Movie Search**:
  - Users can search for any movie using the search bar. The app fetches relevant results in real-time from the TMDB API, providing users with a seamless movie discovery experience.

- **Movie Trailers**:
  - Users can view movie trailers directly from the app on the movie detail page, enhancing the overall viewing experience.

- **Watchlist Management**:
  - Users can create a personalized **Watchlist** by adding or removing movies.
  - The Watchlist is saved in **MongoDB**, ensuring that users can return to their list later, even after logging out.

- **Responsive Design**:
  - The application is fully responsive, ensuring that users can enjoy a seamless experience on any device, whether it’s a desktop, tablet, or mobile phone.

## Technology Stack

- **Frontend**:
  - **React.js**: For building the user interface.
  - **Axios**: For making HTTP requests to the TMDB API.
  - **Styled-Components**: For styling React components.
  
- **Backend**:
  - **Node.js** and **Express.js**: For server-side logic and API requests.
  - **MongoDB**: For storing user data such as watchlists.
  - **Firebase Authentication**: For managing secure user authentication and authorization.
  - **TMDB API**: To fetch movie data (titles, genres, trailers, etc.).

- **Other Tools**:
  - **Firebase**: For user authentication and session management.
  - **Environment Variables**: For secure configuration of API keys and database URIs.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- **Node.js** (v14+)
- **npm** (v6+)
- **MongoDB** (local installation or MongoDB Atlas)
- **Firebase account** (for authentication)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**:

   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```

   - For the backend:
     ```bash
     cd backend
     npm install
     ```

3. **Set up environment variables**:

   You need to create two `.env` files—one for the frontend and one for the backend.

   - **Backend** `.env` (in `backend/.env`):
     ```bash
     MONGO_URI=<your_mongodb_connection_string>
     TMDB_API_KEY=<your_tmdb_api_key>
     PORT=5000
     ```

   - **Frontend** `.env` (in `frontend/.env`):
     ```bash
     REACT_APP_TMDB_API_KEY=<your_tmdb_api_key>
     REACT_APP_FIREBASE_API_KEY=<your_firebase_api_key>
     REACT_APP_FIREBASE_AUTH_DOMAIN=<your_firebase_auth_domain>
     REACT_APP_FIREBASE_PROJECT_ID=<your_firebase_project_id>
     ```

   - To obtain the TMDB API key, register on the [TMDB website](https://www.themoviedb.org/documentation/api) and follow the instructions.
   - For Firebase keys, set up a project on the [Firebase Console](https://console.firebase.google.com/) and configure the Firebase Authentication service.

4. **Set up MongoDB**:

   - If using MongoDB locally, make sure it’s running on your machine. For MongoDB Atlas, replace the `MONGO_URI` in the backend `.env` file with your connection string.

5. **Run the application**:

   - To run the backend:
     ```bash
     cd backend
     npm run dev
     ```

   - To run the frontend:
     ```bash
     cd frontend
     npm run dev
     ```

   The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

## Folder Structure

```bash
netflix-clone/
├── backend/                # Backend application (Node.js, Express.js)
│   ├── models/             # MongoDB models (e.g., User, Watchlist)
│   ├── routes/             # API routes (e.g., user, movie, watchlist routes)
│   ├── controllers/        # Controllers for handling logic (e.g., managing watchlists)
│   └── server.js           # Entry point for backend server
├── frontend/               # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable components (e.g., Navbar, MovieCard)
│   │   ├── pages/          # Pages (e.g., Home, Login, Profile, Watchlist)
│   │   ├── services/       # API call services (e.g., TMDB API)
│   ├── public/             # Static files (index.html, favicon, etc.)
└── README.md               # Project documentation
```

## APIs Used

- **TMDB API**:
  - Provides movie data such as titles, genres, trailers, and ratings.
  - Explore available endpoints [here](https://developers.themoviedb.org/3/getting-started/introduction).

- **Firebase Authentication**:
  - Used for user registration, login, and session persistence.
  - Supports email/password authentication and other providers if enabled.

## Future Enhancements

- **User Profiles**: Support for multiple user profiles within a single account.
- **Search Filters**: Add advanced filters for sorting movies by genre, year, and ratings.
- **Payment Integration**: Allow users to upgrade to premium plans using payment gateways.
- **Movie Recommendations**: Develop a recommendation system based on users' watch history.

## Troubleshooting

If you encounter any issues while setting up or running the project:
- Ensure your `.env` files are configured correctly.
- Verify that MongoDB is running, and your connection string is correct.
- Check the Firebase configuration for any authentication issues.
- Make sure your TMDB API key is valid and properly placed.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
