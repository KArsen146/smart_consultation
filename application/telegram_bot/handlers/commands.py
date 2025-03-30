from telegram import Update
from telegram.ext import ContextTypes

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Send a welcome message."""
    await update.message.reply_text(
        "Рады приветствовать вас!\n\n"
        "Если у вас есть вопрос или возникла проблема, и вы хотите создать обращение, воспользуйтесь командой /new."
    )

async def new_request(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "Создание нового обращения.\n\n"
        "Пожалуйста, опишите проблему или вопрос как можно подробнее."
    )
    #TODO: Check if the user has an active request
    # If the user has an active request, inform them and return

    #TODO: Open a new support request
    # If successful, inform the user and return
    # If there was an error, inform the user and return

async def close_request(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "Закрытие обращения...\n\n"
    )
    #TODO: Check if the user has an active request
    # If the user doesn't have an active request, inform them and return

    #TODO: Close the support request
    # If successful, inform the user and return
    # If there was an error, inform the user and return