import React from "react";

const SinglePagePortfolio = () => {
  return (
    <div>
      <p>
        The Single Page Portfolio is a responsive and user-friendly website
        designed to showcase projects and skills in a visually appealing manner.
        Built using React and styled with Tailwind CSS, it features a theme
        switcher that allows users to select from four color options: light,
        black, grey, and white, enhancing personalization.
      </p>

      <h2>Objectives</h2>
      <ul>
        <li>
          <strong>Responsive Design:</strong> Ensure the portfolio is accessible
          and visually appealing on various devices.
        </li>
        <li>
          <strong>User Customization:</strong> Provide a theme switcher for
          users to personalize their viewing experience.
        </li>
      </ul>

      <h2>Features</h2>
      <ol>
        <li>
          <strong>Theme Switcher:</strong>
          <ul>
            <li>
              Users can easily switch between four different color themes,
              making the portfolio visually adaptable.
            </li>
          </ul>
        </li>
        <li>
          <strong>Responsive Layout:</strong>
          <ul>
            <li>
              The portfolio automatically adjusts to different screen sizes,
              ensuring a seamless experience on mobile, tablet, and desktop.
            </li>
          </ul>
        </li>
      </ol>

      <h2>Impact</h2>
      <ul>
        <li>
          <strong>User Engagement:</strong> The interactive theme switcher
          enhances user engagement, making the browsing experience enjoyable.
        </li>
        <li>
          <strong>Professional Presentation:</strong> A well-designed portfolio
          conveys professionalism and attention to detail.
        </li>
      </ul>

      <h2>Technology Stack</h2>
      <ul>
        <li>
          <strong>React:</strong> For building the user interface and managing
          application state.
        </li>
        <li>
          <strong>React Context API:</strong> For managing global state across
          the application, enabling the theme switcher functionality.
        </li>
        <li>
          <strong>Tailwind CSS:</strong> For styling the application, allowing
          for quick and responsive designs.
        </li>
        <li>
          <strong>Docker:</strong> For containerization, ensuring consistent
          development and deployment environments.
        </li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The Single Page Portfolio serves as a personal showcase for projects and
        skills, providing a responsive and customizable experience. By utilizing
        modern technologies like React and Tailwind CSS, this portfolio not only
        highlights work effectively but also demonstrates proficiency in
        building user-friendly applications.
      </p>
    </div>
  );
};

export default SinglePagePortfolio;
