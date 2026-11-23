# IceBreaker

**IceBreaker** adalah permainan board-game digital berbasis web untuk kegiatan *team building*. Seorang **Host** membuat sesi permainan, lalu **Peserta** bergabung via QR code atau kode ruangan. Tim-tim bergantian melempar dadu, bergerak di papan, dan menyelesaikan tantangan (_challenge_) bertipe **Move**, **Talk**, **Create**, atau **Wildcard**.

## Installation & Setup
### 1. Clone Repository

```bash
git clone https://github.com/bryanricaldi1408-oss/ice_breaker.git
```

### 2. Setup database from terminal
1. Masuk ke PostgreSQL
   ```
   psql -U postgres
   ```

 2. Masukkan password    
 3. Buat database baru
    ```
    CREATE DATABASE icebreaker;
    ```

4. Import file database
   ```
   psql -U postgres -d icebreaker -f "path/ke/folder/project/db.sql"
   ```

### 3. Setup database from pgAdmin 4
1. Buka pgAdmin 4
2. Login
3. Klik kanan pada **Databases** --> **Create** --> **Database...**
4. isi Database name `icebreaker` --> klik `save`
5. Klik tombol **Open File** → arahkan ke file `db.sql` di folder project
6. Klik **Execute/Run** untuk menjalankan seluruh isi SQL

### 4. Setup Backend

```bash
# Masuk ke folder backend
cd backend

# Install dependencies
npm install

# Kembali ke root
cd ..
```

### 5. Setup Frontend (UI)

```bash
# Masuk folder ui
cd ui

# Install dependecies
npm install

# Kembali ke root
cd ..
```

---

## How to Run

```bash
# Masuk folder ui
cd ui

# Menggunakan npm
npm run dev
```

Frontend akan berjalan di **http://localhost:3000**
