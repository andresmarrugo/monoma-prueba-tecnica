# Monoma Prueba Técnica

Esta es una aplicación de ejemplo para la prueba técnica de Monoma. La aplicación utiliza [Next.js](https://nextjs.org/) como framework de desarrollo y [Tailwind CSS](https://tailwindcss.com/) para estilizar los componentes ademas de otras tecnologias.

## Requerimientos

- **Login Page:**
  - 2 inputs con validaciones:
    - Campo de email:
        - [x] Debe ser un email válido.
        - [x] Debe ser requerido.
    - Campo de password:
        - [x] Debe permitir cambiar el tipo de input de "password" a "text" mediante un evento click.
    - [x] Lógica de ingreso utilizando un archivo `.json` para validar el correo electrónico y la contraseña ingresados.
    - [x] Implementar un loading durante la validación.
    - [x] Mostrar alertas para informar sobre el resultado de la validación (puede utilizar SweetAlert 2 u otras opciones).

- **Principal/Dashboard Page:**
    - Navbar o header con:
        - [x]  Logo o texto del proyecto.
   - [x] Lista de hasta 10 cartas de Pokémon por página.
   - [x] Paginación para navegar entre las páginas de Pokémon.
   - [x] Cada carta debe abrir un modal o página con información detallada del Pokémon seleccionado.
   - [x] Header del dashboard con un avatar.
   - [x] Menú desplegable al hacer clic en el avatar con opción para cerrar sesión.
    - [x] Opcional: Página de información del usuario logueado.
    - [x] Generar un token y almacenarlo en el localStorage o sessionStorage para validar el acceso a la página del dashboard.
    - [x] Redireccionar al usuario a la página de login si no existe el token al intentar acceder al dashboard.
    - [x] Redireccionar al usuario al dashboard si existe el token al intentar acceder a la página de login.

- **Requisitos Técnicos:**
  - [x] Utilizar React (JavaScript o TypeScript) o Next.js (JavaScript o TypeScript).
  - [x] Opcional: Realizar pruebas unitarias y e2e con Cypress.
  - [x] Utilizar un framework de diseño como Bootstrap, Material UI o Tailwind CSS.
  - [ ] Configurar un puerto personalizable en un archivo `.env` para ejecutar el proyecto.
  - [x] Utilizar estilos en componentes (styled-components) o preprocesador de estilos (Sass, Less, Stylus, PostCSS).


## Getting the Repo

Antes de comenzar, asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema. Luego, sigue estos pasos:

1. Clona este repositorio o descarga el código fuente.

```bash
git clone https://github.com/andresmarrugo/monoma-prueba-tecnica
cd monoma-prueba-tecnica
```

## Installl Dependencies

Run the comand to install deopendencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
### Inicia sesion con estas credenciales de prueba

**email**: usuario1@example.com
**password**: contraseña1

**email**: usuario2@example.com
**passwird**: contraseña2  

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Cypress e2e tests

to run the e2e test use the commands:

```bash
npm run cypress:run
# or
yarn cypress:run
# or
pnpm cypress:run
```



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
