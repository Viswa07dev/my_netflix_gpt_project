# 🎬 Netflix GPT - AI-Powered Movie Recommendation Platform

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)

## 🌟 Overview

Netflix GPT combines the power of artificial intelligence with movie recommendations to create a personalized streaming experience. Built with React and powered by OpenAI's GPT, this application offers smart movie suggestions based on user preferences and natural language interactions.

## 🚀 Key Features

### 🔐 Authentication
- Secure Login/Signup functionality
- Firebase authentication integration
- Protected routes and user session management

### 🎯 Core Features
- **AI-Powered Search**: Natural language movie search using GPT
- **Smart Recommendations**: Personalized movie suggestions
- **Multi-Language Support**: Interface available in multiple languages
- **Responsive Design**: Seamless experience across all devices
- **Real-Time Updates**: Latest movie data from TMDB API

### 🎥 Movie Experience
- **Dynamic Movie Trailers**: Auto-playing background trailers
- **Rich Movie Information**: Detailed movie descriptions and metadata
- **Categorized Lists**: 
  - Now Playing
  - Popular Movies
  - Top Rated
  - Upcoming Releases
  - TV Series

## 🛠️ Technical Stack

- **Frontend**: React.js with Redux Toolkit
- **Styling**: Tailwind CSS for modern UI
- **Backend**: Firebase for authentication and hosting
- **APIs**: 
  - OpenAI GPT for intelligent search
  - TMDB for movie data
- **State Management**: Redux for global state
- **Performance**: Memoization and optimized renders

## 📱 Responsive Design
- Mobile-first approach
- Seamless tablet experience
- Desktop-optimized views

## 🔒 Security Features
- Environment variable protection
- Secure API key handling
- Protected routes
- Firebase security rules

## 📝 Development Journey
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to productuion
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out
- Updated Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix : if the user is not logged in Redirect/browse to Login page and vice-versa
- Unsubscribed to the onAuthStateChanged Callback
- Added hardcoded values to the constants file
- Register TMDB API & create an app & get access token
- Get data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContainer & SecondaryContainer
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie list
- Build Movie Card
- TMDB Image CDN URL
- Made the Browse page amazing with Tailwind CSS
- usePopularMovies Custom Hook
- useTopRatedMovies Custom Hook
- useUpcomingMovies Custom Hook
- useTvSeriesList Custom Hook
- GPT Search Page
- GPT Search Bar
- Multi-language Feature in our App
- Get Open AI Api Key
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive

## 🎯 Quick Start

1. Clone the repository
```bash
git clone https://github.com/Viswa07dev/my_netflix_gpt_project.git
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
# Create .env file and add your API keys
REACT_APP_TMDB_KEY=your_tmdb_key
REACT_APP_OPENAI_KEY=your_openai_key
```

4. Start the development server
```bash
npm start
```

## 💡 User Features

### 🔐 Authentication Flow
- Smart Login/Signup system
- Form validation and error handling
- Secure session management
- Profile customization

### 🎬 Browse Experience
- Dynamic header with user profile
- Featured movie with auto-playing trailer
- Multiple curated movie categories
- Smooth scrolling movie lists

### 🤖 GPT Search
- Natural language movie search
- AI-powered recommendations
- Multi-language support
- Real-time results

## 🙏 Acknowledgments

- TMDB for movie data
- OpenAI for GPT integration
- Firebase for backend services
