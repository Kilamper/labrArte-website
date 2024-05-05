# AngularWebPage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Estructura del Proyecto Web: Detalles Técnicos y Estructura

#### Estructura del Código del Proyecto Web:

El código del proyecto está estructurado siguiendo una arquitectura modular y escalable, donde la aplicación se divide en piezas reutilizables y autónomas llamadas componentes, haciendo uso del framework Angular. A continuación, se detallan los componentes principales y su funcionalidad:

**src/:**
- **app/:**
  - **components/:** Contiene los componentes principales de la aplicación.
    - **button:** Componente para botones interactivos.
    - **cart-item:** Componente para elementos del carrito de compra.
    - **category-item:** Componente para mostrar y seleccionar categorías.
    - **logo:** Componente para mostrar el logotipo de la página.
    - **product-item:** Componente para mostrar información detallada de productos.
    - **slider:** Componente para mostrar un slider de imágenes.
    - **social-network:** Componente para enlaces a redes sociales.
    - **errors/notfound/:**
      - **notfound:** Componente para mostrar una página de error 404.

  - **forms/:**
    - **login:** Formulario de inicio de sesión.
    - **signup:** Formulario de registro de usuarios.

  - **interfaces/:**
    - **user.interface:** Interfaz para definir la estructura de datos de usuario.
    - **product.interface:** Interfaz para definir la estructura de datos de productos.
    - **category.interface:** Interfaz para definir la estructura de datos de categorías.

  - **services/:**
    - **cart:** Servicio para la gestión del carrito de compras.
    - **load:** Servicio para cargar datos desde Firebase.
    - **scroll:** Servicio para el desplazamiento suave en la página.
    - **user:** Servicio para la gestión de usuarios y autenticación.

  - **templates/:** Contiene las plantillas HTML de las diferentes secciones de la aplicación.
  
**assets/:** Almacena recursos estáticos como imágenes, fuentes, iconos, etc.

**environments/:** Contiene archivos de configuración para diferentes entornos.

**app.module.ts:** Define el módulo raíz de la aplicación.

**angular.json:** Archivo de configuración de Angular CLI.

**package.json:** Contiene la información de las dependencias del proyecto.

#### Estructura de los Datos Almacenados en Firebase:

Los datos en Firebase se almacenan en tres servicios diferentes:

1. **Firebase Authentication:** Contiene los datos de autenticación de usuarios.
2. **Firestore Database:** Base de datos para almacenar datos estructurados.
3. **Firebase Storage:** Almacena recursos multimedia como imágenes.

#### Tour por la Página Web:

- **Inicio:** Página principal con información general sobre la aplicación.
- **Catálogo:** Muestra productos y servicios con opción para añadir al carrito.
- **Formularios:** Permiten a los usuarios iniciar sesión o registrarse.
- **Perfil de Usuario:** Permite a los usuarios ver y actualizar su información personal.
- **Carrito de Compras:** Permite a los usuarios gestionar los productos seleccionados para comprar.

#### Evolución o Enlace a Trello:

Para realizar un seguimiento del progreso del proyecto y coordinar las tareas entre los miembros del equipo, se utiliza Trello. Se pueden encontrar más detalles sobre el progreso del proyecto en [enlace a Trello]([insertar_enlace_a_trello](https://trello.com/invite/b/6vTlzSo5/ATTIb693f849f2a2ac37cd46c8243d185afaD62C1B46/pwm)


### Ejemplo de Introducción de Datos y Visualización en el Catálogo:

Supongamos que un usuario desea crear una nueva cuenta en la plataforma. Utilizando un formulario de registro proporcionado en el sitio web, el usuario puede ingresar detalles como su dirección de correo electrónico y contraseña. Al enviar el formulario de registro, las credenciales del usuario se transmitirán de manera segura al servicio de Autenticación de Firebase para la creación de la cuenta.Si el registro es exitoso, Firebase Authentication generará un ID de usuario único para el usuario recién registrado, y los detalles de su cuenta se almacenarán de forma segura en la base de datos de usuarios de Firebase. 

Supongamos que un usuario desea actualizar la información de su perfil en la plataforma. Para ello, la aplicación proporcionará una interfaz de usuario donde el usuario pueda ver y modificar los detalles de su perfil existente.

Cuando el usuario accede a la sección de edición de perfil, se le presentarán campos de formulario prellenados con la información actual de su perfil, como nombre, dirección, número de teléfono, etc. El usuario puede modificar estos campos según sea necesario.

Un usuario podrá navegar por la página para ver todos los productos a la venta y además podrá registrarse para así acceder a todas las funcionalidades de la página como añadir productos a el carrito y poder comprarlos, además si el usuario lo desee podrá personalizar su perfil subiendo una nueva foto de perfil y datos adicionales de contacto

---
