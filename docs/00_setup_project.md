## Setup a new React App

- **Create new project** with `create_react_app`

```bash
$ mkdir your_project_name
$ cd your_project_name
$ npx create-react-app ./
$ npm i --save redux react-redux redux-thunk redux-devtools-extension
$ npm i --save react-router-dom
$ npm i --save bootstrap react-bootstrap
$ npm i --save react-markdown react-spinners moment react-moment
$ npm i --save axios react-toastify

```

- **Remove everything in the folder `/src`**, or delete it and create a new one.

- **Create file** `/src/index.js`:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "App";

ReactDOM.render(<App />, document.getElementById("root"));
```

- **Create file** `/src/App.js`:

```javascript
import React from "react";
import "App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="text-center">
      <Container>
        <h1>Ecommerce</h1>
      </Container>
    </div>
  );
}

export default App;
```

- **Create file** `/src/App.css`, leave it empty for now

- **Create file** `/.env`, in the root of your project:
  ```
  REACT_APP_BACKEND_API="https://localhost:5000"
  ```
  **Add** `.env` to the `.gitignore` file
  **Note**: everytime you change something in `.env` you have to restart the app (`npm start`)

### Evaluation

- Run `npm start` in the terminal. You should see "Ecommerce" in a "bootstrap" font:

  ![](./images/001_init_project.png)

Good job! [Back to instructions](/README.md)
