
# Netflix Clone

This is a Netflix Clone web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application allows users to browse a catalog of movies, view detailed movie information, and manage their personal watchlist. Firebase is used for user authentication, and movie data is fetched from the TMDB API. 

<img width="1440" alt="Screenshot 2024-10-12 at 9 57 00 PM" src="https://github.com/user-attachments/assets/0295a452-82dd-463a-bf95-9a10aaefa1b5">
<img width="1440" alt="Screenshot 2024-10-12 at 9 54 55 PM" src="https://github.com/user-attachments/assets/fd379fc8-7300-422b-bfa8-71e992ed133c">
<img width="1440" alt="Screenshot 2024-10-12 at 9 55 33 PM" src="https://github.com/user-attachments/assets/754d9cc1-c953-4cc9-bc8e-d4eacd94ac6b">
<img width="1440" alt="Screenshot 2024-10-12 at 9 55 52 PM" src="https://github.com/user-attachments/assets/cbd75ceb-06c1-4dab-9f60-cbb85acf3ce2">
<img width="1440" alt="Screenshot 2024-10-12 at 9 58 15 PM" src="https://github.com/user-attachments/assets/f4468f65-1c15-4f0e-92e4-03aca613a713">

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

   You need to modify two `.env` files—one for the frontend and one for the backend.

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






