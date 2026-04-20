import DashboardNav from "../components/DashboardNav"


export default async function DashboardLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <section className="max-w-350 mx-auto md:flex md:items-center gap-5 h-screen w-full mt-5 p-2">
            <DashboardNav />
            <div className="w-full h-full mt-5">
                {children}
            </div>
        </section>
    )
}