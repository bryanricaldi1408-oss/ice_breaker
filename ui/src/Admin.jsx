import { createSignal, createMemo, For, Show } from "solid-js"
import allIcon from "./assets/all.png"
import moveIcon from "./assets/move.png"
import talkIcon from "./assets/talk.png"
import createIcon from "./assets/create.png"
import wildIcon from "./assets/wild.png"

const initialPrompts = [
    {
        id: 1,
        name: "Regangkan Tangan",
        text: "Seluruh anggota tim berdiri dan meregangkan tangan setinggi mungkin ke arah langit-langit selama 10 detik.",
        type: "move",
        is_enabled: true
    },
    {
        id: 2,
        name: "Tukar Tempat Duduk",
        text: "Tukar tempat duduk dengan rekan setim. Tidak boleh ada yang kembali ke kursi semula.",
        type: "move",
        is_enabled: true
    },
    {
        id: 3,
        name: "Muka Terkejut",
        text: "Bentuk reaksi muka terkejut. Tahan posisinya selama 5 detik.",
        type: "move",
        is_enabled: false
    },
    {
        id: 4,
        name: "Beri Tos",
        text: "Beri tos kepada tiga orang dari tim lain.",
        type: "move",
        is_enabled: true
    },
    {
        id: 5,
        name: "Slow Motion Walk",
        text: "Berjalan satu putaran mengelilingi ruangan bersama tim dengan gerakan slow motion.",
        type: "move",
        is_enabled: true
    },
    {
        id: 6,
        name: "Berbaris Bulan Lahir",
        text: "Berbaris berdasarkan urutan bulan lahir, tanpa berbicara sama sekali.",
        type: "move",
        is_enabled: true
    },
    {
        id: 7,
        name: "Salam Khas Tim",
        text: "Ciptakan salam khas tim dengan 3 gerakan, lalu peragakan di depan semua orang.",
        type: "move",
        is_enabled: true
    },
    {
        id: 8,
        name: "Pantomim Perjalanan",
        text: "Peragakan perjalanan Anda ke kantor pagi ini tanpa suara. Tim lain menebak kendaraannya.",
        type: "move",
        is_enabled: false
    },
    {
        id: 9,
        name: "Berdiri Satu Kaki",
        text: "Seluruh tim berdiri dengan satu kaki selama 15 detik. Boleh goyang, asal tidak jatuh.",
        type: "move",
        is_enabled: true
    },
    {
        id: 10,
        name: "Gelombang Ombak",
        text: "Mulai gelombang ombak yang menjalar ke seluruh ruangan. Semua orang ikut berdiri.",
        type: "move",
        is_enabled: true
    },
    {
        id: 11,
        name: "Benda Tak Berguna",
        text: "Benda sehari-hari apa yang menurut Anda sebaiknya tidak pernah diciptakan? Mengapa?",
        type: "talk",
        is_enabled: true
    },
    {
        id: 12,
        name: "Nasihat Terabaikan",
        text: "Ceritakan nasihat terbaik yang pernah Anda abaikan.",
        type: "talk",
        is_enabled: true
    },
    {
        id: 13,
        name: "Kekuatan Super Tim",
        text: "Kalau tim Anda punya satu kekuatan super di tempat kerja, kekuatan apa itu?",
        type: "talk",
        is_enabled: false
    },
    {
        id: 14,
        name: "Senyum Minggu Ini",
        text: "Hal kecil apa yang membuat Anda tersenyum minggu ini?",
        type: "talk",
        is_enabled: true
    },
    {
        id: 15,
        name: "Pekerjaan Sehari",
        text: "Pekerjaan apa yang ingin Anda coba selama satu hari jika dijamin tidak akan gagal?",
        type: "talk",
        is_enabled: true
    },
    {
        id: 16,
        name: "Tiga Kata Kerja",
        text: "Setiap anggota tim menggambarkan pekerjaannya hanya dengan tiga kata.",
        type: "talk",
        is_enabled: true
    },
    {
        id: 17,
        name: "Teknologi Film",
        text: "Teknologi dari film apa yang paling Anda harapkan benar-benar ada hari ini?",
        type: "talk",
        is_enabled: true
    },
    {
        id: 18,
        name: "Keyakinan Keliru",
        text: "Apa hal yang lima tahun lalu Anda yakini, tapi ternyata sepenuhnya keliru?",
        type: "talk",
        is_enabled: true
    },
    {
        id: 19,
        name: "Hewan Perusahaan",
        text: "Kalau perusahaan Anda adalah seekor hewan, hewan apa itu dan mengapa?",
        type: "talk",
        is_enabled: false
    },
    {
        id: 20,
        name: "Tambahan Satu Jam",
        text: "Apa yang akan Anda lakukan jika setiap hari mendapat tambahan waktu satu jam?",
        type: "talk",
        is_enabled: true
    },
    {
        id: 21,
        name: "Penjepit Kertas",
        text: "Temukan kegunaan baru untuk sebuah penjepit kertas dalam 30 detik, lalu presentasikan ke semua orang.",
        type: "create",
        is_enabled: true
    },
    {
        id: 22,
        name: "Coretan Mood",
        text: "Gambar suasana hati tim dalam satu coretan. Satu pulpen, setiap orang menambahkan satu garis.",
        type: "create",
        is_enabled: true
    },
    {
        id: 23,
        name: "Nama Tim Baru",
        text: "Buat nama tim baru beserta slogannya dalam 45 detik.",
        type: "create",
        is_enabled: false
    },
    {
        id: 24,
        name: "Jingle Produk",
        text: "Ciptakan jingle 10 detik untuk produk paling tidak berguna yang bisa Anda bayangkan.",
        type: "create",
        is_enabled: true
    },
    {
        id: 25,
        name: "Hari Libur Baru",
        text: "Rancang hari libur baru: beri nama dan satu tradisi untuk merayakannya.",
        type: "create",
        is_enabled: true
    },
    {
        id: 26,
        name: "Menara Barang",
        text: "Bangun menara setinggi mungkin dari barang-barang di meja Anda dalam 30 detik.",
        type: "create",
        is_enabled: true
    },
    {
        id: 27,
        name: "Cerita Enam Kata",
        text: "Tulis cerita enam kata tentang masa depan industri Anda.",
        type: "create",
        is_enabled: true
    },
    {
        id: 28,
        name: "Produk Gabungan",
        text: "Gabungkan dua benda acak di ruangan ini menjadi satu produk baru, lalu beri nama.",
        type: "create",
        is_enabled: true
    },
    {
        id: 29,
        name: "Emoji Baru",
        text: "Ciptakan emoji baru yang dibutuhkan tim Anda di tempat kerja. Jelaskan atau gambarkan.",
        type: "create",
        is_enabled: false
    },
    {
        id: 30,
        name: "Judul Film",
        text: "Beri judul baru untuk permainan hari ini seolah-olah itu film box office.",
        type: "create",
        is_enabled: true
    },
]

