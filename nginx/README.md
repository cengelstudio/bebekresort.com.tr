# Nginx Configuration

Bu dizin Bebek Resort projesi için nginx konfigürasyonunu içerir.

## Dosyalar

- **Dockerfile**: Nginx container'ı için Dockerfile
- **nginx.conf**: Ana nginx konfigürasyon dosyası
- **README.md**: Bu dosya

## Konfigürasyon Özellikleri

### Reverse Proxy
- 80 portundan gelen istekleri 6778 portuna yönlendirme
- Svelte uygulaması için proxy ayarları

### Güvenlik
- Security headers (X-Frame-Options, X-XSS-Protection, etc.)
- Rate limiting (10 request/second)
- Content Security Policy

### Performans
- Gzip compression
- Static file caching (1 yıl)
- Connection pooling
- Keep-alive connections

### Logging
- Access ve error logları
- Custom log format

## Kullanım

```bash
# Docker Compose ile çalıştır
docker compose up nginx

# Sadece nginx build et
docker compose build nginx

# Nginx loglarını görüntüle
docker compose logs nginx
```

## Domain Ayarları

Nginx şu domain'leri destekler:
- bebekresort.com.tr
- www.bebekresort.com.tr

## SSL Ekleme

SSL sertifikası eklemek için:
1. Let's Encrypt sertifikası al
2. nginx.conf'a SSL konfigürasyonu ekle
3. 443 portunu aç
4. HTTP'den HTTPS'e yönlendirme ekle
