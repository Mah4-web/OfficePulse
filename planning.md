Brainstorming

## Step 1: Draw Wireframe ✅

Tools Figma ✅, optional: Jira✅
## Step 2: Set up database tables using schema

Tools: drawsql 
Tools: SQL editor on Supabase. ✅ Purpose: to create our tables and seed dummy data.
## Step 3: Set up Project & GitHub ✅

- Npx create-next-app@latest ✅
- Project-name
- Typescript : No
- ESlint
- Tailwind CSS: YES
- src/directory: YES
- APP Router: YES
- Turbopack: YES
- Import Alias: No
- Remember: Don’t do git init in here
- Cd project name
- New Repository (no readme)
- Copy paste git remote add origin…..
- Git add .
- Git commit -m “chore: add project template”
- Git push
- Git push -u origin main
- Code .
## Step 4: Setup Environment Variables ✅

- .env (.gitignore)
- Step 5: Deployment
- Deploy on Vercel — set env variables on Vercel dashboard

## Research Jwt and bcrypt


## Step 6: Plan Folder Structure ✅

- 📂src
- 📂 App
- 📂 login - page.js
- 📂 registration - page.js
- 📂 messages/[chatId] -stretch
- 📂 profile/[userId] - stretch
- 📂 jobs/[jobId] - stretch
-  📂 Rota - stretch
- Not-found
- 📂 Components 
- AuthForm.tsx               = Login/Register form (Radix UI)
- Sidebar.tsx                = Navigation menu
- MessageFeed.tsx            = Shows all messages
- MessageInput.tsx           = Message input box
- 📂 lib
- 📂 - auth.js /                = JWT: sign, verify

  -   1:   sanitize.js  
- 📂 queries.sql
- 📂 utils
- *dbConnection.js set up our database pool using the pg package (install it, please)
- 📂 middleware.js                = Protect routes using JWT (redirect if not logged in)

## Step 7: Setup Next.js

## Step 8: Build Components

- Header / Footer — site navigation and footer

## Step 9: Fetch


## Step 10: Styling

Use Tailwind, google fonts
Simple cards, forms, buttons, spacing
Step 11: Testing


## Step 12: Reflection


MORE FOLDERS AND FILES