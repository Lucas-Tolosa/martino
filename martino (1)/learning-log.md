27/6/2026


Problema:
Spring Boot no podía conectarse a PostgreSQL.

Síntomas:
SocketTimeoutException
PSQLException: The connection attempt failed

Cómo lo encontré:
Leí el stacktrace hasta encontrar la primera excepción relevante.

Causa:
la causa que encontre de momento era que parece que postgresql no podia conectarse al puerto local por ende no podia compartir la informacion, una vez cerrado todo lo abierto en el puerto 5432 y volviendo el postgresql a su lugar me tiro un error de que en la base de datos no existe ningun valor llamado itemId a lo que lo cambie a id el nombre que tiene en la base de datos y se pudo solucionar facilmente.

Qué aprendí:
- leer un stacktrace donde esta la fuente del problema.
- si algo funciona no lo rompas
- Cómo postgresql inicializa la conexión.