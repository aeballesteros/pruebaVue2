export const appsettings = {
    Frontend: 'http://localhost:8080',
    Backend: 'http://localhost:3000',
    urlsBackend: [
        {
            Usuario: {
                Crear: '/usuarios/CrearUsuario',
                Dame: '/usuarios/DameUsuario',
                Buscar: '/usuarios/BuscarUsuarios',
                Listar: '/usuarios/ListarUsuarios',
                Modificar: '/usuarios/ModificarUsuario',
                DarDeAlta: '/usuarios/DarDeAltaUsuario',
                DarDeBaja: '/usuarios/DarDeBajaUsuario',
                Borrar: '/usuarios/BorrarUsuario',
                ModificarContrasena: '/usuarios/ModificarContrasena',
                DameRolDeUsuario: '/usuarios/DameRolDeUsuario',
                AgregarRolAUsuario: '/usuarios/AgregarRolAUsuario',
                ListarRolesDeUsuario: '/usuarios/ListarRolesDeUsuario',
                DarDeAltaRolAUsuario: '/usuarios/DarDeAltaRolAUsuario',
                DarDeBajaRolAUsuario: '/usuarios/DarDeBajaRolAUsuario',
                QuitarRolAUsuario: '/usuarios/QuitarRolAUsuario'
            }
        },
        {
            Laboratorio: {
                Crear: '/laboratorios/CrearLaboratorio',
                Dame: '/laboratorios/DameLaboratorio',
                Buscar: '/laboratorios/BuscarLaboratorios',
                Listar: '/laboratorios/ListarLaboratorios',
                Modificar: '/laboratorios/ModificarLaboratorio',
                DarDeAlta: '/laboratorios/DarDeAltaLaboratorio',
                DarDeBaja: '/laboratorios/DarDeBajaLaboratorio',
                Borrar: '/laboratorios/BorrarLaboratorio',
            }
        },
        {
            Experiencia:{
                Crear: '/experiencias/CrearExperiencia',
                Dame: '/experiencias/DameExperiencia',
                Buscar: '/experiencias/BuscarExperiencias',
                Listar: '/experiencias/ListarExperiencias',
                Modificar: '/experiencias/ModificarExperiencia',
                DarDeAlta: '/experiencias/DarDeAltaExperiencia',
                DarDeBaja: '/experiencias/DarDeBajaExperiencia',
                Borrar: '/experiencias/BorrarExperiencia',
            }
        },
        {
            LTI:{
                Crear: '/lti/RegistrarPlataforma',
                Listar:'/lti/ListarPlataformas',
                Modificar: '/lti/ModificarPlataforma',
                Borrar: '/lti/BorrarPlataforma',   
            }
        },
        {
            Rol:{
                Crear: '/permisos/CrearRol',
                Dame: '/permisos/DameRol',
                Buscar: '/permisos/BuscarRol',
                Listar: '/permisos/ListarRol',
                Modificar: '/permisos/ModificarRol',
                DarDeAlta: '/permisos/DarDeAltaRol',
                DarDeBaja: '/permisos/DarDeBajaRol',
                Borrar: '/permisos/BorrarRol',
                DamePermisoDeUsuario: '/permisos/DamePermisoDeUsuario',
                AgregarPermisoARol: '/permisos/AgregarPermisoARol',
                ListarPermisosDeRol: '/permisos/ListarPermisosDeRol',
                DarDeAltaPermisoARol: '/permisos/DarDeAltaPermisoARol',
                DarDeBajaPermisoARol: '/permisos/DarDeBajaPermisoARol',
                QuitarPermisoARol: '/permisos/QuitarPermisoARol'
            }
        },
        {
            Permiso:{
                Crear: '/permisos/CrearPermiso',
                Dame: '/permisos/DamePermiso',
                Buscar: '/permisos/BuscarPermiso',
                Listar: '/permisos/ListarPermiso',
                Modificar: '/permisos/ModificarPermiso',
                DarDeAlta: '/permisos/DarDeAltaPermiso',
                DarDeBaja: '/permisos/DarDeBajaPermiso',
                Borrar: '/permisos/BorrarPermiso',
            }
        }
    ]
  };