# WEB103 Prework - *Creatorverse*

Submitted by: **Neha Kumari**

About this web app: **A content creator management app where users can view, add, edit, and delete their favorite content creators. Each creator has a name, URL, description, and optional image, displayed as cards on the homepage.**

Time spent: **4** hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [ ] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

[![Video Walkthrough](https://cdn.loom.com/sessions/thumbnails/438736474ea7421b8ff2b403d0a83264-with-play.gif)](https://www.loom.com/share/438736474ea7421b8ff2b403d0a83264)

GIF created with [Loom](https://www.loom.com)

## Notes

One challenge was setting up the Supabase client and managing environment variables correctly with Vite (using `VITE_` prefixed keys). Connecting async/await API calls with React state — especially handling loading and error states across Create, Read, Update, and Delete flows — also required careful coordination. Routing with React Router to give each creator a unique URL (`/creator/:id`) was a key part of the architecture.

## License

Copyright [2024] [Neha Kumari]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
