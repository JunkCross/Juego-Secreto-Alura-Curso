### Git Clone

Ejemplo de git clone:
https://www.atlassian.com/es/git/tutorials/setting-up-a-repository/git-clone


1. Clonar el repositorio para una carpeta específica
```bash
git clone <repositorio> <mi-proyecto-clone>
```
2. El repositorio localizado en repositorio es clonado para una carpeta llamada:
```bash
mi-proyecto-clone
```
3. También se puede configurar el git clone y clonar el repositorio desde una branch específica, diferente a la original, de esta manera:
```bash
git clone -branch new_feature <repositorio>
```


### Git log
https://devhints.io/git-log
Si se desea verificar el historial de cambios, los mensajes de commit, el nombre de la persona autora del commit y otras informaciones sobre el proyecto, esta el comando git log

Podemos visualizar todos los commits, uno en cada línea con el comando:
```bash
git log –-oneline
```

Si, en lugar de menos informaciones, queremos ver más, como las alteraciones del commit, podemos usar:
```bash
git log -p
```

También podemos buscar las informaciones de la persona autora del commit con el comando:
```bash
git log --author="user_name"
```

Y buscar informaciones por fecha:
```bash
git log --since=1.month.ago --until=1.day.ago
```
En el comando anterior, estamos buscando las informaciones del commit desde hace un mes hasta hace un día.
Tu también puedes formatear la visualización de las informaciones del commit con el comando:
```bash
git log --pretty="format:%h %s"
```
Algunos otros formatos:
https://devhints.io/git-log-format

### Git pull
Veifica si esta todo actualizado y si no obtene todos los nuevos cambios que un no tengo
```bash
git pull
```

### Git status
Comprueba los cambios que se hicieron en el proyecto
```bash
git status
```

### Git add
Agrega los cambios a realizar
```bash
git add . 

or

git add <nombres de los archivos>
```

### Git commit
sirve para capturar y guardar el estado actual del repositorio.
```bash
git commit -m "descripcion del cambio que se realizo"
```

### Git push
Subir los cambios al repositorio
```bash
git push
```

### Git diff 
Muestra la infromacion que fue agregadam, modificada o eliminada de un archivo
```bash
git diff <nombres de los archivos>
```

### Git restore
Informacion de git restore: https://www.aluracursos.com/blog/git-y-los-nuevos-comandos
Comando para restaurar un archivo a una version anteririor
```bash
git restore --source <codigo del commit> <nombres del archivo>

git restore --source fd8077d index.html
```

## Git branch
Indica las ramas que tiene el proyecto
```bash
git branch
```

### Git checkout
Se utiliza para la creacion de nuevas ramas
```bash
git checkout -b desarrollo
```

### Git switch
Cambio de rama
```bash
git switch <nombres de la rama>
```