# React-JS-Library
Learning React from Namaste React Course

## Ep 12 : Let's Build Our App (``Redux``)
### Steps
#### 1. Install 2 packages
``` 
npm i react-redux @reduxjs/toolkit
```

#### 2. Create ReduxStore
1.  For creating redux store we use `configureStore()` function comming from `@reduxjs/toolkit` package.

#### 3. Connect store with ⚛ React-App
1.  We have to import a component, `<Provider/>` from `react-redux` package.
2.  Now we wrap our entire app with this component and pass our store as props to the `<Provider/>`.
    ```
        <Provider store={appStore} >

            <App/>

        </Provider>
    ```
#### 4. Now we create slices in our `appStore.js`
1. See the folder structure
    ```
        |__utils
            |___appStore.js
            |___cartSlice.js
    ```
2. Inside the `cartSlice.js`
    -   we use `createSlice()` to create slice which takes <b style="color:cyan;">configuration object</b> as an argument
    -   this 