-- Tipe prompt
CREATE TYPE prompt_type AS ENUM ('move', 'talk', 'create', 'wildcard');

-- current status: lobby (menunggu peserta) -> active -> ended.
CREATE TYPE session_status AS ENUM ('lobby', 'active', 'ended');


-- 1. prompts : kartu challenge, dikelola by admin
CREATE TABLE prompts (
    id          BIGSERIAL PRIMARY KEY,	--automate unique id
    type        prompt_type NOT NULL,
    text        TEXT        NOT NULL CHECK (length(trim(text)) > 0),	--teks dilarang kosong
    is_enabled  BOOLEAN     NOT NULL DEFAULT TRUE,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. game_sessions : satu baris = satu permainan yang dibuat host
CREATE TABLE game_sessions (
    id               UUID PRIMARY KEY,					 -- dipakai di URL QR
    join_code        VARCHAR(6)     NOT NULL UNIQUE,             -- fallback kode pendek
    status           session_status NOT NULL DEFAULT 'lobby',
    max_rounds       INT CHECK (max_rounds > 0),                 -- NULL = sampai host mengakhiri
    current_round    INT            NOT NULL DEFAULT 1 CHECK (current_round > 0),
    current_team_id  UUID,                                       -- FK ditambahkan di bawah
    host_token       TEXT           NOT NULL UNIQUE,             -- pengganti login host
    created_at       TIMESTAMPTZ    NOT NULL DEFAULT now(),
    started_at       TIMESTAMPTZ,
    ended_at         TIMESTAMPTZ
);


-- 3. teams : tim dalam sebuah sesi, termasuk posisi token di papan
CREATE TABLE teams (
    id          UUID PRIMARY KEY,
    session_id  UUID NOT NULL REFERENCES game_sessions (id) ON DELETE CASCADE,
    name        TEXT NOT NULL,
    turn_order  INT  NOT NULL CHECK (turn_order >= 0), -- urutan rotasi tetap
    position    INT  NOT NULL DEFAULT 0 CHECK (position >= 0),
    captain_id  UUID,
    UNIQUE (session_id, turn_order),
    UNIQUE (session_id, name)
);


-- 4. participants : peserta yang bergabung lewat QR (tanpa akun)
CREATE TABLE participants (
    id            UUID PRIMARY KEY,
    session_id    UUID NOT NULL REFERENCES game_sessions (id) ON DELETE CASCADE,
    team_id       UUID REFERENCES teams (id) ON DELETE SET NULL, -- NULL = belum pilih tim
    display_name  TEXT,
    joined_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    last_seen_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE game_sessions
    ADD CONSTRAINT fk_sessions_current_team
    FOREIGN KEY (current_team_id) REFERENCES teams (id) ON DELETE SET NULL;

ALTER TABLE teams
    ADD CONSTRAINT fk_teams_captain
    FOREIGN KEY (captain_id) REFERENCES participants (id) ON DELETE SET NULL;


-- 5. board_spaces : tata letak papan
CREATE TABLE board_spaces (
    position  INT PRIMARY KEY CHECK (position >= 0),
    type      prompt_type NOT NULL
);


-- 6. turns : riwayat setiap giliran (lemparan dadu + kartu yang muncul)
CREATE TABLE turns (
    id             BIGSERIAL PRIMARY KEY,
    session_id     UUID NOT NULL REFERENCES game_sessions (id) ON DELETE CASCADE,
    team_id        UUID NOT NULL REFERENCES teams (id) ON DELETE CASCADE,
    round_number   INT  NOT NULL CHECK (round_number > 0),
    dice_value     SMALLINT NOT NULL CHECK (dice_value BETWEEN 1 AND 6),
    from_position  INT  NOT NULL,
    to_position    INT  NOT NULL,
    space_type     prompt_type NOT NULL,      -- tipe petak yang diinjak
    chosen_type    prompt_type,               -- pilihan tim jika petak wildcard
    prompt_id      BIGINT REFERENCES prompts (id) ON DELETE RESTRICT, -- NULL = wildcard, tim belum memilih
    created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),

    -- Prompt tidak boleh muncul dua kali dalam satu sesi.
    UNIQUE (session_id, prompt_id),
    -- Satu tim hanya boleh melempar dadu sekali per ronde (anti dobel klik).
    UNIQUE (session_id, round_number, team_id),
    -- chosen_type hanya untuk petak wildcard, dan isinya harus move/talk/create.
    CHECK (chosen_type IS NULL
           OR (space_type = 'wildcard' AND chosen_type <> 'wildcard'))
);

INSERT INTO prompts (type, text) VALUES
-- MOVE
('move', 'Seluruh anggota tim berdiri dan meregangkan tangan setinggi mungkin ke arah langit-langit selama 10 detik.'),
('move', 'Tukar tempat duduk dengan rekan setim. Tidak boleh ada yang kembali ke kursi semula.'),
('move', 'Bentuk reaksi muka terkejut". Tahan posisinya selama 5 detik.'),
('move', 'Beri tos kepada tiga orang dari tim lain.'),
('move', 'Berjalan satu putaran mengelilingi ruangan bersama tim dengan gerakan slow motion.'),
('move', 'Berbaris berdasarkan urutan bulan lahir, tanpa berbicara sama sekali.'),
('move', 'Ciptakan salam khas tim dengan 3 gerakan, lalu peragakan di depan semua orang.'),
('move', 'Peragakan perjalanan Anda ke kantor pagi ini tanpa suara. Tim lain menebak kendaraannya.'),
('move', 'Seluruh tim berdiri dengan satu kaki selama 15 detik. Boleh goyang, asal tidak jatuh.'),
('move', 'Mulai gelombang "ombak" yang menjalar ke seluruh ruangan. Semua orang ikut berdiri.'),
-- TALK
('talk', 'Benda sehari-hari apa yang menurut Anda sebaiknya tidak pernah diciptakan? Mengapa?'),
('talk', 'Ceritakan nasihat terbaik yang pernah Anda abaikan.'),
('talk', 'Kalau tim Anda punya satu kekuatan super di tempat kerja, kekuatan apa itu?'),
('talk', 'Hal kecil apa yang membuat Anda tersenyum minggu ini?'),
('talk', 'Pekerjaan apa yang ingin Anda coba selama satu hari jika dijamin tidak akan gagal?'),
('talk', 'Setiap anggota tim menggambarkan pekerjaannya hanya dengan tiga kata.'),
('talk', 'Teknologi dari film apa yang paling Anda harapkan benar-benar ada hari ini?'),
('talk', 'Apa hal yang lima tahun lalu Anda yakini, tapi ternyata sepenuhnya keliru?'),
('talk', 'Kalau perusahaan Anda adalah seekor hewan, hewan apa itu dan mengapa?'),
('talk', 'Apa yang akan Anda lakukan jika setiap hari mendapat tambahan waktu satu jam?'),
-- CREATE
('create', 'Temukan kegunaan baru untuk sebuah penjepit kertas dalam 30 detik, lalu presentasikan ke semua orang.'),
('create', 'Gambar suasana hati tim dalam satu coretan. Satu pulpen, setiap orang menambahkan satu garis.'),
('create', 'Buat nama tim baru beserta slogannya dalam 45 detik.'),
('create', 'Ciptakan jingle 10 detik untuk produk paling tidak berguna yang bisa Anda bayangkan.'),
('create', 'Rancang hari libur baru: beri nama dan satu tradisi untuk merayakannya.'),
('create', 'Bangun menara setinggi mungkin dari barang-barang di meja Anda dalam 30 detik.'),
('create', 'Tulis cerita enam kata tentang masa depan industri Anda.'),
('create', 'Gabungkan dua benda acak di ruangan ini menjadi satu produk baru, lalu beri nama.'),
('create', 'Ciptakan emoji baru yang dibutuhkan tim Anda di tempat kerja. Jelaskan atau gambarkan.'),
('create', 'Beri judul baru untuk permainan hari ini seolah-olah itu film box office.');