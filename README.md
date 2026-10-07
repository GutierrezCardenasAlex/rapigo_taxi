# RAPIGO Landing

Landing page oficial/promocional para RAPIGO y RAPIGO PRO.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

## Despliegue en VPS con Docker

El proyecto incluye un `Dockerfile` de producción con Nginx. El contenedor expone RAPIGO en el puerto `18080` del VPS:

```txt
http://IP_DEL_VPS:18080
```

Antes de levantarlo en el VPS:

1. Apunta el registro DNS `A` de `rapigotaxi.cybernovatech.space` a la IP pública del VPS.
2. Asegúrate de que el puerto `18080` esté libre o cambia ese puerto en `docker-compose.yml`.
3. Sube el proyecto al servidor.
4. Ejecuta:

```bash
docker compose up -d --build
```

Si el VPS ya tiene otra web usando `80` y `443`, configura ese servidor web como proxy para este dominio:

```nginx
server {
  server_name rapigotaxi.cybernovatech.space;

  location / {
    proxy_pass http://127.0.0.1:18080;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

Después activa HTTPS con Certbot sobre ese bloque:

```bash
sudo certbot --nginx -d rapigotaxi.cybernovatech.space
```

Para ver logs:

```bash
docker compose logs -f
```

Para actualizar después de cambios:

```bash
docker compose up -d --build
```

## Enlaces APK

Edita los enlaces reales en:

```txt
src/config/downloads.js
```

Variables principales:

```js
RAPIGO_APK_URL
RAPIGO_PRO_APK_URL
```
