# GitHub Copilot Presentation

Welcome to the GitHub Copilot presentation project! This project is designed to provide a comprehensive overview of GitHub Copilot, an AI-powered programming assistant that enhances developer productivity. Below are the details and structure of the project.

## 🚀 Guía Rápida de Inicio (Para Principiantes)

### Paso 1: Descargar el Proyecto
Tienes dos opciones para obtener el proyecto:

**Opción A - Descargar como ZIP (más fácil):**
1. Ve a la página del repositorio en GitHub
2. Haz clic en el botón verde **"Code"**
3. Selecciona **"Download ZIP"**
4. Descomprime el archivo en tu computadora

**Opción B - Clonar con Git:**
1. Abre una terminal o Command Prompt
2. Ejecuta este comando:
   ```bash
   git clone https://github.com/Kenjhy/Presentation_of_Copilot_365.git
   ```

### Paso 2: Instalar Node.js
Node.js es necesario para ejecutar el proyecto.

1. Ve a [https://nodejs.org](https://nodejs.org)
2. Descarga la versión **LTS** (Long Term Support)
3. Ejecuta el instalador y sigue las instrucciones
4. Para verificar que se instaló correctamente, abre una terminal y ejecuta:
   ```bash
   node --version
   ```
   Deberías ver un número de versión (ejemplo: v18.17.0)

### Paso 3: Instalar las Dependencias del Proyecto
1. Abre una terminal o Command Prompt
2. Navega a la carpeta del proyecto:
   ```bash
   cd "ruta/donde/descargaste/copilot-presentations"
   ```
3. Instala las dependencias ejecutando:
   ```bash
   npm install
   ```
   Este comando descargará e instalará todo lo necesario automáticamente.

### Paso 4: Ejecutar el Proyecto
1. En la misma terminal, ejecuta:
   ```bash
   npm start
   ```
2. Automáticamente se abrirá tu navegador web con la presentación
3. Si no se abre automáticamente, ve a: [http://localhost:8080](http://localhost:8080)

### Solución de Problemas Comunes
- **"npm no se reconoce como comando"**: Necesitas instalar Node.js (ver Paso 2)
- **El navegador no se abre**: Abre manualmente tu navegador y ve a `http://localhost:8080`
- **Puerto en uso**: Si ves un error sobre el puerto 8080, cierra otros programas que puedan estar usándolo

---

## Project Structure

```
copilot-presentations
├── github-copilot-presentation
│   ├── src
│   │   ├── index.html               # Main entry point for the presentation
│   │   ├── styles
│   │   │   └── main.css             # CSS styles for the presentation
│   │   ├── scripts
│   │   │   └── navigation.js         # JavaScript for slide navigation
│   │   ├── assets
│   │   │   ├── images                # Directory for images used in slides
│   │   │   └── icons                 # Directory for icons used in slides
│   │   └── slides
│   │       ├── slide-01-title.html   # Title slide
│   │       ├── slide-02-introduction.html # Introduction slide
│   │       ├── slide-03-what-is-copilot.html # What is Copilot slide
│   │       ├── slide-04-how-it-works.html # How it works slide
│   │       ├── slide-05-plans.html   # Plans slide
│   │       ├── slide-06-prompt-engineering.html # Prompt engineering slide
│   │       ├── slide-07-advanced-features.html # Advanced features slide
│   │       ├── slide-08-use-cases.html # Use cases slide
│   │       ├── slide-09-responsible-ai.html # Responsible AI slide
│   │       ├── slide-10-enterprise.html # Enterprise slide
│   │       ├── slide-11-metrics.html # Metrics slide
│   │       ├── slide-12-roi.html     # ROI slide
│   │       ├── slide-13-adoption.html # Adoption slide
│   │       ├── slide-14-comparison.html # Comparison slide
│   │       ├── slide-15-conclusions.html # Conclusions slide
│   │       └── slide-16-cta.html     # Call to action slide
│   └── README.md                     # Documentation for the GitHub Copilot presentation
├── copilot-365-comprehensive
│   ├── src
│   │   ├── index.html               # Main entry point for Copilot 365 presentation
│   │   ├── styles
│   │   │   ├── main.css             # General styles for the presentation
│   │   │   ├── beginner.css         # Styles for beginner-level content
│   │   │   ├── intermediate.css      # Styles for intermediate-level content
│   │   │   └── advanced.css          # Styles for advanced-level content
│   │   ├── scripts
│   │   │   ├── navigation.js         # Navigation script for slides
│   │   │   ├── interactive.js        # Script for interactive elements
│   │   │   └── level-switcher.js     # Script for switching content levels
│   │   ├── assets
│   │   │   ├── images                # Directory for images used in slides
│   │   │   ├── icons                 # Directory for icons used in slides
│   │   │   └── demos                 # Directory for demos related to Copilot
│   │   └── slides
│   │       ├── beginner
│   │       │   ├── intro-to-ai.html  # Intro to AI slide
│   │       │   ├── copilot-basics.html # Copilot basics slide
│   │       │   ├── m365-overview.html # M365 overview slide
│   │       │   └── getting-started.html # Getting started slide
│   │       ├── intermediate
│   │       │   ├── copilot-integration.html # Copilot integration slide
│   │       │   ├── productivity-workflows.html # Productivity workflows slide
│   │       │   ├── teams-collaboration.html # Teams collaboration slide
│   │       │   └── data-analysis.html # Data analysis slide
│   │       └── advanced
│   │           ├── enterprise-deployment.html # Enterprise deployment slide
│   │           ├── custom-solutions.html # Custom solutions slide
│   │           ├── api-integration.html # API integration slide
│   │           └── governance-security.html # Governance and security slide
│   └── README.md                     # Documentation for the Copilot and Copilot 365 presentation
├── shared
│   ├── components
│   │   ├── header.html               # Header component for presentations
│   │   ├── footer.html               # Footer component for presentations
│   │   └── navigation.html            # Navigation component for presentations
│   ├── utils
│   │   ├── analytics.js               # Script for tracking analytics
│   │   └── common.js                 # Common utility functions
│   └── config
│       └── presentation-config.json   # Configuration file for presentations
├── package.json                      # npm configuration file
└── README.md                         # Documentation for the entire project
```

## Getting Started

To get started with the GitHub Copilot presentation, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the `github-copilot-presentation/src` directory.
3. Open `index.html` in your web browser to view the presentation.
4. Use the navigation buttons or arrow keys to move between slides.

## Contributing

Contributions are welcome! If you have suggestions for improvements or additional content, please feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

Thank you for your interest in GitHub Copilot! Enjoy the presentation!