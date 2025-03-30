from telegram import Update
from telegram.ext import ContextTypes

async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "Обработка сообщения...\n\n"
    )
    #TODO: Check if the user has an active request
    # If the user doesn't have an active request, inform them and return
    # If the user has an active request, forward the message to the backend