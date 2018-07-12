#NPM reference
https://www.sitepoint.com/beginners-guide-node-package-manager/

-i: install
-D: — save-dev
-S: — save
###Dependance
#####Setting Up React and Babel
To work with React, we need to install it along with Babel. This will transpile the code from ES6 to ES5, as not all browsers support ES6 yet (for example Internet Explorer).
Install react and react-dom as a dependency

**babel-core:** Transforms your ES6 code into ES5

**babel-loader:** Webpack helper to transform your JavaScript dependencies (for example, when you import your components into other components) with Babel

**babel-preset-env:** Determines which transformations/plugins to use and polyfills (provide modern functionality on older browsers that do not natively support it) based on the browser matrix you want to support

**babel-preset-react:** Babel preset for all React plugins, for example turning JSX into functions