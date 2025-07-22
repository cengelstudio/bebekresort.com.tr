# Docker Production Deployment

Bu proje Docker ile production ortamında çalıştırılmak üzere hazırlanmıştır.

## Gereksinimler

- Docker
- Docker Compose

## Hızlı Başlangıç

### 1. Otomatik Deployment

```bash
./deploy.sh
```

Bu script otomatik olarak:

- Docker image'ını build eder
- Container'ı başlatır
- Servisin hazır olup olmadığını kontrol eder

### 2. Manuel Deployment

```bash
# Build
docker-compose build

# Start
docker-compose up -d

# Check status
docker-compose ps
```

## Port Yapılandırması

Uygulama **6778** portunda çalışır:

- Host: `http://localhost:6778`
- Container içi: `6778`

## Yönetim Komutları

```bash
# Logları görüntüle
docker-compose logs -f

# Servisi durdur
docker-compose down

# Servisi yeniden başlat
docker-compose restart

# Container durumunu kontrol et
docker-compose ps
```

## Environment Variables

- `NODE_ENV=production`
- `PORT=6778`
- `HOSTNAME=0.0.0.0`

## Health Check

Container sağlık kontrolü otomatik olarak yapılır:

- Her 30 saniyede bir kontrol
- 10 saniye timeout
- 3 deneme hakkı

## Production Sunucuya Deploy

1. Kodu sunucuya kopyalayın
2. Docker ve Docker Compose'u yükleyin
3. `./deploy.sh` komutunu çalıştırın
4. Uygulama `http://sunucu-ip:6778` adresinde erişilebilir olacak

## Troubleshooting

### Port Çakışması

Eğer 6778 portu kullanımdaysa, `docker-compose.yml` dosyasında port mapping'i değiştirin:

```yaml
ports:
  - 'YENI_PORT:6778'
```

### Build Hatası

```bash
# Cache'i temizle
docker-compose build --no-cache

# Yeniden build et
docker-compose build
```

### Log Kontrolü

```bash
# Detaylı loglar
docker-compose logs -f bresort

# Son 100 satır
docker-compose logs --tail=100 bresort
```
