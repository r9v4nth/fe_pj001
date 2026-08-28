# FE PJ001

Plain HTML/CSS/JavaScript frontend for the FastAPI backend.

## Structure
- `index.html` entry page
- `pages/` application pages
- `css/` styles
- `js/config.js` backend URL
- `js/api.js` centralized API calls
- `js/auth.js` authentication
- `assets/` images/icons

Local backend: `http://localhost:8000`
Login expects `POST /login` with JSON `{ "username": "...", "password": "..." }`.

Later we will connect this repository/branch to Netlify and configure the Render API URL through environment/deployment configuration.
