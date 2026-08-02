# Practical 1: Introduction to React and Component Architecture

- Create a React application using Vite for a student portfolio page.
- The application must include at least 4 reusable components: Header, About, Skills, and Footer.
- Each component must be independently structured and composed into a single-page layout.
- No logic or JSX should be duplicated across components.
- Props must be used to pass at least one piece of data into a minimum of 2 components.

## Supplementary Problems

- Add a NavBar component that highlights the active section.
- Pass an array of skills as a prop to the Skills component and render them dynamically.
- Add a theme color prop to the Header and apply it as an inline style.

# Practical 2: State Management and Routing in React

- Extend the portfolio application from Practical 1 by adding React Router.
- Implement a navigation bar with at least 3 routes: Home, Projects, and Contact.
- Each route must render a distinct component without a full page reload.
- Add at least 2 useState variables used meaningfully one for toggling UI visibility and one for managing a form input on the Contact page.
- The Contact page must include a controlled input that captures and displays user input in real time.

## Supplementary Problems

- Store the contact form input in state and display a live character count below the input.

# Practical 3: API Integration and Data Rendering in React

- Integrate a public REST API (e.g., GitHub API) into the portfolio application to fetch and display a list of repositories dynamically.
- Use the Projects page built in Practical 2 as the integration point.
- Implement a loading spinner component shown while the request is in progress.
- Implement an error message component shown if the API call fails.
- Render at least the repository name and URL for each item returned.

  ## Supplementary Problems

- Add a retry button that re-triggers the fetch when an error occurs.
- Add a search input that filters the rendered repository list by name.
- Display the repository's star count alongside its name.  
