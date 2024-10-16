export default function RootLayout({children}) {
    return (
        <div className="bg-grey px-3 py-6 h-screen overflow-auto">
            {children}
        </div>
    )
}