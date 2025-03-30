# Пример конфигурационного файла для бота поддержки
# Не удаляйте и не меняйте этот файл, создайте свой config.py на основе этого файла

TELEGRAM_BOT_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN"

# Базовый URL backend
SUPPORT_REQUEST_API_URL = "http://django-backend/api/support_requests/"

# Конфигурация API бота (для приема ответов на обращения)
CALLBACK_HOST = "0.0.0.0"
CALLBACK_PORT = 5000