# Prework: Advanced Web Development (WEB103)

Welcome to the CodePath WEB103 Prework!

In WEB103, you will learn how to build your own full stack apps from scratch. But first, it's important that you know how to build a frontend that can interact with an API and supports CRUD operations.

Introducing . . . 🥁

Creatorverse
A person's top content creators can say a lot about them. Do they prefer lockpicking videos 🔒, casual art streams 🖼️, or hustle-culture TikTokers 📱?

View an exemplar of the project here!

Screenshot
A simple version of the app with all the required features implemented:

Screenshot of app with core features implemented
Your mission 🧑‍🚀 is to build a frontend that supports CRUD (create, read, update, and delete) operations on your favorite content creators. Your content creators can be Twitch streamers, YouTube channels, Instagram personalities, TikTok accounts, or similar. Heck, they can even be Mastodon microbloggers.

The purpose of your app is to share at least five creators you think are worth following and give yourself the ability to create, update, and delete creators. Each Creator should have:

a name
a url (the link to their channel or page)
a description
(optional) an imageURL that links to a picture of the creator or some of their content
You must use React to create your app, and you may optionally use PicoCSS to style HTML elements.

Let's get started! 🚀

## Required Features
- [x] Use a logical component structure in React to create the frontend of the app
- [x] Display at least five content creators on the homepage of the app
- [x] Each content creator item includes:
  - [x] their name
  - [x] a link to their channel or page
  - [x] a short description of their content
- [x] API calls use the async/await design pattern via Axios or fetch
- [x] Clicking on a content creator item takes the user to their details page, which includes their name, url, and description
- [x] Each content creator has their own unique URL
- [x] The user can edit a content creator to change their name, url, or description
- [x] The user can delete a content creator
- [x] The user can add a new content creator by entering a name, url, and description
- [x] The new content creator then appears in the displayed list

## Stretch Features
- [ ] Use Picocss to style HTML elements
- [x] Display content creator items in a creative format, like cards instead of a list
- [x] Show an image of each content creator on their content creator card

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kneha07/creatorverse.git
cd creatorverse
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── CreatorCard.jsx      # Individual creator card component
│   └── CreatorCard.css
├── pages/
│   ├── ShowCreators.jsx     # Homepage displaying all creators
│   ├── ViewCreator.jsx      # Single creator details page
│   ├── AddCreator.jsx       # Form to add new creator
│   ├── EditCreator.jsx      # Form to edit creator
│   └── *.css files
├── App.jsx                  # Main app with routing
├── main.jsx                 # App entry point
└── client.js                # Supabase client configuration
```

## Technologies Used

- **Frontend**: React 19, React Router 7
- **Backend**: Supabase (PostgreSQL database)
- **Styling**: Custom CSS
- **Build Tool**: Vite
- **Deployment**: Ready for deployment to any static hosting service

## Features Implemented

### Core CRUD Operations
- **Create**: Add new content creators with name, URL, description, and optional image
- **Read**: View all creators on homepage, view individual creator details
- **Update**: Edit existing creator information
- **Delete**: Remove creators from the database

### User Experience
- Responsive design that works on desktop and mobile
- Intuitive navigation between pages
- Form validation for required fields
- Loading states and error handling
- Unique URLs for each creator page

## Submission

This project was created as part of the CodePath WEB103 prework assignment. It demonstrates proficiency in:
- React component architecture
- API integration with Supabase
- CRUD operations
- Routing with React Router
- Responsive web design

## License

This project is for educational purposes as part of the CodePath WEB103 course.
