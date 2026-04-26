# Lola Montes Web

## Desarrollo local

1. Instala dependencias con `npm install`.
2. Para revisar la web visualmente, usa `npm run dev`.
3. Para previsualizar una build similar a producción, usa `npm run build` y `npm run preview`.

## Variables de entorno opcionales

Si en el futuro vuelves a activar una integración de correo, puedes usar una configuración como esta:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=lolacoldwater@hotmail.com
CONTACT_FROM_EMAIL=Lola Montes <onboarding@resend.dev>
CONTACT_SUBJECT_PREFIX=Formulario web Lola Montes
```

## Despliegue

El proyecto está preparado para desplegarse en Vercel como una SPA, con rutas configuradas en [vercel.json](./vercel.json).
