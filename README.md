# 🤖 BOTSCONIA - Landing Page

![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178c6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.1.6-646cff?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8?style=flat&logo=tailwindcss)

Landing page moderna y responsiva para **BOTSCONIA**, un sistema de IA para la gestión automatizada de reservas en restaurantes mediante asistentes de voz inteligentes.

## 📋 Descripción

BOTSCONIA es una solución de inteligencia artificial que revoluciona la gestión de reservas en restaurantes a través de:

- 🎙️ **Asistente de voz personalizado** con tono, acento y estilo adaptados a tu marca
- ⚙️ **Automatización completa** de horarios, políticas y menús
- 📅 **Gestión inteligente** de calendario en tiempo real
- 💻 **Dashboard intuitivo** para control total del proceso
- 📞 **Disponibilidad 24/7** sin perder ninguna llamada

Esta landing page presenta todos los servicios y beneficios de BOTSCONIA con un diseño moderno, animaciones fluidas y una experiencia de usuario optimizada.

## 🚀 Tecnologías

### Core
- **[React 18.2.0](https://react.dev/)** - Librería de UI con componentes funcionales y hooks
- **[TypeScript 5.2.2](https://www.typescriptlang.org/)** - Superset de JavaScript con tipado estático
- **[Vite 5.1.6](https://vitejs.dev/)** - Build tool ultrarrápido para desarrollo y producción

### Estilos
- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Framework CSS utility-first
- **[PostCSS 8.4.35](https://postcss.org/)** - Procesador CSS
- **[Autoprefixer 10.4.18](https://autoprefixer.github.io/)** - Prefijos CSS automáticos

### Animaciones & UX
- **[Framer Motion 11.0.8](https://www.framer.com/motion/)** - Librería de animaciones declarativas
- **[React Intersection Observer 9.8.1](https://github.com/thebuilder/react-intersection-observer)** - Detección de visibilidad de elementos
- **[Lucide React 0.354.0](https://lucide.dev/)** - Iconos SVG optimizados

### Desarrollo
- **[ESLint 8.57.0](https://eslint.org/)** - Linter de código
- **[@vitejs/plugin-react 4.2.1](https://github.com/vitejs/vite-plugin-react)** - Plugin oficial de React para Vite

## 🏗️ Arquitectura del Proyecto

```
botsconia-landing/
├── public/
│   └── images/              # Recursos estáticos (logos, imágenes)
│       ├── Bot1.webp
│       ├── Bot2.webp
│       ├── Logo.png
│       ├── Nombre.webp
│       └── ...
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.tsx       # Navegación principal
│   │   ├── Hero.tsx         # Sección hero con Bot
│   │   ├── About.tsx        # ¿Quiénes somos?
│   │   ├── Features.tsx     # Características
│   │   ├── HowItWorks.tsx   # Proceso en 4 pasos
│   │   ├── Benefits.tsx     # Beneficios con estadísticas
│   │   ├── Testimonials.tsx # Testimonios de clientes
│   │   ├── CTA.tsx          # Call to action
│   │   ├── Contact.tsx      # Formulario de contacto
│   │   ├── Footer.tsx       # Pie de página
│   │   └── PersonIcon.tsx   # Icono personalizado
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Punto de entrada
│   └── index.css            # Estilos globales + Tailwind
├── tailwind.config.js       # Configuración de Tailwind
├── tsconfig.json            # Configuración de TypeScript
├── vite.config.ts           # Configuración de Vite
├── postcss.config.js        # Configuración de PostCSS
├── package.json             # Dependencias del proyecto
└── .gitignore               # Archivos ignorados por Git
```

## 🎨 Paleta de Colores

```css
/* Colores principales */
--deep-black: #0a0a0f      /* Fondo principal */
--dark-blue: #0f1729       /* Fondo secundario */
--accent-cyan: #00d9ff     /* Acento primario */
--accent-red: #ff006e      /* Acento secundario */
```

## 📦 Instalación

### Prerrequisitos

- Node.js >= 16.0.0
- npm >= 8.0.0 o yarn >= 1.22.0

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd botsconia-landing
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`

## 🛠️ Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Compila para producción (dist/)
npm run preview  # Preview del build de producción
npm run lint     # Ejecuta ESLint
```

## 🌐 Despliegue en Vercel

### Opción 1: Deploy Automático (Recomendado)

1. Conecta tu repositorio de GitHub/GitLab/Bitbucket con [Vercel](https://vercel.com)
2. Vercel detectará automáticamente la configuración de Vite
3. Click en "Deploy"

### Opción 2: Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Configuración de Vercel

Vercel detectará automáticamente:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## 🎯 Características Principales

### ✨ Animaciones Fluidas
- Animaciones de entrada suaves con Framer Motion
- Transiciones optimizadas para mejor rendimiento
- Efectos de scroll con Intersection Observer

### 📱 Diseño Responsivo
- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Navegación adaptativa con menú hamburguesa

### 🚀 Optimización
- Lazy loading de imágenes
- Code splitting automático con Vite
- Minificación de assets
- Prefetching de recursos críticos

### ♿ Accesibilidad
- Semántica HTML5 correcta
- Atributos ARIA cuando necesario
- Navegación por teclado
- Contraste de colores WCAG AA

## 📧 Secciones de la Landing

1. **Header** - Navegación sticky con logo y enlaces
2. **Hero** - Presentación principal con imagen del bot
3. **About** - Historia y misión de BOTSCONIA
4. **Features** - Características clave del servicio
5. **How It Works** - Proceso explicado en 4 pasos
6. **Benefits** - Estadísticas y beneficios
7. **Testimonials** - Reseñas de clientes
8. **CTA** - Llamada a la acción
9. **Contact** - Formulario de contacto
10. **Footer** - Links y redes sociales

## 🔧 Configuración Personalizada

### Colores de Tailwind

Edita `tailwind.config.js` para modificar la paleta:

```javascript
theme: {
  extend: {
    colors: {
      'deep-black': '#0a0a0f',
      'dark-blue': '#0f1729',
      'accent-cyan': '#00d9ff',
      'accent-red': '#ff006e',
    }
  }
}
```

### Fuentes

Las fuentes se cargan desde Google Fonts en `index.html`:
- **Inter** - Fuente principal

## 📝 Buenas Prácticas Implementadas

- ✅ Componentes funcionales con TypeScript
- ✅ Hooks personalizados para lógica reutilizable
- ✅ Separación de responsabilidades (UI/Lógica)
- ✅ Convenciones de nomenclatura consistentes
- ✅ Código limpio y comentado
- ✅ Git ignore configurado correctamente
- ✅ Build optimizado para producción

## 🤝 Contribución

Este es un proyecto privado de BOTSCONIA. Para contribuciones internas:

1. Crea una rama desde `main`
2. Realiza tus cambios
3. Asegúrate de que el build pase: `npm run build`
4. Envía un Pull Request

## 📄 Licencia

Copyright © 2025 BOTSCONIA. Todos los derechos reservados.

---

**Desarrollado con ❤️ para revolucionar la gestión de restaurantes**

🔗 [Sitio Web](https://botsconia.vercel.app) | 📧 [Contacto](mailto:contacto@botsconia.com)
