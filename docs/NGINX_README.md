# Nginx Konfigürasyonu

Bu proje, Svelte uygulamasını nginx reverse proxy ile birlikte çalıştırmak için yapılandırılmıştır.

## Yapı

- **nginx/nginx.conf**: Ana nginx konfigürasyon dosyası
- **nginx/Dockerfile**: Nginx container'ı için Dockerfile
- **docker-compose.yml**: Hem Svelte uygulaması hem de nginx'i içeren compose dosyası

## Özellikler

### Nginx Konfigürasyonu
- **Port**: 80 (HTTP)
- **Domain**: bebekresort.com.tr, www.bebekresort.com.tr
- **Reverse Proxy**: 6778 portundaki Svelte uygulamasına yönlendirme
- **SSL**: Şu an için SSL yok (HTTP)

### Güvenlik
- Security headers eklendi
- Rate limiting (10 request/second)
- XSS protection
- Content Security Policy

### Performans
- Gzip compression
- Static file caching (1 yıl)
- Connection pooling
- Keep-alive connections

### Logging
- Access ve error logları
- Custom log format

## Deployment

```bash
# Tüm servisleri başlat
./deploy.sh

# Manuel olarak
docker compose up -d

# Logları görüntüle
docker compose logs -f
docker compose logs nginx
docker compose logs bresort
```

## Servisler

### bresort (Svelte App)
- **Port**: 6778 (internal)
- **Health Check**: http://localhost:6778/
- **Environment**: Production

### nginx (Reverse Proxy)
- **Port**: 80 (external)
- **Dependencies**: bresort service
- **Health Check**: http://localhost/

## Network

Tüm servisler `bresort_network` bridge network'ünde çalışır.

## Monitoring

```bash
# Container durumları
docker compose ps

# Nginx logları
docker compose logs nginx

# Svelte app logları
docker compose logs bresort

# Real-time loglar
docker compose logs -f
```

## Troubleshooting

### Nginx erişim sorunu
```bash
# Nginx container'ına bağlan
docker compose exec nginx sh

# Nginx konfigürasyonunu test et
nginx -t

# Nginx'i yeniden başlat
docker compose restart nginx
```

### Svelte app erişim sorunu
```bash
# App container'ına bağlan
docker compose exec bresort sh

# Health check
curl http://localhost:6778/
```

## SSL Ekleme (Gelecek)

SSL sertifikası eklemek için:
1. Let's Encrypt sertifikası al
2. nginx.conf'a SSL konfigürasyonu ekle
3. 443 portunu aç
4. HTTP'den HTTPS'e yönlendirme ekle
