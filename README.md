 🛒 MiniMart App

A modern **MiniMart / POS (Point of Sale) web application** built to manage products, sales, and vouchers efficiently.
Designed with a clean UI and optimized workflow for small businesses.

---

## 🚀 Features

* 🧾 Create and manage **sales vouchers**
* 📦 Product listing and stock tracking
* 🔍 Search and filter products easily
* 🧮 Automatic total calculation
* 🗑️ Delete and manage vouchers
* 🔐 Authentication with token (secure API requests)
* ⚡ Fast and responsive UI

---

## 🛠️ Tech Stack

**Frontend**

* React.js
* React Hook Form
* React Router
* Tailwind CSS

**State Management**

* Zustand

**Backend (API)**

* REST API (External / Custom backend)

---

## 📂 Project Structure

```
src/
│── components/
│── pages/
│── services/
│── stores/
│── hooks/
│── utils/
│── App.jsx
│── main.jsx
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/minimart-app.git
cd minimart-app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root:

```
VITE_API_BASE_URL=your_api_url
```

---

## 📸 Screenshots

> Add your screenshots here (recommended)

```
/screenshots/home.png
/screenshots/sale.png
```

---

## 🌐 Live Demo

👉 [View Live Demo](https://minimartie-app.vercel.app)

---

## 📌 API Example

```js
export const fetchVouchers = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
```

---

## 💡 Future Improvements

* 📊 Dashboard analytics
* 📱 Mobile responsive improvements
* 🧾 Print invoice feature

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Yamin Theint Theint Wai**

* GitHub: [https://github.com/your-username](https://github.com/Tweety-ET)


