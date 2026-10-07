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

## Despliegue en VPS con Docker y HTTPS

El proyecto incluye un `Dockerfile` de producción con Nginx y un `docker-compose.yml` con Caddy para publicar el sitio con HTTPS automático en:

```txt
https://rapigotaxi.cybernovatech.space
```

Antes de levantarlo en el VPS:

1. Apunta el registro DNS `A` de `rapigotaxi.cybernovatech.space` a la IP pública del VPS.
2. Abre los puertos `18080` y `18443` en el firewall del VPS.
3. Sube el proyecto al servidor.
4. Ejecuta:

```bash
docker compose up -d --build
```

Caddy solicitará y renovará automáticamente el certificado SSL.

Esta configuración publica el sitio en puertos alternativos porque el puerto `80` puede estar ocupado por otro servicio:

```txt
http://rapigotaxi.cybernovatech.space:18080
https://rapigotaxi.cybernovatech.space:18443
```

Para usar el dominio sin puerto visible, libera los puertos `80` y `443` en el VPS o configura el servicio que ya los ocupa como proxy hacia `http://localhost:18080`.

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