// SVG icons untuk aksi tabel (Eye, Edit)
const SvgIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        {props.children}
    </svg>
)

const EyeIcon = () => (
    <SvgIcon>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </SvgIcon>
)

const EyeOffIcon = () => (
    <SvgIcon>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </SvgIcon>
)

const EditIcon = () => (
    <SvgIcon>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </SvgIcon>
)

const ITEMS_PER_PAGE = 6

const Admin = () => {
    const [prompts, setPrompts] = createSignal(initialPrompts)
    const [activeFilter, setActiveFilter] = createSignal("all")
    const [currentPage, setCurrentPage] = createSignal(1)
    const [expandedId, setExpandedId] = createSignal(null)

    // Filtered prompts berdasarkan filter aktif
    const filteredPrompts = createMemo(() => {
        const filter = activeFilter()
        if (filter === "all") return prompts()
        return prompts().filter(p => p.type === filter)
    })

    // Total halaman
    const totalPages = createMemo(() => Math.max(1, Math.ceil(filteredPrompts().length / ITEMS_PER_PAGE)))

    // Prompts untuk halaman saat ini
    const paginatedPrompts = createMemo(() => {
        const start = (currentPage() - 1) * ITEMS_PER_PAGE
        return filteredPrompts().slice(start, start + ITEMS_PER_PAGE)
    })

    // Pastikan current page valid saat filter berubah
    const handleFilterChange = (filter) => {
        setActiveFilter(filter)
        setCurrentPage(1)
    }

    // Toggle enable/disable
    const toggleEnabled = (id) => {
        setPrompts(prev =>
            prev.map(p => p.id === id ? { ...p, is_enabled: !p.is_enabled } : p)
        )
    }

    // Truncate teks deskripsi
    const truncate = (text, maxLen = 35) =>
        text.length > maxLen ? text.slice(0, maxLen) + "..." : text

    // Capitalize type label
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1)

    // Generate page numbers dengan ellipsis
    const pageNumbers = createMemo(() => {
        const total = totalPages()
        const current = currentPage()
        const pages = []

        if (total <= 7) {
            for (let i = 1; i <= total; i++) pages.push(i)
            return pages
        }

        pages.push(1)
        if (current > 3) pages.push("...")

        const start = Math.max(2, current - 1)
        const end = Math.min(total - 1, current + 1)
        for (let i = start; i <= end; i++) pages.push(i)

        if (current < total - 2) pages.push("...")
        pages.push(total)

        return pages
    })

    const filterButtons = [
        { key: "all", label: "All", icon: allIcon },
        { key: "move", label: "Move", icon: moveIcon },
        { key: "talk", label: "Talk", icon: talkIcon },
        { key: "create", label: "Create", icon: createIcon },
    ]

    return (
        <main class="min-h-screen bg-white font-jakarta-sans">
            <div class="max-w-6xl mx-auto px-6 py-10">
                {/* Header */}
                <h1 class="text-4xl font-bold text-gray-900 mb-1">Dashboard</h1>
                <h2 class="text-2xl font-bold text-gray-800 mt-6 mb-6">Prompts</h2>

                {/* Filter Bar + Add Button */}
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center gap-2">
                        <For each={filterButtons}>
                            {(btn) => (
                                <button
                                    onClick={() => handleFilterChange(btn.key)}
                                    class={`flex items-center gap-2 px-5 py-2.5 rounded-lg border text-sm font-medium transition-all cursor-pointer
                    ${activeFilter() === btn.key
                                            ? "bg-gray-900 text-white border-gray-900"
                                            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                                        }`}
                                >
                                    <img
                                        src={btn.icon}
                                        alt={btn.label}
                                        class="w-5 h-5 object-contain transition-all"
                                        style={activeFilter() === btn.key ? { filter: "invert(1) brightness(2)" } : {}}
                                    />
                                    {btn.label}
                                </button>
                            )}
                        </For>
                    </div>

                    <button
                        class="bg-[#F72585] text-white font-semibold text-sm px-5 py-2.5 rounded-full"
                    >
                        + Add prompt
                    </button>
                </div>

                {/* Table */}
                <div class="w-full">
                    {/* Table Header */}
                    <div class="grid grid-cols-[2fr_3fr_1.5fr_2fr_0.5fr] gap-4 px-4 py-3 border-b border-gray-200">
                        <span class="text-sm font-semibold text-gray-900">Name</span>
                        <span class="text-sm font-semibold text-gray-900">Description</span>
                        <span class="text-sm font-semibold text-gray-900">Type</span>
                        <span class="text-sm font-semibold text-gray-900 text-center">Status (Enable/Disable)</span>
                        <span class="text-sm font-semibold text-gray-900 text-center">Edit</span>
                    </div>

                    {/* Table Rows */}
                    <For each={paginatedPrompts()}>
                        {(prompt) => (
                            <div class="grid grid-cols-[2fr_3fr_1.5fr_2fr_0.5fr] gap-4 px-4 py-4 border-b border-gray-100 items-center hover:bg-gray-50 transition-colors">
                                <span class="text-sm text-gray-700">{prompt.name}</span>
                                <span class="text-sm text-gray-500">
                                    <Show
                                        when={expandedId() === prompt.id}
                                        fallback={
                                            <>
                                                {truncate(prompt.text)}
                                                <Show when={prompt.text.length > 35}>
                                                    <button
                                                        onClick={() => setExpandedId(prompt.id)}
                                                        class="text-gray-400 hover:text-gray-600 ml-1 text-xs cursor-pointer"
                                                    >
                                                        see more
                                                    </button>
                                                </Show>
                                            </>
                                        }
                                    >
                                        {prompt.text}
                                        <button
                                            onClick={() => setExpandedId(null)}
                                            class="text-gray-400 hover:text-gray-600 ml-1 text-xs cursor-pointer"
                                        >
                                            see less
                                        </button>
                                    </Show>
                                </span>
                                <span class="text-sm text-gray-700">{capitalize(prompt.type)}</span>
                                <div class="flex justify-center">
                                    <button
                                        onClick={() => toggleEnabled(prompt.id)}
                                        class={`cursor-pointer transition-colors ${prompt.is_enabled ? "text-gray-800" : "text-gray-300"}`}
                                        title={prompt.is_enabled ? "Enabled – click to disable" : "Disabled – click to enable"}
                                    >
                                        <Show when={prompt.is_enabled} fallback={<EyeOffIcon />}>
                                            <EyeIcon />
                                        </Show>
                                    </button>
                                </div>
                                <div class="flex justify-center">
                                    <span class="text-gray-500">
                                        <EditIcon />
                                    </span>
                                </div>
                            </div>
                        )}
                    </For>

                    {/* Empty state */}
                    <Show when={filteredPrompts().length === 0}>
                        <div class="py-12 text-center text-gray-400">
                            Tidak ada prompt untuk kategori ini.
                        </div>
                    </Show>
                </div>

                {/* Pagination */}
                <Show when={totalPages() > 1}>
                    <div class="flex items-center justify-center gap-2 mt-8">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage() === 1}
                            class="text-sm text-gray-500 hover:text-gray-800 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed px-2 py-1"
                        >
                            ← Previous
                        </button>

                        <For each={pageNumbers()}>
                            {(page) => (
                                <Show
                                    when={page !== "..."}
                                    fallback={<span class="px-2 text-sm text-gray-400">...</span>}
                                >
                                    <button
                                        onClick={() => setCurrentPage(page)}
                                        class={`w-8 h-8 rounded-md text-sm font-medium cursor-pointer transition-colors
                      ${currentPage() === page
                                                ? "bg-gray-900 text-white"
                                                : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                </Show>
                            )}
                        </For>

                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages(), p + 1))}
                            disabled={currentPage() === totalPages()}
                            class="text-sm text-gray-500 hover:text-gray-800 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed px-2 py-1"
                        >
                            Next →
                        </button>
                    </div>
                </Show>
            </div>

        </main>
    )
}

export default Admin