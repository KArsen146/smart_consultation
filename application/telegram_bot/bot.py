from telegram import Update
from telegram.ext import Application, CommandHandler
from config import TELEGRAM_BOT_TOKEN
from telegram import Update
from telegram.ext import ContextTypes

def main():
    app = Application.builder().token(TELEGRAM_BOT_TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.run_polling()

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "Рады приветствовать вас!\n\n"
        "Если у вас есть вопрос или возникла проблема, и вы хотите создать обращение, воспользуйтесь командой /new."
    )

if __name__ == '__main__':
    main()