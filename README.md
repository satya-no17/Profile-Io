<div align="center">

<img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" />
<img src="https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase" />
<img src="https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=for-the-badge&logo=tailwindcss" />
<img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript" />

<br />
<br />

# 🚀 Profile.io

**Your entire online presence. One link.**

A modern, developer-focused link-in-bio platform — cleaner, faster, and built from scratch.
Create a beautiful public profile, manage all your links, and share everything in one place.

[Live Demo](https://your-demo-url.com) · [Report a Bug](https://github.com/satya-no17/Profile-Io/issues) · [Request a Feature](https://github.com/satya-no17/Profile-Io/issues)

</div>

---

## ✨ What is Profile.io?

Profile.io lets anyone create a shareable public profile page at:

```
yourapp.com/public/username
```

Think of it like **Linktree** — but developer-built, fully customizable, and yours to own.

---

## 🎯 Features

| Feature | Description |
|---|---|
| 🔐 **Auth System** | Secure login and signup via Supabase Auth |
| 👤 **Public Profiles** | Every user gets a beautiful page at `/public/[username]` |
| 🔗 **Link Manager** | Add, edit, reorder, and delete links with icons |
| 🖼️ **Avatar Upload** | Upload a profile photo stored in Supabase Storage |
| 🎨 **Custom Profile UI** | Edit name, username, bio, and description |
| 🔒 **Protected Routes** | Middleware guards all dashboard routes |
| ⚡ **Optimized** | Built on Next.js App Router for maximum speed |

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** — App Router, Server Actions, file-based routing
- **React** — component-driven UI
- **Tailwind CSS** — utility-first styling

### Backend
- **Next.js Server Actions** — form handling and data mutations
- **Supabase** — PostgreSQL database, authentication, and file storage

### Infrastructure
- **Middleware** — protects authenticated routes
- **Dynamic routing** — `/public/[username]` pages generated on demand


---

## 🗄️ Database Schema

### `profile` table

| Column | Type | Notes |
|---|---|---|
| `id` | uuid | Primary key — matches `auth.uid()` |
| `username` | text | Unique, used in public URL |
| `fullname` | text | Display name |
| `bio` | text | Short tagline |
| `description` | text | Longer about section |
| `avatar` | text | Public URL from Supabase Storage |

### `links` table

| Column | Type | Notes |
|---|---|---|
| `id` | uuid | Primary key |
| `user_id` | uuid | Foreign key → `profile.id` |
| `title` | text | Link label |
| `url` | text | Destination URL |
| `icon` | text | Emoji icon |
| `position` | integer | Display order |

---

## 🔑 How It Works

```
1. User signs up → Supabase Auth creates account
        ↓
2. Profile row auto-created in database
        ↓
3. User edits profile, uploads avatar, adds links
        ↓
4. Avatar stored in Supabase Storage → public URL saved to profile
        ↓
5. Anyone can visit /public/username to view the profile
```

**Middleware** ensures:
- Unauthenticated users hitting `/dashboard` → redirected to `/auth/login`
- Logged-in users hitting `/auth/login` → redirected to `/dashboard`

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/satya-no17/Profile-Io
cd profile-io
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Set up Supabase Storage

Create a public bucket named `avatars` and add these policies:

**INSERT** (authenticated users upload their own avatar):
```sql
bucket_id = 'avatars' AND (select auth.uid()::text) = (storage.foldername(name))[1]
```

**UPDATE** (overwrite existing avatar):
```sql
bucket_id = 'avatars' AND (select auth.uid()::text) = (storage.foldername(name))[1]
```

**SELECT** (public read):
```sql
bucket_id = 'avatars'
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous public key |

---

## 🚧 Roadmap

- [ ] Custom theme colors per profile
- [ ] Analytics (link click tracking)
- [ ] Drag-and-drop link reordering
- [ ] Social preview card (OG image generation)
- [ ] Verified badge system

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

```bash
# Fork the repo, then:
git checkout -b feature/your-feature
git commit -m "feat: add your feature"
git push origin feature/your-feature
```

---

## 📄 License

MIT License — use it however you like.

---

<div align="center">

Built with ❤️ using Next.js and Supabase

</div>