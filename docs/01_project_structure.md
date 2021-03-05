## Project Structure

How to structure large React apps into folders and files is a highly opinionated topic. There is no right way to do it. However, let set up conventions to structure this React app:

- Put your stateless components in `/src/components/`, because we plan to **"reuse"** these components. Tip: if your component needs to access to the global store, put it in `/src/layouts/`
- Keep all the components that manage the states, and logics in `/src/layouts/`
- `src/redux/actions`: each file in this folder is related to a set of actions, e.g. `auth.actions.js`. **Rule**: only put API Connection in actions files.
- `src/redux/reducers`: set of reducers for managing the global store. They are combined in `index.js`.
- `src/redux/constants`: set of types of actions
- `src/redux/store.js`: configuration of the store

In the end, you will have a project structure like this:

```
|- src\
  |- components\
    |- ProductDetail.js
    |- Pagination.js
    |- PublicNavbar.js
    |- AlertMessage.js
    |- Footer.js
  |- layouts\
    |- Admin\
    |- Public\
    |- User\
  |- pages\
  |- images\
  |- redux\
      |- actions\
      |- constants\
      |- reducers\
      |- api.js
      |- store.js
  |- App.css
  |- App.js
  |-index.js
|- .env
|- .gitignore
|- package.json
|- jsconfig.json
|- README.md
```

- You can use command line to create folders quickly, e.g.

  ```bash
  $ mkdir src/components src/layouts src/layouts/Routes src/redux src/redux/actions src/redux/constants src/redux/reducers
  ```

Good job! [Back to instructions](/README.md)
