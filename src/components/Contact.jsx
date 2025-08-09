import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="h2">Давай сделаем красиво</h2>
            <p className="p mt-3">
              Коротко расскажи о задаче: стиль, пример бюджета, сроки, целевая платформа (игра, визуализация, печать).
            </p>
            <div className="mt-6 space-y-2">
              <a className="block badge" href="mailto:youremail@example.com">youremail@example.com</a>
              <a className="block badge" href="https://t.me/yourtelegram" target="_blank">Telegram</a>
              <a className="block badge" href="https://www.artstation.com/yourprofile" target="_blank">ArtStation</a>
            </div>
          </div>
          <form
            className="card p-6 space-y-4"
            action="https://formspree.io/f/yourid"
            method="POST"
          >
            <div>
              <label className="block text-sm mb-1">Имя</label>
              <input name="name" required className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" name="email" required className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Сообщение</label>
              <textarea name="message" rows="5" required className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2"></textarea>
            </div>
            <button className="btn w-full" type="submit">Отправить</button>
            <p className="text-xs text-slate-500 dark:text-slate-400">Заполнив форму, вы даете согласие на обработку данных для ответа на запрос.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
