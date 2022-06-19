# REACT TEMPLATE ⚛️🚀🏁🎉

🇪🇸[Español](./README_es.md)

With:

> Vite, Typescript, Eslint, Prettier, scss

---

<br>

## 💻 INSTALL

**1º**

```bash
npx npm-check-updates -u
```

```bash
ypx npm-check-updates -u
```

'ypx' can only be used if the package **[ynpx](https://www.npmjs.com/package/ynpx)** is installed globally.

<br/>

> Why this step? <br> It is a template to start a project from scratch, better not to start with outdated libraries, right?

> Did you know that `npm outdated` exists since npm 2.x? <br> It allows you to SEE the current and installed versions of all the dependencies... But only `ncu` uploads them to you in the `package.json`

<br/>
<br/>

**2nd**

```bash
npm i
```

```bash
yarn install
```

<br/>
<br/>

## 🌿 BRANCHES

- _base_ -> The template without "extras"
- _husky_ -> The base template with Husky
- _jest_ -> The base template with Jest
- _all_ -> The base template plus husky and jest

<br/>
<br/>

## 📜 SCRIPTS

- `dev`: Start the development server with vite.
- `build`: Package the page for deployment to production.
- `serve`: Start a server with the result of the build command.
- `type-check`: Ignore unless you know what it does.
- `format`: Run Prettier and then Eslint.
- `format:lint`: Check and fix automatically.
- `format:prettier`: Check and correct automatically.
- `prepare`: Do not use manually. Automatically injects husky after every dependency creation/modification.
