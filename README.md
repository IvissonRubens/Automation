# Automation
This is an example of implementing a database using Node.js to facilitate the use of Selenium.

We will start by creating a simple database in JavaScript to store user credentials, which will be used on a website created with HTML, CSS, and JS. The goal is to make the backend recognize these credentials stored in the database. The execution will be done with NPM, which simplifies the setup, with automatic compilation (there’s no need to press Ctrl+S, as the NPM package is already configured to save changes and automatically notify about the success or failure of the update).

In the more complex backend part, we will use Selenium and Electron. Selenium will automate tasks like logging in to the site using the stored credentials, making the process simpler than other available tools. Meanwhile, Electron will turn the site into a '.desktop' app, further enhancing performance and user experience.


# Documentation for Selenium, Electron, and Database Implementation

## 1. Selenium Documentation
- **Selenium**: A tool for automating web browsers.
  - Documentation: [Selenium Documentation](https://www.selenium.dev/documentation/en/)
  - GitHub Repository: [Selenium GitHub](https://github.com/SeleniumHQ/selenium)

## 2. Electron Documentation
- **Electron**: Framework to build cross-platform desktop apps with web technologies (HTML, CSS, JavaScript).
  - Documentation: [Electron Documentation](https://www.electronjs.org/docs)
  - GitHub Repository: [Electron GitHub](https://github.com/electron/electron)

## 3. Database with Node.js
- **Database (for example, SQLite or MongoDB)**:
  - If you're creating a simple file-based database with **SQLite**:
    - Documentation: [SQLite Documentation](https://www.sqlite.org/docs.html)
    - GitHub Repository: [Node SQLite3 GitHub](https://github.com/mapbox/node-sqlite3)
  - Or if you're using **MongoDB** for a NoSQL solution:
    - Documentation: [MongoDB Documentation](https://www.mongodb.com/docs/)
    - GitHub Repository: [Node MongoDB GitHub](https://github.com/mongodb/node-mongodb-native)
