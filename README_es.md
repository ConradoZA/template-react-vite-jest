# PLANTILLA PARA REACT ⚛️🚀🏁🎉

🇬🇧[English](./README.md)

Incluye:

> Vite, Typescript, Eslint, Prettier, scss

---

<br>

## 💻 INSTALACIÓN

**1º**

```bash
npx npm-check-updates -u
```

```bash
ypx npm-check-updates -u
```

'ypx' sólo se puede usar si está instalado a nivel global el paquete **[ynpx](https://www.npmjs.com/package/ynpx)**.

<br/>

> ¿Por qué este paso? <br> Es una plantilla para iniciar un proyecto desde cero, mejor no empezar con librerías desactualizadas, ¿no?

> ¿Sabías que existe `npm outdated` desde npm 2.x? <br> Te permite VER las versiones actuales e instaladas de todas las dependencias... Pero sólo `ncu` te las sube de versión en el `package.json`

<br/>
<br/>

**2º**

```bash
npm i
```

```bash
yarn install
```

<br/>
<br/>

## 🌿 RAMAS

- _base_ -> La plantilla sin "extras"
- _husky_ -> La plantilla base con Husky
- _jest_ -> La plantilla base con Jest
- _all_ -> La plantilla base más husky y jest

<br/>
<br/>

## 📜 SCRIPTS

- `dev`: Levanta el servidor de desarrollo con vite.
- `build`: Empaqueta la página para desplegarla en producción.
- `serve`: Levanta un servidor con el resultado del commando build.
- `type-check`: Ignorar a no ser que sepas lo que hace.
- `format`: Ejecuta Prettier y luego Eslint.
- `format:lint`: Comprueba y corrige automáticamente.
- `format:prettier`: Comprueba y corrige automáticamente.
